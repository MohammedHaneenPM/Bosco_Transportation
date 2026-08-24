import type { Metadata } from "next";
import Link from "next/link";
import {
  Truck,
  Boxes,
  Clock,
  MapPin,
  Cpu,
  ShieldAlert,
  Layers,
  Package,
  Users,
  Zap,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { CORE_SERVICES, ADDITIONAL_CAPABILITIES } from "@/data/services";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Transportation & Freight Services | Bosco Transport Inc. Ontario",
  description:
    "Explore Bosco Transport Inc.'s comprehensive freight carrier services across Ontario & GTA: FTL, LTL, dedicated transportation, city deliveries, power-only, and high-value freight.",
};

const iconMap: Record<string, any> = {
  ftl: Truck,
  ltl: Boxes,
  dedicated: Clock,
  "gta-city": MapPin,
  "power-only": Cpu,
  specialized: ShieldAlert,
  "straight-truck": Truck,
  tailgate: Layers,
  "dry-van": Package,
  "hand-bombing": Users,
  "pickup-delivery": Clock,
  "time-sensitive": Zap,
  "broker-3pl": Briefcase,
};

export default function ServicesPage() {
  return (
    <main className="flex-1 pt-24 bg-[#0B0D0F]">
      {/* Hero Section */}
      <section className="py-20 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionLabel>OUR SERVICES & CAPABILITIES</SectionLabel>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-grotesk tracking-tight leading-[1.1] mb-6 max-w-3xl">
            COMPREHENSIVE FREIGHT <br />
            <span className="text-[#FF5722]">TRANSPORTATION SOLUTIONS.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#85898C] max-w-2xl leading-relaxed">
            From scheduled full truckload routes to specialized electronics and city delivery operations, Bosco Transport Inc. delivers dependable carrier services tailored to your exact freight specifications.
          </p>
        </div>
      </section>

      {/* Core Services Detailed Breakdown */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <SectionLabel>PRIMARY CARRIER SERVICES</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-grotesk tracking-tight uppercase">
              Core Freight Operations
            </h2>
          </div>

          <div className="space-y-12">
            {CORE_SERVICES.map((service, index) => {
              const Icon = iconMap[service.id] || Truck;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-[#14171A] border border-white/10 p-8 sm:p-10 scroll-mt-28 hover:border-[#FF5722]/50 transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Col: Header & Description */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[#FF5722] font-bold px-2 py-1 bg-[#FF5722]/10 border border-[#FF5722]/30">
                          SERVICE {service.number}
                        </span>
                        <div className="w-8 h-8 bg-[#1B1F23] border border-white/10 text-[#FF5722] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white font-grotesk uppercase tracking-wide">
                        {service.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[#85898C] leading-relaxed">
                        {service.fullDesc}
                      </p>
                    </div>

                    {/* Right Col: Capabilities Checklist */}
                    <div className="lg:col-span-5 bg-[#0B0D0F] border border-white/10 p-6">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF5722] mb-4">
                        Key Capabilities
                      </h4>
                      <ul className="space-y-3">
                        {service.highlights.map((item, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2.5 text-xs text-white/90 font-mono"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Specialized Capabilities */}
      <section className="py-24 bg-[#080A0C] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <SectionLabel>FLEET & OPERATIONAL VERSATILITY</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-grotesk tracking-tight uppercase">
              Additional Capabilities
            </h2>
            <p className="text-sm text-[#85898C] mt-2">
              Flexible options supporting specialized handling, site access restrictions, and broker partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDITIONAL_CAPABILITIES.map((cap) => {
              const Icon = iconMap[cap.id] || Truck;
              return (
                <div
                  key={cap.id}
                  className="bg-[#14171A] border border-white/10 p-6 flex flex-col justify-between hover:border-white/30 transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 bg-[#1B1F23] border border-white/10 text-[#FF5722] flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#85898C] block mb-1">
                      CAPABILITY #{cap.number}
                    </span>
                    <h3 className="text-base font-bold text-white font-grotesk uppercase mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-[#85898C] leading-relaxed mb-4">
                      {cap.shortDesc}
                    </p>
                  </div>

                  <ul className="pt-4 border-t border-white/5 space-y-1.5 text-[11px] font-mono text-white/80">
                    {cap.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF5722]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* High-Value Feature Highlight */}
      <section className="py-24 bg-[#F3F1EC] text-[#0F1316]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <SectionLabel lightMode>SPECIALIZED CARGO PROTOCOL</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1316] font-grotesk uppercase tracking-tight mb-4">
                High-Value & Sensitive Electronics Freight
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-6">
                For electronics and other high-value freight, Bosco Transport emphasizes cargo security, controlled handling and shipment visibility throughout the transportation process. GPS and camera-monitored equipment provide an additional level of operational oversight.
              </p>
              <div className="p-4 bg-white border border-[#0F1316]/10 text-xs font-mono text-[#0F1316]">
                Operational experience including transportation support for high-value commercial electronics with live tracking availability.
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "GPS-monitored trucks & equipment",
                "Camera-equipped vehicles",
                "Continuous transit monitoring",
                "Customer live-tracking availability",
                "Controlled pickup & delivery procedures",
                "Strict proof-of-delivery documentation",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border border-[#0F1316]/10 flex items-center gap-3 text-xs font-mono text-[#0F1316]"
                >
                  <ShieldCheck className="w-4 h-4 text-[#FF5722] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="py-20 bg-[#0B0D0F] border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-grotesk uppercase mb-4">
            Request Freight Pricing for Your Load
          </h2>
          <p className="text-sm sm:text-base text-[#85898C] mb-8 max-w-xl mx-auto">
            Get in touch with our Ontario dispatch team for rates, equipment availability, and scheduling.
          </p>
          <Link
            href="/#quote"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#FF5722] hover:bg-[#E64A19] text-white text-xs font-mono uppercase tracking-wider font-bold transition-colors shadow-lg"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
