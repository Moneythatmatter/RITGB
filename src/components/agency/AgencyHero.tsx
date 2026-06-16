"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const lines = ["WE BUILD", "BRANDS FOR", "THE SCROLL", "ERA"];

export default function AgencyHero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".agency-line", {
        yPercent: 120,
        duration: 1,
        ease: "power4.out",
        stagger: 0.15,
        delay: 0.2,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="bg-[#FFC4DE] relative md:min-h-[70vh] flex flex-col md:justify-center py-20 md:py-24 overflow-hidden"
    >
      {/* Headline */}
      <div className="flex flex-col items-center text-center px-4 pt-20 md:mt-8 md:pt-0">
        {lines.map((line, i) => (
          <div key={i} className="overflow-hidden pb-2">
            <h1 className="font-(family-name:--font-right-grotesk) agency-line text-[15vw] md:text-[13vw] lg:text-[11vw] font-black leading-[0.95] tracking-[-0.03em] uppercase">
              {line}
            </h1>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 min-[1460px]:mt-0 min-[1460px]:absolute min-[1460px]:right-120 min-[1460px]:top-[81%] min-[1460px]:-translate-y-1/2">
        <button
          onClick={() =>
            document
              .getElementById("next-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-[#f9f9f9] font-(family-name:--font-right-grotesk) flex items-baseline gap-2 rounded-full px-4 py-5 text-sm font-semibold tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
        >
          Scroll Down ↓
        </button>
      </div>
    </section>
  );
}
