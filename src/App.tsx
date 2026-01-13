import { createContext, useEffect, useState } from 'react'

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

const capitalize = (string:string) =>{
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


  return (
    <GuestContext.Provider value={{ guest }}>
      <HoverProvider>
        <div className='flex justify-center flex-col items-center bg-gray-200 overflow-y-scroll'>
          <Gate />
          <Greeting />
          <Couple />
          <Location />
          <Gift />
        </div>
      </HoverProvider>
      <Toaster className='bg-white!' />
    </GuestContext.Provider>
  )
}

export default App
