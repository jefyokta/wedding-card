import { useGuest } from "../hooks/use-guest"
import { Screen } from "./screen"
import cp from "@/assets/couple.jpeg"

export const Greeting = () => {

    const { guest } = useGuest()
    return <Screen>
        <div className="text-white p-5 flex flex-col space-y-5 text-center z-11111150 relative w-full h-full">
            <div>
                <p className="font-[times-new-roman] text-4xl my-5">﷽</p>
                <p>
                    Assalamualaikum Wr Wb
                </p>
                <p className="z-50">
                    dengan ini kami mengundang {guest} untuk menghadiri acara pernikahan kami
                </p>
            </div>
            <div className="w-full flex-1 relative overflow-hidden  rounded-2xl">
                <img src={cp} alt="" className="w-full object-cover" />
                <div className="absolute bottom-0 text-start from-black to-transparent bg-linear-to-t w-full p-5">
                    <h1 className="text-xl">Akmal & Lisa</h1>
                </div>
            </div>
        </div>
    </Screen>
}