"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    number: 50,
    suffix: "+",
    label: "brands trusted Us With Their Internet Problems",
  },
  {
    number: 200,
    suffix: "+",
    label: "Campaigns Launched Into The Algorithm Battlefield",
  },
  {
    number: 10,
    suffix: "+",
    label: "Industries Successfully Marketed Without Losing Sanity",
  },
];

export default function Numbers() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".numbers-title", {
        yPercent: 120,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      stats.forEach((stat, i) => {
        const el = document.querySelector(`.stat-number-${i}`);
        if (!el) return;

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: stat.number,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
            onUpdate() {
              el.textContent = Math.ceil(Number(el.textContent)) + stat.suffix;
            },
          },
        );
      });

      gsap.from(".stat-card", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".stat-card",
          start: "top 85%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#f0eeea] py-25 md:py-44 px-8 md:px-27.75"
    >
      <p className="font-[Arial] text-xs tracking-widest uppercase text-black mb-12.5">
        Numbers Section
      </p>
      {/* Headline */}
      <div className="overflow-hidden mb-24 text-center">
        <h2 className="numbers-title font-(family-name:--font-right-grotesk) text-[9vw] font-black leading-none tracking-[-0.02em] uppercase">
          What We&apos;ve Done So Far
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 md:mb-0">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="stat-card bg-white rounded-sm p-10 flex flex-col justify-between w-full aspect-368/264"
          >
            <span
              className={`stat-number-${i} font-(family-name:--font-right-grotesk) text-7xl md:text-6xl font-black`}
            >
              {stat.number}
              {stat.suffix}
            </span>
            <p className="capitalize font-[Arial] text-sm text-black leading-snug max-w-50">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
