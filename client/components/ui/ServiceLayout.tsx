// client/components/ui/ServiceLayout.tsx
"use client";

import { motion } from "framer-motion";
import type { ServiceData, ServiceMetric } from "@/lib/serviceData";

type Props = {
  service: ServiceData;
};

export default function ServiceLayout({ service }: Props) {
  const {
    name,
    heroTagline,
    heroSubheading,
    heroImage,
    accentFrom,
    accentTo,
    summaryBullets,
    highlightStat,
    metrics,
    pieLabel,
    piePrimary,
    pieSecondaryLabel,
    leadQuote,
    detailHeading,
    detailSubheading,
    detailImage
  } = service;

  const pieSecondary = 100 - piePrimary;

  const pieBackground = `conic-gradient(
    rgba(34,211,238,1) 0 ${piePrimary * 3.6}deg,
    rgba(15,23,42,1) ${piePrimary * 3.6}deg 360deg
  )`;

  const sectionFade = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={`${name} hero`}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/95" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl mx-auto px-6 py-24"
        >
          <p className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/20 bg-white/5 text-xs sm:text-sm text-cyan-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            CloudNexus • {name}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            <span
              className={`bg-gradient-to-r ${accentFrom} ${accentTo} bg-clip-text text-transparent`}
            >
              {heroTagline}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mb-8">
            {heroSubheading}
          </p>

          <div className="flex flex-wrap gap-4">
            {summaryBullets.map((item, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION – TEXT LEFT / IMAGE RIGHT */}
      <section className="py-20 px-6">
        <motion.div
          {...sectionFade}
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {detailHeading}
            </h2>
            <p className="text-gray-300 text-lg mb-6">{detailSubheading}</p>

            <p className="text-cyan-300 font-semibold mb-4">
              {highlightStat}
            </p>

            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              {summaryBullets.map((point, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-cyan-400/10 blur-3xl rounded-3xl" />
            <img
              src={detailImage}
              alt={`${name} detail`}
              className="relative rounded-3xl w-full h-[320px] object-cover border border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.25)]"
            />
          </div>
        </motion.div>
      </section>

      {/* ANALYTICS SECTION – BAR + PIE */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900/90">
        <motion.div
          {...sectionFade}
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12"
        >
          {/* Bar chart */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">Impact at a glance</h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Every engagement is tracked through measurable outcomes so you see
              how consistency and hard work show up in real numbers.
            </p>

            <div className="space-y-4">
              {metrics.map((m: ServiceMetric, idx: number) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                    <span className="text-gray-200">{m.label}</span>
                    <span className="text-cyan-300">{m.value}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500"
                      style={{ width: `${m.value}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1">{m.helper}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pie chart + quote */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center">
                <div
                  className="w-full h-full rounded-full border border-cyan-400/40 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                  style={{ backgroundImage: pieBackground }}
                />
                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-950 flex flex-col items-center justify-center">
                  <p className="text-cyan-300 text-lg font-bold">
                    {piePrimary}%
                  </p>
                  <p className="text-[10px] text-gray-400 text-center">
                    {pieLabel}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm sm:text-base">
                <p className="flex items-center gap-2 text-gray-200">
                  <span className="h-3 w-3 rounded-full bg-cyan-400" />
                  <span>{pieLabel}</span>
                </p>
                <p className="flex items-center gap-2 text-gray-400">
                  <span className="h-3 w-3 rounded-full bg-slate-700" />
                  <span>{pieSecondaryLabel}</span>
                </p>
                <p className="text-xs text-gray-500">
                  Percentages are illustrative and depend on your current
                  landscape — we use your data to calibrate real baselines.
                </p>
              </div>
            </div>

            {/* Founder quote */}
            <div className="border border-white/10 rounded-2xl bg-slate-900/60 p-6 backdrop-blur">
              <p className="text-sm sm:text-base text-gray-200 italic mb-3">
                “{leadQuote.quote}”
              </p>
              <p className="text-sm font-semibold text-cyan-300">
                {leadQuote.name}
              </p>
              <p className="text-xs text-gray-400">{leadQuote.role}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-black">
        <motion.div
          {...sectionFade}
          className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 border border-cyan-500/30 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-slate-900 to-sky-500/10 px-8 py-10"
        >
          <div>
            <p className="text-sm text-cyan-300 mb-1">Next step</p>
            <h3 className="text-2xl font-semibold mb-2">
              Ready to explore {name} for your team?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Share a little about your environment and we’ll co-design a
              roadmap that balances ambition with reliability.
            </p>
          </div>
          <button className="px-8 py-3 rounded-2xl bg-white text-black font-semibold shadow-lg hover:scale-105 transition">
            Talk to our experts
          </button>
        </motion.div>
      </section>
    </div>
  );
}
