"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Truck, Shield } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { FLEET_EQUIPMENT } from "@/data/equipment";

export default function Equipment() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Initial fade in for the header section
      gsap.fromTo(
        ".equipment-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      // 2. Horizontal scroll pinned animation (responsive)
      const track = scrollTrackRef.current;
      if (track) {
        const getScrollAmount = () => {
          if (track.parentElement) {
            return -(track.scrollWidth - track.parentElement.clientWidth);
          }
          return 0;
        };

        const mm = gsap.matchMedia();

        // Desktop
        mm.add("(min-width: 1024px)", () => {
          const tween = gsap.to(track, { x: getScrollAmount, ease: "none" });
          ScrollTrigger.create({
            trigger: containerRef.current,
            start: "bottom bottom",
            end: () => `+=${Math.abs(getScrollAmount())}`,
            pin: true,
            animation: tween,
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressRef.current) {
                gsap.to(progressRef.current, { scaleX: self.progress, duration: 0.1, ease: "none", transformOrigin: "left center" });
              }
            }
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full py-12 lg:py-20 bg-[#FEFEFE] border-b border-[#DDDEDF] relative overflow-hidden flex flex-col justify-center min-h-screen"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="equipment-header">
          {/* Section Header with Left Content & Right Controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
            <div className="max-w-xl">
              <SectionLabel>OUR EQUIPMENT</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#050505] font-grotesk tracking-tight leading-[1.12] mb-4">
                THE RIGHT EQUIPMENT <br />
                FOR THE JOB.
              </h2>
              <p className="text-sm sm:text-base text-[#373737] leading-relaxed">
                Our versatile fleet capabilities allow us to handle a wide range of freight with safety, appointment compliance, and efficiency across Ontario.
              </p>
            </div>

            {/* Controls & CTA */}
            <div className="flex items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#F7F7F7] hover:bg-[#EDEDED] text-[#050505] border border-[#DDDEDF] text-xs font-mono uppercase tracking-wider transition-colors group rounded-full"
              >
                <span>VIEW ALL SERVICES</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#BF0505] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Global Progress Bar */}
          <div className="hidden lg:block h-1 w-full bg-[#DDDEDF] overflow-hidden relative mb-10">
            <div ref={progressRef} className="equipment-progress absolute inset-0 bg-[#BF0505] origin-left scale-x-0" />
          </div>
        </div>

        <div className="w-full relative overflow-x-auto lg:overflow-visible flex snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {/* Horizontal Native Scroll (Mobile) / GSAP Scroll Track (Desktop) */}
          <div
            ref={scrollTrackRef}
            className="flex gap-4 sm:gap-6 w-max pb-4 lg:pb-0"
          >
            {FLEET_EQUIPMENT.map((item, index) => (
              <div
                key={item.id}
                className="snap-start w-[280px] sm:w-[360px] md:w-[400px] bg-[#F7F7F7] border border-[#DDDEDF] flex flex-col justify-between group hover-gradient-border border-transparent transition-all duration-300 shrink-0 rounded-3xl overflow-hidden"
              >
                {/* Card Visual / Header */}
                <div className="aspect-[4/3] p-6 border-b border-[#DDDEDF] relative overflow-hidden flex flex-col justify-between group">
                  <Image
                    src={item.image}
                    alt={item.altText || item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F7F7F7] via-[#F7F7F7]/40 to-transparent pointer-events-none z-0" />

                  <div className="relative z-10 flex items-start justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white px-2 py-1 bg-[#BF0505]">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 bg-[#FEFEFE] rounded-full flex items-center justify-center shadow-sm">
                      <Truck className="w-4 h-4 text-[#050505]" />
                    </div>
                  </div>
                  <h3 className="relative z-10 text-xl font-bold text-[#050505] font-grotesk tracking-wide uppercase mt-auto drop-shadow-sm">
                    {item.name}
                  </h3>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <h4 className="text-[11px] font-mono uppercase text-[#373737] tracking-wider mb-2">
                      Primary Application:
                    </h4>
                    <p className="text-xs text-[#373737] leading-relaxed">
                      {item.application}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DDDEDF]">
                    <h4 className="text-[10px] font-mono uppercase text-[#6A6A6A] tracking-widest mb-2.5">
                      Fleet Capabilities:
                    </h4>
                    <ul className="space-y-1.5">
                      {item.features.map((feat, fIndex) => (
                        <li
                          key={fIndex}
                          className="text-[11px] text-[#373737] flex items-center gap-2 font-mono"
                        >
                          <span className="w-1.5 h-1.5 bg-[#BF0505]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Card Bar */}
                <div className="px-6 py-3 bg-[#EDEDED] border-t border-[#DDDEDF] flex items-center justify-between text-[11px] font-mono text-[#373737]">
                  <span className="font-bold uppercase tracking-wider">
                    Fleet
                  </span>
                  <span className="text-[#6A6A6A]">0{index + 1} / 0{FLEET_EQUIPMENT.length}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
