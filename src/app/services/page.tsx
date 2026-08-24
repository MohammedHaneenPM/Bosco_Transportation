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

const serviceImageMap: Record<string, string> = {
  ftl: "/images/1. FTL.webp",
  ltl: "/images/2. LTL.webp",
  dedicated: "/images/3. Dedicated.webp",
  "gta-city": "/images/4. GTA.webp",
  "power-only": "/images/5. power.webp",
  specialized: "/images/6. specialised.webp",
};

export default function ServicesPage() {
  return (
    <main className="flex-1 bg-[#FEFEFE] pt-20 lg:pt-24">
      {/* 1. Split Hero Section */}
      <section className="relative overflow-hidden border-b border-[#DDDEDF]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Text Content */}
          <div className="px-4 sm:px-6 lg:px-16 py-16 lg:py-24 flex flex-col justify-center max-w-2xl lg:ml-auto w-full">
            <div className="text-xs font-mono text-[#6A6A6A] mb-8">
              Home / <span className="text-[#050505] font-bold">Services</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#050505] font-grotesk tracking-tight leading-[1.1] mb-6 uppercase">
              OUR <br />
              <span className="text-[#3b5fc2]">SERVICES</span>
            </h1>
            <p className="text-base sm:text-lg text-[#373737] leading-relaxed max-w-md">
              Reliable, safe and cost-effective transportation solutions across Ontario and the GTA. From full truckload to specialized freight, we deliver with professionalism you can count on.
            </p>
          </div>
          {/* Right: Hero Image */}
          <div className="relative h-[300px] lg:h-auto w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FEFEFE] via-[#FEFEFE]/50 to-transparent z-10 pointer-events-none" />
            <img 
              src="/Hero image.webp" 
              alt="Bosco Transport Fleet" 
              className="absolute inset-0 w-full h-full object-cover [mask-image:linear-gradient(to_right,transparent,black_15%)]"
            />
          </div>
        </div>
      </section>

      {/* 2. Core Services Section */}
      <section className="py-20 lg:py-28 bg-[#F6F7F8]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b5fc2]"></span>
              <span className="text-xs font-mono font-bold text-[#050505] uppercase tracking-widest">
                CORE SERVICES
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#050505] font-grotesk max-w-lg leading-tight">
              Transportation Solutions Tailored to Your Needs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SERVICES.map((service, index) => {
              const Icon = iconMap[service.id] || Truck;
              return (
                <div 
                  key={service.id}
                  className="bg-[#FEFEFE] p-8 lg:p-10 border border-[#DDDEDF] shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-4xl font-bold text-[#DDDEDF] group-hover:text-[#3b5fc2]/20 transition-colors font-grotesk">
                      {service.number}
                    </span>
                    <Icon className="w-8 h-8 text-[#3b5fc2] stroke-[1.5]" />
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-extrabold text-[#050505] font-grotesk uppercase mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-[#373737] leading-relaxed flex-1">
                    {service.shortDesc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Additional Capabilities Section */}
      <section className="py-20 lg:py-28 bg-[#FEFEFE] border-t border-[#DDDEDF]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column (Span 4) */}
            <div className="lg:col-span-4 flex flex-col items-start relative">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b5fc2]"></span>
                  <span className="text-xs font-mono font-bold text-[#050505] uppercase tracking-widest">
                    ADDITIONAL SERVICES
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-[#050505] font-grotesk leading-tight mb-6">
                  Additional Capabilities to Support Your Business
                </h2>
                <p className="text-sm text-[#373737] leading-relaxed mb-10">
                  Beyond our core services, we offer a wide range of capabilities to meet your unique logistics requirements.
                </p>
              </div>
            </div>

            {/* Right Column (Span 8) */}
            <div className="lg:col-span-8 relative">
              {/* Ontario Map Background */}
              <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center -mr-4 lg:-mr-12">
                <img 
                  src="/images/ontario.webp" 
                  alt="" 
                  className="w-[80%] sm:w-[70%] lg:w-[60%] h-auto object-contain opacity-80"
                />
              </div>

              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-12">
                {ADDITIONAL_CAPABILITIES.slice(0, 4).map((cap) => {
                  const Icon = iconMap[cap.id] || Truck;
                  return (
                    <div key={cap.id} className="flex flex-col items-center text-center">
                      <Icon className="w-10 h-10 text-[#373737] stroke-[1] mb-4" />
                      <h3 className="text-xs font-bold text-[#050505] font-grotesk uppercase mb-3 px-2">
                        {cap.title}
                      </h3>
                      <p className="text-[11px] text-[#6A6A6A] leading-relaxed px-1">
                        {cap.shortDesc}
                      </p>
                    </div>
                  );
                })}
                {ADDITIONAL_CAPABILITIES.slice(4, 7).map((cap) => {
                  const Icon = iconMap[cap.id] || Truck;
                  return (
                    <div key={cap.id} className="flex flex-col items-center text-center">
                      <Icon className="w-10 h-10 text-[#373737] stroke-[1] mb-4" />
                      <h3 className="text-xs font-bold text-[#050505] font-grotesk uppercase mb-3 px-2">
                        {cap.title}
                      </h3>
                      <p className="text-[11px] text-[#6A6A6A] leading-relaxed px-1">
                        {cap.shortDesc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 4. CTA Horizontal Bar */}
      <section className="py-16 bg-[#F6F7F8] border-t border-b border-[#DDDEDF]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#FEFEFE] border border-[#DDDEDF] p-8 lg:p-12 shadow-sm rounded-sm">
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex w-16 h-16 rounded-full bg-[#3b5fc2]/10 items-center justify-center border border-[#3b5fc2]/20 shrink-0">
                <ShieldCheck className="w-8 h-8 text-[#3b5fc2] stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-extrabold text-[#050505] font-grotesk mb-2">
                  Need a Custom Transportation Solution?
                </h3>
                <p className="text-sm text-[#373737]">
                  We're here to help. Contact our team to discuss your requirements.
                </p>
              </div>
            </div>
            
            <Link
              href="/#quote"
              className="shrink-0 inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#3b5fc2] hover:bg-[#2a458f] text-white text-xs font-mono uppercase font-bold tracking-widest transition-colors w-full md:w-auto"
            >
              REQUEST A QUOTE
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
