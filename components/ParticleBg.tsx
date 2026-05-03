"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBg() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // FIX: wajib return promise
      return await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      options={{
        background: { color: "#000" },
        fpsLimit: 60,
        particles: {
          number: { value: 40 },
          color: { value: "#22c55e" },
          links: {
            enable: true,
            color: "#22c55e",
            distance: 120,
            opacity: 0.3,
          },
          move: { enable: true, speed: 1 },
          size: { value: 2 },
          opacity: { value: 0.5 },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
