"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { src: "/images/design.png", alt: "Design" },
  { src: "/images/tech.png", alt: "Technology" },
  { src: "/images/marketing.png", alt: "Marketing" },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".services-line", {
        yPercent: 120,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-white">
      <p className="font-[Arial] text-xs tracking-widest uppercase text-black mb-16 px-8 md:px-27.75 pt-24">
        service section
      </p>
      {/* Headline */}
      <div className="py-24 px-8 md:px-27.75">
        <div className="overflow-hidden">
          <h2 className="font-(family-name:--font-right-grotesk) services-line font-grotesk text-[4vw] font-black leading-none tracking-[-0.02em] uppercase text-center">
            Where We Cause Internet Problems
          </h2>
        </div>
        <div className="overflow-hidden">
          <h2 className="font-(family-name:--font-right-grotesk) services-line font-grotesk text-[4vw] font-black leading-none tracking-[-0.02em] uppercase text-center">
            (For Your Competitors)
          </h2>
        </div>
      </div>

      {/* Stacked Cards */}
      <div className="relative">
        {cards.map((card, i) => (
          <div
            key={i}
            className="sticky h-[60vw] md:h-screen"
            style={{ top: `${0}px` }}
          >
            <div className="relative w-full h-full">
              {" "}
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="100vw"
                loading="eager"
                className="object-contain md:object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
