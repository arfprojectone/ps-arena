"use client";

import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PriceList from "../components/PriceList";


export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden font-sans">
      <Background />
      <Navbar />
      <Hero />
      <Hero />
      <PriceList />
    </main>
  );
}