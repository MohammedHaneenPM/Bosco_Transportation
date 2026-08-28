"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only initialize on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Add a class to body to hide the default cursor on desktop
    document.body.classList.add("hide-default-cursor");

    // Initialize positions
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2; // The trailing speed

    const xSet = gsap.quickSetter(follower, "x", "px");
    const ySet = gsap.quickSetter(follower, "y", "px");

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      // Instant position for the inner dot
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    const ticker = gsap.ticker;
    const updateFollower = () => {
      // Smooth interpolation for the outer ring
      const dt = 1.0 - Math.pow(1.0 - speed, ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    };

    ticker.add(updateFollower);

    // Interactive hover effects
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"]');
      if (isInteractive) {
        gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.2 });
        gsap.to(follower, { 
          scale: 1.5, 
          borderColor: "rgba(191, 5, 5, 1)", 
          backgroundColor: "rgba(191, 5, 5, 0.1)", 
          duration: 0.2 
        });
      }
    };
    
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"]');
      if (isInteractive) {
        gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.2 });
        gsap.to(follower, { 
          scale: 1, 
          borderColor: "rgba(191, 5, 5, 0.4)", 
          backgroundColor: "transparent", 
          duration: 0.2 
        });
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      ticker.remove(updateFollower);
      document.body.classList.remove("hide-default-cursor");
    };
  }, []);

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#BF0505] rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ willChange: "transform" }}
      />
      {/* Trailing Outer Ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-[#BF0505]/40 rounded-full pointer-events-none z-[9998] hidden md:block transition-colors"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
