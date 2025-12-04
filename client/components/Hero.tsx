"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import Orb from "./Hyperspeed";

export const Hero = () => {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true });
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.2);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen pt-20 flex items-center justify-start overflow-hidden bg-black text-white"
    >
      {/* 🌈 ORB FULLSCREEN FIX */}

      <div style={{ width: "100%", height: "600px", position: "absolute" }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* Soft overlay so text remains readable */}
      <div className="absolute inset-0 -z-10 bg-black/40"></div>

      {/* MAIN GRID */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* LEFT SIDE */}
        <div className="lg:col-span-3">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transform: `translateY(${offset * 0.2}px)` }}
          >
            {/* BADGE */}
            <div className="inline-block mb-8 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
              <p className="text-sm font-semibold text-cyan-300">
                ✨ Next-Gen Cloud Innovation
              </p>
            </div>

            {/* TITLE */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl flex flex-wrap gap-3">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                CL
              </span>

              <img
                src="/logos/cnlogovideo.gif"
                className="w-28 h-30 mx-1 inline-block object-contain"
              />

              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                UD
              </span>

              <span className="text-white">NEXUS</span>
            </h1>

            {/* TAGLINE */}
            <p className="text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-400 bg-clip-text text-transparent drop-shadow-xl mb-6">
              Your dream deserves smart solutions. We create them with heart
            </p>

            {/* SUBTEXT */}
            <p className="text-gray-300 text-lg sm:text-xl mb-14 max-w-2xl leading-relaxed">
              Unlock your full potential with cloud-native architecture,
              automation, AI-driven insights, and enterprise-grade scalability.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="px-10 py-4 rounded-2xl bg-white text-black font-semibold shadow-lg hover:scale-105 transition-all duration-300">
                Get Started
              </button>

              <button className="px-10 py-4 rounded-2xl border border-cyan-400 text-white hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
