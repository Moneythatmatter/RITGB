"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DigitalMarketingChannels() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".channel-left", {
        x: -30,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".channel-right", {
        x: 30,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="w-full text-black overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="channel-left bg-[#6DC9BC] p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-start">
          <div className="h-12 md:h-14 mb-8 sm:mb-10 md:mb-12 flex items-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-10 h-10 md:w-12 md:h-12 text-black"
            >
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="5" strokeWidth="2.2" />
            </svg>
          </div>

          <div className="flex flex-col">
            <h2 className="font-(family-name:--font-right-grotesk) text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.92] tracking-[-0.03em] text-black mb-4 md:mb-6 lg:min-h-[6.5rem] xl:min-h-[7rem]">
              ONLINE MARKETING <br />
              AGENCY INDIA
            </h2>

            <div className="mb-6 md:mb-8 lg:min-h-[4rem] xl:min-h-[4.5rem]">
              <p className="font-arial text-xl sm:text-2xl md:text-3xl text-black leading-snug tracking-tight">
                Meet Customers Where They Spend Their Time.
              </p>
            </div>

            <div className="space-y-4 max-w-xl">
              <p className="font-sans text-neutral-900 text-xs sm:text-sm md:text-base leading-relaxed">
                Different customers discover businesses in different ways. Some search for a solution. Others notice a social post, read an article or respond to an advertisement.
              </p>
              <p className="font-sans text-neutral-900 text-xs sm:text-sm md:text-base leading-relaxed">
                We help you choose where to focus and what each channel should contribute to your business.
              </p>
            </div>
          </div>
        </div>

        <div className="channel-right bg-[#FA435A] p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-start">
          <div className="h-12 md:h-14 mb-8 sm:mb-10 md:mb-12 flex items-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 md:w-12 md:h-12 text-black"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>

          <div className="flex flex-col">
            <h2 className="font-(family-name:--font-right-grotesk) text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.92] tracking-[-0.03em] text-black mb-4 md:mb-6 lg:min-h-[6.5rem] xl:min-h-[7rem]">
              DIGITAL ADVERTISING <br />
              AGENCY INDIA
            </h2>

            <div className="mb-6 md:mb-8 lg:min-h-[4rem] xl:min-h-[4.5rem]">
              <p className="font-arial text-xl sm:text-2xl md:text-3xl text-black leading-snug tracking-tight">
                Give Your Advertising a Clear Purpose.
              </p>
            </div>

            <div className="space-y-4 max-w-xl">
              <p className="font-sans text-neutral-900 text-xs sm:text-sm md:text-base leading-relaxed">
                Advertising should connect the right audience with a relevant offer.
              </p>
              <p className="font-sans text-neutral-900 text-xs sm:text-sm md:text-base leading-relaxed">
                We plan the message, creative and destination together, so customers understand what you provide and have a clear route to enquire or purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
