"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WebApplicationDevelopmentVisualConcept() {
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

      gsap.from(".web-user-card", {
        x: -25,
        rotation: -6,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".web-arrow-1", {
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

      gsap.from(".web-app-window", {
        y: 25,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        delay: 0.55,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".web-arrow-2", {
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

      gsap.from(".web-code-card", {
        x: 25,
        rotation: 6,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".web-dot", {
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
        <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto py-2 gap-2 sm:gap-3.5 md:gap-5 lg:gap-6 scale-[0.75] xs:scale-[0.84] sm:scale-95 md:scale-100 origin-center">
          <div className="concept-sparkle shrink-0 hidden sm:block">
            <svg
              viewBox="0 0 100 100"
              className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black fill-current"
            >
              <path d="M50 0 C50 32, 68 50, 100 50 C68 50, 50 68, 50 100 C50 68, 32 50, 0 50 C32 50, 50 32, 50 0 Z" />
            </svg>
          </div>

          <div className="web-user-card shrink-0 w-[95px] sm:w-[115px] md:w-[130px] lg:w-[140px] aspect-[1/1.38] bg-[#52B788] border-[2.5px] sm:border-[3px] border-black rounded-xl sm:rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 sm:-rotate-3 flex flex-col items-center justify-between p-2.5 sm:p-3">
            <div className="w-11 h-11 sm:w-13 sm:h-13 md:w-15 md:h-15 rounded-full bg-white flex items-center justify-center mt-1 sm:mt-1.5 shadow-xs">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 sm:w-8 sm:h-8 text-black"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
              </svg>
            </div>

            <div className="w-full flex flex-col items-center gap-1.5 mb-1 px-1">
              <div className="w-4/5 h-[2px] sm:h-[2.5px] bg-black rounded-full" />
              <div className="w-3/5 h-[2px] sm:h-[2.5px] bg-black rounded-full" />
            </div>
          </div>

          <div className="web-arrow-1 shrink-0 w-6 sm:w-8 md:w-10">
            <svg
              viewBox="0 0 50 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full text-black"
            >
              <path
                d="M 1 10 H 46 M 46 10 L 38 3 M 46 10 L 38 17"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="web-app-window shrink-0 w-[240px] sm:w-[320px] md:w-[410px] lg:w-[460px] bg-white border-[2.5px] sm:border-[3px] border-black rounded-xl sm:rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col">
            <div className="border-b-[2.5px] sm:border-b-[3px] border-black px-2.5 sm:px-3 py-1.5 sm:py-2 flex items-center justify-between bg-white">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FA435A] inline-block" />
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#6DC9BC] inline-block" />
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#52B788] inline-block" />
              </div>
              <div className="w-28 sm:w-40 md:w-56 h-2 sm:h-2.5 bg-[#FFC4DE] rounded-full mx-auto" />
              <div className="w-8" />
            </div>

            <div className="flex items-stretch min-h-[140px] sm:min-h-[175px] md:min-h-[210px]">
              <div className="w-[28%] border-r-[2.5px] sm:border-r-[3px] border-black p-2 sm:p-3 flex flex-col gap-2 sm:gap-2.5 bg-white">
                <div className="w-full h-3 sm:h-4 md:h-5 bg-black rounded-xs mb-1" />
                <div className="w-4/5 h-[2px] bg-black rounded-full" />
                <div className="w-3/5 h-[2px] bg-black rounded-full" />
                <div className="w-4/5 h-[2px] bg-black rounded-full" />
                <div className="w-2/3 h-[2px] bg-black rounded-full" />
              </div>

              <div className="w-[72%] p-2 sm:p-3 md:p-3.5 flex flex-col gap-2.5 sm:gap-3 bg-white">
                <div className="w-full h-5 sm:h-7 md:h-8 bg-[#6DC9BC] rounded-md sm:rounded-lg flex items-center px-2.5">
                  <div className="w-1/2 h-[2px] sm:h-[2.5px] bg-black rounded-full" />
                </div>

                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 grow">
                  <div className="bg-[#FFC4DE] rounded-md sm:rounded-lg p-1 sm:p-1.5 flex flex-col justify-between border-[1.5px] sm:border-[2px] border-black">
                    <div className="bg-white rounded-xs p-1 flex flex-col gap-1 border border-black/30">
                      <div className="w-4/5 h-[1.5px] bg-black rounded-full" />
                      <div className="w-3/5 h-[1.5px] bg-black rounded-full" />
                    </div>
                    <div className="bg-white rounded-xs p-1 flex flex-col gap-1 border border-black/30">
                      <div className="w-4/5 h-[1.5px] bg-black rounded-full" />
                      <div className="w-3/5 h-[1.5px] bg-black rounded-full" />
                    </div>
                  </div>

                  <div className="bg-[#52B788] rounded-md sm:rounded-lg p-1 sm:p-1.5 flex flex-col border-[1.5px] sm:border-[2px] border-black">
                    <div className="bg-white rounded-xs p-1 flex flex-col gap-1 border border-black/30">
                      <div className="w-4/5 h-[1.5px] bg-black rounded-full" />
                      <div className="w-3/5 h-[1.5px] bg-black rounded-full" />
                    </div>
                  </div>

                  <div className="bg-[#FA435A] rounded-md sm:rounded-lg p-1 sm:p-1.5 flex flex-col border-[1.5px] sm:border-[2px] border-black">
                    <div className="bg-white rounded-xs p-1 flex items-center justify-center border border-black/30 aspect-square">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#52B788] flex items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-3 h-3 text-black"
                        >
                          <path
                            d="M 5 12 L 10 17 L 19 7"
                            stroke="currentColor"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="web-arrow-2 shrink-0 w-6 sm:w-8 md:w-10">
            <svg
              viewBox="0 0 50 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full text-black"
            >
              <path
                d="M 1 10 H 46 M 46 10 L 38 3 M 46 10 L 38 17"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="relative shrink-0 flex items-center">
            <div className="web-code-card w-[65px] sm:w-[80px] md:w-[95px] lg:w-[105px] aspect-square bg-[#6DC9BC] border-[2.5px] sm:border-[3px] border-black rounded-xl sm:rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transform rotate-2 sm:rotate-3 flex items-center justify-center">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black"
              >
                <path
                  d="M 15 14 L 5 24 L 15 34 M 33 14 L 43 24 L 33 34 M 27 10 L 21 38"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="web-dot absolute -right-6 sm:-right-8 top-1/2 -translate-y-1/2">
              <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-[#FA435A] inline-block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
