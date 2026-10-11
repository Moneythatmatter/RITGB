"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Check, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function LeadGenerationVisualConcept() {
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

      gsap.from(".enquiry-card", {
        y: 50,
        opacity: 0,
        rotation: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".opportunity-sticky", {
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
      <div className="w-full bg-[#56BFAA] rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden text-black min-h-[480px] lg:min-h-[560px] flex flex-col justify-between shadow-xs">
        <div className="flex items-center justify-between w-full font-sans text-[11px] md:text-xs uppercase tracking-widest text-black mb-8 md:mb-12">
          <span>RITGB / LEAD GENERATION</span>
          <span>VISUAL CONCEPT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center grow">
          <div className="concept-headline lg:col-span-5 flex flex-col items-start z-10 select-none">
            <span className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-black mb-1">
              From interest.
            </span>
            <h2 className="font-(family-name:--font-right-grotesk) text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.2rem] font-black uppercase leading-[0.88] tracking-[-0.03em] text-black">
              TO A <br className="hidden lg:block" />
              NEXT <br className="hidden lg:block" />
              STEP.
            </h2>
          </div>

          <div className="lg:col-span-7 flex justify-center lg:justify-end items-center relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              <div className="enquiry-card w-full bg-white border-2 border-black rounded-sm p-6 sm:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-[3deg] z-10 flex flex-col">
                <div className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-black font-semibold mb-4">
                  A CLEAR ENQUIRY JOURNEY
                </div>

                <h3 className="font-(family-name:--font-right-grotesk) text-3xl sm:text-4xl lg:text-[2.6rem] font-black uppercase leading-[0.9] text-black mb-6">
                  LET&apos;S <br />
                  CONNECT.
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="border-b border-black pb-1.5 flex items-center justify-between">
                    <span className="font-sans text-xs sm:text-sm text-neutral-800">
                      Your name
                    </span>
                    <Check className="w-3.5 h-3.5 text-neutral-600" />
                  </div>

                  <div className="border-b border-black pb-1.5">
                    <span className="font-sans text-xs sm:text-sm text-neutral-800">
                      Your business
                    </span>
                  </div>

                  <div className="border-b border-black pb-1.5">
                    <span className="font-sans text-xs sm:text-sm text-neutral-800">
                      Your next goal
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full bg-black text-white font-sans font-bold text-xs py-2.5 rounded-full flex items-center justify-center gap-1.5 cursor-pointer hover:bg-neutral-800 transition-colors"
                >
                  <span>Make the next move</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="opportunity-sticky absolute -bottom-4 -right-3 sm:-bottom-5 sm:-right-6 bg-[#F7B6C8] border-2 border-black p-3.5 sm:p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-[4deg] select-none z-20">
                <div className="flex flex-col font-(family-name:--font-right-grotesk) font-black uppercase text-black leading-[0.9] tracking-tight">
                  <span className="text-lg sm:text-xl">HELLO,</span>
                  <span className="text-lg sm:text-xl">OPPORTUNITY.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
