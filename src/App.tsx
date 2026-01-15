import { createContext, useEffect, useRef, useState } from 'react'

import './App.css'
import { Couple } from './components/couple'
import { Gate } from './components/gate'
import { HoverProvider } from './hooks/use-hover'
import { Location } from './components/location'
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { Greeting } from './components/greeting'
import { Gift } from './components/gift'
import { Toaster } from './components/ui/sonner'
import Gallery from "@/components/gallery"
import { Comments } from './components/comments'
import { Separator } from './components/ui/separator'
import aa from "@/assets/aaa.jpg"
import { MusicIcon, PauseIcon } from 'lucide-react'
import ss from "@/assets/aty.mp3"
delete (L.Icon.Default.prototype as any)._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})
const capitalizeF = (string: string) => {
  return string.replace(/^./g, (char) => char.toUpperCase());
}

const capitalize = (string: string) => {
  return string.split(' ')
    .map((word) => capitalizeF(word))
    .join(' ');
}

export const GuestContext = createContext({ guest: "" })
function App() {
  const [guest, setGuest] = useState("Bapak Jepi")

  useEffect(() => {

    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString);
    const gs = urlParams.get("g")
    if (gs) {
      const g = gs.replaceAll("-", " ")
      setGuest(capitalize(g))
    }
  }, [])
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (e) {
      console.error("Audio error:", e);
    }
  };

  const [open, setOpen] = useState(false)

  useEffect(() => {

    const listener = async () => {
      setOpen(true)
      await toggleMusic()
      setTimeout(() => {
        document.getElementById("ppx")?.scrollIntoView({ behavior: "smooth" })
      }, 500);
    }
    document.addEventListener("inv:open", listener)
    return () => document.removeEventListener("inv:open", listener)

  }, [])


  return (
    <GuestContext.Provider value={{ guest }}>
      <HoverProvider>
        <div className='flex justify-center flex-col items-center bg-gray-200 space-y-0 overflow-y-scroll relative'>
          <div className={`relative max-w-106.25 ${open ? "" : "h-screen overflow-hidden"}`}>
            <div className="fixed bottom-5 z-100000000 ps-2 ">

              <div className="rounded-full bg-white p-2 cursor-pointer" id='bmsc' onClick={() => toggleMusic()}>

                {isPlaying ? <PauseIcon /> : <MusicIcon />}
                <audio src={ss} loop ref={audioRef}></audio>
              </div>
            </div>
            <Gate />
            <Greeting />
            <Gallery />
            <Couple />
            <Location />
            <Gift />
            <Comments />
            <div className="w-full max-w-106.25 flex items-center relative overflow-hidden bg-[#000035] bg-cover origin-center min-h-screen py-4"

              style={{ backgroundImage: `url(${aa})` }}
            >
              <div className="w-full z-2">
                <div className="w-full flex justify-center">
                  <div className='tangerine-bold text-5xl  text-white px-5 max-w-max'>
                    <span>
                      Terima Kasih
                    </span>

                    <Separator />
                  </div>
                </div>
                <div className='text-white text-center px-10 pt-7'>Merupakan suatu kebahagian dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kedua mempelai.</div>
                <div className='text-white text-center px-10 pt-7'>Hormat Kami yang mengundang</div>
                <div className='font-bold text-4xl mt-5 text-white text-center'>
                  Akmal & Lisa
                </div>
              </div>

              <div className="absolute w-full h-full bg-black/20"></div>
              <div className="absolute w-full h-full bg-linear-to-t from-black to-transparent"></div>

            </div>
          </div>

        </div>
      </HoverProvider>
      <Toaster className='bg-white!' />
    </GuestContext.Provider>
  )
}

export default App
