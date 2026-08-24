"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, UserCheck, ShieldCheck, Headphones, Layers, Check } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function WhyBosco() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const strengths = [
    {
      title: "EXPERIENCED PROFESSIONAL DRIVERS",
      desc: "Trained, qualified commercial drivers committed to safety and professional site procedures.",
      icon: UserCheck,
    },
    {
      title: "SAFETY FIRST",
      desc: "Strict safety procedures, pre/post-trip inspections and full regulatory compliance.",
      icon: ShieldCheck,
    },
    {
      title: "RESPONSIVE DISPATCH",
      desc: "Proactive communication, regular transit updates and dependable dispatch coordination.",
      icon: Headphones,
    },
    {
      title: "FLEXIBLE SOLUTIONS",
      desc: "Transportation solutions that adapt to your specific freight requirements and schedules.",
      icon: Layers,
    },
  ];

  const highlights = [
    "Established transportation experience since 2016",
    "Strong Ontario and GTA operating experience",
    "FTL and LTL carrier capabilities",
    "Local and dedicated transportation programs",
    "Direct shipper, broker and 3PL support experience",
    "Multiple equipment configurations available",
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#F3F1EC] text-[#0F1316] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div ref={leftColRef} className="lg:col-span-4">
            <SectionLabel lightMode>WHY CHOOSE BOSCO</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1316] font-grotesk tracking-tight leading-[1.12] mb-6">
              EXPERIENCE <br />
              YOU CAN <br />
              DEPEND ON.
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-8">
              We combine experienced drivers, versatile equipment and an unwavering commitment to safety to deliver dependable transportation across Ontario.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0F1316] hover:bg-[#1E252B] text-white text-xs font-mono uppercase tracking-wider transition-colors group"
            >
              <span>LEARN MORE ABOUT US</span>
              <ArrowRight className="w-4 h-4 text-[#FF5722] transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Checklist items */}
            <div className="mt-10 pt-8 border-t border-[#0F1316]/10 space-y-2.5">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-[#4B5563] font-mono">
                  <div className="w-4 h-4 rounded-none bg-[#FF5722] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Columns Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strengths.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className="bg-white p-8 border border-[#0F1316]/10 hover:border-[#FF5722] shadow-sm transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-[#F3F1EC] border border-[#0F1316]/10 text-[#FF5722] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-[#0F1316] font-grotesk tracking-wide uppercase mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#0F1316]/5 flex items-center justify-between text-[11px] font-mono text-[#85898C]">
                    <span className="text-[#FF5722] font-semibold">Standard Practice</span>
                    <span>0{index + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
