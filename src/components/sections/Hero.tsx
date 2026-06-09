"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeroBottom from "./HeroBottom";
import { useCursorTrail } from "@/hooks/useCursorTrail";

const lines = ["WE MAKE THE", "INTERNET", "NOTICE YOU"];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { handleMouseMove } = useCursorTrail(containerRef);

  // text animation
  useGSAP(
    () => {
      gsap.from(".hero-line", {
        yPercent: 120,
        duration: 1,
        ease: "power4.out",
        stagger: 0.15,
        delay: 0.2,
      });
    },
    { scope: containerRef },
  );

  // Cursor trail
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section
      ref={containerRef}
      className="bg-white relative min-h-screen flex flex-col justify-between pt-24 overflow-hidden"
    >
      {/* Headline */}
      <div className="flex flex-col items-center text-center px-4 mt-8">
        {lines.map((line, i) => (
          <div key={i} className="overflow-hidden">
            <h1 className="hero-line text-[11vw] font-black leading-none tracking-tighter uppercase">
              {line}
            </h1>
          </div>
        ))}
      </div>

      {/* Scroll Down button */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2">
        <button
          onClick={() =>
            document
              .getElementById("next-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-300"
        >
          Scroll Down ↓
        </button>
      </div>

      {/* Bottom strip */}
      <HeroBottom />
    </section>
  );
}
