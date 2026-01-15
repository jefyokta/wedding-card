import { motion } from "framer-motion"
import { Screen } from "./screen"

export const Invitation = ({ guestName = "Tamu Undangan" }) => {
  return (
    <Screen id="invitation">
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">

        <div className="absolute inset-0 bg-linear-to-b from-black via-black/80 to-black" />

        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* HEADER */}
          <div className="text-white text-sm tracking-[0.35em] uppercase opacity-70">
            The Wedding Of
          </div>

          <h1 className="mt-6 text-white text-5xl md:text-6xl font-serif tracking-wide">
            Akmal <span className="opacity-60">&</span> Lisa
          </h1>

          <div className="mt-6 text-white/70 text-sm tracking-widest">
            12 • 08 • 2025
          </div>

          {/* <motion.div
            className="mt-10 text-white/80 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-xs tracking-widest uppercase opacity-60">
              Kepada Yth.
            </div>
            <div className="mt-1 font-medium text-base">
              {guestName}
            </div>
          </motion.div> */}
          <motion.button
            className="mt-12 px-8 py-3 border border-white/30 text-white text-sm tracking-widest hover:bg-white hover:text-black transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={()=>{

                document.getElementById("invitation")?.nextElementSibling?.scrollIntoView({behavior:"smooth"})
            }}
          >
            BUKA UNDANGAN
          </motion.button>
        </motion.div>

        <div className="absolute inset-0 pointer-events-none bg-black/30" />
      </section>
    </Screen>
  )
}
