"use client";

import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PriceList from "../components/PriceList";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory text-white">

      <Background />
      <Navbar />

      {/* HERO SCREEN */}
      <section className="snap-start h-screen flex items-center justify-center">
        <Hero />
      </section>

      {/* PRICE SCREEN */}
      <section className="snap-start h-screen flex items-center justify-center">
        <PriceList />
      </section>

    </main>
  );
}
