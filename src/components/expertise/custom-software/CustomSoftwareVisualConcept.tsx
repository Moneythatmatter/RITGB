"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CustomSoftwareVisualConcept() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".software-illustration", {
        scale: 0.95,
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".sparkle-element", {
        scale: 0,
        rotation: -45,
        opacity: 0,
        duration: 0.7,
        ease: "back.out(2)",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".arrow-element", {
        x: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".phone-element", {
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.25,
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
      <div className="software-illustration w-full bg-[#61BEAE] rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-16 lg:p-20 relative overflow-hidden flex items-center justify-center min-h-[380px] sm:min-h-[440px] md:min-h-[500px]">
        <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto py-2">
          <div className="hidden sm:flex flex-col items-center justify-between mr-4 md:mr-8 lg:mr-12 shrink-0 relative self-stretch py-4">
            <div className="absolute top-2 right-0 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#FF4D5E]" />

            <div className="sparkle-element my-auto">
              <svg
                viewBox="0 0 100 100"
                className="w-12 h-12 md:w-16 md:h-16 text-black fill-current"
              >
                <path d="M50 0 C50 32, 68 50, 100 50 C68 50, 50 68, 50 100 C50 68, 32 50, 0 50 C32 50, 50 32, 50 0 Z" />
              </svg>
            </div>

            <div className="arrow-element mt-auto pt-6">
              <svg
                width="36"
                height="18"
                viewBox="0 0 36 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-4 md:w-10 md:h-5 text-black"
              >
                <path
                  d="M1 9H33M33 9L25 1M33 9L25 17"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="relative bg-white border-2 border-black rounded-xl sm:rounded-2xl overflow-hidden shadow-xs w-full max-w-[480px] md:max-w-[540px] lg:max-w-[580px] shrink-0">
            <div className="border-b-2 border-black px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-1.5 bg-white">
              <span className="w-2 h-2 rounded-full bg-[#FF4D5E] inline-block" />
              <span className="w-2 h-2 rounded-full bg-[#FFB7D5] inline-block" />
              <span className="w-2 h-2 rounded-full bg-[#70D6BC] inline-block" />
            </div>

            <div className="p-3 sm:p-4.5 flex gap-3 sm:gap-4 bg-white min-h-[220px] sm:min-h-[250px] md:min-h-[270px]">
              <div className="w-20 sm:w-28 md:w-32 bg-black rounded-lg p-2.5 sm:p-3.5 flex flex-col gap-2 sm:gap-3 shrink-0">
                <div className="w-3/4 h-1.5 bg-white rounded-full" />
                <div className="w-full h-1.5 bg-white rounded-full" />
                <div className="w-5/6 h-1.5 bg-white rounded-full" />
                <div className="w-2/3 h-1.5 bg-white rounded-full" />
              </div>

              <div className="grow flex flex-col gap-3 sm:gap-4">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="bg-[#4AB87C] rounded-lg p-2.5 sm:p-3 flex flex-col justify-center gap-1.5 min-h-[50px] sm:min-h-[60px]">
                    <div className="w-3/4 h-1.5 bg-black/80 rounded-full" />
                    <div className="w-full h-1.5 bg-black/80 rounded-full" />
                  </div>

                  <div className="bg-[#FFB7D5] rounded-lg p-2.5 sm:p-3 flex flex-col justify-center gap-1.5 min-h-[50px] sm:min-h-[60px]">
                    <div className="w-3/4 h-1.5 bg-black/80 rounded-full" />
                    <div className="w-full h-1.5 bg-black/80 rounded-full" />
                  </div>

                  <div className="bg-[#FF4D5E] rounded-lg p-2.5 sm:p-3 flex flex-col justify-center gap-1.5 min-h-[50px] sm:min-h-[60px]">
                    <div className="w-3/4 h-1.5 bg-black/80 rounded-full" />
                    <div className="w-full h-1.5 bg-black/80 rounded-full" />
                  </div>
                </div>

                <div className="grow bg-[#70D6BC] border-2 border-black rounded-lg p-3 sm:p-5 flex items-center justify-between relative">
                  <div className="w-12 h-10 sm:w-16 sm:h-12 bg-white border-2 border-black rounded-md z-10 shrink-0" />

                  <div className="grow h-0.5 bg-black" />

                  <div className="w-12 h-10 sm:w-16 sm:h-12 bg-[#FFB7D5] border-2 border-black rounded-md z-10 shrink-0" />

                  <div className="grow h-0.5 bg-black" />

                  <div className="w-12 h-10 sm:w-16 sm:h-12 bg-[#FF4D5E] border-2 border-black rounded-md z-10 shrink-0" />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden sm:block w-6 md:w-10 lg:w-12 h-0.5 bg-black shrink-0" />

          <div className="phone-element hidden sm:block shrink-0">
            <div className="w-24 sm:w-28 md:w-32 bg-black rounded-[22px] p-2 border-2 border-black shadow-xs">
              <div className="bg-[#FFB7D5] rounded-[14px] p-2 sm:p-2.5 flex flex-col items-center">
                <div className="w-6 h-1 bg-black rounded-full mb-2 sm:mb-2.5" />

                <div className="w-full h-14 sm:h-16 md:h-18 bg-[#FF4D5E] rounded-md mb-2.5" />

                <div className="w-full flex flex-col gap-1.5 pt-0.5">
                  <div className="w-full h-1 bg-black rounded-full" />
                  <div className="w-4/5 h-1 bg-black rounded-full" />
                  <div className="w-2/3 h-1 bg-black rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
