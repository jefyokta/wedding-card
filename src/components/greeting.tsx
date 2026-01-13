import { useState } from "react"
import { useGuest } from "../hooks/use-guest"
import { Screen } from "./screen"
import cp from "@/assets/couple.jpeg"
import rings from "@/assets/rings.jpeg"
import { Calendar, Timer } from "lucide-react"
import { GmapLink } from "./location"
import { Separator } from "./ui/separator"

export const Greeting = () => {

    const { guest } = useGuest()
    return <>

        <div className="w-full max-w-106.25 relative overflow-hidden bg-[#000035] ">
            <img
                src={rings}
                alt="Rings"
                className="w-full object-cover opacity-80"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#000035]/90 via-[#000035]/60 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center px-6 md:px-16">
                <div className="max-w-3xl text-center text-white space-y-6">

                    <p className="text-xs leading-relaxed font-light italic">
                        “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
                        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
                        merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
                        sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
                        tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”
                    </p>

                    <span className="block text-sm md:text-base tracking-wide opacity-80">
                        — QS. Ar-Rum : 21
                    </span>
                </div>
            </div>
        </div>

        <Screen>
            <div className="text-white p-5 flex flex-col space-y-5 text-center z-11111150 relative w-full h-full">
                <div className="text-xs">
                    <p className="font-[times-new-roman] text-4xl my-5">﷽</p>
                    <p>
                        Assalamualaikum Wr Wb
                    </p>
                    <p className="z-50">
                        dengan ini kami mengundang {guest} untuk menghadiri acara pernikahan kami
                    </p>
                    {/* <div className="space-y-2 mt-2">
                        <div className="text-xl">
                            <h2>
                                Akad
                            </h2>
                            <div className="text-white flex items-center-safe gap-1 text-xs justify-center"><Timer size={16} /> 17 Januari jam 20.00-selesai </div>
                        </div>
                        <div className="text-xl">
                            <h2>
                                Resepsi
                            </h2>
                            <div className="text-white flex items-center-safe gap-1 text-xs justify-center mb-4"><Timer size={16} /> 18 Januari jam 11.00-selesai </div>
                        </div>
                        <div>
                            <a href="#location" className="bg-white text-black px-2 py-1 rounded-2xl">Lihat Lokasi</a>
                        </div>
                    </div> */}
                </div>
                <div className="w-full flex-1 relative overflow-hidden bg-top flex flex-col justify-center items-center rounded-2xl bg-cover"
                    style={{ backgroundImage: `url(${cp})` }}
                >
                    <div className="absolute bg-black/50 w-full h-full"></div>
                    <div className="space-y-5 mt-2 z-2">
                        <div className="text-5xl">
                            <h2 className="tangerine-bold">
                                Akad
                            </h2>
                            <div className="text-white flex items-center-safe gap-1 text-xs justify-center"><Calendar size={16} />Sabtu, 17 Januari jam 20.00-selesai </div>
                            <Separator />
                        </div>
                        <div className="text-5xl">
                            <h2 className="tangerine-bold">
                                Resepsi
                            </h2>
                            <div className="text-white flex items-center-safe gap-1 text-xs justify-center mb-4"><Calendar size={16} /> Minggu, 18 Januari jam 11.00-selesai </div>
                            <Separator />
                        </div>
                        <div>
                            <p>

                                Lihat Lokasi </p>
                            <div className="w-full flex justify-center space-x-2 py-2">
                                <a href="#location" className="text-xs p-3 py-2 bg-white text-black rounded-2xl">Lihat</a>
                                <a href={GmapLink} target="_blank" className="text-xs p-3 py-2 bg-white text-black rounded-2xl">Buka Di GMap</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Screen>
    </>
}