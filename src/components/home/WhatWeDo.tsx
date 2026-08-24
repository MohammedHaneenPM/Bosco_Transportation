"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Truck, Package, Clock, MapPin, Cpu, ShieldAlert } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { CORE_SERVICES } from "@/data/services";

export default function WhatWeDo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const iconsMap: Record<string, any> = {
    ftl: Truck,
    ltl: Package,
    dedicated: Clock,
    "gta-city": MapPin,
    "power-only": Cpu,
    specialized: ShieldAlert,
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
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

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#0B0D0F] relative border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div ref={leftColRef} className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionLabel>WHAT WE DO</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-grotesk tracking-tight leading-[1.12] mb-6">
              TRANSPORTATION <br />
              SOLUTIONS THAT FIT <br />
              YOUR BUSINESS.
            </h2>
            <p className="text-sm sm:text-base text-[#85898C] leading-relaxed mb-8 max-w-md">
              From full truckload to specialized freight, we provide safe, on-time and cost-effective transportation tailored to your unique needs across Ontario.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#14171A] hover:bg-[#1B1F23] text-white border border-white/15 hover:border-[#FF5722] text-xs font-mono uppercase tracking-wider transition-all duration-200 group"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight className="w-4 h-4 text-[#FF5722] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column: 6 Services Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CORE_SERVICES.map((service, index) => {
              const Icon = iconsMap[service.id] || Truck;
              return (
                <div
                  key={service.id}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className="bg-[#14171A] border border-white/10 p-6 flex flex-col justify-between group hover:border-[#FF5722]/60 hover:bg-[#171B20] transition-all duration-300 relative"
                >
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-mono text-[#85898C] group-hover:text-white transition-colors">
                        {service.number}
                      </span>
                      <div className="text-[#FF5722] group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white font-grotesk uppercase tracking-wide mb-2 group-hover:text-[#FF5722] transition-colors">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-[#85898C] leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Arrow Link */}
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center text-xs font-mono text-[#85898C] group-hover:text-[#FF5722] transition-colors gap-1 pt-2 border-t border-white/5"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
