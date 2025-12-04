"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ===========================
   DATA
=========================== */

const testimonials = [
  {
    image: "/image/testimonial1.jpeg",
    quote:
      "Transforming our business with CloudNexus has been game-changing — their execution and vision exceeded expectations.",
    author: "Sarah Chen",
    title: "CTO",
    company: "TechCorp Inc",
    avatar: "👩‍💼",
  },
  {
    image: "/image/testimonial2.jpeg",
    quote:
      "Their architecture expertise helped us scale faster and smarter with minimal downtime. Highly reliable team.",
    author: "John Smith",
    title: "VP Operations",
    company: "Global Solutions Ltd",
    avatar: "👨‍💼",
  },
  {
    image: "/image/testimonial3.jpeg",
    quote:
      "From planning to deployment, the process was seamless. CloudNexus is a partner — not just a vendor.",
    author: "Maria Garcia",
    title: "Chief Innovation Officer",
    company: "Enterprise Systems",
    avatar: "👩‍💻",
  },
];

const faqs = [
  {
    question: "What services does CloudNexus offer?",
    answer: "CloudNexus provides comprehensive cloud solutions including infrastructure setup, application development, data analytics, AI integration, IoT solutions, and cybersecurity services tailored to your business needs.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. Simple implementations can take 2-4 weeks, while complex enterprise solutions may span 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer: "Yes, we offer comprehensive post-deployment support including monitoring, maintenance, updates, and 24/7 technical assistance to ensure your systems run smoothly.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We work across various industries including retail, fintech, healthcare, manufacturing, and enterprise systems. Our solutions are customized to meet industry-specific requirements and compliance standards.",
  },
  {
    question: "How do you ensure data security?",
    answer: "Security is our top priority. We implement industry-standard encryption, access controls, regular security audits, and compliance with frameworks like SOC 2, GDPR, and HIPAA depending on your needs.",
  },
];

// /* ===========================
//    TESTIMONIALS SECTION (Dark)
// =========================== */
// export const Testimonials = () => {
//   const { ref, isVisible } = useScrollAnimation({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section
//       ref={ref}
//       className="py-24 px-6 bg-gradient-to-b from-[#07131A] via-[#0A1D26] to-[#002129] relative overflow-hidden"
//     >
//       {/* Ambient Glow */}
//       <motion.div className="absolute top-24 left-36 w-[350px] h-[350px] bg-[#00E5FF]/20 blur-[180px] rounded-full" />
//       <motion.div className="absolute bottom-16 right-36 w-[400px] h-[400px] bg-[#FF00D4]/20 blur-[240px] rounded-full" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold text-white">
//             What Our <span className="text-cyan-400">Clients Say</span>
//           </h2>
//           <p className="text-gray-400 mt-3">
//             Real voices from businesses scaling with CloudNexus.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {testimonials.map((t, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: index * 0.1 }}
//               className="relative group"
//             >
//               <div className="p-8 rounded-2xl bg-[#0D1524]/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.12)] hover:-translate-y-2 transition-all duration-500">
                
//                 <div className="text-6xl opacity-20 group-hover:opacity-40 transition">
//                   “
//                 </div>

//                 <p className="text-gray-300 mb-6 leading-relaxed"> 
//                   {t.quote}
//                 </p>

//                 <div className="flex items-center gap-4 pt-6 border-t border-white/10">
//                   <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center text-2xl shadow-lg">
//                     {t.avatar}
//                   </div>
//                   <div>
//                     <h4 className="text-white font-semibold">{t.author}</h4>
//                     <p className="text-sm text-gray-400">
//                       {t.title} — {t.company}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <motion.div className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

/* ===========================
   FAQ CARD
=========================== */
const FAQItem = ({ question, answer, index, isVisible }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      <div className="relative group rounded-2xl border border-white/10 bg-[#0D1524]/60 backdrop-blur-xl shadow-[0_0_20px_rgba(0,255,255,0.08)] hover:border-cyan-400/40 transition-all overflow-hidden">

        {/* Button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full py-6 px-6 flex justify-between items-center"
        >
          <h3 className="text-lg font-semibold text-white">
            {question}
          </h3>

          <motion.div animate={{ rotate: open ? 180 : 0 }}>
            <ChevronDown className="text-cyan-400" />
          </motion.div>
        </button>

        {/* Answer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="px-6 pb-6 pt-2 text-gray-300 leading-relaxed"
            >
              {answer}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

/* ===========================
   FAQ SECTION (Dark Theme)
=========================== */
export const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="py-24 px-6 bg-gradient-to-b from-[#002129] via-[#07131A] to-[#0A1D26]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            FAQ
          </h2>
          <p className="text-gray-400 mt-3">
            Answers to the most common questions.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};
