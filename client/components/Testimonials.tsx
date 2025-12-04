"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Their team is responsive, skilled, and truly committed to helping us grow.",
    rating: 5,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    companyLogo: "/logos/tdb.png",
    image: "/image/testimonial-team.jpeg",
  },
  {
    id: 2,
    text: "CloudNexus understood our needs clearly and delivered a solution that exceeded expectations.",
    rating: 5,
    name: "Michael Rodriguez",
    role: "VP of Operations",
    company: "GlobalTech Corp",
    companyLogo: "/logos/ite.png",
    image: "/image/testimonial-work.jpeg",
  },
  {
    id: 3,
    text: "Their attention to detail and commitment to quality made a big difference in our business.",
    rating: 5,
    name: "Emily Watson",
    role: "CEO",
    company: "InnovateLabs",
    companyLogo: "/logos/nec.png",
    image: "/image/testimonial-id.jpeg",
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-[#0c0f22] relative overflow-hidden">
      
      {/* Ambient Lighting */}
      <motion.div className="absolute top-20 left-40 w-96 h-96 bg-[#00E5FF]/25 blur-[180px] rounded-full" />
      <motion.div className="absolute bottom-20 right-40 w-[420px] h-[420px] bg-[#FF00D4]/25 blur-[220px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            What <span className="text-cyan-400">Clients</span> Say
          </h2>
          <p className="text-gray-400 mt-3">
            Real feedback from businesses growing through CloudNexus
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl bg-[#111827]/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.12)] hover:-translate-y-2 transition-all duration-500">

                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-cyan-400/30 mb-4" />

                {/* Image */}
                <motion.img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-40 object-cover rounded-xl shadow-lg mb-5"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyan-400 fill-cyan-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 text-[1rem] leading-relaxed mb-6">
                  “{t.text}”
                </p>

                {/* Footer */}
                <div className="mt-auto">
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <div className="flex items-center gap-2 mt-1 text-gray-400 text-sm">
                    {t.role}
                    <img src={t.companyLogo} className="w-5 opacity-70" />
                  </div>
                </div>
              </div>

              {/* Neon Hover Glow */}
              <motion.div className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
