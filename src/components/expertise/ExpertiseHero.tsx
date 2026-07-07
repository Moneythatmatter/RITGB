"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import GradientButton from "@/components/GradientButton";

const lines = ["EVERYTHING", "YOUR BRAND", "NEEDS UNDER", "ONE ROOF"];

export default function ExpertiseHero() {
  const containerRef = useRef<HTMLElement>(null);
  const router = useRouter();

  useGSAP(
    () => {
      gsap.from(".expertise-line", {
        yPercent: 120,
        duration: 1,
        ease: "power4.out",
        stagger: 0.15,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#4DB685] pt-37.5 pb-32 md:py-32 flex flex-col items-center justify-center gap-12 md:min-h-[80vh]"
    >
      <div className="flex flex-col items-center text-center">
        {lines.map((line, i) => (
          <div key={i} className="overflow-hidden">
            <h1 className="expertise-line font-(family-name:--font-right-grotesk) text-[13vw] md:text-[10vw] font-black leading-[0.95] uppercase tracking-[-0.03em]">
              {line}
            </h1>
          </div>
        ))}
      </div>

      <GradientButton
        onClick={() => router.push("/contact")}
        className="font-arial flex items-baseline gap-2 text-sm md:text-lg! font-semibold! tracking-widest! uppercase! px-6! py-5! md:px-8! md:py-6! rounded-full!"
      >
        Grow My Brand →
      </GradientButton>
    </section>
  );
}
