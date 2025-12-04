"use client";

import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhyCloudNexus } from "@/components/WhyCloudNexus";
import { Services } from "@/components/Services";
import { CaseStudy } from "@/components/CaseStudy";
import TrustedPartner from "@/components/TrustedPartner";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/TestimonialsAndFAQ";
import { Contact, Footer } from "@/components/ContactAndFooter";


export default function Index() {
  return (
    <main className="w-full overflow-hidden bg-black text-white">
      
      {/* 🌍 GLOBAL HEADER */}
      <Header />

      {/* 🚀 HERO SECTION */}
      <section id="home">
        <Hero />
      </section>

      {/* 🔥 WHAT WE DO */}
      <section id="what-we-do">
     
        <WhatWeDo />
      </section>

      {/* 💡 WHY CLOUD NEXUS */}
      <section id="why-cloud-nexus">
        <WhyCloudNexus />
      </section>

      {/* 🛠 SERVICES */}
      <section id="services">
        <Services />
      </section>

      {/* 📌 CASE STUDIES */}
      <section id="case-study">
        <CaseStudy />
      </section>

      {/* 🤝 TRUSTED PARTNER */}
      <section id="partners">
        <TrustedPartner />
      </section>

      {/* ⭐ CLIENT TESTIMONIALS */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* ❓ FAQ */}
      <section id="faq">
        <FAQ />
      </section>

      {/* 📬 CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      {/* 🔻 FOOTER */}
      <Footer />
    </main>
  );
}
