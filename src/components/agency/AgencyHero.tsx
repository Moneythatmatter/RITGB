"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import GradientButton from "@/components/GradientButton";

const lines = ["WE BUILD", "BRANDS FOR", "THE SCROLL ERA"];

export default function AgencyHero() {
  const containerRef = useRef<HTMLElement>(null);
  const router = useRouter();

  useGSAP(
    () => {
      gsap.from(".agency-line", {
        yPercent: 120,
        duration: 1,
        ease: "power4.out",
        stagger: 0.15,
        delay: 0.2,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="bg-[#FFC4DE] relative md:min-h-[70vh] flex flex-col md:justify-center py-20 md:py-24 overflow-hidden"
    >
      {/* Headline */}
      <div className="flex flex-col items-center text-center px-4 pt-20 md:mt-8 md:pt-0">
        {lines.map((line, i) => (
          <div key={i} className="relative inline-block pb-2">
            <div className="overflow-hidden">
              <h1 className="font-(family-name:--font-right-grotesk) agency-line text-[14vw] sm:text-[11vw] lg:text-[8.5vw] font-black leading-[0.88] tracking-[-0.013em] uppercase">
                {line}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* CTA button — now below text on all screen sizes */}
      <div className="flex justify-center mt-12">
        <GradientButton
          onClick={() => router.push("/contact")}
          className="font-arial text-xs sm:text-sm md:text-base! font-bold! tracking-normal px-8! py-4! md:px-10! md:py-5! rounded-full!"
        >
          Grow My Brand →
        </GradientButton>
      </div>
    </section>
  );
}
