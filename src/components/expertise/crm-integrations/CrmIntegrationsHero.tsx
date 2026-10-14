"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import GradientButton from "@/components/GradientButton";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const lines = [
  "CRM INTEGRATION",
  "COMPANY INDIA",
];

export default function CrmIntegrationsHero() {
  const containerRef = useRef<HTMLElement>(null);
  const router = useRouter();

  useGSAP(
    () => {
      gsap.from(".crm-line", {
        yPercent: 110,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.1,
        delay: 0.2,
      });

      gsap.from(".crm-sub-content", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
      });

      gsap.from(".crm-footer", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.7,
      });
    },
    { scope: containerRef },
  );

  const scrollToNext = () => {
    const nextEl = document.getElementById("next-section");
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#f8f8f7] text-black flex flex-col justify-between pt-28 md:pt-36 pb-8 md:pb-12 min-h-[96vh] relative overflow-hidden px-6 md:px-14 lg:px-20"
    >
      <div className="w-full h-2 md:h-4" />

      <div className="grow flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full my-auto">
        <h1 className="flex flex-col items-center text-center select-none mb-8 md:mb-10">
          {lines.map((lineText, index) => (
            <span key={index} className="overflow-hidden block">
              <span className="crm-line font-(family-name:--font-right-grotesk) text-[13vw] sm:text-[10vw] lg:text-[7.8vw] font-black leading-[0.88] uppercase tracking-[-0.03em] block text-black">
                {lineText}
              </span>
            </span>
          ))}
        </h1>

        <div className="crm-sub-content flex flex-col items-center text-center max-w-3xl mx-auto">
          <p className="font-arial text-2xl sm:text-3xl md:text-4xl text-neutral-900 leading-snug tracking-tight mb-4 md:mb-5 max-w-2xl">
            Your Customer Information Shouldn&apos;t Need a Copy-Paste Department.
          </p>

          <p className="font-arial text-neutral-700 text-sm sm:text-base leading-relaxed mb-3 md:mb-4 max-w-xl">
            Connect the tools that collect customer information with the system your team uses to manage it.
          </p>

          <p className="font-sans text-neutral-700 text-sm sm:text-base leading-relaxed mb-8 md:mb-10 max-w-xl">
            RITGB helps you plan practical connections, so information reaches the agreed place with fewer manual steps.
          </p>

          <div className="flex justify-center">
            <GradientButton
              type="button"
              theme="dark"
              onClick={() => router.push("/contact")}
              className="font-arial text-xs sm:text-sm md:text-base! font-bold! tracking-normal px-8! py-4! md:px-10! md:py-5! rounded-full!"
            >
              <span>Discuss Your CRM Connection</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </GradientButton>
          </div>
        </div>
      </div>

      <div className="crm-footer w-full flex items-center justify-between pt-12 md:pt-16 text-xs text-neutral-500 font-sans">
        <span>Connection. Automation. Accuracy.</span>

        <button
          type="button"
          onClick={scrollToNext}
          className="flex items-center gap-1.5 font-bold uppercase tracking-widest text-neutral-800 hover:text-black transition-colors cursor-pointer"
        >
          SCROLL TO EXPLORE <ArrowDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
}
