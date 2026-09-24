"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    num: "01 / 06",
    title: "CATEGORY REVIEW",
    description: "Understand the customer, product and shelf context.",
  },
  {
    num: "02 / 06",
    title: "DESIGN DIRECTION",
    description: "Explore a visual route that fits your brand.",
  },
  {
    num: "03 / 06",
    title: "LABEL HIERARCHY",
    description: "Prioritize product name, variant and key information.",
  },
  {
    num: "04 / 06",
    title: "ARTWORK DESIGN",
    description: "Develop layouts for the agreed formats.",
  },
  {
    num: "05 / 06",
    title: "VARIANT SYSTEM",
    description: "Keep ranges coherent and easy to navigate.",
  },
  {
    num: "06 / 06",
    title: "PRINT PREPARATION",
    description: "Prepare artwork against supplier specifications.",
  },
];

export default function PackagingDesignWhatWeDesign() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".what-headline", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".what-grid-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".what-grid",
          start: "top 85%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white text-black py-20 md:py-28 px-6 md:px-14 lg:px-20 border-t border-black/5"
    >
      <div className="flex items-center gap-2.5 pb-4 mb-12 md:mb-16">
        <span className="font-[Arial] text-xs uppercase tracking-widest text-black font-medium">
          WHAT GOES INTO IT
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 md:mb-20">
        <div className="lg:col-span-6">
          <h2 className="what-headline font-(family-name:--font-right-grotesk) text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase leading-[0.88] tracking-[-0.03em] text-black select-none">
            WHAT WE
            <br />
            DESIGN.
          </h2>
        </div>

        <div className="lg:col-span-6 flex flex-col items-start lg:pt-4">
          <p className="text-neutral-900 text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed max-w-lg">
            A packaging system with both visual appeal and practical details.
          </p>
        </div>
      </div>

      <div className="what-grid border border-neutral-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 lg:divide-y-0">
        {items.map((item, index) => (
          <div
            key={index}
            className={`what-grid-item p-8 md:p-10 min-h-[220px] md:min-h-[260px] flex flex-col justify-start border-neutral-300 transition-colors duration-200 hover:bg-neutral-50/70 ${
              index % 3 !== 2 ? "lg:border-r" : ""
            } ${index % 2 !== 1 ? "md:max-lg:border-r" : ""} ${
              index < 3 ? "lg:border-b" : ""
            } ${index < 4 ? "md:max-lg:border-b" : ""} ${
              index !== 0 ? "max-md:border-t" : ""
            }`}
          >
            <span className="font-sans text-xs text-neutral-400 tracking-wider mb-8 md:mb-10 block">
              {item.num}
            </span>

            <h3 className="font-(family-name:--font-right-grotesk) text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-3 leading-none">
              {item.title}
            </h3>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
