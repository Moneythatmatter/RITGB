"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DigitalMarketingVisualConcept() {
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

      gsap.from(".dm-card-1", {
        y: 25,
        rotation: -8,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".concept-arrow-1", {
        x: -15,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.45,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".dm-card-2", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.55,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".concept-arrow-2", {
        x: -15,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.7,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".dm-card-3", {
        y: 25,
        rotation: 8,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".concept-dot", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(2.5)",
        delay: 0.95,
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
      <div className="visual-concept-container w-full bg-[#FFC4DE] rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-16 lg:p-20 relative overflow-hidden flex items-center justify-center min-h-[360px] sm:min-h-[420px] md:min-h-[480px]">
        <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto py-2 gap-3 sm:gap-6 md:gap-8 lg:gap-10">
          <div className="concept-sparkle shrink-0 hidden lg:block">
            <svg
              viewBox="0 0 100 100"
              className="w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14 text-black fill-current"
            >
              <path d="M50 0 C50 32, 68 50, 100 50 C68 50, 50 68, 50 100 C50 68, 32 50, 0 50 C32 50, 50 32, 50 0 Z" />
            </svg>
          </div>

          <div className="dm-card-1 shrink-0 hidden lg:flex w-[180px] bg-white border-[3.5px] border-black rounded-[28px] p-3.5 flex-col items-center shadow-xs transform -rotate-3">
            <div className="w-8 h-[3px] bg-black rounded-full mb-3" />

            <div className="w-full aspect-square bg-[#FA435A] rounded-2xl flex items-center justify-center mb-3">
              <svg
                viewBox="0 0 100 100"
                className="w-16 h-16 text-[#FFC4DE] fill-current"
              >
                <path d="M50 0 C50 32, 68 50, 100 50 C68 50, 50 68, 50 100 C50 68, 32 50, 0 50 C32 50, 50 32, 50 0 Z" />
              </svg>
            </div>

            <div className="w-full flex items-center gap-1.5 mb-2 px-0.5">
              <div className="w-2 h-2 rounded-full bg-black shrink-0" />
              <div className="w-16 h-[2px] bg-black rounded-full" />
            </div>

            <div className="w-full flex flex-col gap-2 mb-1 px-0.5">
              <div className="w-full h-[2.5px] bg-black rounded-full" />
              <div className="w-3/4 h-[2.5px] bg-black rounded-full" />
            </div>
          </div>

          <div className="concept-arrow-1 shrink-0 hidden lg:block">
            <svg
              viewBox="0 0 40 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 md:w-10 text-black"
            >
              <path
                d="M1 10H37M37 10L27 2M37 10L27 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="dm-card-2 shrink-0 w-[220px] sm:w-[260px] md:w-[280px] lg:w-[240px] bg-white border-[3px] sm:border-[3.5px] border-black rounded-xl sm:rounded-2xl p-3 sm:p-3.5 flex flex-col shadow-xs">
            <div className="flex items-center gap-1.5 pb-2 border-b-[2px] border-black/10 mb-2 sm:mb-2.5">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FA435A]" />
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFBBD8]" />
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#6DC9BC]" />
            </div>

            <div className="w-full bg-[#FFC4DE] rounded-full px-2 py-1 flex items-center gap-1.5 mb-2.5 sm:mb-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="w-3 h-3 text-black shrink-0"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <div className="w-20 sm:w-28 h-[2px] bg-black/80 rounded-full" />
            </div>

            <div className="w-full grid grid-cols-2 gap-2 mb-2.5 sm:mb-3">
              <div className="h-16 sm:h-20 md:h-22 bg-[#6DC9BC] rounded-lg sm:rounded-xl p-1.5 flex items-end justify-center relative overflow-hidden">
                <svg
                  viewBox="0 0 40 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-black"
                >
                  <path
                    d="M3 21L14 13L24 17L37 5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="h-16 sm:h-20 md:h-22 bg-[#52B788] rounded-lg sm:rounded-xl p-1.5 flex items-end justify-around">
                <div className="w-[3px] sm:w-1 h-3 sm:h-4 bg-black rounded-full" />
                <div className="w-[3px] sm:w-1 h-6 sm:h-8 bg-black rounded-full" />
                <div className="w-[3px] sm:w-1 h-9 sm:h-12 bg-black rounded-full" />
                <div className="w-[3px] sm:w-1 h-11 sm:h-14 bg-black rounded-full" />
              </div>
            </div>

            <div className="w-full flex flex-col gap-1.5 sm:gap-2 mb-2 px-0.5">
              <div className="w-full h-[2px] bg-black rounded-full" />
            </div>
            <div className="w-16 sm:w-20 md:w-24 h-3.5 sm:h-4 bg-black rounded-full mt-auto" />
          </div>

          <div className="concept-arrow-2 shrink-0 hidden lg:block">
            <svg
              viewBox="0 0 40 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 md:w-10 text-black"
            >
              <path
                d="M1 10H37M37 10L27 2M37 10L27 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="dm-card-3 shrink-0 hidden lg:flex w-[180px] bg-[#52B788] border-[3.5px] border-black rounded-2xl p-3.5 flex-col items-center shadow-xs transform rotate-3">
            <div className="w-22 h-22 rounded-full bg-white flex items-center justify-center mb-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-11 h-11 text-black"
              >
                <path d="M4 19H9V14H14V9H19" />
                <path d="M15 5H20V10" />
                <line x1="20" y1="5" x2="14" y2="11" />
              </svg>
            </div>
            <div className="w-full flex flex-col gap-2 mb-1 px-1">
              <div className="w-full h-[3px] bg-black rounded-full" />
              <div className="w-3/4 h-[3px] bg-black rounded-full" />
            </div>
          </div>
          <div className="concept-dot shrink-0 self-end mb-2 hidden lg:block">
            <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-[#FA435A] inline-block" />
          </div>
        </div>
      </div>
    </section>
  );
}
