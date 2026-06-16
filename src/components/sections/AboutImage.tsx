"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutImage() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 768;
      gsap.fromTo(
        imageRef.current,
        { scale: 0.5 },
        {
          scale: isMobile ? 1.0 : 1.4,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative h-[20vh] md:h-[300vh]">
      <div className="h-[20vh] md:h-screen sticky top-0 flex items-center justify-center overflow-hidden">
        <div ref={imageRef} className="w-screen h-screen relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-contain md:object-cover"
          >
            <source src="/videos/Showreel-RITGB.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
