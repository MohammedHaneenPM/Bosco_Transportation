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
      className="relative z-30 bg-[#F6F7F8] border-t border-b border-[#DDDEDF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            
            let borderClasses = "";
            if (index === 1) borderClasses = "border-l border-[#DDDEDF]";
            else if (index === 2) borderClasses = "border-t lg:border-t-0 lg:border-l border-[#DDDEDF]";
            else if (index === 3) borderClasses = "border-l border-t lg:border-t-0 border-[#DDDEDF]";

            return (
              <div
                key={item.label}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={`py-6 px-3 sm:py-8 sm:px-6 flex flex-col xl:flex-row items-center sm:items-start xl:items-center text-center sm:text-left gap-3 sm:gap-5 hover:bg-black/[0.02] transition-colors ${borderClasses}`}
              >
                <div className="p-2 sm:p-3 bg-[#F7F7F7] border border-[#DDDEDF] text-[#3b5fc2] shrink-0 rounded-xl">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-[1.1rem] sm:text-2xl md:text-3xl font-extrabold text-[#050505] font-grotesk tracking-tight break-words">
                    {item.value}
                  </div>
                  <div className="text-[11px] font-mono tracking-widest text-[#373737] uppercase font-semibold mt-0.5">
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
