"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { openQuoteModal } from "@/lib/utils";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        pillRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "<0.1"
        )
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.5"
        )
        .fromTo(
          textRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          imageWrapperRef.current,
          { opacity: 0, scale: 1.04 },
          { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" },
          "-=1.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-[#F6F7F8]"
    >
      {/* Background Graphic & Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F6F7F8] via-[#F6F7F8]/90 to-[#F6F7F8]/40 sm:via-[#F6F7F8]/60 sm:to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#F6F7F8] via-[#F6F7F8]/40 sm:via-transparent to-transparent z-10 pointer-events-none" />

      {/* Hero Background Image */}
      <div
        ref={imageWrapperRef}
        className="absolute inset-0 z-0 opacity-0 overflow-hidden"
      >
        <Image
          src="/hero.webp"
          alt="Bosco Transport Commercial Highway Truck in Ontario Canada"
          fill
          priority
          className="object-cover object-[60%_center] md:object-right filter brightness-[0.75] contrast-[1.05]"
          sizes="100vw"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row lg:items-start justify-between gap-12 lg:gap-8 h-full">
        <div className="max-w-2xl mt-auto lg:mt-0">
          {/* Top Info Block (Badge) */}
          <div ref={badgeRef} className="opacity-0 mb-4 flex flex-col items-start">
            {/* Red Text Badge */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono tracking-widest uppercase font-semibold text-[#BF0505]">
              <span>RELIABLE</span>
              <span className="font-bold">•</span>
              <span>SAFE</span>
              <span className="font-bold">•</span>
              <span>FLEXIBLE</span>
              <span className="font-bold">•</span>
              <span>PROFESSIONAL</span>
              <span className="font-bold">•</span>
              <span>COST-EFFECTIVE</span>
            </div>
          </div>

          {/* Heading */}
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#050505] tracking-tight leading-[1.06] font-grotesk opacity-0 mb-6"
          >
            Transportation <br />
            You Can <br />
            <span className="text-[#BF0505] drop-shadow-[0_0_25px_rgba(191,5,5,0.4)]">
              COUNT ON.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={textRef}
            className="text-base sm:text-lg text-[#373737] leading-relaxed mb-8 opacity-0 max-w-xl font-sans"
          >
            Reliable transportation solutions across Ontario and the GTA. Built on trust, driven by professionalism.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 opacity-0"
          >
            <button
              onClick={openQuoteModal}
              className="relative inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#BF0505] hover:bg-[#A00404] text-white font-mono uppercase tracking-wider text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(191,5,5,0.5)] shadow-[0_0_25px_rgba(191,5,5,0.3)] group rounded-full"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-7 py-4 bg-[#F7F7F7]/80 hover:bg-[#EDEDED] text-[#050505] border border-[#DDDEDF] hover:border-[#6A6A6A] font-mono uppercase tracking-wider text-xs font-medium backdrop-blur-sm transition-colors rounded-full"
            >
              EXPLORE SERVICES
            </Link>
          </div>
        </div>

        {/* Absolute Right Border Marquee Pill */}
        <div ref={pillRef} className="absolute opacity-0 -top-28 lg:-top-16 right-4 sm:right-6 lg:right-8 z-30 flex flex-col items-end text-right">
          <div className="relative rounded-3xl lg:rounded-full shadow-sm group inline-block overflow-hidden w-64 sm:w-80 border border-[#DDDEDF]/80">
            <div className="absolute inset-0 bg-[#F7F7F7]/80 backdrop-blur-sm z-0"></div>
            <div className="relative z-10 flex w-max animate-marquee py-2.5">
              <p className="text-xs lg:text-sm font-mono tracking-widest text-[#050505] font-bold px-4">
                🍁 Proudly Canadian • Family Owned & Operated 🍁    Since 2010
              </p>
              <p className="text-xs lg:text-sm font-mono tracking-widest text-[#050505] font-bold px-4">
                🍁 Proudly Canadian • Family Owned & Operated 🍁    Since 2010
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
