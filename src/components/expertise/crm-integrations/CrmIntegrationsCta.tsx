"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GradientButton from "@/components/GradientButton";

gsap.registerPlugin(ScrollTrigger);

export default function CrmIntegrationsCta() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".crm-cta-content", {
        y: 35,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#6DC9BC] text-black py-24 md:py-36 px-6 md:px-14 lg:px-20 flex flex-col items-center text-center"
    >
      <div className="crm-cta-content max-w-6xl mx-auto flex flex-col items-center">
        <div className="mb-6 md:mb-8 select-none">
          <h2 className="font-(family-name:--font-right-grotesk) text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.2rem] font-black leading-[0.88] uppercase tracking-[-0.03em] text-black">
            LET&apos;S RETIRE A FEW MANUAL <br />
            STEPS.
          </h2>
        </div>

        <p className="font-sans text-neutral-900 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl mx-auto mb-8 md:mb-10">
          Tell us which tools your team uses and what information needs to move between them.
        </p>

        <div className="flex justify-center">
          <GradientButton
            type="button"
            theme="dark"
            onClick={() => router.push("/contact")}
            className="group inline-flex items-center gap-2.5 font-sans font-medium text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-full active:scale-95 transition-all duration-200 cursor-pointer shadow-lg"
          >
            <span>Discuss Your CRM Connection</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
