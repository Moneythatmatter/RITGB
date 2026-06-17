"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AgencyMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(trackRef.current, {
        x: () => -(trackRef.current!.scrollWidth - window.innerWidth + 100),
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () =>
            `+=${trackRef.current!.scrollWidth - window.innerWidth + 100}`,
          scrub: 2,
          pin: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen bg-white overflow-hidden flex items-center"
    >
      <div
        ref={trackRef}
        className="flex items-center gap-8 md:gap-16 px-6 md:px-16 whitespace-nowrap w-max"
      >
        <h2 className="font-(family-name:--font-right-grotesk) text-[12vw] md:text-[10vw] font-black uppercase leading-none tracking-[-0.03em]">
          We&apos;re Too Cool For
        </h2>

        <div className="relative w-[40vw] md:w-[18vw] aspect-4/3 shrink-0">
          <Image
            src="/images/agency/leo.png"
            alt="Too cool"
            fill
            sizes="(max-width: 768px) 40vw, 18vw"
            className="object-contain rounded-sm"
          />
        </div>

        <h2 className="font-(family-name:--font-right-grotesk) text-[12vw] md:text-[10vw] font-black uppercase leading-none tracking-[-0.03em]">
          Boring Brands.
        </h2>
      </div>
    </section>
  );
}
