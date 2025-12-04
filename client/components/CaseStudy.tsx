// // "use client";
// // import { useCallback, useEffect, useRef } from "react";
// // import useEmblaCarousel from "embla-carousel-react";
// // import Autoplay from "embla-carousel-autoplay";
// // import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// // import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// // // CASE STUDY DATA
// // const caseStudies = [
// //   {
// //     title: "Smart Healthcare Platform powered by AI & IoT",
// //     emoji: "🏥",
// //     tag: "Healthcare",
// //     description:
// //       "We helped a leading healthcare provider build an intelligent platform that leverages AI and IoT to improve patient outcomes, streamline operations, and reduce costs.",
// //     points: [
// //       {
// //         title: "Real-time Patient Monitoring",
// //         text: "Continuous monitoring with AI-powered alerts for critical conditions",
// //       },
// //       {
// //         title: "Predictive Analytics",
// //         text: "Advanced analytics to predict patient outcomes and optimize care",
// //       },
// //       {
// //         title: "Operational Efficiency",
// //         text: "Automated workflows and resource optimization reducing costs by 30%",
// //       },
// //     ],
// //     gradient:
// //       "from-cn-blue via-cyan-400 via-cn-teal to-cn-purple",
// //   },
// //   {
// //     title: "FinTech Fraud Detection System",
// //     emoji: "💳",
// //     tag: "FinTech",
// //     description:
// //       "AI-powered fraud detection engine that scans millions of transactions per second with adaptive learning capabilities.",
// //     points: [
// //       {
// //         title: "AI Fraud Scoring",
// //         text: "Analyzes risk across hundreds of parameters in real-time",
// //       },
// //       {
// //         title: "Automated Alerts",
// //         text: "Smart alerting system reduces false positives by 45%",
// //       },
// //       {
// //         title: "End-to-End Security",
// //         text: "Built with advanced encryption & compliance",
// //       },
// //     ],
// //     gradient:
// //       "from-purple-500 via-fuchsia-400 via-blue-400 to-blue-600",
// //   },
// //   {
// //     title: "AI Retail Demand Forecasting System",
// //     emoji: "🛍️",
// //     tag: "Retail",
// //     description:
// //       "A demand forecasting engine that predicts inventory needs using machine learning and seasonal analytics.",
// //     points: [
// //       {
// //         title: "Demand Prediction",
// //         text: "92% accurate forecasting using ML models",
// //       },
// //       {
// //         title: "Supply Optimization",
// //         text: "Optimized stock reduces wastage by 38%",
// //       },
// //       {
// //         title: "Insights Dashboard",
// //         text: "Interactive analytics to visualize trends",
// //       },
// //     ],
// //     gradient:
// //       "from-orange-400 via-yellow-400 via-pink-300 to-red-400",
// //   },
// // ];

// // export const CaseStudy = () => {
// //   const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));

// //   // Slider initialization
// //   const [emblaRef, embla] = useEmblaCarousel(
// //     { loop: true, align: "start" },
// //     [autoplay.current]
// //   );

// //   const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
// //   const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

// //   const { ref: scrollRef, isVisible } = useScrollAnimation({
// //     triggerOnce: true,
// //     threshold: 0.2,
// //   });

// //   return (
// //     <section
// //       ref={scrollRef}
// //       className="py-24 px-6 bg-gradient-to-b from-[#F9FBFF] via-[#A7E9FF]/20 to-[#D6F4FE]/30 relative overflow-hidden"
// //     >
// //       <div className="max-w-6xl mx-auto relative z-10">

// //         {/* HEADER */}
// //         <div
// //           className={`text-center mb-16 transition-all duration-700 ${
// //             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
// //           }`}
// //         >
// //           <h2 className="text-5xl font-extrabold text-cn-dark tracking-tight mb-4">
// //             Case Studies
// //           </h2>
// //           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
// //             Explore how CloudNexus transforms businesses with cutting-edge technology.
// //           </p>
// //         </div>

// //         {/* Slider Container */}
// //         <div className="relative">
// //           {/* Embla Viewport */}
// //           <div className="overflow-hidden" ref={emblaRef}>
// //             <div className="flex">

