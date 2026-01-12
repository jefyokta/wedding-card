import { motion } from "framer-motion";
import akmal from "../assets/akmal.png";
import lisa from "../assets/lisa.png";
import masker from "../assets/masker.png";
import birds from "../assets/birds.gif";

interface HeroProps {
  onClickOpen: () => void;
  isOpen: boolean;
}

const Hero = ({ onClickOpen, isOpen }: HeroProps) => {
  return (
    <div className="w-full h-screen relative bg-[#000035] overflow-hidden">
      <div className="relative z-20 flex flex-col items-center h-full pt-24 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-white/90 text-xl font-light tracking-widest uppercase mb-2">
            The Wedding of
          </p>
          <h1 className="text-white text-5xl font-serif mb-4">
            Akmal & Lisa
          </h1>
          <p className="text-white/80 text-lg font-light tracking-wide border-y border-white/20 py-2 px-6 inline-block">
            2 Januari 2026
          </p>
        </motion.div>

        {/* Tombol Buka Undangan */}
        {!isOpen && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClickOpen}
            className="mt-10 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full shadow-lg z-50 cursor-pointer hover:bg-white/20 transition"
          >
            Buka Undangan
          </motion.button>
        )}
      </div>

      {/* Animasi Burung */}
      <motion.div
        className="absolute w-full h-screen flex items-center top-0 justify-center z-10 pointer-events-none"
        initial={{ x: 300 }}
        animate={{ x: "-200%" }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <img src={birds} alt="birds" className="w-full h-56 object-contain opacity-60" />
      </motion.div>

      {/* Gambar Pasangan & Aset */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.img 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            src={akmal} alt="Groom" className="absolute top-20 z-1 w-72 -left-5 opacity-80" 
        />
        <motion.img 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            src={lisa} alt="Bride" className="absolute top-24 z-2 w-72 -right-5 drop-shadow-2xl" 
        />
        
        <div className="absolute w-full h-full top-0 bg-gradient-to-b from-[#000035]/60 via-transparent to-[#000035] z-3"></div>
        <img src={masker} alt="mask" className="absolute bottom-0 w-full z-4 object-cover h-32" />
      </div>
    </div>
  );
};

export default Hero;