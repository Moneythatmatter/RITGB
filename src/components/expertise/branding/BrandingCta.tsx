"use client";

import { useRouter } from "next/navigation";
import GradientButton from "@/components/GradientButton";

export default function BrandingCta() {
  const router = useRouter();

  return (
    <section className="w-full bg-white text-black py-24 md:py-32 px-6 md:px-14 lg:px-20 border-t border-black/5 flex flex-col items-center text-center">
      {/* Top Header Indicator */}
      <div className="flex items-center gap-2.5 pb-4 mb-8 md:mb-10">
        <span className="font-[Arial] text-xs uppercase tracking-widest text-black font-medium">
          YOUR NEXT MOVE
        </span>
      </div>

      {/* Centered Giant Display Typography */}
      <div className="max-w-5xl mx-auto mb-6 select-none">
        <h2 className="font-(family-name:--font-right-grotesk) text-[13vw] sm:text-[10vw] lg:text-[7.5vw] font-black leading-[0.92] uppercase tracking-[-0.02em] text-black">
          LET&apos;S MAKE IT
          <br />
          <span className="text-[#4db685]">UNMISTAKABLE.</span>
        </h2>
      </div>

      {/* Centered Paragraph */}
      <p className="text-neutral-800 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl mx-auto mb-10">
        Tell us what you&apos;re building. We&apos;ll help shape a brand that
        looks, feels and sounds like yours.
      </p>

      {/* Glowing Gradient Button from Homepage */}
      <div className="flex justify-center">
        <GradientButton
          onClick={() => router.push("/contact")}
          className="font-arial text-sm md:text-lg! font-semibold! tracking-widest! uppercase! px-8! py-5! md:px-10! md:py-6! rounded-full!"
        >
          Talk To RITGB →
        </GradientButton>
      </div>
    </section>
  );
}
