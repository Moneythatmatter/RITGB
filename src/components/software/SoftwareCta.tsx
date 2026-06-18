"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const lines = ["YOUR BUSINESS", "DESERVES SMARTER", "SYSTEMS"];

export default function SoftwareCTA() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".cta-line", {
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
      className=" w-full bg-[#F5F5F5] py-24 md:py-32 px-6 md:px-16"
    >
      <div className="max-w-4xl mx-auto">
        {lines.map((line, i) => (
          <div
            key={i}
            className="overflow-hidden flex justify-center items-center"
          >
            <h2 className="text-center cta-line font-(family-name:--font-right-grotesk) text-[12vw] md:text-[6vw] font-black leading-[0.95] uppercase tracking-[-0.03em]">
              {line}
            </h2>
          </div>
        ))}
      </div>

      <p className="w-full text-center font-[Arial] text-sm md:text-base mt-6 max-w-md mx-auto">
        Better strategy. Better design. Better marketing.
        <br />
        Better internet energy.
      </p>

      <Link href="/contact" className="flex justify-center items-center">
        {" "}
        <button className="bg-black text-white font-(family-name:--font-right-grotesk) flex items-center gap-3 rounded-full px-4 py-3 text-sm font-bold uppercase tracking-widest hover:bg-black/80 transition-colors duration-300 cursor-pointer mt-8 text-center">
          Talk To The Tech Team ↗
        </button>
      </Link>
    </section>
  );
}
