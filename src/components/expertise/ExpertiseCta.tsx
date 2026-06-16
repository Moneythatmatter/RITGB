"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

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
      className="w-full bg-[#F5F5F5] py-24 md:py-32 px-6 md:px-16"
    >
      <div className="max-w-6xl">
        <div className="overflow-hidden">
          <h2 className="cta-line font-(family-name:--font-right-grotesk) text-[14vw] md:text-[8vw] font-black leading-[0.95] uppercase tracking-[-0.03em] md:inline">
            Your Brand{" "}
          </h2>
          <span className="block md:inline-block relative w-[50vw] md:w-[15vw] aspect-306/170 md:align-middle md:translate-y-[-10%] mt-2 md:mt-0">
            <Image
              src="/images/leo.png"
              alt="Cheers"
              fill
              sizes="(max-width: 768px) 50vw, 15vw"
              className="object-cover"
            />
          </span>
        </div>

        <div className="overflow-hidden">
          <h2 className="cta-line font-(family-name:--font-right-grotesk) text-[14vw] md:text-[8vw] font-black leading-[0.95] uppercase tracking-[-0.03em]">
            Deserves Better.
          </h2>
        </div>
      </div>

      <p className="text-sm md:text-base mt-6 max-w-md">
        Better strategy. Better design. Better marketing.
        <br />
        Better internet energy.
      </p>

      <Link href={"/contact"}>
        {" "}
        <button className="bg-black text-white font-(family-name:--font-right-grotesk) flex items-center gap-3 rounded-full pl-6 pr-2 py-3 text-sm font-bold uppercase tracking-widest hover:bg-black/80 transition-colors duration-300 cursor-pointer mt-8">
          Let&apos;s Build Something ↗
        </button>
      </Link>
    </section>
  );
}
