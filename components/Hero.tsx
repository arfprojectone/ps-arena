"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const phone = "6281218956657";
  const message = "Halo admin, saya mau booking PS";

  const openWA = () => {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="home"className="text-center py-24 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight
        drop-shadow-[0_0_20px_rgba(34,197,94,0.7)]"
      >
        NEXT LEVEL <br />
        <span className="text-green-400 drop-shadow-[0_0_25px_#22c55e]">
          GAMING EXPERIENCE
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 mb-8 max-w-xl mx-auto"
      >
        Main PS5 & PS4 dengan setup premium, nyaman, dan tanpa ribet.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={openWA}
        className="bg-green-500 px-8 py-3 rounded-2xl font-semibold text-lg
        shadow-[0_0_20px_#22c55e]
        hover:shadow-[0_0_40px_#22c55e]
        transition duration-300"
      >
        Booking Sekarang
      </motion.button>
    </section>
  );
}
