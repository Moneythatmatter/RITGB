"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WebsiteDesignIdea() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".idea-headline", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".idea-right", {
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
      className="w-full bg-[#f7f7f6] text-black py-20 md:py-28 px-6 md:px-14 lg:px-20"
    >
      <div className="flex items-center gap-2.5 pb-4">
        <p className="font-[Arial] text-xs tracking-widest uppercase text-black mb-12.5">
          THE THINKING BEHIND THE PIXELS
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-6">
          <h2 className="idea-headline font-(family-name:--font-right-grotesk) text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black uppercase leading-[0.92] tracking-[-0.03em] text-black">
            A GOOD WEBSITE <br /> MAKES THINGS CLEAR.
          </h2>
        </div>

        <div className="idea-right lg:col-span-6 flex flex-col items-start lg:pt-2">
          <p className="text-neutral-900 text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed mb-8 max-w-xl">
            Your website has a few seconds to make sense. We bring your story,
            services, and next steps into one clear experience that feels
            unmistakably yours.
          </p>

          <p className="font-serif italic text-neutral-600 text-xl sm:text-2xl lg:text-3xl leading-snug max-w-lg">
            Make the first impression count.
            <br />
            Then make every click feel natural.
          </p>
        </div>
      </div>
    </section>
  );
}
