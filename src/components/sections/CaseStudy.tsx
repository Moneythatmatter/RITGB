"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  { src: "/images/crtly.png", name: "Crtly", category: "Mobile App" },
  { src: "/images/tansto.png", name: "Tansto", category: "Web Design" },
];

export default function CaseStudy() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Parallax each image inside its container
      gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest(".case-card"),
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-[#f0eeea] py-24 px-8 md:px-27.75">
      {/* Label */}
      <p className="font-[Arial] text-xs tracking-widest uppercase text-black mb-8">
        Case Study Section
      </p>

      {/* Headline */}
      <div className="overflow-hidden mb-20">
        <h2 className="case-title font-(family-name:--font-right-grotesk) text-[4vw] font-black leading-none tracking-[-0.02em] uppercase">
          From Low Reach To Real Results
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cases.map((c, i) => (
          <div key={i} className="flex flex-col gap-4">
            {/* Glassmorphic card container — stays fixed, clips the image */}
            <div
              className="case-card relative w-full aspect-4/3 rounded-2xl overflow-hidden"
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                background: "rgba(255,255,255,0.08)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              {/* Image is taller than container so parallax has room to move */}
              <div className="parallax-img absolute inset-0 w-full h-[120%] top-[-10%]">
                <Image
                  src={c.src}
                  alt={c.name}
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Glass overlay shimmer */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)",
                }}
              />
            </div>

            {/* Card label */}
            <div>
              <p className="font-(family-name:--font-right-grotesk) font-bold text-base">
                {c.name}
              </p>
              <p className="font-[Arial] text-sm text-black">{c.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
