"use client";

import { motion } from "framer-motion";

const prices = [
  { name: "PS4", price: "Rp 5.000 / jam" },
  { name: "PS5", price: "Rp 10.000 / jam" },
  { name: "VIP Room", price: "Rp 20.000 / jam" },
];

export default function PriceList() {
  return (
    <section id="harga" className="px-8 pb-20">
      <h2 className="text-3xl font-bold text-center mb-10 
      text-green-400 drop-shadow-[0_0_15px_#22c55e]">
        💰 Price List
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {prices.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-2xl 
            bg-black/40 backdrop-blur-xl 
            border border-green-500/20 
            text-center
            shadow-[0_0_20px_rgba(34,197,94,0.1)]
            hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]
            transition`}
          >
            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
            <p className="text-green-400 text-lg font-semibold">
              {item.price}
            </p>

            <button className="mt-4 px-4 py-2 bg-green-500 rounded-lg text-sm hover:bg-green-600 transition">
              Booking
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