// //               {caseStudies.map((caseStudy, index) => (
// //                 <div
// //                   key={index}
// //                   className="flex-[0_0_100%] px-4"
// //                 >
// //                   <div className="grid lg:grid-cols-2 gap-12 items-center">

// //                     {/* LEFT SIDE – image card */}
// //                     <div
// //                       className={`transition-all duration-800 ${
// //                         isVisible
// //                           ? "opacity-100 translate-x-0"
// //                           : "opacity-0 -translate-x-10"
// //                       }`}
// //                     >
// //                       <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
// //                         <div
// //                           className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient} opacity-90`}
// //                         ></div>

// //                         {/* Grid Overlay */}
// //                         <div className="absolute inset-0 opacity-30">
// //                           <div
// //                             className="h-full w-full"
// //                             style={{
// //                               backgroundImage:
// //                                 "linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)",
// //                               backgroundSize: "40px 40px",
// //                             }}
// //                           ></div>
// //                         </div>

// //                         {/* Emoji */}
// //                         <div className="absolute inset-0 flex items-center justify-center">
// //                           <div className="text-white text-center z-10">
// //                             <div className="text-7xl mb-2">
// //                               {caseStudy.emoji}
// //                             </div>
// //                             <p className="text-2xl font-semibold">
// //                               {caseStudy.tag}
// //                             </p>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     {/* RIGHT SIDE – details */}
// //                     <div
// //                       className={`transition-all duration-800 ${
// //                         isVisible
// //                           ? "opacity-100 translate-x-0"
// //                           : "opacity-0 translate-x-10"
// //                       }`}
// //                     >
// //                       <div className="inline-block px-4 py-2 rounded-full bg-cn-blue/10 text-cn-blue text-sm font-semibold mb-4">
// //                         CASE STUDY
// //                       </div>

// //                       <h2 className="text-4xl font-bold text-cn-dark mb-6">
// //                         {caseStudy.title}
// //                       </h2>

// //                       <p className="text-lg text-gray-600 mb-8 leading-relaxed">
// //                         {caseStudy.description}
// //                       </p>

// //                       <div className="space-y-4 mb-8">
// //                         {caseStudy.points.map((point, i) => (
// //                           <div key={i} className="flex items-start gap-4">
// //                             <div className="flex-shrink-0 pt-1">
// //                               <div className="flex items-center justify-center h-6 w-6 rounded-full bg-cn-blue/20 text-cn-blue">
// //                                 ✓
// //                               </div>
// //                             </div>
// //                             <div>
// //                               <h4 className="font-semibold text-cn-dark mb-1">
// //                                 {point.title}
// //                               </h4>
// //                               <p className="text-gray-600">{point.text}</p>
// //                             </div>
// //                           </div>
// //                         ))}
// //                       </div>

// //                       <button className="flex items-center gap-2 px-8 py-3 bg-cn-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300">
// //                         View Case Study
// //                         <ArrowRight className="w-5 h-5" />
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}

// //             </div>
// //           </div>

// //           {/* NAV BUTTONS */}
// //           <button
// //             onClick={scrollPrev}
// //             className="absolute top-1/2 left-0 -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-3 rounded-full"
// //           >
// //             <ChevronLeft className="w-6 h-6 text-cn-dark" />
// //           </button>

// //           <button
// //             onClick={scrollNext}
// //             className="absolute top-1/2 right-0 -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-3 rounded-full"
// //           >
// //             <ChevronRight className="w-6 h-6 text-cn-dark" />
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };


