import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const words = ["People", "Process", "Technology"];

export const CloudNexusBoxAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [stage, setStage] = useState("closed");

  useEffect(() => {
    if (isInView && stage === "closed") {
      setStage("opening");
      setTimeout(() => setStage("drop"), 1200);
      setTimeout(() => setStage("close"), 3500);
    }
  }, [isInView, stage]);

  return (
    <div ref={ref} className="relative w-[220px] h-[200px] mx-auto" style={{ perspective: "1000px" }}>
      
      {/* Glow After Animation */}
      {stage === "close" && (
        <motion.div
          className="absolute inset-0 blur-2xl bg-[#00F0FF]/30 rounded-xl"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      {/* BOX */}
      <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>

        {/* FRONT */}
        <div className="absolute bg-[#0E111B] border border-[#1D2A3A] rounded-md w-[180px] h-[110px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ transform: "translateZ(50px)" }}
        />

        {/* SIDE PANELS */}
        <div className="absolute bg-[#161C27] w-[50px] h-[110px] left-[10px] top-[45px]"
          style={{ transform: "rotateY(-90deg) translateZ(25px)" }}
        />
        <div className="absolute bg-[#161C27] w-[50px] h-[110px] right-[10px] top-[45px]"
          style={{ transform: "rotateY(90deg) translateZ(25px)" }}
        />

        {/* BOX TOP LID */}
        <motion.div
          className="absolute bg-[#1C2737] w-[180px] h-[110px] left-1/2 top-[28px] -translate-x-1/2 rounded-md"
          style={{ transformOrigin: "top center" }}
          animate={{ rotateX: stage === "opening" || stage === "drop" ? -90 : 0 }}
          transition={{ duration: 1 }}
        />

        {/* DROPPING TAGS */}
        {words.map((word, index) => (
          <motion.div
            key={word}
            className="absolute left-1/2 -translate-x-1/2 px-3 py-1 font-semibold text-white text-sm bg-[#00E7FF]/30 border border-[#00E7FF] rounded-lg backdrop-blur-md shadow-md"
            initial={{ opacity: 0, y: -40 }}
            animate={
              stage === "drop"
                ? { opacity: 1, y: 40 + index * 28 }
                : stage === "close"
                ? { opacity: 0, y: 140 }
                : {}
            }
            transition={{ delay: 0.5 + index * 0.4, duration: 1 }}
            style={{ transform: "translateZ(60px)" }}
          >
            {word}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
