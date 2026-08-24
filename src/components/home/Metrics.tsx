"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Truck, MapPin, ShieldCheck } from "lucide-react";

export default function Metrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const metrics = [
    {
      value: "2016",
      label: "ESTABLISHED",
      icon: Calendar,
      desc: "Founded in Ontario",
    },
    {
      value: "FTL / LTL",
      label: "CAPABILITIES",
      icon: Truck,
      desc: "Full & Partial Loads",
    },
    {
      value: "GTA",
      label: "OPERATIONS",
      icon: MapPin,
      desc: "Local & Regional Transit",
    },
    {
      value: "SPECIALIZED",
      label: "FREIGHT",
      icon: ShieldCheck,
      desc: "High-Value & Dedicated",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative z-30 bg-[#0B0D0F] border-t border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="py-8 px-6 flex items-center gap-5 hover:bg-white/[0.02] transition-colors"
              >
                <div className="p-3 bg-[#14171A] border border-white/10 text-[#FF5722] shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-grotesk tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-[11px] font-mono tracking-widest text-[#85898C] uppercase font-semibold mt-0.5">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
