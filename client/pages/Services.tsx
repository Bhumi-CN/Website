"use client";

import Header from "@/components/Header";
import { Services } from "@/components/Services";
import { Footer } from "@/components/ContactAndFooter";

export default function ServicesPage() {
  return (
    <main className="w-full overflow-hidden bg-black text-white">
      <Header />
      <section id="services" className="py-24 px-6 lg:px-14 bg-[#0c0f22] relative overflow-hidden">
        <Services />
      </section>
      <Footer />
    </main>
  );
}
