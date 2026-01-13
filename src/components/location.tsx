import { useEffect, useState } from "react"
import { Screen } from "./screen"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
import { Locate, LocationEdit, MapPin } from "lucide-react";
import t from "@/assets/t.png"
import te from "@/assets/te.png"
import flower from "@/assets/flower.png"

import bg from "@/assets/bg2.png"

type LatLng = {
    lat: number
    lng: number
}


const WEDDING_LOCATION: LatLng = {
    lat: -0.5177905833052887,
    lng: 101.52956636088031,
}

export const Location = () => {
    const [userLocation, setUserLocation] = useState<LatLng | null>(null)

    useEffect(() => {
        if (!navigator.geolocation) return

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setUserLocation({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                })
                console.log(pos)
            },
            () => {
                setUserLocation(null)
            }
        )
    }, [])

    return (
        <Screen id="location" className={`relative flex flex-col space-y-6 `}

        >
            <div className="absolute w-full h-full  opacity-20 bg-cover"
                style={{
                    //@ts-ignore
                    "--image-url": `url(${bg})`,
                    backgroundImage: `url(${bg})`
                }}></div>
            <img src={t} alt="" className="w-full sticky rotate-180 top-0 left-0 z-3 opacity-0" />
            {/* <img src={te} alt="" className="w-full absolute -top-10 rotate-180  opacity-70" /> */}
            <img src={flower} alt="" className="w-full absolute -bottom-10 z-2 drop-shadow-amber-50 " />
            <img src={flower} alt="" className="w-full absolute  top-0 rotate-180  z-1" />

            <div className="px-3 w-full flex-1 z-1">
                <div className="p-5 bg-white/2 backdrop-blur-xs pt-30 w-full h-full flex flex-col space-y-4 text-center rounded-t-full rounded-b-3xl border-b-0  border-3 border-red-100 rounded-2xl relative">

                    <div className="border rounded-t-full border-red-100/20  h-full right-2.5 border-r-transparent border-l-transparent top-5 w-[95%] absolute"></div>
                    <div className="text-5xl text-center tangerine-bold text-white">Lokasi Acara</div>
                    <div className="text-white flex items-center-safe gap-1 justify-center"> <MapPin /> Sinambek, Taluk Kuantan</div>
                    <section className="w-full flex-1 bg-black rounded-2xl overflow-hidden text-white relative">
                        <MapContainer
                            center={WEDDING_LOCATION}
                            zoom={10}
                            className="w-full h-full z-0 rounded-2xl"
                        >
                            <TileLayer
                                attribution="&copy; OpenStreetMap contributors"
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <Marker position={WEDDING_LOCATION}>
                                <Popup>
                                    Lokasi Pernikahan <br />
                                    Akmal & Lisa
                                </Popup>
                            </Marker>

                            {userLocation && (
                                <Marker position={userLocation}>
                                    <Popup>Lokasi Anda</Popup>
                                </Marker>
                            )}
                        </MapContainer>


                        <div className="absolute top-1 right-1 z-10 bg-black/70 backdrop-blur px-2 py-2 rounded-xl border border-white/10">
                            <a
                                href={`https://www.google.com/maps/dir/?api=1&destination=${WEDDING_LOCATION.lat},${WEDDING_LOCATION.lng}`}
                                target="_blank"
                                className="inline-block  text-xs underline text-white/80 hover:text-white"
                            >
                                Buka Petunjuk Arah →
                            </a>
                        </div>

                    </section>
                </div>
            </div>
        </Screen>
    )
}
