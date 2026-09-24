"use client";

import { useRouter } from "next/navigation";
import GradientButton from "@/components/GradientButton";

export default function WebsiteDesignCta() {
  const router = useRouter();

  return (
    <section className="w-full bg-white text-black py-24 md:py-32 px-6 md:px-14 lg:px-20 border-t border-black/5 flex flex-col items-center text-center">
      <div className="flex items-center gap-2.5 mb-3 md:mb-4">
        <span className="font-[Arial] text-xs uppercase tracking-widest text-black font-medium">
          YOUR NEXT MOVE
        </span>
      </div>

      <div className="max-w-6xl mx-auto mb-6 select-none">
        <h2 className="font-(family-name:--font-right-grotesk) text-[15vw] sm:text-[12vw] lg:text-[9vw] font-black leading-[0.88] uppercase tracking-[-0.03em] text-black">
          YOUR NEXT WEBSITE
          <br />
          <span className="text-[#4db685]">STARTS HERE.</span>
        </h2>
      </div>

      <p className="text-neutral-800 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl mx-auto mb-10">
        Tell us what your business needs to say. We&apos;ll help turn it into a
        website people can use and remember.
      </p>

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
