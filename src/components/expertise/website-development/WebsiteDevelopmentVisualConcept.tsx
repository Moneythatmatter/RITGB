"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WebsiteDevelopmentVisualConcept() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".visual-concept-container", {
        scale: 0.96,
        y: 35,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".concept-sparkle", {
        scale: 0,
        rotation: -45,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(2)",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".browser-element", {
        y: 25,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".tablet-element", {
        x: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".phone-element", {
        y: 20,
        scale: 0.9,
        opacity: 0,
        duration: 0.65,
        ease: "back.out(1.8)",
        delay: 0.65,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".accents-element", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(2)",
        delay: 0.8,
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
      <div className="visual-concept-container w-full bg-[#FFC4DE] rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-14 lg:p-20 relative overflow-hidden flex items-center justify-center min-h-[360px] sm:min-h-[420px] md:min-h-[480px]">
        <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto py-4">
          <div className="concept-sparkle shrink-0 mr-4 sm:mr-8 md:mr-12 hidden sm:block">
            <svg
              viewBox="0 0 100 100"
              className="hidden lg:block w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14 text-black fill-current"
            >
              <path d="M50 0 C50 32, 68 50, 100 50 C68 50, 50 68, 50 100 C50 68, 32 50, 0 50 C32 50, 50 32, 50 0 Z" />
            </svg>
          </div>

          <div className="browser-element relative bg-white border-[3px] sm:border-[3.5px] border-black rounded-xl sm:rounded-2xl overflow-hidden shadow-xs w-full max-w-[480px] sm:max-w-[540px] md:max-w-[600px] shrink-0">
            <div className="border-b-[3px] border-black px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between bg-white">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FA435A] inline-block" />
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFBBD8] inline-block" />
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#6DC9BC] inline-block" />
              </div>

              <div className="w-40 sm:w-56 md:w-68 h-2 sm:h-2.5 bg-[#FFBBD8] rounded-full mx-auto" />

              <div className="w-8" />
            </div>

            <div className="p-4 sm:p-6 md:p-8 flex items-center justify-between gap-4 sm:gap-6 md:gap-8 bg-white min-h-[190px] sm:min-h-[230px] md:min-h-[260px]">
              <div className="flex flex-col gap-2.5 sm:gap-3.5 max-w-[55%]">
                <div className="w-20 sm:w-28 md:w-32 h-4 sm:h-5 bg-black rounded-xs" />

                <div className="flex flex-col gap-1.5 sm:gap-2 pt-1">
                  <div className="w-36 sm:w-48 md:w-56 h-[2.5px] sm:h-[3px] bg-black rounded-full" />
                  <div className="w-32 sm:w-44 md:w-52 h-[2.5px] sm:h-[3px] bg-black rounded-full" />
                  <div className="w-36 sm:w-48 md:w-56 h-[2.5px] sm:h-[3px] bg-black rounded-full" />
                  <div className="w-24 sm:w-32 md:w-36 h-[2px] bg-black/80 rounded-full" />
                </div>

                <div className="w-16 sm:w-22 md:w-26 h-5 sm:h-6 bg-black rounded-full mt-2" />
              </div>
              <div className="w-[45%] h-28 sm:h-36 md:h-44 bg-[#52B788] rounded-lg sm:rounded-xl flex items-center justify-center relative overflow-hidden shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#FFC4DE] flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black fill-current"
                  >
                    <path d="M50 0 C50 32, 68 50, 100 50 C68 50, 50 68, 50 100 C50 68, 32 50, 0 50 C32 50, 50 32, 50 0 Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex relative -ml-6 sm:-ml-10 md:-ml-14 mt-12 sm:mt-16 md:mt-20 shrink-0 z-10 items-end">
            <div className="tablet-element w-24 sm:w-32 md:w-38 bg-[#6DC9BC] border-[3px] sm:border-[3.5px] border-black rounded-xl sm:rounded-2xl p-2 sm:p-2.5 flex flex-col shadow-xs">
              <div className="w-1.5 h-1.5 bg-black rounded-full mb-1.5 self-center" />

              <div className="w-full h-16 sm:h-22 md:h-26 bg-[#F5F5F5] rounded-lg sm:rounded-xl mb-2 sm:mb-2.5" />

              <div className="w-full flex flex-col gap-1 sm:gap-1.5 px-0.5 pb-1">
                <div className="w-full h-[2px] bg-black rounded-full" />
                <div className="w-3/4 h-[2px] bg-black rounded-full" />
              </div>
            </div>

            <div className="phone-element -ml-5 sm:-ml-7 md:-ml-8 -mb-2 sm:-mb-3 w-14 sm:w-18 md:w-22 bg-[#FA435A] border-[3px] sm:border-[3.5px] border-black rounded-lg sm:rounded-xl p-1.5 sm:p-2 flex flex-col items-center shadow-xs z-20">
              <div className="w-3.5 sm:w-4 h-[2px] bg-black rounded-full mb-2" />

              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white mb-2" />

              <div className="w-3/4 h-[2px] bg-black rounded-full mt-auto" />
            </div>
          </div>

          <div className="accents-element hidden sm:flex flex-col items-center gap-6 ml-4 sm:ml-8 md:ml-12 shrink-0 self-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>

            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-[#52B788]" />
          </div>
        </div>
      </div>
    </section>
  );
}
