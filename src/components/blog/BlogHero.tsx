"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

const lines = ["THINGS WORTH", "KNOWING."];

export default function BlogHero() {
  const containerRef = useRef<HTMLElement>(null);

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

  return (
    <header
      ref={containerRef}
      className="flex flex-col items-center text-center mb-17 md:mb-35"
    >
      {/* Badge: ● THE BLOG */}
      <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
        <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-black"></span>
        <span className="font-arial text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-black">
          THE BLOG
        </span>
      </div>

      {/* Title: THINGS WORTH KNOWING. */}
      <div className="flex flex-col items-center mb-6 md:mb-8">
        {lines.map((line, i) => (
          <div key={i} className="relative inline-block overflow-hidden">
            <h1 className="font-(family-name:--font-right-grotesk) hero-line text-[14vw] sm:text-[11vw] md:text-[7.5rem] lg:text-[8.5rem] font-black leading-[0.88] tracking-[-0.03em] uppercase text-center text-black">
              {line}
            </h1>
          </div>
        ))}
      </div>

      {/* Subtitle */}
      <p className="font-arial text-base sm:text-lg md:text-xl text-black/80 text-center max-w-2xl mx-auto leading-snug md:leading-normal font-normal mb-8">
        Ideas, strategies and uncomfortable truths
        <br className="hidden sm:inline" /> about websites, marketing,
        automation and growth.
      </p>

      {/* Explore link */}
      <Link
        href="#articles"
        className="font-arial text-xs md:text-sm font-bold tracking-widest uppercase text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
      >
        EXPLORE ALL ARTICLES →
      </Link>
    </header>
  );
}
