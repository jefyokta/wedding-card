import { motion } from "framer-motion";
import akmal from "@/assets/akmal.png";
import lisa from "@/assets/lisa.png";
import masker from "@/assets/masker.png"
import { Screen } from "./screen";
import { useHover } from "../hooks/use-hover";
import { useGuest } from "../hooks/use-guest";
import { Pointer } from "lucide-react"
import I from "@/assets/fdytct.png"
import IA from "@/assets/te.png"
import Ib from "@/assets/s (2).webp"
import { Stars } from "./svg/stars";
import s from "@/assets/s.webp"

const profiles = {
    lisa: {
        name: "Ari NurmaLisa",
        desc: "Putri dari Bapak dan Ibu",
        traits: [],
        side: "left",
    },
    akmal: {
        name: "Akmal Lahia",
        desc: "Putra Bapak Mulyadi dan Ibu Nurliati",
        traits: [],
        side: "right",
    },
} as const
export const Couple = () => {
    const { guest } = useGuest()

    const { hoveringElement, setHoveringElement } = useHover()
    return (
        <Screen id="couple" >
            <section className='w-full h-full relative'>
                <div className="absolute z-1 w-full h-full">
                    <Stars disablelove={true} />
                </div>
                <ProfilePanel
                    id="lisa"
                />
                <ProfilePanel
                    id="akmal"
                />
                <div className="absolute right-0 z-3 w-full bottom-0">
                    <img src={I} alt="" className="w-full" />
                </div>
                <div className="absolute right-0 z-2  w-full bottom-0">
                    <img src={IA} alt="" className="w-full" />
                </div>
                <div className={`absolute -right-10 z-1 ${hoveringElement == 'akmal' ? "bottom-20" : "bottom-0 "} ease-in-out duration-700 transition-all opacity-70 from-bg-black to-transparent bg-linear-to-t  w-full `}>
                    <img src={IA} alt="" className="w-full " />
                </div>
                <div className={`absolute ${hoveringElement == 'akmal' ? "bottom-20" : "-bottom-20 "} -right-50 opacity-75 ease-in-out duration-1200 transition-all w-full  `}>
                    <img src={Ib} alt="" className="w-full opacity-70" />
                </div>
                  <div className={`absolute ${hoveringElement == 'lisa' ? "bottom-20" : "-bottom-20 "} -left-50 opacity-75 ease-in-out duration-1200 transition-all w-full  `}>
                    <img src={s} alt="" className="w-full opacity-70" />
                </div>


                <img src={akmal} alt="" className={`absolute top-0 z-2 w-80 transition-all duration-700 ease-out drop-shadow-amber-50 
                    ${hoveringElement == 'akmal' && 'drop-shadow-2xl scale-110'}  -left-10
                    ${hoveringElement == 'lisa' && ` opacity-20 `}
                    `}

                />
                <img src={lisa} alt="" className={`absolute top-0 z-3  w-80 transition-all  duration-700 ease-out  drop-shadow-amber-50 hover:drop-shadow-2xl transit  -right-10 
                    ${hoveringElement == 'lisa' && 'drop-shadow-2xl scale-[1.01]'}
                    ${hoveringElement == 'akmal' && ` opacity-20 scale-[.9]`}

                    `} />
                <img src={masker} alt="" className='absolute bottom-0 scale-y-600 z-3 origin-bottom' />
                <div className="absolute w-full h-screen top-0 bg-black/40  z-4"></div>
                <div className="absolute w-full h-full grid grid-cols-2 z-1000">
                    <div
                        onClick={() => setHoveringElement("akmal")}
                        onMouseEnter={() => setHoveringElement("akmal")}
                        onMouseLeave={() => hoveringElement == 'akmal' && setHoveringElement("")}
                        className="z-1000 cursor-pointer flex items-end justify-center pb-20"
                    >
                        <div className="bg-white/20 border-2 border-black/30 rounded-full p-2">
                            <Pointer className="text-black/50" />
                        </div>

                    </div>
                    <div
                        onClick={() => setHoveringElement("lisa")}
                        onMouseEnter={() => setHoveringElement("lisa")}
                        onMouseLeave={() => hoveringElement == 'lisa' && setHoveringElement("")}
                        className="z-1000 cursor-pointer flex items-end justify-center pb-20"
                    >
                        <div className="bg-white/20 border-2 border-black/30 rounded-full p-2">
                            <Pointer className="text-black/50" />
                        </div>

                    </div>
                </div>
            </section>

        </Screen>
    );
};

type ProfileKey = keyof typeof profiles

const ProfilePanel = ({ id }: { id: ProfileKey }) => {
    const { hoveringElement } = useHover()
    const p = profiles[id]
    const isActive = hoveringElement === id
    const isLeft = p.side === "left"

    return (
        <div
            className={`
        absolute top-1/2 -translate-y-1/2 z-5
        transition-all duration-700 ease-out
        ${isLeft ? "left-10" : "right-10"}
        ${isActive
                    ? "translate-x-0 opacity-100"
                    : isLeft
                        ? "-translate-x-full opacity-0"
                        : "translate-x-full opacity-0"}
      `}
        >
            <div className="text-white text-3xl font-semibold tracking-wide">
                {p.name}
            </div>

            <div className="mt-2 text-white/80 text-sm max-w-xs leading-relaxed">
                {p.desc}
            </div>

            <div className="mt-4 flex gap-3">
                {p.traits.map(t => (
                    <span
                        key={t}
                        className="px-3 py-1 text-xs rounded-full bg-white/10 text-white"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    )
}