// "use client";
// import { useCallback, useEffect, useRef } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// // UPDATED IMAGE DATA
// const caseStudies = [
//   {
//     image: "/image/health.jpeg",
//     title: "Smart Healthcare Platform powered by AI & IoT",
//     tag: "Healthcare",
//     description:
//       "We helped a leading healthcare provider build an intelligent platform leveraging AI & IoT to improve care outcomes and operational efficiency.",
//     points: [
//       { title: "Real-time Monitoring", text: "AI-powered alerts for patient safety" },
//       { title: "Predictive Analytics", text: "Forecasted outcomes with ML models" },
//       { title: "Automation", text: "Enabled 30% operational efficiency" },
//     ],
//     // gradient: "from-cn-blue via-cyan-400 via-cn-teal to-cn-purple",
//   },
//   {
//     image: "/image/fintech.png",
//     title: "FinTech Fraud Detection System",
//     tag: "FinTech",
//     description:
//       "AI-driven fraud detection engine scanning millions of transactions in real-time with adaptive learning.",
//     points: [
//       { title: "AI Fraud Scoring", text: "Risk analysis using AI pattern tracking" },
//       { title: "Smart Alerts", text: "Reduced false positives up to 45%" },
//       { title: "Compliance Ready", text: "Secure platform with encryption and ISO standards" },
//     ],
//     // gradient: "from-purple-500 via-fuchsia-400 via-blue-400 to-blue-600",
//   },
//   {
//     image: "/image/retail.webp",
//     title: "AI Retail Demand Forecasting System",
//     tag: "Retail",
//     description:
//       "Demand forecasting engine predicting inventory needs using ML and seasonal analytics.",
//     points: [
//       { title: "92% Accuracy", text: "Forecast based on historical data + ML" },
//       { title: "Stock Optimization", text: "Minimized loss by 38%" },
//       { title: "Insights Dashboard", text: "Interactive data visualization" },
//     ],
//     // gradient: "from-orange-400 via-yellow-400 via-pink-300 to-red-400",
//   },
// ];

// export const CaseStudy = () => {
//   const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));
//   const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [autoplay.current]);

//   const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
//   const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

//   const { ref: scrollRef, isVisible } = useScrollAnimation({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   return (
//     <section
//       ref={scrollRef}
//       className="py-24 px-6 bg-gradient-to-b from-[#F9FBFF] via-[#A7E9FF]/20 to-[#D6F4FE]/30 relative overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto relative z-10">

//         {/* HEADER */}
//         <div
//           className={`text-center mb-16 transition-all duration-700 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <h2 className="text-5xl font-extrabold text-cn-dark tracking-tight mb-4">
//             Record History
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Real transformation stories powered by CloudNexus.
//           </p>
//         </div>

//         {/* Slider */}
//         <div className="relative">
//           <div className="overflow-hidden" ref={emblaRef}>
//             <div className="flex">

//               {caseStudies.map((caseStudy, index) => (
//                 <div key={index} className="flex-[0_0_100%] px-4">
//                   <div className="grid lg:grid-cols-2 gap-12 items-center">

//                     {/* LEFT IMAGE CARD */}
//                     <div
//                       className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl group transition-all duration-700 ${
//                         isVisible
//                           ? "opacity-100 translate-y-0"
//                           : "opacity-0 translate-y-10"
//                       }`}
//                     >
//                       <img
//                         src={caseStudy.image}
//                         alt={caseStudy.title}
//                         className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-700"
//                       />

//                       {/* Gradient Overlay */}
//                       <div
//                         className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient} opacity-60 group-hover:opacity-80 transition-all duration-500`}
//                       ></div>

//                       {/* Tag */}
//                       <div className="absolute bottom-6 left-6 text-white text-lg font-semibold bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
//                         {caseStudy.tag}
//                       </div>
//                     </div>

//                     {/* RIGHT CONTENT */}
//                     <div className="transition-all duration-700">
//                       <div className="inline-block px-4 py-2 rounded-full bg-cn-blue/10 text-cn-blue text-sm font-semibold mb-4">
//                         CASE STUDY
//                       </div>

//                       <h2 className="text-4xl font-bold text-cn-dark mb-6">
//                         {caseStudy.title}
//                       </h2>

//                       <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                         {caseStudy.description}
//                       </p>

//                       <div className="space-y-4 mb-8">
//                         {caseStudy.points.map((point, i) => (
//                           <div key={i} className="flex gap-4">
//                             <div className="h-6 w-6 rounded-full bg-cn-blue/20 text-cn-blue flex items-center justify-center font-bold">
//                               ✓
//                             </div>
//                             <div>
//                               <h4 className="font-semibold text-cn-dark">
//                                 {point.title}
//                               </h4>
//                               <p className="text-gray-600">{point.text}</p>
//                             </div>
//                           </div>
//                         ))}
//                       </div>

//                       <button className="flex items-center gap-2 px-8 py-3 bg-cn-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-all">
//                         View Case Study <ArrowRight className="w-5 h-5" />
//                       </button>
//                     </div>

