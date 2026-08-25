"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  density: number;
  color: string;
}

export default function ParticleText({
  text = "BOSCO",
  fontSize = 180,
}: {
  text?: string;
  fontSize?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, radius: 100, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const colors = ["#3b5fc2", "#050505", "#373737", "#1e3a8a"];

    const init = () => {
      // Set canvas size to match container
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = 300; // Fixed height for the footer text

      // Calculate a responsive font size that fits the screen width (maxes out at the passed fontSize prop)
      const dynamicFontSize = Math.min(fontSize, canvas.width * 0.22);

      // Create text
      ctx.fillStyle = "white";
      // Use a thick sans-serif font with the dynamic size
      ctx.font = `900 ${dynamicFontSize}px "Open Sans", sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);

      // Get pixel data
      const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles = [];
      const step = 5; // Downsample for performance (gap between particles)

      for (let y = 0; y < textCoordinates.height; y += step) {
        for (let x = 0; x < textCoordinates.width; x += step) {
          // Check if pixel has opacity (is part of text)
          const index = (y * textCoordinates.width + x) * 4;
          const alpha = textCoordinates.data[index + 3];

          if (alpha > 128) {
            particles.push({
              x: x + (Math.random() - 0.5) * 10,
              y: y + (Math.random() - 0.5) * 10,
              baseX: x,
              baseY: y,
              vx: 0,
              vy: 0,
              density: (Math.random() * 30) + 1,
              color: colors[Math.floor(Math.random() * colors.length)],
            });
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseRef.current.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
            const directionX = forceDirectionX * force * p.density;
            const directionY = forceDirectionY * force * p.density;

            p.vx -= directionX;
            p.vy -= directionY;
          }
        }

        // Return to base position (spring)
        p.vx += (p.baseX - p.x) * 0.1;
        p.vy += (p.baseY - p.y) * 0.1;

        // Apply friction
        p.vx *= 0.85;
        p.vy *= 0.85;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Draw particle
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // Event listeners
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = e.touches[0].clientX - rect.left;
        mouseRef.current.y = e.touches[0].clientY - rect.top;
        mouseRef.current.active = true;
      }
    };

    const onMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const onResize = () => {
      init();
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("touchmove", onTouchMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchend", onMouseLeave);
    window.addEventListener("resize", onResize);

    // Initial setup
    // Delay initialization slightly to ensure fonts are loaded
    setTimeout(() => {
      init();
      animate();
    }, 100);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchend", onMouseLeave);
      window.removeEventListener("resize", onResize);
    };
  }, [text, fontSize]);

  return (
    <div className="w-full h-[300px] relative overflow-hidden flex items-center justify-center pointer-events-auto cursor-crosshair group">
       <canvas 
        ref={canvasRef} 
        className="block opacity-100 transition-opacity duration-500" 
      />
    </div>
  );
}
