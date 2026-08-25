import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Metrics from "@/components/home/Metrics";
import WhatWeDo from "@/components/home/WhatWeDo";
import Equipment from "@/components/home/Equipment";
import HighValue from "@/components/home/HighValue";
import WhyBosco from "@/components/home/WhyBosco";
import Safety from "@/components/home/Safety";
import QuoteCTA from "@/components/home/QuoteCTA";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Metrics />
      <WhatWeDo />
      <Equipment />
      <HighValue />
      <WhyBosco />
      <Safety />
      <QuoteCTA />
    </main>
  );
}
