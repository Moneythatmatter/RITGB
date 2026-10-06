"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface HowWeWorkSectionProps {
  tag?: string;
  headline?: string;
  description: string;
}

export default function HowWeWorkSection({
  tag = "THE PROCESS / FROM IDEA TO ACTION",
  headline = "HOW WE WORK",
  description,
}: HowWeWorkSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".work-headline", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".work-right", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.2,
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
      className="w-full bg-[#080808] text-white py-20 md:py-28 px-6 md:px-14 lg:px-20 border-t border-white/5"
    >
      <div className="flex items-center gap-2.5 pb-4 mb-10 md:mb-14">
        <span className="font-sans text-[11px] md:text-xs uppercase tracking-widest text-neutral-400">
          {tag}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="work-headline lg:col-span-6 flex items-center gap-4 sm:gap-6 flex-wrap sm:flex-nowrap">
          <h2 className="font-(family-name:--font-right-grotesk) text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase leading-[0.9] tracking-[-0.03em] text-white select-none whitespace-nowrap">
            {headline}
          </h2>

          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white shrink-0"
          >
            <path
              d="M12 52L50 14M50 14H22M50 14V42"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="work-right lg:col-span-6 flex flex-col items-start lg:pt-2">
          <p className="text-neutral-300 text-base sm:text-lg lg:text-xl font-sans leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
