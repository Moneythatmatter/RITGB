"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PerformanceMarketingVisualConcept() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".concept-headline", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".campaign-card", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".action-sticky", {
        scale: 0.8,
        opacity: 0,
        rotation: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f8f8f7] py-6 sm:py-10 md:py-16 px-4 sm:px-6 md:px-14 lg:px-20"
    >
      <div className="w-full bg-[#52be80] rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden text-black min-h-[480px] lg:min-h-[560px] flex flex-col justify-between shadow-xs">
        <div className="flex items-center justify-between w-full font-sans text-[11px] md:text-xs uppercase tracking-widest text-black mb-8 md:mb-12">
          <span>RITGB / PERFORMANCE MARKETING</span>
          <span>VISUAL CONCEPT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center grow">
          <div className="concept-headline lg:col-span-5 flex flex-col items-start z-10 select-none">
            <span className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-black mb-1">
              Every move.
            </span>
            <h2 className="font-(family-name:--font-right-grotesk) text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.2rem] font-black uppercase leading-[0.88] tracking-[-0.03em] text-black">
              A CLEAR {" "}
              <br className="hidden lg:block" />
              GOAL.
            </h2>
          </div>

          <div className="lg:col-span-7 flex justify-center lg:justify-end relative">
            <div className="campaign-card relative w-full max-w-[520px] bg-white border-2 border-black rounded-lg sm:rounded-xl p-5 sm:p-7 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FF455A]"></span>
                <span className="w-2 h-2 rounded-full bg-[#F7CC67]"></span>
                <span className="w-2 h-2 rounded-full bg-[#4AD6A6]"></span>
              </div>

              <div className="w-full h-px bg-neutral-300 mb-4" />

              <div className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-800 mb-4">
                CAMPAIGN TEST PLAN
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="bg-[#FFBBD0] p-4 sm:p-6 flex flex-col justify-between aspect-[1/0.95] select-none">
                  <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-wider text-black">
                    CREATIVE A
                  </span>
                  <div className="font-(family-name:--font-right-grotesk) text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.88] tracking-tight text-black mt-3">
                    THE
                    <br />
                    HOOK.
                  </div>
                </div>

                <div className="bg-[#FF455A] p-4 sm:p-6 flex flex-col justify-between aspect-[1/0.95] select-none">
                  <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-wider text-black">
                    CREATIVE B
                  </span>
                  <div className="font-(family-name:--font-right-grotesk) text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.88] tracking-tight text-black mt-3">
                    THE
                    <br />
                    OFFER.
                  </div>
                </div>
              </div>

              <div className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-900 select-none">
                TEST → LEARN → REFINE
              </div>

              <div className="action-sticky absolute -bottom-4 -right-3 sm:-bottom-6 sm:-right-5 bg-[#5de0d2] border-2 border-black p-3.5 sm:p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transform rotate-[5deg] select-none z-20">
                <div className="font-(family-name:--font-right-grotesk) text-lg sm:text-2xl font-black uppercase leading-[0.88] tracking-tight text-black">
                  ACTION
                  <br />
                  OVER
                  <br />
                  ATTENTION.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
