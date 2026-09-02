import Hero from "@/components/home/Hero";
import Metrics from "@/components/home/Metrics";
import WhatWeDo from "@/components/home/WhatWeDo";
import Equipment from "@/components/home/Equipment";
import HowWeDiffer from "@/components/home/HowWeDiffer";
import HighValue from "@/components/home/HighValue";
import WhyBosco from "@/components/home/WhyBosco";
import Safety from "@/components/home/Safety";
import QuoteCTA from "@/components/home/QuoteCTA";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Metrics />
      <WhatWeDo />
      <Equipment />
      <HowWeDiffer />
      <HighValue />
      <WhyBosco />
      <Safety />
      <QuoteCTA />
    </main>
  );
}
