"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Heart, Send, Bookmark, Asterisk } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function SocialMediaMarketingVisualConcept() {
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

      gsap.from(".phone-mockup", {
        y: 60,
        rotation: 0,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".green-sticky", {
        scale: 0.8,
        opacity: 0,
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
      className="w-full bg-[#f8f8f7] py-8 md:py-16 px-4 sm:px-6 md:px-14 lg:px-20"
    >
      <div className="w-full bg-[#FFBCD4] rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden text-black min-h-[500px] lg:min-h-[580px] flex flex-col justify-between shadow-xs">
        <div className="flex items-center justify-between w-full font-sans text-[11px] md:text-xs uppercase tracking-widest text-black font-semibold mb-8 md:mb-12">
          <span>RITGB / SOCIAL MEDIA MARKETING</span>
          <span>VISUAL CONCEPT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center grow">
          <div className="concept-headline lg:col-span-5 flex flex-col items-start z-10">
            <span className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-black mb-1">
              Show up.
            </span>
            <h2 className="font-(family-name:--font-right-grotesk) text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black uppercase leading-[0.88] tracking-[-0.03em] text-black select-none">
              STAND
              <br />
              OUT.
            </h2>

            <div className="mt-4 md:mt-6 pl-2">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 md:w-16 md:h-16 text-black"
              >
                <path
                  d="M12 52L50 14M50 14H22M50 14V42"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6 relative">
            <div className="phone-mockup relative w-[280px] sm:w-[320px] md:w-[340px] bg-white rounded-[36px] p-4 border-[3px] border-black shadow-[12px_18px_30px_rgba(0,0,0,0.15)] transform rotate-[-4deg] transition-transform duration-300 hover:rotate-0 z-10">
              <div className="flex items-center justify-between pb-3 pt-1 px-1">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">
                    R
                  </div>
                  <span className="font-sans font-bold text-xs text-black">
                    RITGB
                  </span>
                </div>
                <span className="text-neutral-400 text-xs font-bold">•••</span>
              </div>

              <div className="w-full aspect-[4/4.5] bg-[#FF385C] rounded-xl p-6 flex flex-col justify-between relative overflow-hidden text-black">
                <div className="select-none">
                  <h3 className="font-(family-name:--font-right-grotesk) text-4xl sm:text-5xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-black">
                    STOP.
                    <br />
                    SCROLL.
                    <br />
                    NOTICE.
                  </h3>
                </div>

                <div className="flex justify-end">
                  <Asterisk className="w-12 h-12 text-black" strokeWidth={2.5} />
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 pb-2 px-1 text-black">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 hover:text-red-500 transition-colors cursor-pointer" />
                  <Send className="w-5 h-5 hover:text-neutral-600 transition-colors cursor-pointer" />
                </div>
                <Bookmark className="w-5 h-5 hover:text-neutral-600 transition-colors cursor-pointer" />
              </div>

              <div className="space-y-1.5 px-1 pt-1 pb-2">
                <div className="h-2 bg-neutral-200 rounded-full w-full"></div>
                <div className="h-2 bg-neutral-200 rounded-full w-3/4"></div>
              </div>
            </div>

            <div className="green-sticky bg-[#34D399] border-[2.5px] border-black p-6 sm:p-7 rounded-lg shadow-[6px_8px_0px_rgba(0,0,0,1)] transform rotate-[8deg] sm:-ml-8 sm:mt-12 transition-transform duration-300 hover:rotate-4 max-w-[200px] z-20">
              <span className="font-(family-name:--font-right-grotesk) text-2xl sm:text-3xl font-black uppercase tracking-tight text-black leading-[0.95] block">
                CONTENT
                <br />
                WITH A
              </span>
              <span className="font-serif italic text-2xl sm:text-3xl text-black block mt-1">
                purpose.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
