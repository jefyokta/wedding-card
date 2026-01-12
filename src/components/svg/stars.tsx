import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

type Star = {
    cx: number;
    cy: number;
    r: number;
    opacity: number;
};

const random = (min: number, max: number) =>
    Math.random() * (max - min) + min;

export const Stars = ({ disablelove }: { disablelove?: boolean }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (!ref.current) return;

        const ro = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setSize({ width, height });
        });

        ro.observe(ref.current);
        return () => ro.disconnect();
    }, []);


    const heartStars = useMemo(() => {
        if (!size.width || !size.height) return { points: [], path: "" };

        const cx = size.width / 2;
        const cy = size.height / 2;
        const scale = Math.min(size.width, size.height) * 0.020;

        const points = [];
        for (let t = 0; t <= Math.PI * 2; t += 0.22) {
            const x =
                16 * Math.pow(Math.sin(t), 3);
            const y =
                13 * Math.cos(t) -
                5 * Math.cos(2 * t) -
                2 * Math.cos(3 * t) -
                Math.cos(4 * t);

            points.push({
                cx: random(-5, 10) + cx + x * scale,
                cy: random(5, 10) + cy - y * scale,
                r: random(0.7, 1.4),
                opacity: 0.95,
            });
        }
        const path =
            `M ${points[0].cx} ${points[0].cy} ` +
            points.map(p => `L ${p.cx} ${p.cy}`).join(" ");

        return { points, path };
    }, [size]);


    const stars = useMemo(() => {
        if (!size.width || !size.height) return null;

        const gen = (count: number, rMin: number, rMax: number, oMin: number, oMax: number): Star[] =>
            Array.from({ length: count }).map(() => ({
                cx: random(0, size.width),
                cy: random(0, size.height),
                r: random(rMin, rMax),
                opacity: random(oMin, oMax),
            }));

        return {
            bright: gen(50, 0.6, 1.5, 0.6, 0.8),
            medium: gen(155, 0.5, 0.6, 0.4, 0.5),
            small: gen(200, 0.3, 0.5, 0.25, 0.3),
        };
    }, [size.width, size.height]);
    if (!heartStars) return <div ref={ref} className="w-full h-full" />;

    return (

        <div ref={ref} className="w-full h-full relative">
            {stars && (
                <svg
                    viewBox={`0 0 ${size.width} ${size.height}`}
                    className="absolute inset-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="1.1" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    <g fill="white" filter="url(#glow)">
                        {stars.bright.map((s, i) => {
                            const dx = random(-100, 100)
                            const dy = random(-60, 60)

                            return (
                                <motion.circle
                                    key={i}
                                    cx={s.cx}
                                    cy={s.cy}
                                    r={s.r}
                                    opacity={s.opacity}
                                    animate={{
                                        cx: [
                                            s.cx,
                                            s.cx + dx,
                                            s.cx - dx,
                                            s.cx
                                        ],
                                        cy: [
                                            s.cy,
                                            s.cy - dy,
                                            s.cy + dy,
                                            s.cy
                                        ],
                                    }}
                                    transition={{
                                        duration: random(40, 55),
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                />)
                        })}
                    </g>

                    <g fill="white">
                        {stars.medium.map((s, i) => {
                            const dx = random(-100, 100)
                            const dy = random(-60, 60)

                            return (
                                <motion.circle
                                    key={i}
                                    cx={s.cx}
                                    cy={s.cy}
                                    r={s.r}
                                    opacity={s.opacity}
                                    animate={{
                                        cx: [
                                            s.cx,
                                            s.cx + dx,
                                            s.cx - dx,
                                            s.cx
                                        ],
                                        cy: [
                                            s.cy,
                                            s.cy - dy,
                                            s.cy + dy,
                                            s.cy
                                        ],
                                    }}
                                    transition={{
                                        duration: random(12, 19),
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                />)
                        })}
                    </g>

                    <g fill="white">
                        {stars.small.map((s, i) => {
                            const dx = random(-100, 100)
                            const dy = random(-60, 60)

                            return (
                                <motion.circle
                                    key={i}
                                    cx={s.cx}
                                    cy={s.cy}
                                    r={s.r}
                                    opacity={s.opacity}
                                    animate={{
                                        cx: [
                                            s.cx,
                                            s.cx + dx,
                                            s.cx - dx,
                                            s.cx
                                        ],
                                        cy: [
                                            s.cy,
                                            s.cy - dy,
                                            s.cy + dy,
                                            s.cy
                                        ],
                                    }}
                                    transition={{
                                        duration: random(12, 19),
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                />)
                        })}
                    </g>
                    {!Array.isArray(heartStars) && !disablelove &&
                        <>
                            <g fill="white" filter="url(#glow)">
                                {heartStars.points.map((s, i) => {
                                    const dx = random(1, 5)
                                    const dy = random(1, 5)
                                    return (
                                        <motion.circle
                                            key={i}
                                            cx={s.cx}
                                            cy={s.cy}
                                            r={s.r}
                                            animate={{
                                                cx: [
                                                    s.cx,
                                                    s.cx + dx,
                                                    s.cx - dx,
                                                    s.cx
                                                ],
                                                cy: [
                                                    s.cy,
                                                    s.cy - dy,
                                                    s.cy + dy,
                                                    s.cy
                                                ],
                                            }}
                                            transition={{
                                                duration: random(12, 19),
                                                ease: "linear",
                                                repeat: Infinity,
                                            }}
                                            opacity={s.opacity}
                                        />
                                    )
                                })}
                            </g>
                            <motion.path
                                d={heartStars.path}
                                fill="none"
                                stroke="white"
                                strokeWidth={0.8}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                filter="url(#glow)"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.3 }}
                                transition={{
                                    pathLength: { duration: 4.5, ease: "easeOut" },
                                    opacity: { duration: 0.8 },
                                }}
                            />
                        </>
                    }

                </svg>
            )}
        </div>
    );
};
