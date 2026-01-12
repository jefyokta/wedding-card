import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

function getTimeLeft(target: number): TimeLeft {
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

type CountdownProps = {
    targetDate: string | Date;
};

export function Countdown({ targetDate }: CountdownProps) {
    const target =
        typeof targetDate === "string"
            ? new Date(targetDate).getTime()
            : targetDate.getTime();

    const [time, setTime] = useState<TimeLeft>(() =>
        getTimeLeft(target)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTimeLeft(target));
        }, 1000);

        return () => clearInterval(interval);
    }, [target]);

    return (
        <div className="flex gap-4 items-center">
            <TimeBox label="Hari" value={time.days} />
            <div className="rounded-full w-2 h-2 bg-white"></div>
            <TimeBox label="Jam" value={time.hours} />
            <div className="rounded-full w-2 h-2 bg-white"></div>

            <TimeBox label="Menit" value={time.minutes} />
            <div className="rounded-full w-2 h-2 bg-white"></div>

            <TimeBox label="Detik" value={time.seconds} />
        </div>
    );
}
type TimeBoxProps = {
    label: string;
    value: number;
};

function TimeBox({ label, value }: TimeBoxProps) {
    return (
        <div className="px-4 py-3 rounded-xl bg-black/5 text-center min-w-5">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={value}
                    initial={{ y: -8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 8, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="text-2xl font-semibold tabular-nums"
                >
                    {String(value).padStart(2, "0")}
                </motion.div>
            </AnimatePresence>
            <div className="text-xs opacity-70">{label}</div>
        </div>
    );
}

