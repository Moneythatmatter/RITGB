"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lines = [
  { text: "WE DON'T DO", green: false },
  { text: "BORING MARKETING.", green: false },
  { text: "WE BUILD BRANDS.", green: false },
  { text: "PEOPLE REMEMBER.", green: false },
  { text: "LESS CORPORATE.", green: true },
  { text: "MORE INTERNET ENERGY.", green: false },
];

export default function AboutText() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".statement-line", {
        yPercent: 120,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-white flex flex-col items-center py-15 md:pt-60 md:pb-60 px-8"
    >
      {/* Label */}
      <p className="text-[10px] md:text-xs tracking-[0.14em] md:tracking-[0.2em] whitespace-nowrap uppercase text-black mb-4 md:mb-12">
        RITGB: Full-Service Digital Growth Agency
      </p>

      {/* Lines */}
      <div className="flex flex-col items-center text-center">
        {lines.map((line, i) => (
          <div key={i} className="overflow-hidden mb-1">
            <h2
              className={`statement-line font-(family-name:--font-right-grotesk) text-[9vw] md:text-[7vw] font-black leading-[0.85] tracking-[-0.02em] uppercase ${
                line.green ? "text-[#4DB685]" : "text-black"
              }`}
            >
              {line.text}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
