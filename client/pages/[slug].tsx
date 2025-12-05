"use client";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import { Footer } from "@/components/ContactAndFooter";
import ServiceLayout from "@/components/ui/ServiceLayout";
import { services, ServiceSlug } from "@/lib/serviceData";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug) return null;

  const key = slug as ServiceSlug;
  const service = services[key];

  if (!service) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-300">Service not found.</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <ServiceLayout service={service} />
      <Footer />
    </main>
  );
}
