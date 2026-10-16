"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CrmIntegrationsVisualConcept() {
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

      gsap.from(".crm-cards-stack", {
        x: -25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".crm-connector-line", {
        opacity: 0,
        duration: 0.6,
        delay: 0.45,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".crm-center-circle", {
        scale: 0,
        opacity: 0,
        duration: 0.65,
        ease: "back.out(2)",
        delay: 0.55,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".crm-arrow", {
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

      gsap.from(".crm-window", {
        x: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".crm-dot", {
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
      <div className="visual-concept-container w-full bg-[#6DC9BC] rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-16 lg:p-20 relative overflow-hidden flex items-center justify-center min-h-[360px] sm:min-h-[420px] md:min-h-[480px]">
        <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto py-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8 scale-[0.82] xs:scale-[0.9] sm:scale-100 origin-center">
          <div className="concept-sparkle shrink-0 hidden sm:block">
            <svg
              viewBox="0 0 100 100"
              className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black fill-current"
            >
              <path d="M50 0 C50 32, 68 50, 100 50 C68 50, 50 68, 50 100 C50 68, 32 50, 0 50 C32 50, 50 32, 50 0 Z" />
            </svg>
          </div>

          <div className="crm-cards-stack flex flex-col gap-3 sm:gap-4 shrink-0">
            <div className="w-[105px] sm:w-[130px] md:w-[155px] bg-[#f8f8f7] border-[2.5px] sm:border-[3px] border-black rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 flex flex-col justify-center gap-1.5 sm:gap-2 shadow-xs">
              <div className="w-5/6 h-[2px] sm:h-[2.5px] bg-black rounded-full" />
              <div className="w-3/5 h-[2px] sm:h-[2.5px] bg-black rounded-full" />
              <div className="w-1/2 h-2 sm:h-2.5 bg-black rounded-full mt-0.5" />
            </div>

            <div className="w-[105px] sm:w-[130px] md:w-[155px] bg-[#f8f8f7] border-[2.5px] sm:border-[3px] border-black rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 flex flex-col justify-center gap-2 sm:gap-2.5 shadow-xs">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FA435A] shrink-0 inline-block" />
                <div className="w-3/5 h-[2px] sm:h-[2.5px] bg-black rounded-full" />
              </div>
              <div className="w-4/5 h-[2px] sm:h-[2.5px] bg-black rounded-full" />
            </div>
          </div>

          <div className="crm-connector-line shrink-0 w-8 sm:w-11 md:w-14 h-[120px] sm:h-[140px] md:h-[160px] flex items-center justify-center">
            <svg
              viewBox="0 0 50 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-black overflow-visible"
            >
              <path
                d="M 0 38 H 18 L 38 80 H 50"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 0 122 H 18 L 38 80 H 50"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="crm-center-circle shrink-0 w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26 rounded-full bg-[#FFC4DE] border-[3px] sm:border-[3.5px] border-black flex items-center justify-center shadow-xs">
            <svg
              viewBox="0 0 44 44"
              className="w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 text-black fill-current overflow-visible"
            >
              <path
                d="M 15 2 
                   C 15 0.9, 15.9 0, 17 0 
                   H 27 
                   C 28.1 0, 29 0.9, 29 2 
                   V 15 
                   H 42 
                   C 43.1 15, 44 15.9, 44 17 
                   V 27 
                   C 44 28.1, 43.1 29, 42 29 
                   H 29 
                   V 42 
                   C 29 43.1, 28.1 44, 27 44 
                   H 17 
                   C 15.9 44, 15 43.1, 15 42 
                   V 29 
                   H 2 
                   C 0.9 29, 0 28.1, 0 27 
                   V 17 
                   C 0 15.9, 0.9 15, 2 15 
                   H 15 
                   Z"
              />
              <line
                x1="18"
                y1="18"
                x2="26"
                y2="26"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="26"
                y1="18"
                x2="18"
                y2="26"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="crm-arrow shrink-0 w-10 sm:w-14 md:w-18">
            <svg
              viewBox="0 0 60 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full text-black"
            >
              <path
                d="M 1 10 H 56 M 56 10 L 46 3 M 56 10 L 46 17"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="relative shrink-0 flex items-start">
            <div className="crm-window w-[130px] sm:w-[160px] md:w-[195px] bg-white border-[2.5px] sm:border-[3px] border-black rounded-xl sm:rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col">
              <div className="border-b-[2.5px] sm:border-b-[3px] border-black px-2.5 sm:px-3.5 py-1.5 sm:py-2 flex items-center gap-1.5 bg-white">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FA435A] inline-block" />
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFBD44] inline-block" />
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#52B788] inline-block" />
              </div>

              <div className="p-2 sm:p-3 md:p-3.5 flex flex-col gap-2 sm:gap-2.5">
                <div className="w-full h-6 sm:h-8 md:h-9 bg-[#52B788] rounded-md sm:rounded-lg flex items-center justify-center px-2.5 sm:px-3">
                  <div className="w-full h-[2px] bg-black rounded-full" />
                </div>

                <div className="w-full h-6 sm:h-8 md:h-9 bg-[#FFC4DE] rounded-md sm:rounded-lg flex items-center justify-center px-2.5 sm:px-3">
                  <div className="w-full h-[2px] bg-black rounded-full" />
                </div>

                <div className="w-full h-6 sm:h-8 md:h-9 bg-[#6DC9BC] rounded-md sm:rounded-lg flex items-center justify-center px-2.5 sm:px-3">
                  <div className="w-full h-[2px] bg-black rounded-full" />
                </div>
              </div>
            </div>

            <div className="crm-dot absolute -top-3 -right-6 sm:-top-4 sm:-right-8">
              <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-[#FA435A] inline-block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
