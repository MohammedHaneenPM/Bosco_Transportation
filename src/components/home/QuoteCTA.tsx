"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldAlert, Mail } from "lucide-react";
import QuoteForm from "@/components/quote/QuoteForm";
import SectionLabel from "@/components/ui/SectionLabel";

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
    <section id="quote" className="bg-[#F6F7F8] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Banner Matching Reference Image */}
        <div
          ref={bannerRef}
          className="bg-[#F7F7F7] border border-[#DDDEDF] p-8 sm:p-12 mb-16 relative overflow-hidden rounded-3xl"
        >
          {/* Subtle Blue Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#BF0505]/10 blur-[90px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <SectionLabel>START YOUR SHIPMENT</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#050505] font-grotesk tracking-tight leading-[1.1] mb-4">
              READY TO MOVE YOUR FREIGHT?
            </h2>
            <p className="text-sm sm:text-base text-[#373737] max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how Bosco Transport Inc. can provide dependable, safe, and cost-effective freight transportation for your business across Ontario.
            </p>
          </div>
        </div>

        {/* Embedded Freight Quote Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-[#F7F7F7] border border-[#DDDEDF] space-y-4 rounded-2xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#BF0505] tracking-widest">
                <ShieldAlert className="w-4 h-4" />
                <span>Ontario Dispatch Center</span>
              </div>
              <h3 className="text-xl font-bold text-[#050505] font-grotesk uppercase">
                Fast & Accurate Freight Pricing
              </h3>
              <p className="text-xs text-[#373737] leading-relaxed">
                Complete the 4-step freight inquiry form. Our operations team reviews load specifications, equipment requirements, and destination routing to provide a prompt response.
              </p>
            </div>

            <div className="p-6 bg-[#F7F7F7] border border-[#DDDEDF] space-y-3 font-mono text-xs text-[#373737] rounded-2xl">
              <div className="flex items-center gap-3 text-[#050505]">
                <Mail className="w-4 h-4 text-[#BF0505]" />
                <span>dispatch@boscotransport.ca</span>
              </div>
              <div className="text-[11px] text-[#6A6A6A] pt-2 border-t border-[#DDDEDF]">
                Ontario & Greater Toronto Area (GTA) Carrier Support
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-[#F7F7F7] border border-[#DDDEDF] p-6 sm:p-10 shadow-xl rounded-3xl">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
