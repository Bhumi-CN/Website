"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 bg-gradient-to-b from-[#07131A] via-[#0A1D26] to-[#002129] overflow-hidden"
    >
      {/* Ambient Glow */}
      <motion.div className="absolute top-16 left-36 w-[320px] h-[320px] bg-[#00E5FF]/20 blur-[200px] rounded-full" />
      <motion.div className="absolute bottom-12 right-28 w-[380px] h-[380px] bg-[#FF00D4]/25 blur-[240px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl font-bold text-white">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-3">
            Have a project in mind? We’re here to help turn ideas into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-14">
          {/* Contact Info */}
          <div className="space-y-10">
            {[
              { icon: Mail, label: "Email", value: "contact@cloudnexus.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
              {
                icon: MapPin,
                label: "Office",
                value: "123 Tech Street, San Francisco, CA",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 opacity-0 transition-all duration-700 ${
                  isVisible && "opacity-100 translate-x-0"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-400/15 flex items-center justify-center text-cyan-400">
                  <item.icon />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{item.label}</h3>
                  <p className="text-gray-300">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form className="lg:col-span-2 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {["name", "email"].map((field) => (
                <div key={field}>
                  <label className="text-gray-200 text-sm font-semibold block mb-2">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    required
                    type={field === "email" ? "email" : "text"}
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#0D1524]/70 backdrop-blur-md border border-white/10 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all"
                    placeholder={`Enter your ${field}`}
                  />
                </div>
              ))}
            </div>

            {/* Phone */}
            <div>
              <label className="text-gray-200 text-sm font-semibold block mb-2">
                Phone
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-[#0D1524]/70 border border-white/10 text-gray-100 focus:ring-2 focus:ring-cyan-400 transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-200 text-sm font-semibold block mb-2">
                Message
              </label>
              <textarea
                rows={5}
                required
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-[#0D1524]/70 border border-white/10 text-gray-100 focus:ring-2 focus:ring-cyan-400 resize-none transition-all"
              />
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-cyan-400 to-purple-500 hover:shadow-[0_0_45px_rgba(0,255,255,0.4)] text-white rounded-xl font-semibold transition-all hover:scale-[1.02]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true });

  return (
    <footer
      ref={ref}
      className="relative py-16 px-6 bg-[#07131A] border-t border-white/5 overflow-hidden"
    >
      {/* Ambient Glow */}
      <motion.div className="absolute top-8 left-1/4 w-[200px] h-[200px] bg-[#00E5FF]/10 blur-[150px] rounded-full" />
      <motion.div className="absolute bottom-8 right-1/4 w-[250px] h-[250px] bg-[#FF00D4]/10 blur-[180px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* GRID SECTION (Logo + 3 Columns) */}
        <div className="grid md:grid-cols-4 gap-14 mb-14">

          {/* LEFT — Logo + Text Bar */}
          <div className="bg-[#0D1524]/40 p-6 rounded-2xl border border-white/5">
            <h3 className="text-3xl font-bold text-white tracking-wide">
              Cloud<span className="text-cyan-400">Nexus</span>
            </h3>
            <p className="text-gray-400 mt-2 mb-6 max-w-sm">
              Empowering businesses with modern, scalable cloud & AI innovation.
            </p>

            {/* Message Bar */}
            <div className="flex items-center bg-[#0D1524]/80 backdrop-blur-md border border-white/20 rounded-2xl p-2 shadow-lg hover:shadow-xl transition-all duration-300">
              <input
                type="text"
                placeholder="Share your business problem..."
                className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-400 px-5 py-3 text-sm focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400/70 rounded-xl transition-all duration-300 focus:bg-[#0D1524]/50"
              />
              <button className="w-16 h-14 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-110 active:scale-95 ml-2">
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4 uppercase tracking-wide">
              Solutions
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/services" className="hover:text-cyan-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/payments" className="hover:text-cyan-400 transition">
                  Payments
                </a>
              </li>
            </ul>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4 uppercase tracking-wide">
              Explore
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/case-studies" className="hover:text-cyan-400 transition">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/service-catalog" className="hover:text-cyan-400 transition">
                  Service Catalog
                </a>
              </li>
            </ul>
          </div>

          {/* ABOUT US */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4 uppercase tracking-wide">
              About Us
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/company" className="hover:text-cyan-400 transition">
                  Company
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-cyan-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-cyan-400 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SOCIAL + COPYRIGHT ROW */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* LEFT COPYRIGHT */}
          <p className="text-gray-400 text-sm">
            © CloudNexus 2025 | All Rights Reserved
          </p>

          {/* RIGHT SOCIAL ICONS */}
          <div className="flex items-center gap-5">
            <a className="text-white hover:text-cyan-400 transition cursor-pointer" href="https://www.linkedin.com/company/cloudnexusorg/">
              <Linkedin className="w-6 h-6" />
            </a>
            <a className="text-white hover:text-cyan-400 transition cursor-pointer" href="https://www.instagram.com/cloudnexus.in?igsh=MXd3NW9mYm90NHMxNQ==">
              <Instagram className="w-6 h-6" />
            </a>
            <a className="text-white hover:text-cyan-400 transition cursor-pointer">
              <Youtube className="w-6 h-6" />
            </a>
            <a className="text-white hover:text-cyan-400 transition cursor-pointer">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* SCROLL TO TOP BUTTON */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

