"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Register ScrollTrigger once on client mount
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
    });

    lenisRef.current = lenis;

    // Update ScrollTrigger on every Lenis scroll
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Synchronize Lenis raf with GSAP's internal ticker
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Custom intercept for anchor links to handle GSAP pin spacing
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.includes("#")) {
        const [path, hash] = href.split("#");
        const currentPath = window.location.pathname;
        
        // If navigating to a hash on the SAME page
        if (path === "" || path === currentPath || (path === "/" && currentPath === "/")) {
          e.preventDefault();
          const el = document.getElementById(hash);
          if (el && lenis) {
            ScrollTrigger.refresh();
            lenis.scrollTo(el, { offset: 0 });
            window.history.pushState(null, "", href);
          }
        }
      }
    };
    
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Handle cross-page hash navigation
  useEffect(() => {
    if (window.location.hash && lenisRef.current) {
      // Delay ensures GSAP has fully rendered and calculated all pin spacers
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          lenisRef.current?.scrollTo(element, { offset: 0, duration: 1.2 });
        }
      }, 400); 
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return <>{children}</>;
}
