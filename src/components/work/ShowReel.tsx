"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ShowReel() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        videoRef.current,
        {
          scale: 0.5,
        },
        {
          scale: 1,
          borderRadius: "0px",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="w-full bg-[#F5F5F5] overflow-hidden">
      <video
        ref={videoRef}
        src="/videos/Showreel-RITGB.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full object-cover origin-center"
      />
    </section>
  );
}
