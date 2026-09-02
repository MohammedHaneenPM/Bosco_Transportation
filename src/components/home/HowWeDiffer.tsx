"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, Map, Search, MessageSquare } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function HowWeDiffer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
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

  const differences = [
    {
      title: "Real-time Visibility",
      desc: "Real-time road transportation visibility—Your fast lane to total control",
      icon: Activity,
    },
    {
      title: "Track & Trace",
      desc: "Access an interactive track and trace map to monitor your shipments in real-time from origin to destination.",
      icon: Map,
    },
    {
      title: "24/7 Monitoring",
      desc: "Connect the dots with 24/7 visibility at truck or item level and never lose sight, even at customs borders.",
      icon: Search,
    },
    {
      title: "Proactive Communication",
      desc: "Make informed decisions and enhance the consignee’s experience with proactive communication.",
      icon: MessageSquare,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 bg-white text-[#050505] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-start">
          {/* Left Column */}
          <div ref={titleRef} className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionLabel lightMode>OUR ADVANTAGE</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-[#050505] font-grotesk tracking-tight leading-[1.12] mb-6">
              HOW WE DIFFER.
            </h2>
            <p className="text-sm sm:text-base text-[#373737] leading-relaxed max-w-md">
              We provide advanced tracking and unparalleled visibility to ensure you are always in control of your freight. Our commitment to transparent operations, proactive communication, and real-time monitoring empowers your business to make informed logistical decisions with absolute confidence.
            </p>
          </div>

          {/* Right Column: 2x2 Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            {differences.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <div
                  key={index}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className="bg-[#F7F7F7] border border-[#DDDEDF] p-5 sm:p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group flex flex-col"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white border border-[#DDDEDF] rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#BF0505] transition-colors duration-300 shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#BF0505] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-[#050505] mb-2 sm:mb-3 font-grotesk tracking-wide uppercase">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#373737] leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
