"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    title: "Social media strategy:",
    description:
      "Audience priorities, channel selection, content themes and a publishing plan tied to your business goals.",
  },
  {
    num: "02",
    title: "Content calendars:",
    description:
      "A structured schedule of topics, formats and calls to action, so your presence feels consistent rather than improvised.",
  },
  {
    num: "03",
    title: "Creative and copy:",
    description:
      "Branded static posts, carousels and agreed video formats with messages customers can understand quickly.",
  },
  {
    num: "04",
    title: "Profile improvements:",
    description:
      "Clear descriptions, relevant links and a more direct path from your profile to your website or enquiry channel.",
  },
  {
    num: "05",
    title: "Publishing and coordination:",
    description:
      "An approval and scheduling process that keeps content moving and responsibilities clear.",
  },
  {
    num: "06",
    title: "Performance reviews:",
    description:
      "A review of reach, engagement, relevant clicks and enquiries where tracking is available.",
  },
];

export default function SocialMediaMarketingServicesInclude() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".scope-headline", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".service-row", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-container",
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
      <div className="flex items-center gap-2.5 pb-4 mb-8 md:mb-10">
        <span className="font-[Arial] text-[11px] md:text-xs uppercase tracking-widest text-neutral-800">
          THE SCOPE / WHAT WE DO
        </span>
      </div>

      <div className="mb-12 md:mb-16 max-w-9xl">
        <h2 className="scope-headline font-(family-name:--font-right-grotesk) text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black uppercase leading-[0.92] tracking-[-0.03em] text-black select-none">
          WHAT OUR SOCIAL MEDIA MARKETING SERVICES INCLUDE
        </h2>
      </div>

      <div className="services-container border-t border-neutral-300">
        {services.map((item, index) => (
          <div
            key={index}
            className="service-row group py-7 md:py-9 border-b border-neutral-300 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center transition-colors duration-200 hover:bg-neutral-100/60 px-2"
          >
            <div className="md:col-span-1">
              <span className="font-sans font-bold text-xs md:text-sm text-black">
                {item.num}
              </span>
            </div>

            <div className="md:col-span-4">
              <h3 className="font-(family-name:--font-right-grotesk) text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight">
                {item.title}
              </h3>
            </div>

            <div className="md:col-span-6">
              <p className="font-sans text-neutral-700 text-sm md:text-base leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>

            <div className="md:col-span-1 flex md:justify-end">
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-black transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
