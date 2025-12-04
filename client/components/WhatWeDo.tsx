"use client";
import { motion } from "framer-motion";

export const WhatWeDo = () => {
  return (
    <section
      className="py-24 px-6 lg:px-14 
      bg-gradient-to-b from-[#07131A] via-[#0A1D26] to-[#002129]
      relative overflow-hidden"
    >
      {/* Ambient Glow Lights */}
      <motion.div
        className="absolute top-16 left-20 w-96 h-96 bg-[#00E5FF]/30 blur-[170px] rounded-full"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
      <motion.div
        className="absolute bottom-16 right-20 w-[400px] h-[400px] bg-[#45FFE6]/30 blur-[220px] rounded-full"
        animate={{ opacity: [0.2, 0.45, 0.2], scale: [1.1, 0.9, 1.1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-center relative z-10">

        {/* ----- TEXT CARD ----- */}
        <div className="flex justify-start">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative p-10 rounded-2xl 
            backdrop-blur-xl border border-white/15
            shadow-[0_0_40px_rgba(0,255,255,0.15)]
            bg-gradient-to-b from-[#0c1a23] via-[#091520] to-[#070f16]
            w-full max-w-[460px]"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={{
                background: [
                  "linear-gradient(90deg,#00f7ff,#8b00ff)",
                  "linear-gradient(180deg,#ff00d4,#00eaff)",
                  "linear-gradient(270deg,#8b00ff,#00eaff)",
                ]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{
                padding: "3px",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                opacity: 0.55,
              }}
            />

            <h2 className="text-4xl font-bold text-white">What We Do?</h2>

            <p className="mt-5 text-gray-300 text-base leading-relaxed">
              We modernize outdated systems and turn them into intelligent, cloud-powered
              environments for faster, safer, scalable digital growth. We modernize outdated systems and turn them into intelligent, cloud-powered
              environments for faster, safer, scalable digital growth.
            </p>
          </motion.div>
        </div>

        {/* ---- 🔥 Connecting Neon Beam ---- */}
        <div className="relative flex justify-center">
          <div className="w-[6px] h-64 rounded-full bg-gradient-to-b from-cyan-400 via-[#7d4dff] to-pink-500 shadow-[0_0_25px_rgba(0,255,255,0.5)]"></div>
          <div className="absolute inset-0 blur-3xl bg-gradient-to-b from-cyan-500/20 to-purple-500/10"></div>
        </div>

        {/* ----- IMAGE ----- */}
        <div className="flex justify-center lg:justify-end">
          <motion.img
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.3 }}
            src="/image/what_we_do.jpeg"
            className="w-full max-w-md rounded-3xl shadow-[0_0_35px_rgba(0,255,255,0.18)] object-cover brightness-[.98]"
          />
        </div>

      </div>
    </section>
  );
};
