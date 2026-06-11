"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const topRow = [
  { num: "01", label: "Hospitality" },
  { num: "02", label: "E-Commerce" },
];

const bottomRow = [
  { num: "03", label: "Healthcare" },
  { num: "04", label: "Education" },
  { num: "04", label: "Tech & Startups" },
];

export default function Industry() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".industry-title", {
        yPercent: 120,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // infinite horizontal loop
      const el = marqueeRef.current;
      if (!el) return;
      const totalWidth = el.scrollWidth / 2;
      gsap.to(el, {
        x: -totalWidth,
        duration: 18,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-white overflow-hidden pb-20 md:pb-32"
    >
      <p className="font-[Arial] text-xs tracking-widest uppercase text-black mb-16 px-8 md:px-27.75 pt-40">
        Industry Section
      </p>

      {/* Headline */}
      <div className="overflow-hidden px-8 md:px-27.75 mb-16">
        <h2 className="industry-title font-(family-name:--font-right-grotesk) text-[4vw] font-black leading-none tracking-[-0.02em] uppercase text-center">
          Some Of The Things We&apos;ve Done
        </h2>
      </div>

      {/* Top row — static */}
      <div className="flex justify-center items-start gap-12 px-8 md:px-27.75 mb-4">
        {topRow.map((item) => (
          <div key={item.num} className="flex items-start gap-1">
            <sup className="font-[Arial] text-[10px] text-black mt-3 leading-none">
              {item.num}
            </sup>
            <span className="font-(family-name:--font-right-grotesk) font-black uppercase leading-none text-[clamp(2rem,7vw,8rem)] tracking-[-0.02em] whitespace-nowrap flex justify-between">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom row — infinite marquee */}
      <div className="w-full overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap will-change-transform"
        >
          {/* duplicate for seamless loop */}
          {[...bottomRow, ...bottomRow].map((item, i) => (
            <div key={i} className="flex items-start gap-1 mr-12 shrink-0">
              <sup className="font-[Arial] text-[10px] text-black mt-3 leading-none">
                {item.num}
              </sup>
              <span className="font-(family-name:--font-right-grotesk) font-black uppercase leading-none text-[9vw] tracking-[-0.02em]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
