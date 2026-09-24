"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import GradientButton from "@/components/GradientButton";
import { Asterisk } from "lucide-react";

const marqueeItems = [
  "STRUCTURE",
  "LABELS",
  "PRINT FILES",
];

const lines = [
  { text: "BUILT TO", isAccent: false },
  { text: "STAND OUT", isAccent: false },
  { text: "ON SHELF.", isAccent: true },
];

export default function PackagingDesignHero() {
  const containerRef = useRef<HTMLElement>(null);
  const router = useRouter();

  useGSAP(
    () => {
      gsap.from(".packaging-line", {
        yPercent: 110,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.1,
        delay: 0.2,
      });

      gsap.from(".packaging-sub-content", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#080808] text-white flex flex-col justify-between pt-24 md:pt-28 min-h-[92vh] relative overflow-hidden"
    >
      <div className="px-6 md:px-14 lg:px-20 py-12 md:py-20 grow flex flex-col items-center justify-center text-center">
        <h1 className="flex flex-col items-center text-center select-none">
          {lines.map((item, index) => (
            <span key={index} className="overflow-hidden block">
              <span
                className={`packaging-line font-(family-name:--font-right-grotesk) text-[15vw] sm:text-[13vw] lg:text-[9.5vw] font-black leading-[0.88] uppercase tracking-[-0.03em] block ${item.isAccent ? "text-[#4db685]" : "text-white"
                  }`}
              >
                {item.text}
              </span>
            </span>
          ))}
        </h1>

        <div className="packaging-sub-content flex flex-col items-center text-center mt-6 md:mt-8 max-w-xl">
          <p className="text-neutral-300 text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-6 md:mb-8">
            Packaging that catches attention, communicates clearly and feels true
            to your brand.
          </p>

          <div className="flex justify-center">
            <GradientButton
              theme="light"
              onClick={() => router.push("/contact")}
              className="font-arial text-sm md:text-lg! font-semibold! tracking-widest! uppercase! px-8! py-5! md:px-10! md:py-6! rounded-full!"
            >
              Let&apos;s Build It →
            </GradientButton>
          </div>
        </div>
      </div>

      <div className="w-full bg-white text-black py-4 md:py-5 overflow-hidden select-none border-y border-neutral-200">
        <div className="flex w-max animate-[marquee_24s_linear_infinite] whitespace-nowrap items-center">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, index) => (
              <div key={index} className="flex items-center">
                <span className="font-(family-name:--font-right-grotesk) text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight px-4 md:px-6">
                  {item}
                </span>
                <span className="text-[#FF4E78] text-2xl md:text-3xl font-bold px-2 md:px-3">
                  <Asterisk className="w-12 h-12" strokeWidth={1} />
                </span>
              </div>
            ),
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
}
