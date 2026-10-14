"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PaymentIntegrationsVisualConcept() {
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

      gsap.from(".payment-cart-window", {
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

      gsap.from(".payment-arrow-1", {
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

      gsap.from(".payment-card-elem", {
        y: 20,
        rotation: -6,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.55,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".payment-arrow-2", {
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

      gsap.from(".payment-phone-elem", {
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

      gsap.from(".payment-dot", {
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
        <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto py-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8 scale-[0.8] xs:scale-[0.88] sm:scale-100 origin-center">
          <div className="concept-sparkle shrink-0 hidden sm:block">
            <svg
              viewBox="0 0 100 100"
              className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black fill-current"
            >
              <path d="M50 0 C50 32, 68 50, 100 50 C68 50, 50 68, 50 100 C50 68, 32 50, 0 50 C32 50, 50 32, 50 0 Z" />
            </svg>
          </div>

          <div className="payment-cart-window shrink-0 w-[115px] sm:w-[140px] md:w-[165px] lg:w-[180px] bg-white border-[2.5px] sm:border-[3px] border-black rounded-xl sm:rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 sm:-rotate-3 flex flex-col">
            <div className="border-b-[2.5px] sm:border-b-[3px] border-black px-2.5 sm:px-3 py-1.5 sm:py-2 flex items-center gap-1.5 bg-white">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FA435A] inline-block" />
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#6DC9BC] inline-block" />
            </div>

            <div className="p-2 sm:p-3 flex flex-col items-center">
              <div className="w-full aspect-[4/3] bg-[#6DC9BC] rounded-lg sm:rounded-xl flex items-center justify-center p-2 mb-2 sm:mb-2.5">
                <svg
                  viewBox="0 0 38 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13 text-black"
                >
                  <path
                    d="M 2 3 H 6 L 10.5 18 H 26.5 L 30.5 7 H 8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="13" cy="23" r="2.5" fill="currentColor" />
                  <circle cx="24" cy="23" r="2.5" fill="currentColor" />
                </svg>
              </div>

              <div className="w-full flex flex-col gap-1.5 px-0.5">
                <div className="w-4/5 h-[2px] sm:h-[2.5px] bg-black rounded-full" />
                <div className="w-3/5 h-2.5 sm:h-3 bg-black rounded-full mt-0.5" />
              </div>
            </div>
          </div>

          <div className="payment-arrow-1 shrink-0 w-8 sm:w-10 md:w-12">
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

          <div className="payment-card-elem shrink-0 w-[120px] sm:w-[145px] md:w-[175px] lg:w-[190px] aspect-[1.55/1] bg-[#FA435A] border-[2.5px] sm:border-[3px] border-black rounded-xl sm:rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 sm:-rotate-3 flex flex-col justify-between">
            <div className="w-full h-3.5 sm:h-4.5 md:h-5 bg-black mt-2 sm:mt-2.5" />
            <div className="px-2.5 sm:px-3.5">
              <div className="w-4 h-3 sm:w-5 sm:h-4 md:w-6 md:h-4.5 bg-[#FFC4DE] rounded-xs border-[1.5px] border-black/30" />
            </div>

            <div className="px-2.5 sm:px-3.5 pb-2.5 sm:pb-3 flex items-end justify-between">
              <div className="flex flex-col gap-1 w-3/5">
                <div className="w-full h-[2px] sm:h-[2.5px] bg-black rounded-full" />
                <div className="w-2/3 h-[2px] sm:h-[2.5px] bg-black rounded-full" />
              </div>
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-[#FFC4DE] border-[1.5px] border-black/30 shrink-0" />
            </div>
          </div>

          <div className="payment-arrow-2 shrink-0 w-8 sm:w-10 md:w-12">
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
            <div className="payment-phone-elem w-[100px] sm:w-[120px] md:w-[145px] lg:w-[155px] aspect-[1/1.6] bg-[#52B788] border-[2.5px] sm:border-[3px] border-black rounded-2xl sm:rounded-[24px] md:rounded-[28px] overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-between p-2 sm:p-2.5 md:p-3">
              <div className="w-6 sm:w-8 md:w-10 h-[2.5px] sm:h-[3px] bg-black rounded-full mt-1" />

              <div className="w-13 h-13 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-xs">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 text-black"
                >
                  <path
                    d="M 5 12.5 L 10 17.5 L 19 6.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="w-full flex flex-col items-center gap-1.5 mb-1 px-1">
                <div className="w-4/5 h-[2px] sm:h-[2.5px] bg-black rounded-full" />
                <div className="w-1/2 h-2 sm:h-2.5 bg-black rounded-full" />
              </div>
            </div>

            <div className="payment-dot absolute -right-6 sm:-right-8 top-1/2 -translate-y-1/2">
              <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-[#FA435A] inline-block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
