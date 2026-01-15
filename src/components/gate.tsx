import { Screen } from "./screen"

import flower from "@/assets/s.webp"
import flower2 from "@/assets/flower.png"
import s from "@/assets/s.png"

import { Countdown } from "./countdown";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Stars } from "./svg/stars";
import { useRef, type Ref } from "react";
import { useInView } from "framer-motion";
import { useGuest } from "../hooks/use-guest";

export const Gate = () => {

    const ref = useRef<HTMLDivElement | null>(null)
    const inView = useInView(ref)
    const targetDate = new Date("2026-01-18");

    const { guest } = useGuest()
    return <Screen className="p-10 py-15 relative">
        <div
            className="w-full h-full border-2  relative rounded-full  border-red-100 p-5 flex items-center justify-center">
            <img src={flower} className="absolute -top-20 -right-25 rotate-90 z-1" />
            <div
                ref={ref}
                className="text-white text-6xl tangerine-bold w-full p-5 z-2">
                <div className="w-full text-center text-xl font-normal leading-13">The Wedding Of</div>

                <div className="w-full text-start leading-13">Akmal</div>
                <div className="w-full text-center leading-13">&</div>
                <div className="w-full text-end leading-13">Lisa</div>
                <div className="text-center text-sm font-sans mt-2 font-normal">{format(targetDate, "dd MMMM yyyy", { locale: id })}</div>
                <Countdown targetDate={targetDate} />
                <div className="w-full flex justify-center">
                    <div className="text-sm font-sans text-center py-2 pb-1 mb-2 border-b max-w-max">Kepada : {guest}</div>
                </div>
                <div className=" text-white text-sm font-sans  z-2 flex justify-center font-normal">
                    <button

                        onClick={() => {
                            document.dispatchEvent(new Event("inv:open"))

                        }}
                        className="cursor-pointer text-center bg-red-100 hover:bg-red-200 text-black px-3 py-2 rounded-xl"> open invitation</button>
                </div>
            </div>

            <div className="absolute w-full h-full flex flex-col justify-end rounded-full overflow-hidden">

                <div className="relative overflow-hidden ">
                    <img src={flower2} className="bottom-0" alt="" />
                </div>
            </div>
            <div className="absolute w-full h-full flex flex-col justify-center">
                {inView &&
                    <Stars />
                }
            </div>
        </div>


        <img src={s} alt="" className="absolute -bottom-10 w-[30%] -right-10" />

    </Screen>
}
