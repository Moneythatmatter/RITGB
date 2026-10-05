"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SocialMediaMarketingApproach() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".approach-headline", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".approach-right", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f8f8f7] text-black py-20 md:py-28 px-6 md:px-14 lg:px-20"
    >
      <div className="flex items-center gap-2.5 pb-4 mb-10 md:mb-14">
        <span className="font-[Arial] text-[11px] md:text-xs uppercase tracking-widest text-neutral-800">
          RITGB / THE APPROACH
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-6">
          <h2 className="approach-headline font-(family-name:--font-right-grotesk) text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black uppercase leading-[0.92] tracking-[-0.03em] text-black">
            TURN REGULAR <br className="hidden lg:block" />
            POSTING INTO A {" "}
            <br className="hidden lg:block" />
            CLEAR BRAND {" "}
            <br className="hidden lg:block" />
            STORY
          </h2>
        </div>

        <div className="approach-right lg:col-span-6 flex flex-col items-start lg:pt-2 space-y-6">
          <p className="text-neutral-700 text-base sm:text-lg lg:text-xl font-sans leading-relaxed max-w-9xl">
            Publishing more content does not automatically create more interest.
            Your audience needs to understand what you offer, why it matters and
            what to do next.
          </p>

          <p className="text-neutral-700 text-base sm:text-lg lg:text-xl font-sans leading-relaxed max-w-9xl">
            Our Social Media Marketing Services give each post a purpose, from
            introducing your business and explaining your services to answering
            questions and supporting enquiries.
          </p>
        </div>
      </div>
    </section>
  );
}
