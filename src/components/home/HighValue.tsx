"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import {
  ShieldCheck,
  Radio,
  Camera,
  Eye,
  Activity,
  FileCheck,
  Truck,
  Lock,
  Clock,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { COMPANY } from "@/data/company";

export default function HighValue() {
  const containerRef = useRef<HTMLDivElement>(null);
  const routeTruckRef = useRef<SVGGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    const ctx = gsap.context(() => {
      // Fade in section content on scroll
      gsap.fromTo(
        ".high-value-reveal",
        { opacity: 0, y: 25 },
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

      // Continuous truck patrol animation along the SVG route
      if (routeTruckRef.current && pathRef.current) {
        gsap.to(routeTruckRef.current, {
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          motionPath: {
            path: pathRef.current,
            align: pathRef.current,
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const capabilities = [
    { text: "GPS-monitored trucks & equipment", icon: Radio },
    { text: "Camera-equipped vehicles", icon: Camera },
    { text: "Live tracking for customers", icon: Eye },
    { text: "Continuous shipment monitoring", icon: Activity },
    { text: "Regular dispatch updates", icon: Radio },
    { text: "Controlled pickup & delivery", icon: Lock },
    { text: "Proof-of-delivery documentation", icon: FileCheck },
    { text: "Dedicated equipment options", icon: Truck },
    { text: "Extra security & care protocols", icon: ShieldCheck },
    { text: "On-time delivery focus", icon: Clock },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#080A0C] border-b border-white/10 relative overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5722]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 high-value-reveal">
          <SectionLabel>HIGH-VALUE & ELECTRONICS TRANSPORTATION</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-grotesk tracking-tight leading-[1.1] mb-4">
            SECURITY. VISIBILITY. <br />
            <span className="text-[#FF5722]">CONTROL.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#85898C] leading-relaxed">
            Bosco Transport Inc. has experience handling electronics, high-value cargo and security-sensitive shipments where additional care, visibility and shipment control are required.
          </p>
        </div>

        {/* Interactive Grid: Left Capabilities & Right Live Route Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 10 Core Security Capabilities in 2-col layout */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 high-value-reveal">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3.5 p-3.5 bg-[#14171A] border border-white/10 hover:border-[#FF5722]/40 transition-colors"
                >
                  <div className="p-2 bg-[#1B1F23] border border-white/10 text-[#FF5722] shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-white/90 uppercase tracking-wide">
                    {cap.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Signature Transit Route Illustration */}
          <div className="lg:col-span-5 bg-[#14171A] border border-white/15 p-8 relative high-value-reveal">
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#FF5722] tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#FF5722] animate-ping" />
                <span>Live Shipment Oversight</span>
              </div>
              <span className="text-[10px] font-mono text-[#85898C] uppercase">
                Ontario Transit Route
              </span>
            </div>

            {/* Route Map Graphic */}
            <div className="relative py-8 px-4 bg-[#0B0D0F] border border-white/5 flex flex-col justify-center items-center">
              <div className="w-full max-w-[340px] relative">
                {/* SVG Route Line */}
                <svg
                  viewBox="0 0 340 120"
                  className="w-full h-auto overflow-visible"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background Track Line */}
                  <path
                    d="M 30 90 Q 120 20 180 60 T 310 30"
                    stroke="rgba(255, 255, 255, 0.15)"
                    strokeWidth="3"
                    strokeDasharray="4 4"
                  />

                  {/* Active Orange Glowing Track */}
                  <path
                    ref={pathRef}
                    d="M 30 90 Q 120 20 180 60 T 310 30"
                    stroke="#FF5722"
                    strokeWidth="3"
                    strokeDasharray="6 6"
                  />

                  {/* Pickup Node (Origin) */}
                  <g transform="translate(30, 90)">
                    <circle r="12" fill="#FF5722" fillOpacity="0.2" className="animate-ping" />
                    <circle r="6" fill="#FF5722" />
                    <circle r="3" fill="#FFFFFF" />
                  </g>

                  {/* Delivery Node (Destination) */}
                  <g transform="translate(310, 30)">
                    <circle r="12" fill="#FF5722" fillOpacity="0.2" className="animate-ping" />
                    <circle r="6" fill="#FF5722" />
                    <circle r="3" fill="#FFFFFF" />
                  </g>

                  {/* Animated Transit Truck */}
                  <g ref={routeTruckRef}>
                    <rect
                      x="-14"
                      y="-10"
                      width="28"
                      height="20"
                      fill="#FF5722"
                      rx="2"
                    />
                    <circle cx="-6" cy="11" r="3" fill="#FFFFFF" />
                    <circle cx="6" cy="11" r="3" fill="#FFFFFF" />
                    <text
                      x="0"
                      y="3"
                      fill="#FFFFFF"
                      fontSize="7"
                      fontFamily="monospace"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      BOSCO
                    </text>
                  </g>
                </svg>

                {/* Node Labels */}
                <div className="flex justify-between items-center mt-4 pt-2 border-t border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-white">
                    <MapPin className="w-3.5 h-3.5 text-[#FF5722]" />
                    <span className="font-bold">PICKUP</span>
                  </div>
                  <div className="text-[10px] text-[#85898C] uppercase tracking-wider">
                    Continuous Telematics
                  </div>
                  <div className="flex items-center gap-1.5 text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5722]" />
                    <span className="font-bold">DELIVERY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note on Operational Experience */}
            <p className="text-xs text-[#85898C] leading-relaxed mt-4 font-mono">
              Experience supporting electronics freight operations with strict seal compliance and verified proof-of-delivery protocols.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
