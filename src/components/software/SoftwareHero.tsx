"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const lines = ["YOUR BUSINESS", "DESERVES BETTER", "SOFTWARE"];

export default function SoftwareHero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".software-line", {
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
      className="w-full bg-[#F5F5F5] flex flex-col items-center justify-center relative gap-12 py-24 md:min-h-[80vh] z-10"
    >
      <div className="flex flex-col items-center text-center">
        {lines.map((line, i) => (
          <div key={i} className="overflow-hidden">
            <h1 className="software-line font-(family-name:--font-right-grotesk) text-[13vw] md:text-[10vw] font-black leading-[0.95] uppercase tracking-[-0.03em]">
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
