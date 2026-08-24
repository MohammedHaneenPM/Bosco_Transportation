import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Target, Eye, Award, CheckCircle2, Truck } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "About Bosco Transport Inc. | Ontario Transportation & Logistics",
  description:
    "Founded in 2016, Bosco Transport Inc. is an Ontario-based freight transportation and logistics company providing dependable FTL, LTL, dedicated, and specialized services.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 pt-24 bg-[#0B0D0F]">
      {/* About Hero Section */}
      <section className="py-20 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionLabel>ABOUT BOSCO TRANSPORT INC.</SectionLabel>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-grotesk tracking-tight leading-[1.1] mb-6 max-w-3xl">
            BUILT ON TRUST. <br />
            <span className="text-[#FF5722]">DRIVEN BY PROFESSIONALISM.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#85898C] max-w-2xl leading-relaxed">
            Founded in 2016, Bosco Transport Inc. is an Ontario-based transportation and logistics company providing dependable freight transportation solutions across the province and the Greater Toronto Area.
          </p>
        </div>
      </section>

      {/* Company Story & Operational Heritage */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionLabel>COMPANY OVERVIEW</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-grotesk uppercase tracking-wide leading-tight mb-6">
                Experienced Ontario Freight Solutions
              </h2>
              <div className="p-6 bg-[#14171A] border-l-2 border-[#FF5722] text-sm text-[#85898C] leading-relaxed">
                With experience in FTL, LTL, dedicated transportation, city operations and specialized freight, Bosco Transport focuses on reliable service, professional communication, safety and on-time performance.
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#C8CCD0] text-sm sm:text-base leading-relaxed">
              <p>
                Bosco Transport Inc. has established experience supporting freight brokers, third-party logistics (3PL) companies, dedicated enterprise customers, and direct shippers throughout Ontario.
              </p>
              <p>
                Operational experience includes transportation and logistics support involving electronics leaders such as Samsung, Hisense, and general freight customers, along with dedicated and broker-managed transportation programs.
              </p>
              <p>
                We understand the absolute importance of appointment compliance, accurate paperwork, responsive dispatch communication, prompt proof of delivery (POD), cargo security, and professional customer-site procedures.
              </p>

              {/* 2016 / Today Badge Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#14171A] border border-white/10">
                  <span className="text-2xl font-extrabold text-[#FF5722] font-grotesk block mb-1">
                    2016
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-white font-bold block mb-1">
                    ESTABLISHED
                  </span>
                  <span className="text-xs text-[#85898C]">
                    Founded in Ontario as a dedicated carrier and logistics partner.
                  </span>
                </div>
                <div className="p-6 bg-[#14171A] border border-white/10">
                  <span className="text-2xl font-extrabold text-[#FF5722] font-grotesk block mb-1">
                    TODAY
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-white font-bold block mb-1">
                    ONTARIO CARRIER PARTNER
                  </span>
                  <span className="text-xs text-[#85898C]">
                    Recognized for safety, operational flexibility, and quality service.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-[#080A0C] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="p-8 sm:p-10 bg-[#14171A] border border-white/10 relative group hover:border-[#FF5722]/60 transition-colors">
              <div className="w-12 h-12 bg-[#1B1F23] border border-white/10 text-[#FF5722] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#FF5722] uppercase tracking-widest block mb-2">
                Our Purpose
              </span>
              <h3 className="text-2xl font-bold text-white font-grotesk uppercase mb-4">
                Mission
              </h3>
              <p className="text-sm sm:text-base text-[#85898C] leading-relaxed">
                {COMPANY.mission}
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-8 sm:p-10 bg-[#14171A] border border-white/10 relative group hover:border-[#FF5722]/60 transition-colors">
              <div className="w-12 h-12 bg-[#1B1F23] border border-white/10 text-[#FF5722] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#FF5722] uppercase tracking-widest block mb-2">
                Our Future
              </span>
              <h3 className="text-2xl font-bold text-white font-grotesk uppercase mb-4">
                Vision
              </h3>
              <p className="text-sm sm:text-base text-[#85898C] leading-relaxed">
                {COMPANY.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Philosophy & Commitment */}
      <section className="py-24 bg-[#F3F1EC] text-[#0F1316]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <SectionLabel lightMode>OPERATIONAL PHILOSOPHY</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1316] font-grotesk tracking-tight leading-[1.12] mb-4">
              OUR COMMITMENT TO CLIENTS
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed">
              {COMPANY.philosophy}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { title: "Reliable", desc: "Dependable appointment adherence & transit" },
              { title: "Safe", desc: "Strict inspections & cargo protection" },
              { title: "Flexible", desc: "Custom equipment & responsive scheduling" },
              { title: "Professional", desc: "Trained drivers & clear communication" },
              { title: "Cost-Effective", desc: "Practical freight solutions tailored to budget" },
            ].map((val, idx) => (
              <div
                key={val.title}
                className="bg-white p-6 border border-[#0F1316]/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#FF5722] font-bold block mb-2">
                    0{idx + 1}
                  </span>
                  <h4 className="text-lg font-bold text-[#0F1316] font-grotesk uppercase mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#0B0D0F] border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-grotesk uppercase mb-4">
            Partner With Bosco Transport Inc.
          </h2>
          <p className="text-sm sm:text-base text-[#85898C] mb-8 max-w-xl mx-auto">
            Discuss your recurring lanes, dedicated equipment needs, or specialized freight requirements with our dispatch team.
          </p>
          <Link
            href="/#quote"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#FF5722] hover:bg-[#E64A19] text-white text-xs font-mono uppercase tracking-wider font-bold transition-colors shadow-lg"
          >
            <span>REQUEST A FREIGHT QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
