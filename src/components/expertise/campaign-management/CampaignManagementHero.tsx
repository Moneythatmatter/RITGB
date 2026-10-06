"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import GradientButton from "@/components/GradientButton";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const lines = [
  "DIGITAL MARKETING",
  "CAMPAIGN",
  "MANAGEMENT",
];

export default function CampaignManagementHero() {
  const containerRef = useRef<HTMLElement>(null);
  const router = useRouter();

  useGSAP(
    () => {
      gsap.from(".cm-line", {
        yPercent: 110,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.1,
        delay: 0.2,
      });

      gsap.from(".cm-sub-content", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
      });

      gsap.from(".cm-footer", {
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
      {/* Eyebrow / Service Number */}
      <div className="flex justify-center items-center w-full mb-6 md:mb-8">
        <span className="font-sans text-[11px] md:text-xs uppercase tracking-[0.25em] text-neutral-500 font-semibold">
          RITGB / SERVICE 08
        </span>
      </div>

      {/* Main Content */}
      <div className="grow flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full my-auto">
        <h1 className="flex flex-col items-center text-center select-none mb-8 md:mb-10">
          {lines.map((lineText, index) => (
            <span key={index} className="overflow-hidden block">
              <span className="cm-line font-(family-name:--font-right-grotesk) text-[13vw] sm:text-[10vw] lg:text-[7.5vw] font-black leading-[0.88] uppercase tracking-[-0.03em] block text-black">
                {lineText}
              </span>
            </span>
          ))}
        </h1>

        <div className="cm-sub-content flex flex-col items-center text-center max-w-2xl mx-auto">
          <p className="font-sans font-medium text-2xl sm:text-3xl md:text-4xl text-neutral-900 leading-snug tracking-tight mb-4 md:mb-5">
            One Campaign. A Clear Message Across Every Channel.
          </p>

          <p className="font-sans text-neutral-700 text-sm sm:text-base leading-relaxed mb-8 md:mb-10 max-w-xl">
            Bring your launch, promotion or awareness campaign together with a shared objective and an organised delivery plan. RITGB coordinates the message, content, selected channels and reporting so everyone works towards the same goal.
          </p>

          <div className="flex justify-center">
            <GradientButton
              type="button"
              theme="dark"
              onClick={() => router.push("/contact")}
              className="group inline-flex items-center gap-2.5 font-sans font-bold text-sm sm:text-base px-8 sm:px-10 py-4 sm:py-4.5 rounded-full active:scale-95 transition-all duration-200 cursor-pointer shadow-lg"
            >
              <span>Plan Your Next Campaign</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </GradientButton>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="cm-footer w-full flex items-center justify-between pt-12 md:pt-16 text-xs text-neutral-500 font-sans">
        <span>Strategy. Creativity. Growth.</span>

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
