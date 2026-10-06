"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CampaignManagementVisualConcept() {
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

      gsap.from(".delivery-card", {
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

      gsap.from(".make-it-happen-sticky", {
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
      <div className="w-full bg-[#FF4D5E] rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden text-black min-h-[480px] lg:min-h-[560px] flex flex-col justify-between shadow-xs">
        {/* Top Header */}
        <div className="flex items-center justify-between w-full font-sans text-[11px] md:text-xs uppercase tracking-widest text-black mb-8 md:mb-12">
          <span>RITGB / CAMPAIGN MANAGEMENT</span>
          <span>VISUAL CONCEPT</span>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center grow">
          {/* Left Title */}
          <div className="concept-headline lg:col-span-5 flex flex-col items-start z-10 select-none">
            <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-black mb-1">
              One direction.
            </span>
            <h2 className="font-(family-name:--font-right-grotesk) text-6xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[7.5rem] font-black uppercase leading-[0.88] tracking-[-0.03em] text-black">
              ALL <br />
              TOGETHER.
            </h2>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end items-center relative">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px]">
              {/* Delivery Plan Card */}
              <div className="delivery-card w-full bg-white border-2 border-black rounded-sm p-6 sm:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-[2.5deg] z-10 flex flex-col">
                <div className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-black font-semibold mb-4">
                  CAMPAIGN / DELIVERY PLAN
                </div>

                {/* Timeline / Milestone Tags */}
                <div className="flex items-center justify-between font-sans text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-4 px-1">
                  <span>BRIEF</span>
                  <span>CREATE</span>
                  <span>LAUNCH</span>
                </div>

                {/* Color Action Rows */}
                <div className="space-y-2.5 mb-5">
                  <div className="bg-[#FFB7D5] border-2 border-black p-3 sm:p-3.5 flex items-center justify-between rounded-xs transition-transform hover:translate-x-1">
                    <span className="font-(family-name:--font-right-grotesk) font-black text-sm sm:text-base md:text-lg tracking-tight uppercase text-black">
                      THE MESSAGE
                    </span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-black" />
                  </div>

                  <div className="bg-[#70D6BC] border-2 border-black p-3 sm:p-3.5 flex items-center justify-between rounded-xs transition-transform hover:translate-x-1">
                    <span className="font-(family-name:--font-right-grotesk) font-black text-sm sm:text-base md:text-lg tracking-tight uppercase text-black">
                      THE CHANNELS
                    </span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-black" />
                  </div>

                  <div className="bg-[#4AB87C] border-2 border-black p-3 sm:p-3.5 flex items-center justify-between rounded-xs transition-transform hover:translate-x-1">
                    <span className="font-(family-name:--font-right-grotesk) font-black text-sm sm:text-base md:text-lg tracking-tight uppercase text-black">
                      THE NEXT STEP
                    </span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-black" />
                  </div>
                </div>

                {/* Card footer text */}
                <p className="font-serif text-base sm:text-lg text-black mt-1">
                  One idea. Every touchpoint.
                </p>
              </div>

              {/* Sticky Note Badge */}
              <div className="make-it-happen-sticky absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-4 bg-[#FFB7D5] border-2 border-black p-3.5 sm:p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-[6deg] select-none z-20">
                <div className="flex flex-col font-(family-name:--font-right-grotesk) font-black uppercase text-black leading-[0.9] tracking-tight text-base sm:text-lg">
                  <span>LET&apos;S</span>
                  <span>MAKE</span>
                  <span>IT HAPPEN.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
