import { Screen } from "@/components/screen"
import { MotionCarousel } from "./animate-ui/components/community/motion-carousel"

import img1 from "@/assets/gallery/1.jpeg"
import img2 from "@/assets/gallery/2.jpeg"
import img3 from "@/assets/gallery/3.jpeg"
import img4 from "@/assets/gallery/4.jpeg"
import img5 from "@/assets/gallery/5.jpeg"
import img7 from "@/assets/gallery/7.jpeg"
import img8 from "@/assets/gallery/8.jpeg"
import img9 from "@/assets/gallery/9.jpeg"
import img10 from "@/assets/gallery/10.jpeg"
import img11 from "@/assets/gallery/11.jpeg"
import img12 from "@/assets/gallery/12.jpeg"

import bg from "@/assets/flower.png"

const slides = [
  img1, img2, img3, img4, img5,
  img7, img8, img9, img10, img11, img12,
]

export default function Gallery() {
  return (
    <Screen className="flex flex-col   relative"
    >
      <img src={bg} alt="" className="w-full absolute bottom-0 opacity-70 " />
      <div className="tangerine-bold text-5xl text-center text-white mt-5">
        Our Gallery
      </div>

      <div className="flex-1 px-3 flex z-2 items-center justify-center">
        <MotionCarousel slides={slides} />
      </div>
    </Screen>
  )
}
