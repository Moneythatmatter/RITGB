"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { image: "/images/agency/process1.png" },
  { image: "/images/agency/process1.png" },
  { image: "/images/agency/process1.png" },
  { image: "/images/agency/process1.png" },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".process-card");

      cards.forEach((card, i) => {
        gsap.set(card, {
          zIndex: i + 1,

          y: i === 0 ? 0 : "100vh",
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=" + steps.length * 100 + "%",
          scrub: true,
          pin: true,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;

        tl.to(
          card,
          {
            y: 0,
            ease: "none",
          },
          i * 0.5,
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="w-full bg-[#F5F5F5]">
      {/* Header */}
      <div className="py-16 md:py-24 px-6 md:px-16">
        <p className="text-xs font-medium uppercase tracking-widest mb-12">
          Numbers Section
        </p>
        <h2 className="font-(family-name:--font-right-grotesk) text-center text-[8vw] md:text-[5vw] font-black uppercase leading-[1.05] tracking-[-0.03em]">
          Our Process
          <br />
          Without The Buzzwords
        </h2>
      </div>

      {/* Stacked Cards Container */}
      <div
        ref={triggerRef}
        className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      >
        {steps.map((step, i) => (
          <div
            key={i}
            className="process-card absolute w-full max-w-md md:max-w-xl aspect-square rounded-sm overflow-hidden shadow-2xl"
          >
            <div className="relative w-full h-full">
              <Image
                src={step.image}
                alt=""
                fill
                loading="eager"
                sizes="(max-width: 768px) 90vw, 600px"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
