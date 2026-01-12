import { useState } from "react";
import { motion } from "framer-motion";

const Rsvp = () => {
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("Hadir");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Terima kasih ${name} atas konfirmasinya!`);
  };

  return (
    <section className="bg-[#000035] text-white py-16 px-6 pb-32">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <h2 className="text-2xl font-serif text-center mb-6">Konfirmasi Kehadiran</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-xs text-gray-300 mb-1">Nama Tamu</label>
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-amber-400 transition"
                    placeholder="Masukkan nama Anda"
                    required
                />
            </div>

            <div>
                <label className="block text-xs text-gray-300 mb-1">Konfirmasi</label>
                <select 
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-amber-400"
                >
                    <option value="Hadir" className="text-black">Hadir</option>
                    <option value="Tidak Hadir" className="text-black">Maaf, Tidak Bisa Hadir</option>
                    <option value="Ragu" className="text-black">Masih Ragu</option>
                </select>
            </div>

            <motion.button 
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-semibold shadow-lg mt-4"
            >
                Kirim Konfirmasi
            </motion.button>
        </form>
      </div>

      <footer className="text-center mt-10 text-xs text-gray-500">
        <p>&copy; 2026 Akmal & Lisa Wedding.</p>
        <p>Created with Love.</p>
      </footer>
    </section>
  );
};

export default Rsvp;