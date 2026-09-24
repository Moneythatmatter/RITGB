"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function PackagingDesignSelectedWork() {
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

      gsap.from(".placeholder-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".placeholder-card",
          start: "top 85%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f8f8f7] text-black py-20 md:py-28 px-6 md:px-14 lg:px-20 border-t border-black/5"
    >
      {/* Top Header Indicator */}
      <div className="flex items-center gap-2.5 pb-4 mb-12 md:mb-16">
        <span className="font-[Arial] text-xs uppercase tracking-widest text-black font-medium">
          PROOF IN THE WORK
        </span>
      </div>

      {/* 2-Column Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 md:mb-16">
        <div className="lg:col-span-7">
          <h2 className="work-headline font-(family-name:--font-right-grotesk) text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase leading-[0.88] tracking-[-0.03em] text-black select-none">
            SELECTED WORK.
          </h2>
        </div>

        <div className="lg:col-span-5 flex flex-col items-start lg:pt-6">
          <p className="text-neutral-900 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-sm">
            Image slots ready for approved packaging design projects.
          </p>
        </div>
      </div>

      {/* Showcase Placeholder Card */}
      <div className="placeholder-card border border-neutral-300 bg-white p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between min-h-[340px] md:min-h-[420px] mb-12">
        <div>
          <span className="font-sans text-xs text-neutral-400 tracking-widest uppercase block mb-10 md:mb-16">
            PROJECT IMAGES / TO BE ADDED
          </span>

          <h3 className="font-(family-name:--font-right-grotesk) text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-black">
            YOUR PACKAGING DESIGN
            <br />
            WORK GOES HERE.
          </h3>
        </div>

        <p className="text-neutral-500 text-xs sm:text-sm font-sans mt-8 md:mt-12">
          Add final image, project name, service label and destination URL in the portfolio data.
        </p>
      </div>

      {/* Bottom Link: EXPLORE ALL WORK */}
      <div className="flex justify-end pt-4 md:pt-6">
        <Link
          href="/work"
          className="font-[Arial] font-bold text-xs uppercase tracking-widest text-black border-b border-black pb-1 hover:text-[#4db685] hover:border-[#4db685] transition-colors inline-flex items-center gap-1.5"
        >
          EXPLORE ALL WORK <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
