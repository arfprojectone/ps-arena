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
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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
      { threshold: 0.6 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => {
      sections.forEach((sec) => sec && observer.unobserve(sec));
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full flex justify-between items-center px-6 md:px-8 py-4 
      border-b border-green-500/20 
      bg-black/40 backdrop-blur-xl 
      z-50"
    >
      <h1 className="text-2xl font-bold text-green-400 tracking-widest 
      drop-shadow-[0_0_10px_#22c55e]">
        PS ARENA
      </h1>

      <div className="flex space-x-6 text-sm text-gray-300">
        {menus.map((menu) => (
          <div key={menu.name} className="relative">
            <span
              onClick={() => scrollToSection(menu.target)}
              className={`cursor-pointer transition ${
                active === menu.target
                  ? "text-green-400"
                  : "hover:text-green-400"
              }`}
            >
              {menu.name}
            </span>

            {active === menu.target && (
              <motion.div
                layoutId="underline"
                className="h-[2px] bg-green-400 mt-1"
              />
            )}
          </div>
        ))}
      </div>
    </motion.nav>
  );
}
