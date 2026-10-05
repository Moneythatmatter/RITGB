"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PerformanceMarketingApproach() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".approach-headline", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".approach-right", {
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
      className="w-full bg-[#f8f8f7] text-black py-20 md:py-28 px-6 md:px-14 lg:px-20"
    >
      <div className="flex items-center gap-2.5 pb-4 mb-10 md:mb-14">
        <span className="font-sans text-[11px] md:text-xs uppercase tracking-widest text-neutral-800">
          RITGB / THE APPROACH
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-6">
          <h2 className="approach-headline font-(family-name:--font-right-grotesk) text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase leading-[0.9] tracking-[-0.03em] text-black">
            MEASURE BEYOND{" "}
            <br className="hidden lg:block" />
            THE CLICK
          </h2>
        </div>

        <div className="approach-right lg:col-span-6 flex flex-col items-start lg:pt-2 space-y-6">
          <p className="text-neutral-800 text-base sm:text-lg lg:text-xl font-sans leading-relaxed max-w-xl">
            Low-cost clicks are useful only when they help you reach the right customers. We consider what happens after the ad: whether visitors understand the offer, take action and become useful opportunities for your business.
          </p>

          <p className="text-neutral-800 text-base sm:text-lg lg:text-xl font-sans leading-relaxed max-w-xl">
            Our Performance Marketing Services connect campaign metrics with the customer journey, so optimisation has a clear purpose.
          </p>
        </div>
      </div>
    </section>
  );
}
