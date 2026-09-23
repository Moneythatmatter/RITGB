"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

const marqueeItems = [
  "CREATIVE DIRECTION",
  "BRAND GUIDELINES",
  "PACKAGING DESIGN",
  "BRAND POSITIONING",
  "LOGO SYSTEMS",
  "VISUAL IDENTITY",
  "BRAND STRATEGY",
  "DESIGN SYSTEMS",
];

export default function BrandingHero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".branding-meta", {
        opacity: 0,
        y: -15,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
      });

      gsap.from(".branding-line", {
        yPercent: 110,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.1,
        delay: 0.2,
      });

      gsap.from(".branding-right-col", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.4,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#080808] text-white flex flex-col justify-between pt-24 md:pt-28 min-h-[92vh] relative overflow-hidden"
    >
      <div className="px-6 md:px-14 lg:px-20 py-12 md:py-16 grow flex flex-col justify-center">
        <div className="branding-meta mb-8 md:mb-10 flex flex-col items-start gap-1">
          <span className="font-mono text-xs md:text-sm text-neutral-400 tracking-widest">
            01 / 07
          </span>
          <div className="flex items-center gap-4 mt-1">
            <div className="w-10 h-[1.5px] bg-[#4db685]" />
            <span className="font-sans text-xs md:text-sm uppercase tracking-[0.25em] text-neutral-300 font-medium">
              DESIGN &nbsp;/&nbsp; BRANDING
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          <div className="lg:col-span-7 flex flex-col select-none">
            <div className="overflow-hidden">
              <h1 className="branding-line font-(family-name:--font-right-grotesk) text-[18vw] sm:text-[14vw] lg:text-[10vw] font-black leading-[0.88] uppercase tracking-[-0.03em] text-white">
                BRANDS
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="branding-line font-(family-name:--font-right-grotesk) text-[18vw] sm:text-[14vw] lg:text-[10vw] font-black leading-[0.88] uppercase tracking-[-0.03em] text-white">
                BUILT TO
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="branding-line font-(family-name:--font-right-grotesk) text-[18vw] sm:text-[14vw] lg:text-[10vw] font-black leading-[0.88] uppercase tracking-[-0.03em] text-[#4db685]">
                BE SEEN.
              </h1>
            </div>
          </div>

          <div className="branding-right-col lg:col-span-5 flex flex-col items-start lg:pl-8 pb-3 md:pb-6">
            <p className="text-neutral-300 text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-8 max-w-md">
              A clear strategy. A distinctive identity.
              <br />
              A brand people know is yours before
              <br />
              they even see your name.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex flex-col text-white text-sm md:text-base font-normal tracking-wide"
              >
                <span className="pb-1.5 flex items-center gap-1.5 transition-colors duration-200 group-hover:text-[#4db685]">
                  Let&apos;s build it <span className="text-xs">↗</span>
                </span>
                <span className="w-full h-[2px] bg-[#4db685] group-hover:bg-white transition-colors duration-300" />
              </Link>

              <Link
                href="/contact"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                aria-label="Let's build it"
              >
                <span className="text-sm font-light">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white text-black py-4 md:py-5 overflow-hidden select-none border-y border-neutral-200">
        <div className="flex w-max animate-[marquee_24s_linear_infinite] whitespace-nowrap items-center">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, index) => (
              <div key={index} className="flex items-center">
                <span className="font-(family-name:--font-right-grotesk) text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight px-4 md:px-6">
                  {item}
                </span>
                <span className="text-[#FF4E78] text-2xl md:text-3xl font-bold px-2 md:px-3">
                  ✳
                </span>
              </div>
            ),
          )}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
}
