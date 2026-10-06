"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function InfluencerMarketingVisualConcept() {
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

      gsap.from(".chemistry-card", {
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

      gsap.from(".audience-sticky", {
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
      <div className="w-full bg-[#FE3D54] rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden text-black min-h-[480px] lg:min-h-[560px] flex flex-col justify-between shadow-xs">
        <div className="flex items-center justify-between w-full font-sans text-[11px] md:text-xs uppercase tracking-widest text-black mb-8 md:mb-12">
          <span>RITGB / INFLUENCER MARKETING</span>
          <span>VISUAL CONCEPT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center grow">
          <div className="concept-headline lg:col-span-5 flex flex-col items-start z-10 select-none">
            <span className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-black mb-1">
              Real voices.
            </span>
            <h2 className="font-(family-name:--font-right-grotesk) text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.2rem] font-black uppercase leading-[0.88] tracking-[-0.03em] text-black">
              RIGHT{" "}
              <br className="hidden lg:block" />
              PEOPLE.
            </h2>
          </div>

          <div className="lg:col-span-7 flex justify-center lg:justify-end items-center gap-4 sm:gap-6 relative">
            <div className="chemistry-card relative w-full max-w-[320px] sm:max-w-[360px] bg-[#F7B6C8] border-2 border-black rounded-sm p-6 sm:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-[3deg] z-10 flex flex-col">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-black flex items-center justify-center mb-6">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black"
                >
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
              </div>

              <div className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-black font-semibold mb-4">
                CREATOR × BRAND
              </div>

              <h3 className="font-(family-name:--font-right-grotesk) text-3xl sm:text-4xl lg:text-[2.6rem] font-black uppercase leading-[0.9] text-black mb-8">
                GOOD <br />
                CHEMISTRY.
              </h3>

              <div className="w-full h-px bg-black mb-4" />

              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-sans text-black">
                <span>Your story, shared.</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="audience-sticky relative w-[140px] sm:w-[170px] bg-[#56BFAA] border-2 border-black p-4 sm:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-[4deg] select-none shrink-0 z-20">
              <div className="flex flex-col">
                <span className="font-(family-name:--font-right-grotesk) text-xl sm:text-2xl font-black uppercase leading-[0.9] tracking-tight text-black">
                  AUDIENCE
                </span>
                <span className="font-serif italic text-base sm:text-lg text-black leading-tight my-1">
                  meets
                </span>
                <span className="font-(family-name:--font-right-grotesk) text-xl sm:text-2xl font-black uppercase leading-[0.9] tracking-tight text-black">
                  BRAND.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
