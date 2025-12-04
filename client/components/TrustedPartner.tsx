// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function TrustedPartner() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   const imgScale = useTransform(scrollYProgress, [0, 0.28], [1.2, 0.8]);
//   const imgX = useTransform(scrollYProgress, [0.1, 0.35], ["0vw", "12vw"]);

//   const textOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
//   const textX = useTransform(scrollYProgress, [0.35, 0.45], ["-3vw", "0vw"]);
//   const textY = useTransform(scrollYProgress, [0.35, 0.45], [20, 0]);

//   return (
//     <section
//       ref={ref}
//       className="relative min-h-[140vh] w-full bg-gradient-to-b from-[#F9FBFF] via-[#A7E9FF]/20 to-[#D6F4FE]/30 overflow-hidden px-6 lg:px-14"
//     >
//       <motion.div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl overflow-hidden shadow-2xl"
//         style={{
//           scale: imgScale,
//           x: imgX,
//           width: "520px",
//           height: "330px",
//           maxWidth: "88vw",
//         }}
//       >
//         <img
//           src="/image/image.png"
//           alt="Trusted Partner"
//           className="w-full h-full object-cover"
//         />
//       </motion.div>

//       <motion.div
//         className="absolute top-1/2 -translate-y-1/2 left-[6vw] w-[40vw] max-w-[520px]"
//         style={{
//           opacity: textOpacity,
//           x: textX,
//           y: textY,
//         }}
//       >
//         <h2 className="text-[2.5rem] lg:text-[3rem] font-bold leading-tight text-[#0c172a]">
//           With CloudNexus, you get a{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
//             trusted partner
//           </span>{" "}
//           committed to long-term success.
//         </h2>

//         <p className="mt-6 text-gray-600 text-[1.1rem] leading-relaxed">
//           No shortcuts — just intelligent, strategic & results-driven transformation.
//           Scalable, future-ready & tailored for your growth.
//         </p>
//       </motion.div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";

export default function TrustedPartner() {
  return (
    <section
      className="relative w-full py-28 px-6 lg:px-14 
      bg-gradient-to-b from-[#07131A] via-[#0A1D26] to-[#002129]
      overflow-hidden"
    >
      {/* 🔥 Ambient Glow Background */}
      <motion.div className="absolute top-0 left-20 w-[350px] h-[350px] bg-[#00E5FF]/25 blur-[180px] rounded-full" />
      <motion.div className="absolute bottom-10 right-24 w-[420px] h-[420px] bg-[#FF00D4]/20 blur-[240px] rounded-full" />

      {/* 🔹 Section Heading */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Join Us as the{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            Heart of the Change
          </span>
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "130px" }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="h-[4px] mx-auto mt-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_25px_rgba(0,255,255,0.5)]"
        />

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Together we build possibilities—where technology meets vision,
          and innovation becomes reality.
        </p>
      </div>

      {/* 🔹 CONTENT GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h3 className="text-[2.4rem] lg:text-[2.8rem] font-bold text-white leading-tight">
            With CloudNexus, you get a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              trusted partner
            </span>{" "}
            committed to long-term success.
          </h3>

          <p className="text-gray-300 text-[1.15rem] leading-relaxed">
            No shortcuts — just intelligent, strategic & results-driven transformation.
            Scalable, future-ready and tailored for your growth.
          </p>
        </motion.div>

        {/* IMAGE SIDE — with glow + neon border */}
        <motion.div
          className="flex justify-center lg:justify-end relative group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
        >
          {/* Hover Glow Frame */}
          {/* <motion.div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl"
            style={{
              background:
                "linear-gradient(120deg,#00f7ff,#7b41ff,#ff00d4,#00f7ff)",
            }}
          /> */}

          {/* Image */}
          <motion.img
            src="/image/image.png"
            alt="Trusted Partner"
            className="rounded-3xl w-full max-w-md object-cover shadow-[0_0_40px_rgba(0,255,255,0.15)] 
            border border-white/15 backdrop-blur-xl"
            whileHover={{
              scale: 1.05,
              brightness: 1.2,
              filter: "contrast(1.1)",
            }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
