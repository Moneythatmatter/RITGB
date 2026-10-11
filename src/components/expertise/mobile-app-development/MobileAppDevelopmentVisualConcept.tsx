"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MobileAppDevelopmentVisualConcept() {
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

      gsap.from(".phone-card-1", {
        y: 25,
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

      gsap.from(".phone-card-2", {
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

      gsap.from(".phone-card-3", {
        y: 25,
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
          <div className="concept-sparkle shrink-0 hidden sm:block">
            <svg
              viewBox="0 0 100 100"
              className="w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14 text-black fill-current"
            >
              <path d="M50 0 C50 32, 68 50, 100 50 C68 50, 50 68, 50 100 C50 68, 32 50, 0 50 C32 50, 50 32, 50 0 Z" />
            </svg>
          </div>

          <div className="phone-card-1 shrink-0 w-[105px] sm:w-[130px] md:w-[160px] lg:w-[175px] bg-white border-[3px] sm:border-[3.5px] border-black rounded-[22px] sm:rounded-[28px] p-2.5 sm:p-3.5 flex flex-col items-center shadow-xs">
            <div className="w-6 sm:w-8 h-[2.5px] sm:h-[3px] bg-black rounded-full mb-3 sm:mb-4" />

            <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 rounded-full bg-[#52B788] flex items-center justify-center mb-3 sm:mb-4">
              <svg
                viewBox="0 0 100 100"
                className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 text-black fill-current"
              >
                <path d="M50 0 C50 32, 68 50, 100 50 C68 50, 50 68, 50 100 C50 68, 32 50, 0 50 C32 50, 50 32, 50 0 Z" />
              </svg>
            </div>

            <div className="w-full flex flex-col gap-1.5 sm:gap-2 mb-4 sm:mb-6 px-1">
              <div className="w-full h-[2.5px] sm:h-[3px] bg-black rounded-full" />
              <div className="w-3/4 h-[2.5px] sm:h-[3px] bg-black rounded-full" />
            </div>

            <div className="w-full h-3 sm:h-4 bg-black rounded-full mt-auto" />
          </div>

          <div className="concept-arrow-1 shrink-0">
            <svg
              viewBox="0 0 40 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 sm:w-8 md:w-10 text-black"
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

          <div className="phone-card-2 shrink-0 w-[115px] sm:w-[145px] md:w-[180px] lg:w-[195px] bg-[#FA435A] border-[3px] sm:border-[3.5px] border-black rounded-[24px] sm:rounded-[30px] p-2.5 sm:p-3.5 flex flex-col items-center shadow-xs">
            <div className="w-7 sm:w-9 h-[2.5px] sm:h-[3px] bg-black rounded-full mb-2.5 sm:mb-3.5" />

            <div className="w-full bg-[#F5F5F5] rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex items-center justify-center mb-2.5 sm:mb-3.5 min-h-[70px] sm:min-h-[90px] md:min-h-[110px]">
              <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#6DC9BC] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <div className="h-6 sm:h-8 md:h-10 bg-[#FFBBD8] rounded-md sm:rounded-lg flex items-center justify-center px-1.5">
                <div className="w-3/4 h-[2px] sm:h-[2.5px] bg-black rounded-full" />
              </div>
              <div className="h-6 sm:h-8 md:h-10 bg-[#52B788] rounded-md sm:rounded-lg flex items-center justify-center px-1.5">
                <div className="w-3/4 h-[2px] sm:h-[2.5px] bg-black rounded-full" />
              </div>
            </div>

            <div className="w-full h-3 sm:h-4 bg-black rounded-full mt-auto" />
          </div>

          <div className="hidden lg:block concept-arrow-2 shrink-0">
            <svg
              viewBox="0 0 40 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 sm:w-8 md:w-10 text-black"
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

          <div className="hidden lg:block phone-card-3 shrink-0 w-[105px] sm:w-[130px] md:w-[160px] lg:w-[175px] bg-[#6DC9BC] border-[3px] sm:border-[3.5px] border-black rounded-[22px] sm:rounded-[28px] p-2.5 sm:p-3.5 flex flex-col items-center shadow-xs">
            <div className="w-6 sm:w-8 h-[2.5px] sm:h-[3px] bg-black rounded-full mb-3 sm:mb-4" />
            <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 rounded-full bg-black flex items-center justify-center mb-3 sm:mb-4">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#6DC9BC]"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>

            <div className="w-full flex flex-col gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              <div className="w-full h-5 sm:h-6 md:h-7 bg-[#F5F5F5] rounded-md sm:rounded-lg flex items-center px-2">
                <div className="w-3/5 h-[2px] sm:h-[2.5px] bg-black rounded-full" />
              </div>
              <div className="w-full h-5 sm:h-6 md:h-7 bg-[#FFBBD8] rounded-md sm:rounded-lg flex items-center px-2">
                <div className="w-3/5 h-[2px] sm:h-[2.5px] bg-black rounded-full" />
              </div>
            </div>

            <div className="w-full h-3 sm:h-4 bg-black rounded-full mt-auto" />
          </div>

          <div className="concept-dot shrink-0 self-start mt-4 hidden sm:block">
            <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-[#FA435A] inline-block" />
          </div>
        </div>
      </div>
    </section>
  );
}
