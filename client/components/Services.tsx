"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "AI & Automation",
    slug: "ai-automation",
    shortText: "Automate workflows and achieve efficiency.",
    fullText:
      "We build AI-driven automation pipelines that accelerate operations and reduce errors, enabling smarter digital transformation.",
    image: "/image/service-ai.jpeg",
  },
  {
    title: "Cloud Services",
    slug: "cloud-services",
    shortText: "Build & scale cloud-native applications.",
    fullText:
      "Enterprise-grade cloud solutions with complete security, scalability, and performance optimization.",
    image: "/image/service-cloud.jpeg",
  },
  {
    title: "App Development",
    slug: "app-development",
    shortText: "Modern and scalable applications.",
    fullText:
      "Cutting-edge mobile and web development with latest tech — secure, scalable & performance-focused.",
    image: "/image/service-app.jpeg",
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    shortText: "Protect. Prevent. Defend.",
    fullText:
      "Threat detection, zero-trust architecture, and enterprise-grade cybersecurity frameworks.",
    image: "/image/service-security.jpeg",
  },
  {
    title: "IoT & Automation",
    slug: "iot-automation",
    shortText: "Connected smart solutions.",
    fullText:
      "IoT ecosystems and automation frameworks advancing Industry 4.0 transformation.",
    image: "/image/service-iot.jpeg",
  },
  {
    title: "SaaS Solutions",
    slug: "saas-solutions",
    shortText: "Build future-ready platforms.",
    fullText:
      "Custom SaaS platforms with automation, analytics & secure architecture.",
    image: "/image/service-data.jpeg",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 lg:px-14 bg-[#0c0f22] relative overflow-hidden">
      
      {/* Ambient Lights */}
      <motion.div
        className="absolute top-20 left-32 w-96 h-96 bg-[#00E5FF]/30 blur-[200px] rounded-full"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 right-32 w-[420px] h-[420px] bg-[#FF00D4]/25 blur-[220px] rounded-full"
        animate={{ opacity: [0.25, 0.6, 0.25] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Section Heading — Static */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white">
          <span className="text-cyan-400">Our</span> Services
          
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-3">
          Driving transformation with innovation, automation and secure cloud solutions.
        </p>
      </div>

      {/* Services Grid — No scroll animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div key={index} className="relative group">
            
            {/* Neon Border */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                background: [
                  "linear-gradient(90deg,#00f7ff,#8b00ff)",
                  "linear-gradient(180deg,#ff00d4,#00eaff)",
                  "linear-gradient(270deg,#8b00ff,#00eaff)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                padding: "3px",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor"
              }}
            />

            {/* Content */}
            <div className="rounded-2xl overflow-hidden shadow-[0_0_35px_rgba(0,255,255,0.15)] backdrop-blur-xl bg-[#0c1a23]">
              <ServiceCard {...service} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
