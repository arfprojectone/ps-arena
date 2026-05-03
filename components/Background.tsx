"use client";

import ParticleBg from "./ParticleBg";

export default function Background() {
  return (
    <>
      <ParticleBg />

      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-green-400/10 blur-[100px] rounded-full bottom-[-100px] right-[-100px]" />
      </div>
    </>
  );
}
