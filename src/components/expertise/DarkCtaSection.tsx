"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import GradientButton from "@/components/GradientButton";

export interface DarkCtaSectionProps {
  tag?: string;
  headline: React.ReactNode;
  description: string;
  buttonText: string;
  buttonHref?: string;
}

export default function DarkCtaSection({
  tag = "YOUR NEXT MOVE",
  headline,
  description,
  buttonText,
  buttonHref = "/contact",
}: DarkCtaSectionProps) {
  const router = useRouter();

  return (
    <section className="w-full bg-black text-white py-24 md:py-36 px-6 md:px-14 lg:px-20 flex flex-col items-center text-center">
      <div className="mb-6 md:mb-8">
        <span className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
          {tag}
        </span>
      </div>

      <div className="max-w-6xl mx-auto mb-6 md:mb-8 select-none">
        <h2 className="font-(family-name:--font-right-grotesk) text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.2rem] font-black leading-[0.88] uppercase tracking-[-0.03em] text-white">
          {headline}
        </h2>
      </div>

      <p className="font-sans text-neutral-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl mx-auto mb-10 md:mb-12">
        {description}
      </p>

      <div className="flex justify-center">
        <GradientButton
          type="button"
          theme="light"
          onClick={() => router.push(buttonHref)}
          className="group inline-flex items-center gap-2.5 font-sans font-bold text-sm sm:text-base px-8 sm:px-10 py-4 sm:py-4.5 rounded-full active:scale-95 transition-all duration-200 cursor-pointer shadow-lg"
        >
          <span>{buttonText}</span>
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </GradientButton>
      </div>
    </section>
  );
}
