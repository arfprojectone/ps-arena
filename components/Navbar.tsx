"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const menus = [
  { name: "Home", target: "home" },
  { name: "Slot", target: "slot" },
  { name: "Harga", target: "harga" },
  { name: "Promo", target: "promo" },
  { name: "Booking", target: "booking" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = menus.map((m) => document.getElementById(m.target));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // makin besar = makin akurat
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex justify-between items-center px-8 py-4 
      border-b border-green-500/20 
      bg-black/40 backdrop-blur-xl 
      sticky top-0 z-50"
    >
      <h1 className="text-2xl font-bold text-green-400 tracking-widest 
      drop-shadow-[0_0_10px_#22c55e]">
        PS ARENA
      </h1>

      <div className="space-x-6 text-sm text-gray-300">
        {menus.map((menu) => (
          <span
            key={menu.name}
            onClick={() => scrollToSection(menu.target)}
            className={`cursor-pointer transition ${
              active === menu.target
                ? "text-green-400 drop-shadow-[0_0_10px_#22c55e]"
                : "hover:text-green-400"
            }`}
          >
            {menu.name}
          </span>
        ))}
      </div>
    </motion.nav>
  );
}
