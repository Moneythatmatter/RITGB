"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import GradientButton from "@/components/GradientButton";

const lines = ["YOUR BUSINESS", "DESERVES BETTER", "SOFTWARE"];

export default function SoftwareHero() {
  const containerRef = useRef<HTMLElement>(null);
  const router = useRouter();

  useGSAP(
    () => {
      gsap.from(".software-line", {
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
      className="w-full bg-[#F5F5F5] flex flex-col items-center justify-center relative gap-12 pt-37.5 pb-32 md:min-h-[80vh] z-10"
    >
      <div className="flex flex-col items-center text-center">
        {lines.map((line, i) => (
          <div key={i} className="overflow-hidden">
            <h1 className="software-line font-(family-name:--font-right-grotesk) text-[14vw] sm:text-[11vw] lg:text-[8.5vw] font-black leading-[0.88] uppercase tracking-[-0.013em]">
              {line}
            </h1>
          </div>
        ))}
      </div>

      <GradientButton
        onClick={() => router.push("/contact")}
        className="font-arial text-xs sm:text-sm md:text-base! font-bold! tracking-normal px-8! py-4! md:px-10! md:py-5! rounded-full!"
      >
        Grow My Brand →
      </GradientButton>
    </section>
  );
}
