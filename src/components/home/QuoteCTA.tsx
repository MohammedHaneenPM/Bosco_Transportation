"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ShieldAlert, Mail } from "lucide-react";
import QuoteForm from "@/components/quote/QuoteForm";
import SectionLabel from "@/components/ui/SectionLabel";
import { openQuoteModal } from "@/lib/utils";

export default function QuoteCTA() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 80%",
          },
        }
      );
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="quote" className="bg-[#080A0C] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Banner Matching Reference Image */}
        <div
          ref={bannerRef}
          className="bg-[#14171A] border border-white/15 p-8 sm:p-12 mb-16 relative overflow-hidden"
        >
          {/* Subtle Orange Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5722]/10 blur-[90px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div>
              <SectionLabel>START YOUR SHIPMENT</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-grotesk tracking-tight leading-[1.1] mb-3">
                READY TO MOVE <br />
                <span className="text-[#FF5722]">YOUR FREIGHT?</span>
              </h2>
              <p className="text-sm sm:text-base text-[#85898C] max-w-lg leading-relaxed">
                Let&apos;s discuss how Bosco Transport Inc. can provide dependable, safe, and cost-effective freight transportation for your business across Ontario.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={openQuoteModal}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF5722] hover:bg-[#E64A19] text-white text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-[0_0_25px_rgba(255,87,34,0.3)] hover:shadow-[0_0_35px_rgba(255,87,34,0.5)] group"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Embedded Freight Quote Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-[#14171A] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#FF5722] tracking-widest">
                <ShieldAlert className="w-4 h-4" />
                <span>Ontario Dispatch Center</span>
              </div>
              <h3 className="text-xl font-bold text-white font-grotesk uppercase">
                Fast & Accurate Freight Pricing
              </h3>
              <p className="text-xs text-[#85898C] leading-relaxed">
                Complete the 4-step freight inquiry form. Our operations team reviews load specifications, equipment requirements, and destination routing to provide a prompt response.
              </p>
            </div>

            <div className="p-6 bg-[#14171A] border border-white/10 space-y-3 font-mono text-xs text-[#85898C]">
              <div className="flex items-center gap-3 text-white">
                <Mail className="w-4 h-4 text-[#FF5722]" />
                <span>dispatch@boscotransport.ca</span>
              </div>
              <div className="text-[11px] text-[#5C6266] pt-2 border-t border-white/5">
                Ontario & Greater Toronto Area (GTA) Carrier Support
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-[#14171A] border border-white/15 p-6 sm:p-10 shadow-xl">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
