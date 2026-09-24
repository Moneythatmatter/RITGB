"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const brandingProjects = [
  {
    title: "ANTARAAL RESORT",
    category: "Brand identity",
    image: "/images/work/work1.webp",
    link: "https://antaraalresort.com/",
  },
  {
    title: "PAWZWELL",
    category: "Logo & brand identity",
    image: "/images/work/temp.webp",
    link: "https://pawzwell.com/",
  },
  {
    title: "THE BLISS PALAMPUR",
    category: "Branding",
    image: "/images/work/work3.webp",
    link: "https://theblisspalampur.com/",
  },
];

export default function BrandingSelectedWork() {
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

      gsap.from(".project-card-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 md:mb-20">
        <div className="lg:col-span-6">
          <h2 className="work-headline font-(family-name:--font-right-grotesk) text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase leading-[0.88] tracking-[-0.03em] text-black select-none">
            SELECTED WORK.
          </h2>
        </div>

        <div className="lg:col-span-6 flex flex-col items-start lg:pt-4">
          <p className="text-neutral-900 text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed max-w-lg">
            A few RITGB projects connected to branding.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-stretch mb-16">
        {/* Antaraal Resort (Left Column - Full Height Bento Card) */}
        <div className="project-card-item flex flex-col h-full justify-between">
          <a
            href={brandingProjects[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full h-[380px] md:h-auto md:flex-1 overflow-hidden rounded-sm bg-neutral-200 block"
          >
            <Image
              src={brandingProjects[0].image}
              alt={brandingProjects[0].title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Top Right Arrow Badge */}
            <div className="absolute top-4 right-4 w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/80 text-white flex items-center justify-center text-sm transition-all duration-300 group-hover:bg-[#4db685] group-hover:text-black z-10">
              <span>↗</span>
            </div>
          </a>

          <div className="flex items-center justify-between pt-4">
            <h3 className="font-(family-name:--font-right-grotesk) text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
              {brandingProjects[0].title}
            </h3>
            <span className="text-xs md:text-sm text-neutral-600 font-normal">
              {brandingProjects[0].category}
            </span>
          </div>
        </div>

        {/* Right Column with Pawzwell & The Bliss */}
        <div className="flex flex-col gap-10 md:gap-14 h-full justify-between">
          {/* Pawzwell */}
          <div className="project-card-item flex flex-col">
            <a
              href={brandingProjects[1].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full aspect-[16/10] md:aspect-[16/9.5] overflow-hidden rounded-sm bg-neutral-200 block"
            >
              <Image
                src={brandingProjects[1].image}
                alt={brandingProjects[1].title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 right-4 w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/80 text-white flex items-center justify-center text-sm transition-all duration-300 group-hover:bg-[#4db685] group-hover:text-black z-10">
                <span>↗</span>
              </div>
            </a>

            <div className="flex items-center justify-between pt-4">
              <h3 className="font-(family-name:--font-right-grotesk) text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
                {brandingProjects[1].title}
              </h3>
              <span className="text-xs md:text-sm text-neutral-600 font-normal">
                {brandingProjects[1].category}
              </span>
            </div>
          </div>

          {/* The Bliss Palampur */}
          <div className="project-card-item flex flex-col">
            <a
              href={brandingProjects[2].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full aspect-[16/10] md:aspect-[16/9.5] overflow-hidden rounded-sm bg-neutral-200 block"
            >
              <Image
                src={brandingProjects[2].image}
                alt={brandingProjects[2].title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 right-4 w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/80 text-white flex items-center justify-center text-sm transition-all duration-300 group-hover:bg-[#4db685] group-hover:text-black z-10">
                <span>↗</span>
              </div>
            </a>

            <div className="flex items-center justify-between pt-4">
              <h3 className="font-(family-name:--font-right-grotesk) text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
                {brandingProjects[2].title}
              </h3>
              <span className="text-xs md:text-sm text-neutral-600 font-normal">
                {brandingProjects[2].category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Link: EXPLORE ALL WORK */}
      <div className="flex justify-end pt-4">
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
