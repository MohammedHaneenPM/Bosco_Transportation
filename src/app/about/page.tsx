import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Target, Eye, Award, CheckCircle2, Truck, Users, Route, Clock, Settings } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "About Bosco Transport Inc. | Ontario Transportation & Logistics",
  description:
    "Founded in 2016, Bosco Transport Inc. is an Ontario-based freight transportation and logistics company providing dependable FTL, LTL, dedicated, and specialized services.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 pt-24 bg-[#F6F7F8]">
      {/* About Hero Section */}
      <section className="relative overflow-hidden border-b border-[#DDDEDF]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Text Content */}
          <div className="px-4 sm:px-6 lg:px-16 py-16 lg:py-24 flex flex-col justify-center max-w-2xl lg:ml-auto w-full relative z-20">
            <SectionLabel>ABOUT BOSCO TRANSPORT INC.</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#050505] font-grotesk tracking-tight leading-[1.1] mb-6 mt-6 max-w-3xl">
              BUILT ON TRUST. <br />
              <span className="text-[#3b5fc2]">DRIVEN BY PROFESSIONALISM.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#373737] max-w-xl leading-relaxed">
              Founded in 2016, Bosco Transport Inc. is an Ontario-based transportation and logistics company providing dependable freight transportation solutions across the province and the Greater Toronto Area.
            </p>
          </div>

          {/* Right: Hero Image */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-auto w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F6F7F8] via-[#F6F7F8]/50 to-transparent z-10 pointer-events-none" />
            <img 
              src="/images/HeroimageAbout.webp" 
              alt="Bosco Transport Fleet" 
              className="absolute inset-0 w-full h-full object-cover [mask-image:linear-gradient(to_right,transparent,black_15%)]"
            />
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-[#FEFEFE] border-b border-[#DDDEDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-[#DDDEDF] [&>div]:border-[#DDDEDF] md:[&>div:nth-child(n+4)]:border-t lg:[&>div:nth-child(n+4)]:border-t-0">
            {/* Metric 1 */}
            <div className="flex flex-col items-center text-center p-6 xl:p-8">
              <Truck className="w-8 h-8 text-[#3b5fc2] mb-4" strokeWidth={1.5} />
              <div className="text-3xl font-extrabold text-[#050505] font-grotesk leading-none mb-1">10+</div>
              <div className="text-sm font-bold text-[#3b5fc2] uppercase tracking-wider mb-1">YEARS</div>
              <div className="text-[10px] text-[#373737] font-mono uppercase tracking-wide">OF EXPERIENCE</div>
            </div>
            
            {/* Metric 2 */}
            <div className="flex flex-col items-center text-center p-6 xl:p-8 border-l md:border-l-0 lg:border-l">
              <Users className="w-8 h-8 text-[#3b5fc2] mb-4" strokeWidth={1.5} />
              <div className="text-3xl font-extrabold text-[#050505] font-grotesk leading-none mb-1">500+</div>
              <div className="text-sm font-bold text-[#3b5fc2] uppercase tracking-wider mb-1">HAPPY</div>
              <div className="text-[10px] text-[#373737] font-mono uppercase tracking-wide">CLIENTS</div>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center text-center p-6 xl:p-8 md:border-l">
              <Route className="w-8 h-8 text-[#3b5fc2] mb-4" strokeWidth={1.5} />
              <div className="text-xs text-[#050505] font-bold uppercase tracking-wide mb-1">ACROSS</div>
              <div className="text-2xl font-extrabold text-[#3b5fc2] font-grotesk leading-none mb-1">ONTARIO</div>
              <div className="text-[10px] text-[#373737] font-mono uppercase tracking-wide">AND BEYOND</div>
            </div>

            {/* Metric 4 */}
            <div className="flex flex-col items-center text-center p-6 xl:p-8 border-l md:border-l-0 lg:border-l">
              <ShieldCheck className="w-8 h-8 text-[#3b5fc2] mb-4" strokeWidth={1.5} />
              <div className="text-3xl font-extrabold text-[#050505] font-grotesk leading-none mb-1">100%</div>
              <div className="text-sm font-bold text-[#3b5fc2] uppercase tracking-wider mb-1">SAFETY</div>
              <div className="text-[10px] text-[#373737] font-mono uppercase tracking-wide">FOCUSED</div>
            </div>

            {/* Metric 5 */}
            <div className="flex flex-col items-center text-center p-6 xl:p-8 md:border-l">
              <Clock className="w-8 h-8 text-[#3b5fc2] mb-4" strokeWidth={1.5} />
              <div className="text-2xl font-extrabold text-[#3b5fc2] font-grotesk leading-none mb-1">ON-TIME</div>
              <div className="text-sm font-bold text-[#050505] uppercase tracking-wider mb-1">DELIVERY</div>
              <div className="text-[10px] text-[#373737] font-mono uppercase tracking-wide">YOU CAN COUNT ON</div>
            </div>

            {/* Metric 6 */}
            <div className="flex flex-col items-center text-center p-6 xl:p-8 border-l md:border-l-0 lg:border-l">
              <Settings className="w-8 h-8 text-[#3b5fc2] mb-4" strokeWidth={1.5} />
              <div className="text-2xl font-extrabold text-[#3b5fc2] font-grotesk leading-none mb-1">MODERN</div>
              <div className="text-sm font-bold text-[#050505] uppercase tracking-wider mb-1">FLEET</div>
              <div className="text-[10px] text-[#373737] font-mono uppercase tracking-wide">WELL MAINTAINED</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story & Operational Heritage */}
      <section className="py-24 border-b border-[#DDDEDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionLabel>COMPANY OVERVIEW</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#050505] font-grotesk uppercase tracking-wide leading-tight mb-6">
                Experienced Ontario Freight Solutions
              </h2>
              <div className="p-6 bg-[#F7F7F7] border-l-2 border-[#3b5fc2] text-sm text-[#373737] leading-relaxed">
                With experience in FTL, LTL, dedicated transportation, city operations and specialized freight, Bosco Transport focuses on reliable service, professional communication, safety and on-time performance.
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#373737] text-sm sm:text-base leading-relaxed">
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
                <div className="p-6 bg-[#F7F7F7] border border-[#DDDEDF]">
                  <span className="text-2xl font-extrabold text-[#3b5fc2] font-grotesk block mb-1">
                    2016
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#050505] font-bold block mb-1">
                    ESTABLISHED
                  </span>
                  <span className="text-xs text-[#373737]">
                    Founded in Ontario as a dedicated carrier and logistics partner.
                  </span>
                </div>
                <div className="p-6 bg-[#F7F7F7] border border-[#DDDEDF]">
                  <span className="text-2xl font-extrabold text-[#3b5fc2] font-grotesk block mb-1">
                    TODAY
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#050505] font-bold block mb-1">
                    ONTARIO CARRIER PARTNER
                  </span>
                  <span className="text-xs text-[#373737]">
                    Recognized for safety, operational flexibility, and quality service.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-[#FEFEFE] border-b border-[#DDDEDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="p-8 sm:p-10 bg-[#F7F7F7] border border-[#DDDEDF] relative group hover:border-[#3b5fc2]/60 transition-colors">
              <div className="w-12 h-12 bg-[#EDEDED] border border-[#DDDEDF] text-[#3b5fc2] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#3b5fc2] uppercase tracking-widest block mb-2">
                Our Purpose
              </span>
              <h3 className="text-2xl font-bold text-[#050505] font-grotesk uppercase mb-4">
                Mission
              </h3>
              <p className="text-sm sm:text-base text-[#373737] leading-relaxed">
                {COMPANY.mission}
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-8 sm:p-10 bg-[#F7F7F7] border border-[#DDDEDF] relative group hover:border-[#3b5fc2]/60 transition-colors">
              <div className="w-12 h-12 bg-[#EDEDED] border border-[#DDDEDF] text-[#3b5fc2] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#3b5fc2] uppercase tracking-widest block mb-2">
                Our Future
              </span>
              <h3 className="text-2xl font-bold text-[#050505] font-grotesk uppercase mb-4">
                Vision
              </h3>
              <p className="text-sm sm:text-base text-[#373737] leading-relaxed">
                {COMPANY.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Philosophy & Commitment */}
      <section className="py-24 bg-[#F6F7F8] text-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <SectionLabel lightMode>OPERATIONAL PHILOSOPHY</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#050505] font-grotesk tracking-tight leading-[1.12] mb-4">
              OUR COMMITMENT TO CLIENTS
            </h2>
            <p className="text-base text-[#373737] leading-relaxed">
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
                className="bg-[#FEFEFE] p-6 border border-[#DDDEDF] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#3b5fc2] font-bold block mb-2">
                    0{idx + 1}
                  </span>
                  <h4 className="text-lg font-bold text-[#050505] font-grotesk uppercase mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-[#373737] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#F7F7F7] border-t border-[#DDDEDF] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#050505] font-grotesk uppercase mb-4">
            Partner With Bosco Transport Inc.
          </h2>
          <p className="text-sm sm:text-base text-[#373737] mb-8 max-w-xl mx-auto">
            Discuss your recurring lanes, dedicated equipment needs, or specialized freight requirements with our dispatch team.
          </p>
          <Link
            href="/#quote"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#3b5fc2] hover:bg-[#2a458f] text-white text-xs font-mono uppercase tracking-wider font-bold transition-colors shadow-lg"
          >
            <span>REQUEST A FREIGHT QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
