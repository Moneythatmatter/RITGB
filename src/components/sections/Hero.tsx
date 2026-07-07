"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import HeroBottom from "./HeroBottom";
import GradientButton from "@/components/GradientButton";
import { useCursorTrail } from "@/hooks/useCursorTrail";

const lines = ["WE MAKE", "THE INTERNET", "NOTICE YOU"];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const { handleMouseMove } = useCursorTrail(containerRef);

  // text animation
  useGSAP(
    () => {
      gsap.from(".hero-line", {
        yPercent: 100,
        duration: 1,
        ease: "power4.out",
        opacity: 0,
        stagger: 0.12,
        delay: 0.2,
      });
    },
    { scope: containerRef },
  );

  // Cursor trail
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section
      ref={containerRef}
      className="bg-white relative flex flex-col pt-20 pb-8 md:min-h-[70vh] md:justify-between md:pt-24 md:pb-0 h-auto"
    >
      {/* Headline */}
      <div className="flex flex-col items-center text-center px-4 pt-20 md:mt-8 md:pt-0 overflow-visible">
        {lines.map((line, i) => (
          <div key={i} className="relative inline-block">
            <h1 className="font-(family-name:--font-right-grotesk) hero-line text-[15vw] md:text-[14rem] lg:text-[11vw] font-black leading-[0.89] tracking-[-0.03em] uppercase">
              {line}
            </h1>
          </div>
        ))}
      </div>
      {/* CTA button */}
      <div className="flex justify-center mt-6 md:mt-10">
        <GradientButton
          onClick={() => router.push("/contact")}
          className="font-arial text-sm md:text-lg! font-semibold! tracking-widest! uppercase! px-6! py-5! md:px-8! md:py-6! rounded-full!"
        >
          Grow My Brand →
        </GradientButton>
      </div>
      {/* Bottom strip */}
      <div className="hidden md:block">
        <HeroBottom />
      </div>
    </section>
  );
}
