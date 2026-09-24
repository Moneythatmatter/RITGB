"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    num: "01 / 04",
    title: "STRUCTURE & STRATEGY",
    description:
      "Site map, page hierarchy, content order and clear paths to the actions you want visitors to take.",
  },
  {
    num: "02 / 04",
    title: "VISUAL DIRECTION",
    description:
      "Typography, imagery, color and layouts that bring your brand into the digital space with purpose.",
  },
  {
    num: "03 / 04",
    title: "RESPONSIVE SCREENS",
    description:
      "Desktop, tablet and mobile designs shaped for the way people actually browse each device.",
  },
  {
    num: "04 / 04",
    title: "INTERACTIONS & HANDOFF",
    description:
      "Thoughtful states and motion guidance, with organized design files ready for development.",
  },
];

export default function WebsiteDesignWhatWeDesign() {
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

      gsap.from(".what-row", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".what-rows-container",
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
          WHAT WE DESIGN
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 md:mb-20">
        <div className="lg:col-span-6">
          <h2 className="what-headline font-(family-name:--font-right-grotesk) text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase leading-[0.88] tracking-[-0.03em] text-black select-none">
            EVERY
            <br />
            DETAIL HAS
            <br />
            A JOB.
          </h2>
        </div>

        <div className="lg:col-span-6 flex flex-col items-start lg:pt-4">
          <p className="text-neutral-900 text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed max-w-lg">
            From the first page outline to the final mobile screen, we design the
            experience as one connected system.
          </p>
        </div>
      </div>

      <div className="what-rows-container border-t border-neutral-300">
        {items.map((item, index) => (
          <div
            key={index}
            className="what-row group py-8 md:py-12 border-b border-neutral-300 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center transition-colors duration-200 hover:bg-neutral-50/70 px-2"
          >
            <div className="md:col-span-1">
              <span className="font-sans text-xs text-neutral-400 tracking-wider">
                {item.num}
              </span>
            </div>

            <div className="md:col-span-5">
              <h3 className="font-(family-name:--font-right-grotesk) text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black leading-[0.95]">
                {item.title}
              </h3>
            </div>

            <div className="md:col-span-5">
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-md">
                {item.description}
              </p>
            </div>

            <div className="md:col-span-1 flex md:justify-end">
              <span className="text-[#4db685] text-2xl md:text-3xl font-light transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
