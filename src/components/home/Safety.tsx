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
      className="py-24 bg-[#F6F7F8] border-b border-[#DDDEDF] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <SectionLabel>SAFETY & COMPLIANCE</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#050505] font-grotesk tracking-tight leading-[1.1] mb-4">
            SAFETY IS PART OF <br />
            <span className="text-[#3b5fc2]">EVERY LOAD.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#373737] leading-relaxed">
            At Bosco Transport, safety and regulatory compliance are integral to every shipment. We uphold strict maintenance, inspection, and cargo protection procedures across all operations.
          </p>
        </div>

        {/* 8 Safety Standards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {safetyPractices.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                className="bg-[#F7F7F7] border border-[#DDDEDF] p-4 sm:p-6 flex flex-col justify-between hover:border-[#3b5fc2]/50 transition-colors group"
              >
                <div>
                  <div className="w-10 h-10 bg-[#EDEDED] border border-[#DDDEDF] text-[#3b5fc2] flex items-center justify-center mb-5 group-hover:bg-[#3b5fc2] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#050505] font-grotesk uppercase tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#373737] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#DDDEDF] flex items-center justify-between text-[10px] font-mono text-[#6A6A6A]">
                  <span>STANDARD #0{index + 1}</span>
                  <span className="text-[#3b5fc2]">ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