//                   </div>
//                 </div>
//               ))}

//             </div>
//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={scrollPrev}
//             className="absolute top-1/2 left-0 -translate-y-1/2 bg-white shadow-xl p-3 rounded-full hover:scale-105 transition"
//           >
//             <ChevronLeft />
//           </button>

//           <button
//             onClick={scrollNext}
//             className="absolute top-1/2 right-0 -translate-y-1/2 bg-white shadow-xl p-3 rounded-full hover:scale-105 transition"
//           >
//             <ChevronRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };


"use client";
import { useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const caseStudies = [
  {
    image: "/image/smart.jpeg",
    title: "Smart Healthcare Platform powered by AI & IoT",
    tag: "Healthcare",
    description:
      "We helped a leading healthcare provider build an intelligent platform leveraging AI & IoT to improve care outcomes and operational efficiency.",
    points: [
      { title: "Real-time Monitoring", text: "AI-powered alerts for patient safety" },
      { title: "Predictive Analytics", text: "Forecasted outcomes with ML models" },
      { title: "Automation", text: "Enabled 30% operational efficiency" },
    ],
  },
  {
    image: "/image/fintechh.jpeg",
    title: "FinTech Fraud Detection System",
    tag: "FinTech",
    description:
      "AI-driven fraud detection engine scanning millions of transactions in real time with adaptive learning.",
    points: [
      { title: "AI Fraud Scoring", text: "Pattern recognition risk scoring" },
      { title: "Smart Alerts", text: "Reduced false positives by 45%" },
      { title: "Compliance Ready", text: "ISO, GDPR & secure encryption" },
    ],
  },
  {
    image: "/image/retaill.jpeg",
    title: "AI Retail Demand Forecasting System",
    tag: "Retail",
    description:
      "Demand forecasting engine predicting inventory needs using ML and seasonal analytics.",
    points: [
      { title: "92% Accuracy", text: "ML-based demand forecasting" },
      { title: "Stock Optimization", text: "Reduced wastage by 38%" },
      { title: "Insights Dashboard", text: "Real-time analytics + visualization" },
    ],
  },
];

export const CaseStudy = () => {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));

  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [autoplay.current]);
  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <section id="our-work" className="py-24 px-6 bg-gradient-to-b from-[#07131A] via-[#0A1D26] to-[#002129] relative overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-40 w-96 h-96 bg-[#00E5FF]/30 blur-[200px] rounded-full"></div>
      <div className="absolute bottom-20 right-40 w-[420px] h-[420px] bg-[#FF00D4]/20 blur-[260px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Our <span className="text-cyan-400">Work</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-3">
            Real transformation stories powered by CloudNexus.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">

              {caseStudies.map((caseStudy, index) => (
                <div key={index} className="flex-[0_0_100%] px-6">
                  <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* Image */}
                    <div className="relative h-96 rounded-2xl overflow-hidden group shadow-[0_0_30px_rgba(0,255,255,0.15)]">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100 brightness-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#00000080] to-transparent"></div>

                      <div className="absolute bottom-6 left-6 text-white text-lg font-semibold bg-black/40 px-4 py-2 rounded-full backdrop-blur-lg">
                        {caseStudy.tag}
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-5">
                        {caseStudy.title}
                      </h3>

                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {caseStudy.description}
                      </p>

                      <div className="space-y-4 mb-10">
                        {caseStudy.points.map((point, i) => (
                          <div key={i} className="flex gap-4">
                            <div className="h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm">
                              ✓
                            </div>
                            <div>
                              <h4 className="font-semibold text-white">{point.title}</h4>
                              <p className="text-gray-400">{point.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <button className="flex items-center gap-2 px-8 py-3 bg-cyan-500/30 text-white font-semibold rounded-lg border border-cyan-400/30 hover:bg-cyan-400 hover:text-black transition-all duration-300">
                        View Our Work <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#0f182a] border border-white/10 rounded-full p-3 hover:scale-110 transition-all text-white shadow-lg"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#0f182a] border border-white/10 rounded-full p-3 hover:scale-110 transition-all text-white shadow-lg"
          >
            <ChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
};
