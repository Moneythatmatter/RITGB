"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand your business",
    description:
      "We clarify what you offer, who you want to reach and what a useful customer action looks like.",
  },
  {
    number: "02",
    title: "Build the plan",
    description:
      "We define the channels, messages, deliverables and responsibilities needed to support your priorities.",
  },
  {
    number: "03",
    title: "Create and launch",
    description:
      "We prepare the agreed content and campaigns, connecting them with a clear customer journey.",
  },
  {
    number: "04",
    title: "Review and improve",
    description:
      "We assess the available results and use those findings to guide the next round of work.",
  },
];

export default function DigitalMarketingProcess() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".process-header", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".process-col", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-grid",
          start: "top 85%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black text-white py-20 md:py-28 lg:py-32 px-6 md:px-14 lg:px-20"
    >
      <div className="process-header grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 md:mb-24">
        <div className="lg:col-span-7">
          <h2 className="font-(family-name:--font-right-grotesk) text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black uppercase leading-[0.92] tracking-[-0.03em] text-white select-none">
            DIGITAL MARKETING <br />
            AGENCY INDIA
          </h2>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center lg:pt-2">
          <p className="font-arial text-2xl sm:text-3xl lg:text-[2.2rem] text-[#FFBBD8] leading-tight tracking-tight">
            Understand. Plan. Create. <br />
            Improve.
          </p>
        </div>
      </div>

      <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
        {steps.map((step, index) => (
          <div key={index} className="process-col flex flex-col">
            <div className="w-full h-[1px] bg-neutral-800 mb-6 sm:mb-8" />

            <span className="font-(family-name:--font-right-grotesk) text-5xl sm:text-6xl md:text-7xl font-black text-[#52B788] mb-4 sm:mb-6 leading-none">
              {step.number}
            </span>

            <h3 className="font-sans font-bold text-base sm:text-lg text-white mb-2.5 sm:mb-3 leading-snug">
              {step.title}
            </h3>

            <p className="font-sans text-neutral-400 text-xs sm:text-[13px] md:text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
