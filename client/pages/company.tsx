"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { Footer } from "@/components/ContactAndFooter";

/* Logos */
const scrollingLogos = [
  { src: "/logos/boa.png" },
  { src: "/logos/cvs.png" },
  { src: "/logos/ite.png" },
  { src: "/logos/nec.png" },
  { src: "/logos/ylc.png" },
];

/* Leadership */
const leaders = [
  { name: "Yash Singh", role: "CTO", img: "/leaders/ceo.png" },
  { name: "Kaustubh Singh", role: "Founder & CEO", img: "/leaders/leader2.png" },
  { name: "Shoaib Akhtar", role: "Technical Lead", img: "/leaders/leader3.png" },
  { name: "Harsh Dwivedi", role: "Team Lead-Development", img: "/leaders/leader4.png" },
  { name: "Sourabh Patle", role: "Team Lead-Development", img: "/leaders/leader5.png" },
  { name: "Adiba Ahmed", role: "Team Lead-Data Engineer", img: "/leaders/leader6.png" },
  { name: "Gaurav Tiwari", role: "Team Lead-Devops", img: "/leaders/leader6.png" },
];

/* Counter Component */
function Counter({ end, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let start = 0;
      let timer = setInterval(() => {
        start++;
        if (start >= end) clearInterval(timer);
        setCount(start);
      }, 15);
    }, { threshold: 0.5 });

    observer.observe(ref.current);
  }, []);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.1 }}
      className="border border-white/20 bg-white/5 rounded-xl py-6 text-center shadow-[0_0_25px_rgba(0,255,255,0.2)]"
    >
      <p className="text-3xl font-bold text-cyan-400">{count}+</p>
      <p className="text-gray-300 text-sm">{label}</p>
    </motion.div>
  );
}


