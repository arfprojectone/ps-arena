"use client";

import { motion } from "framer-motion";

const prices = [
  { name: "PS4", price: "Rp 5.000 / jam" },
  { name: "PS5", price: "Rp 10.000 / jam"},
  { name: "VIP Room", price: "Rp 20.000 / jam" },
];

export default function PriceList() {
  return (
    <section
      id="harga"
      className="w-full px-6 md:px-8 flex flex-col justify-center h-full"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-green-400">
        💰 Price List
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {prices.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.06, y: -5 }}
            className={`p-6 rounded-2xl 
            bg-black/40 backdrop-blur-xl 
            border border-green-500/20 
            text-center`}
          >

            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
            <p className="text-green-400">{item.price}</p>

            <button className="mt-4 px-4 py-2 bg-green-500 rounded-lg">
              Booking
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
