"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const openWA = () => {
    window.open(
      "https://wa.me/6281218956657?text=Halo admin, saya mau booking PS",
      "_blank"
    );
  };

  const scrollToHarga = () => {
    const el = document.getElementById("harga");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="w-full text-center px-6 md:px-8 flex flex-col justify-center h-full"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-extrabold mb-6
        drop-shadow-[0_0_20px_rgba(34,197,94,0.7)]"
      >
        NEXT LEVEL <br />
        <span className="text-green-400">GAMING EXPERIENCE</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 mb-10 max-w-xl mx-auto"
      >
        Main PS5 & PS4 dengan setup premium, nyaman, dan tanpa ribet.
      </motion.p>

      <div className="flex justify-center gap-4 flex-wrap">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={openWA}
          className="bg-green-500 px-8 py-3 rounded-2xl shadow-[0_0_20px_#22c55e]"
        >
          Booking Sekarang
        </motion.button>

        <button
          onClick={scrollToHarga}
          className="border border-green-400 px-8 py-3 rounded-2xl hover:bg-green-500/10"
        >
          Lihat Harga
        </button>
      </div>
    </section>
  );
}
