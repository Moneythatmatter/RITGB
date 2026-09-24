"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const uiuxProjects = [
  {
    title: "ANTARAAL RESORT",
    category: "Responsive website experience",
    image: "/images/work/work5.webp",
    link: "https://antaraalresort.com/",
  },
  {
    title: "EPSUM LABS",
    category: "Website digital experience",
    image: "/images/work/work6.webp",
    link: "https://epsumlabs.com/",
  },
];

export default function UiUxSelectedWork() {
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
      <div className="flex items-center gap-2.5 pb-4 mb-12 md:mb-16">
        <span className="font-[Arial] text-xs uppercase tracking-widest text-black font-medium">
          PROOF IN THE WORK
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 md:mb-16">
        <div className="lg:col-span-7">
          <h2 className="work-headline font-(family-name:--font-right-grotesk) text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase leading-[0.88] tracking-[-0.03em] text-black select-none">
            SELECTED

            WORK.
          </h2>
        </div>

        <div className="lg:col-span-5 flex flex-col items-start lg:pt-6">
          <p className="text-neutral-900 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-sm">
            A few RITGB projects connected to ui/ux design.
          </p>
        </div>
      </div>

      <div className="projects-container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12">
        {uiuxProjects.map((project, idx) => (
          <div key={idx} className="project-card-item flex flex-col">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full aspect-[16/10] md:aspect-[16/10.5] overflow-hidden rounded-xs bg-neutral-200 block"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={idx === 0}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 right-4 md:top-5 md:right-5 w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/80 text-white flex items-center justify-center text-sm transition-all duration-300 group-hover:bg-[#4db685] group-hover:text-black z-10 shadow-md">
                <span>↗</span>
              </div>
            </a>

            <div className="flex items-center justify-between pt-4 md:pt-5">
              <h3 className="font-(family-name:--font-right-grotesk) text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                {project.title}
              </h3>
              <span className="text-xs sm:text-sm text-neutral-600 font-normal">
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end pt-4 md:pt-6">
        <Link
          href="/work"
          className="font-[Arial] font-bold text-xs uppercase tracking-widest text-black border-b border-black pb-1 hover:text-[#4db685] hover:border-[#4db685] transition-colors inline-flex items-center gap-1.5"
        >
          EXPLORE ALL WORK <span>↗</span>
        </Link>
      </div>
    </section>
  );
}
