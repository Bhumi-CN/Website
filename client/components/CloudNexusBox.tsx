import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const CloudNexusBoxAnimation = () => {
  const labels = ["People", "Process", "Technology"];
  const [stage, setStage] = useState("closed");

  useEffect(() => {
    const timeline = [
      { time: 500, action: "open" },
      { time: 2000, action: "drop" },
      { time: 4000, action: "close" },
      { time: 5500, action: "reset" },
    ];

    let timerList = timeline.map(({ time, action }) =>
      setTimeout(() => setStage(action), time)
    );

    return () => timerList.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative w-[200px] h-[200px] mx-auto"
      style={{ transformStyle: "preserve-3d", perspective: "900px" }}
    >
      {/* BOX BODY */}
      <div
        className="absolute inset-0 bg-[#0D111F] rounded-xl shadow-2xl"
        style={{ transform: "translateZ(55px)" }}
      />

      {/* LID (opens and closes) */}
      <motion.div
        animate={{
          rotateX: stage === "open" ? -80 : stage === "close" ? 0 : 0,
        }}
        transition={{ duration: 1 }}
        className="absolute bg-[#1A2A3D] w-full h-[90px] rounded-xl"
        style={{
          transform: "translateZ(55px)",
          transformOrigin: "top",
        }}
      />

      {/* DROPPING LABELS */}
      {labels.map((label, i) => (
        <motion.div
          key={label}
          animate={{
            opacity:
              stage === "drop" ? [0, 1, 1, 0] : 0,
            y:
              stage === "drop"
                ? [0, 40 + i * 12, 60 + i * 20, 120]
                : -40,
          }}
          transition={{
            delay: i * 0.4,
            duration: 2,
          }}
          className="absolute left-1/2 -translate-x-1/2 text-white text-xs font-semibold bg-[#00E5FF]/30 px-3 py-1 rounded-lg border border-[#00E5FF] shadow-lg backdrop-blur-lg"
          style={{ transform: `translateZ(85px)` }}
        >
          {label}
        </motion.div>
      ))}

      {/* SOFT SHADOW BELOW */}
      <div className="absolute w-[260px] h-[50px] bg-black/25 blur-2xl rounded-full -bottom-14 left-1/2 -translate-x-1/2 opacity-60" />
    </motion.div>
  );
};
