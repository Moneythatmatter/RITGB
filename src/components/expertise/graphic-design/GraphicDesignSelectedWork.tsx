"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const graphicProjects = [
  {
    title: "HOTEL VICTORIA GRAND",
    category: "Brochures & promotional creatives",
    image: "/images/work/work4.webp",
    link: "https://hotelvictoriagrand.com/",
  },
];

export default function GraphicDesignSelectedWork() {
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
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-container",
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
            SELECTED
            <br />
            WORK.
          </h2>
        </div>

        <div className="lg:col-span-5 flex flex-col items-start lg:pt-6">
          <p className="text-neutral-900 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-sm">
            A few RITGB projects connected to graphic design.
          </p>
        </div>
      </div>

      {/* Showcase Project Card */}
      <div className="projects-container flex flex-col mb-12">
        {graphicProjects.map((project, idx) => (
          <div key={idx} className="project-card-item flex flex-col">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xs bg-neutral-200 block"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100vw"
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Top Right Arrow Badge */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 w-9 h-9 md:w-11 md:h-11 rounded-full bg-black/80 text-white flex items-center justify-center text-sm md:text-base transition-all duration-300 group-hover:bg-[#4db685] group-hover:text-black z-10 shadow-md">
                <span>↗</span>
              </div>
            </a>

            <div className="flex items-center justify-between pt-5 md:pt-6">
              <h3 className="font-(family-name:--font-right-grotesk) text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-black">
                {project.title}
              </h3>
              <span className="text-xs sm:text-sm text-neutral-600 font-normal">
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Link: EXPLORE ALL WORK */}
      <div className="flex justify-end pt-4 md:pt-6">
        <Link
          href="/work"
          className="font-[Arial] font-bold text-xs uppercase tracking-widest text-black border-b border-black pb-1 hover:text-[#4db685] hover:border-[#4db685] transition-colors inline-flex items-center gap-1.5"
        >
          EXPLORE ALL WORK <span><ArrowUpRight className="w-4 h-4" /></span>
        </Link>
      </div>
    </section>
  );
}

