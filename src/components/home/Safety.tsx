"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldAlert,
  ClipboardCheck,
  Clock,
  Lock,
  Wrench,
  PackageCheck,
  Building,
  FileCheck2,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Safety() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const safetyPractices = [
    {
      title: "Pre-Trip & Post-Trip Inspections",
      desc: "Mandatory daily commercial vehicle walk-around inspections ensuring mechanical and road readiness.",
      icon: ClipboardCheck,
    },
    {
      title: "Hours-of-Service & Electronic Logging",
      desc: "Strict compliance with provincial and federal driving hours using certified electronic logging devices (ELD).",
      icon: Clock,
    },
    {
      title: "Load Securement & Cargo Protection",
      desc: "Approved blocking, bracing, e-track strapping, and load locks to safeguard goods throughout transit.",
      icon: Lock,
    },
    {
      title: "Preventive Vehicle Maintenance",
      desc: "Scheduled maintenance programs conducted on all highway tractors, straight trucks, and trailers.",
      icon: Wrench,
    },
    {
      title: "Safe Loading & Unloading Procedures",
      desc: "Certified handling protocols during forklift operation, dock placement, and ground-level tailgate discharge.",
      icon: PackageCheck,
    },
    {
      title: "Professional Customer-Site Protocols",
      desc: "Trained driver conduct adhering strictly to facility check-in, safety gear, and gate guidelines.",
      icon: Building,
    },
    {
      title: "Dispatch & Proof-of-Delivery Documentation",
      desc: "Accurate paperwork, electronic proof of delivery (POD), and transparent document management.",
      icon: FileCheck2,
    },
    {
      title: "Continuous Safety Monitoring",
      desc: "Active operational safety oversight, road monitoring, and continuous driver safety training.",
      icon: ShieldAlert,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#0B0D0F] border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <SectionLabel>SAFETY & COMPLIANCE</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-grotesk tracking-tight leading-[1.1] mb-4">
            SAFETY IS PART OF <br />
            <span className="text-[#FF5722]">EVERY LOAD.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#85898C] leading-relaxed">
            At Bosco Transport, safety and regulatory compliance are integral to every shipment. We uphold strict maintenance, inspection, and cargo protection procedures across all operations.
          </p>
        </div>

        {/* 8 Safety Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {safetyPractices.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                className="bg-[#14171A] border border-white/10 p-6 flex flex-col justify-between hover:border-[#FF5722]/50 transition-colors group"
              >
                <div>
                  <div className="w-10 h-10 bg-[#1B1F23] border border-white/10 text-[#FF5722] flex items-center justify-center mb-5 group-hover:bg-[#FF5722] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white font-grotesk uppercase tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#85898C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#5C6266]">
                  <span>STANDARD #0{index + 1}</span>
                  <span className="text-[#FF5722]">ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
