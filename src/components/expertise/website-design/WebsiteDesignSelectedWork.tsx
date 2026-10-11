"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WebsiteDesignSelectedWork() {
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

      gsap.from(".project-showcase-1", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-showcase-1",
          start: "top 85%",
        },
      });

      gsap.from(".project-showcase-2", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-showcase-2",
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
          SELECTED WEBSITE WORK
        </span>
      </div>

      {/* 2-Column Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 md:mb-24">
        <div className="lg:col-span-7">
          <h2 className="work-headline font-(family-name:--font-right-grotesk) text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase leading-[0.88] tracking-[-0.03em] text-black select-none">
            LOOK
            <br />
            CLOSER.
          </h2>
        </div>

        <div className="lg:col-span-5 flex flex-col items-start lg:pt-6">
          <p className="text-neutral-900 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-sm">
            Two website experiences designed to express very different brands.
          </p>
        </div>
      </div>

      {/* Project 1: Antaraal Resort (Image Left, Text Right) */}
      <div className="project-showcase-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 md:mb-32">
        {/* Left Image */}
        <div className="lg:col-span-7">
          <a
            href="https://antaraalresort.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full aspect-[16/10] overflow-hidden rounded-xs bg-neutral-200 block shadow-sm"
          >
            <Image
              src="/images/work/work5.webp"
              alt="Antaraal Resort"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/80 text-white flex items-center justify-center text-sm md:text-base transition-all duration-300 group-hover:bg-[#4db685] group-hover:text-black z-10 shadow-md">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </a>
        </div>

        {/* Right Info */}
        <div className="lg:col-span-5 flex flex-col items-start border-t border-neutral-300 pt-6">
          <span className="font-sans text-xs text-neutral-500 uppercase tracking-widest mb-6 block">
            01 / HOSPITALITY WEBSITE
          </span>

          <h3 className="font-(family-name:--font-right-grotesk) text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-black mb-4 leading-none">
            ANTARAAL
            <br />
            RESORT.
          </h3>

          <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            A responsive website shaped around the resort&apos;s identity and guest
            experience.
          </p>

          <a
            href="https://antaraalresort.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[Arial] font-bold text-xs uppercase tracking-widest text-black border-b border-black pb-1 hover:text-[#4db685] hover:border-[#4db685] transition-colors inline-flex items-center gap-1.5"
          >
            VIEW PROJECT <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Project 2: Epsum Labs (Text Left, Image Right) */}
      <div className="project-showcase-2 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Info */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-start border-t border-neutral-300 pt-6">
          <span className="font-sans text-xs text-neutral-500 uppercase tracking-widest mb-6 block">
            02 / TECHNOLOGY WEBSITE
          </span>

          <h3 className="font-(family-name:--font-right-grotesk) text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-black mb-4 leading-none">
            EPSUM
            <br />
            LABS.
          </h3>

          <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            A refined digital experience with a cohesive visual language for a
            technology business.
          </p>

          <a
            href="https://epsumlabs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[Arial] font-bold text-xs uppercase tracking-widest text-black border-b border-black pb-1 hover:text-[#4db685] hover:border-[#4db685] transition-colors inline-flex items-center gap-1.5"
          >
            VIEW PROJECT <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <a
            href="https://epsumlabs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full aspect-[16/10] overflow-hidden rounded-xs bg-neutral-200 block shadow-sm"
          >
            <Image
              src="/images/work/work6.webp"
              alt="Epsum Labs"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/80 text-white flex items-center justify-center text-sm md:text-base transition-all duration-300 group-hover:bg-[#4db685] group-hover:text-black z-10 shadow-md">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
