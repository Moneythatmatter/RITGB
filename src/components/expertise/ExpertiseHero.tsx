"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const lines = ["EVERYTHING YOUR", "BRAND NEEDS.", "UNDER ONE ROOF"];

export default function ExpertiseHero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".expertise-line", {
        yPercent: 120,
        duration: 1,
        ease: "power4.out",
        stagger: 0.15,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#4DB685] py-24 md:py-32 flex flex-col items-center justify-center gap-12 md:min-h-[80vh]"
    >
      <div className="flex flex-col items-center text-center">
        {lines.map((line, i) => (
          <div key={i} className="overflow-hidden">
            <h1 className="expertise-line font-(family-name:--font-right-grotesk) text-[13vw] md:text-[10vw] font-black leading-[0.95] uppercase tracking-[-0.03em]">
              {line}
            </h1>
          </div>
        ))}
      </div>

      <button className="bg-white font-(family-name:--font-right-grotesk) flex items-baseline gap-2 rounded-full px-4 py-5 text-sm font-semibold tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
        Scroll Down ↓
      </button>
    </section>
  );
}
