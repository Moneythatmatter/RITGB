"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".portfolio-line", {
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
    <section ref={sectionRef} className="bg-[#f0eeea]">
      <div className="py-16 md:py-0">
        <p className="font-[Arial] text-xs tracking-widest uppercase text-black mb-12 md:mb-16 px-8 md:px-27.75 md:pt-24">
          Portfolio Section
        </p>

        {/* Headline */}
        <div className="md:pb-24 px-4 md:px-27.75">
          <div className="overflow-hidden">
            <h2 className="portfolio-line font-(family-name:--font-right-grotesk) text-[6vw] md:text-[4vw] font-black leading-none tracking-[-0.02em] whitespace-nowrap uppercase text-center">
              Where We Cause Internet Problems
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="portfolio-line font-(family-name:--font-right-grotesk) text-[8vw] md:text-[4vw] font-black leading-none tracking-[-0.02em] uppercase text-center">
              (For Your Competitors)
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
