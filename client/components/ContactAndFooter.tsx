"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
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
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">CloudNexus</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering businesses with cutting-edge cloud solutions. From infrastructure to AI, we deliver scalable, secure, and innovative technology services.
            </p>
            <p className="text-cyan-400 font-semibold text-lg mb-4">
              Do it fast.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-[#0D1524]/50 flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-[#0D1524]/50 flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-[#0D1524]/50 flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Application Development</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Data Analytics</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">AI & Machine Learning</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Cybersecurity</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 CloudNexus. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
