"use client";

import { useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  { src: "/images/crtly.png", name: "Crtly", category: "Mobile App" },
  {
    src: "/images/tansto.png",
    name: "Tansto",
    category: "Web Design",
  },
];

export default function CaseStudy() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="bg-[#f0eeea] py-24 px-8 md:px-27.75">
      {/* Label */}
      <p className="font-[Arial] text-xs tracking-widest uppercase text-black mb-8">
        Case Study Section
      </p>

      {/* Headline */}
      <div className="overflow-hidden mb-20">
        <h2 className="case-title font-(family-name:--font-right-grotesk) text-[4vw] font-black leading-none tracking-[-0.02em] uppercase">
          From Low Reach To Real Results
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cases.map((c, i) => (
          <div key={i} className="flex flex-col gap-4">
            <div
              className="case-card relative w-full aspect-4/3 rounded-2xl overflow-hidden cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.5s ease",
              }}
            >
              <Image
                src={c.src}
                alt={c.name}
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Card label */}
            <div>
              <p className="font-(family-name:--font-right-grotesk) font-bold text-base">
                {c.name}
              </p>
              <p className="font-[Arial] text-sm text-black">{c.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