export default function Company() {
  const [activeLeader, setActiveLeader] = useState(null);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="w-full min-h-screen bg-black text-white snap-y snap-mandatory overflow-scroll">
      <Header />

      {/* Back Button */}
      <div className="fixed top-20 left-6 z-40">
        <Link to="/">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 text-white">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </Link>
      </div>

      {/* HERO */}
      <section className="relative min-h-screen snap-start pt-20 flex justify-start items-center overflow-hidden">
        <video src="/video/origin.mp4" autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0"/>
        <div className="absolute inset-0 bg-black/50 z-0 backdrop-blur-md"></div>

        <div className="relative z-20 max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="lg:col-span-3">

            <div className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 mb-6">
              <p className="text-sm font-semibold text-cyan-300">🌍 Built with Purpose, Run with Consistency</p>
            </div>

            <p className="text-3xl font-semibold text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent whitespace-nowrap">
                Dependable technology. Remarkable outcomes.
              </span>
            </p>

            <p className="text-lg text-gray-300 mt-4 max-w-2xl">
              We don’t chase speed — we master consistency. Because true innovation isn’t a moment, it’s a habit.
            </p>
          </motion.div>
        </div>
      </section>


      {/* ORIGIN */}
      <section className="min-h-screen snap-start grid lg:grid-cols-2 gap-10 items-center px-6 lg:px-20">
        <div>
          <h2 className="text-4xl font-bold">Our <span className="text-cyan-400">Origin</span></h2>
          <p className="text-gray-400 mt-3">
            CloudNexus was founded on a simple belief: <strong className="text-white">technology should adapt to people — not the other way around.</strong>
          </p>
          <p className="text-gray-400 mt-4">
            From day one, we built with <span className="text-cyan-400 font-semibold">commitment, consistency, and courage</span> — ensuring every system we deploy stands strong today and scales effortlessly tomorrow.
          </p>
        </div>

        <motion.video src="/video/origin.mp4" autoPlay muted loop playsInline className="w-full h-[350px] object-cover rounded-3xl shadow-[0_0_35px_cyan]" />
      </section>


      {/* VISION */}
      <section className="min-h-screen snap-start grid lg:grid-cols-2 gap-10 items-center px-6 lg:px-20">
        <motion.img src="/image/vision.jpeg" className="w-full h-[350px] object-cover rounded-3xl shadow-[0_0_35px_cyan]"/>

        <div>
          <h2 className="text-4xl font-bold">Our <span className="text-cyan-400">Vision</span></h2>
          <p className="text-gray-400 mt-3">
            A connected world where automation, cloud and AI unite to create clarity, efficiency, and opportunity.
          </p>
          <p className="text-gray-400 mt-4">
            Not just technology — but technology that evolves with the world, without ever compromising performance or consistency.
          </p>
        </div>
      </section>


      {/* LOGO SLIDER */}
      <section className="min-h-screen snap-start flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-4">Trusted by Leading Companies</h2>
        <p className="text-gray-400 mb-10 text-center">Our partners trust us not just to build — but to build reliably, repeatedly, and responsibly.</p>

        <div className="w-full overflow-hidden">
          <motion.div animate={{ x: ["0%", "-100%"] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="flex gap-24 whitespace-nowrap">
            {[...scrollingLogos, ...scrollingLogos, ...scrollingLogos].map((logo, i) => (
              <img key={i} src={logo.src} className="h-20 opacity-80 hover:opacity-100 transition" />
            ))}
          </motion.div>
        </div>
      </section>


      {/* RELATIONSHIPS */}
      <section className="min-h-screen snap-start grid lg:grid-cols-2 gap-10 items-center px-6 lg:px-20">
        <motion.img src="/logos/image.png" className="w-full h-[350px] object-cover rounded-3xl shadow-xl"/>

        <div>
          <h2 className="text-4xl font-bold">Our <span className="text-cyan-400">Relationships</span></h2>

          <div className="space-y-4 text-gray-300 mt-6">
            <p><strong className="text-white">CUSTOMERS</strong> facing problems that need integrated cloud solutions.</p>
            <p><strong className="text-white">PARTNERS</strong> delivering cloud solutions to customers from providers.</p>
            <p><strong className="text-white">PROVIDERS</strong> innovating and developing solutions for future-focused needs.</p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <Counter end={100} label="Customers"/>
            <Counter end={20} label="Partners"/>
            <Counter end={30} label="Providers"/>
          </div>
        </div>
      </section>


      {/* LEADERSHIP */}
      {/* 👥 Leadership */}
<section className="min-h-screen snap-start flex flex-col items-center px-6 lg:px-20">
  <h2 className="text-4xl font-bold mb-14">Our Leadership</h2>

  {/* ---- FIRST ROW (CEO, etc.) ---- */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mb-16">
    {leaders.slice(0, 3).map((leader, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        className={`bg-[#0F1C22] rounded-3xl p-6 border border-white/10 shadow-xl text-center transition-all duration-300
          ${index === 1 ? "md:scale-110 md:h-[430px]" : "md:h-[380px]"}
        `}
      >
        <img
          src={leader.img}
          className={`w-full object-contain mx-auto transition-all
            ${index === 1 ? "h-[260px]" : "h-[220px]"}
          `}
        />
        
        <h3 className={`font-bold mt-4 transition-all
          ${index === 1 ? "text-2xl" : "text-xl"}
        `}>
          {leader.name}
        </h3>

        <p className={`transition-all text-cyan-400
          ${index === 1 ? "text-lg" : "text-sm"}
        `}>
          {leader.role}
        </p>
      </motion.div>
    ))}
  </div>

  {/* ---- SECOND ROW (4 Equal Team Leads in One Line) ---- */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full">
    {leaders.slice(0, 4).map((leader, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        className="bg-[#0F1C22] rounded-3xl p-6 border border-white/10 shadow-xl text-center"
      >
        <img
          src={leader.img}
          className="w-full h-[220px] object-contain mx-auto rounded-xl"
        />

        <h3 className="text-lg font-bold mt-4">{leader.name}</h3>
        <p className="text-cyan-400 text-sm">{leader.role}</p>
      </motion.div>
    ))}
  </div>
</section>


      <Footer />
    </main>
  );
}
