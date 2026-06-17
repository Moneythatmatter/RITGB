"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ExpertiseCta() {
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
      className="w-full bg-[#F5F5F5] py-24 md:py-32 px-6 md:px-16 flex flex-col items-center text-center"
    >
      <div className="max-w-6xl">
        <div className="overflow-hidden">
          <h2 className="cta-line font-(family-name:--font-right-grotesk) text-[14vw] md:text-[8vw] font-black leading-[0.95] uppercase tracking-[-0.03em]">
            Your Brand
          </h2>
        </div>

        <div className="overflow-hidden">
          <h2 className="cta-line font-(family-name:--font-right-grotesk) text-[14vw] md:text-[8vw] font-black leading-[0.95] uppercase tracking-[-0.03em]">
            Deserves Better.
          </h2>
        </div>
      </div>
      <p className="text-sm md:text-base mt-6 md:whitespace-nowrap">
        Better strategy. Better design.
        <br className="md:hidden" /> Better marketing.
        <br className="md:hidden" /> Better internet energy.
      </p>

      <Link href={"/contact"} className="self-center">
        <button className="bg-black text-white font-(family-name:--font-right-grotesk) flex items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black/80 transition-colors duration-300 cursor-pointer mt-8">
          Let&apos;s Build Something <ArrowUpRight size={16} />
        </button>
      </Link>
    </section>
  );
}
