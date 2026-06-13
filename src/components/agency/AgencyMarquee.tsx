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
        x: () => -(trackRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F5F5F5] py-24 overflow-hidden flex items-center"
    >
      <div
        ref={trackRef}
        className="flex items-center gap-4 px-6 whitespace-nowrap w-max"
      >
        <h2 className="font-(family-name:--font-right-grotesk) text-[10vw] md:text-[6vw] font-black uppercase leading-none tracking-[-0.03em]">
          We&apos;re Too Cool For
        </h2>

        <div className="relative w-[20vw] md:w-[10vw] aspect-4/3 shrink-0">
          <Image
            src="/images/agency/leo.png"
            alt="Too cool"
            fill
            sizes="(max-width: 768px) 20vw, 10vw"
            className="object-cover"
          />
        </div>

        <h2 className="font-(family-name:--font-right-grotesk) text-[10vw] md:text-[6vw] font-black uppercase leading-none tracking-[-0.03em]">
          Boring Brands.
        </h2>
      </div>
    </section>
  );
}
