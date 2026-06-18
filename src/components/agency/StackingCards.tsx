"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    heading: "WE UNDERSTAND",
    description:
      "Your Brand, Audience, Goals, Problems, And Why Your Current Marketing Probably Feels Stuck",
  },
  {
    heading: "WE BUILD",
    description:
      "Strategy, Visuals, Campaigns, Content, And Systems Designed To Grab Attention",
  },
  {
    heading: "WE OPTIMIZE",
    description:
      "Test. Improve. Repeat. Because Good Marketing Rarely Happens Accidentally",
  },
  {
    heading: "WE LAUNCH",
    description: "Into The Internet Battlefield We Go",
  },
];

export default function StackingCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cardEls = cardsRef.current.filter(Boolean) as HTMLDivElement[];

      cardEls.forEach((card, i) => {
        const isLast = i === cardEls.length - 1;

        ScrollTrigger.create({
          trigger: card,
          start: `top 80px`,
          endTrigger: cardEls[cardEls.length - 1],
          end: `top 80px`,
          pin: true,
          pinSpacing: false,
        });

        if (!isLast) {
          gsap.to(card, {
            scale: 0.94 - i * 0.015,

            scrollTrigger: {
              trigger: card,
              start: "top 80px",
              end: `+=${window.innerHeight * 0.5}`,
              scrub: true,
            },
          });
        }

        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className=" mt-8 min-h-screen bg-white ">
      <div className="relative px-4 md:px-8 pb-25">
        <div className="max-w-2xl mx-auto space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="rounded-2xl relative bg-black overflow-hidden will-change-transform"
              style={{
                transformOrigin: "top center",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.08)",
                aspectRatio: "1 / 1",
              }}
            >
              <div className="font-(family-name:--font-right-grotesk) text-center font- flex flex-col justify-between h-full px-10 py-12 md:px-14 md:py-14">
                {/* Heading — top */}
                <h2 className="font-(family-name:--font-right-grotesk) text-4xl md:text-6xl font-black text-white leading-none tracking-tight uppercase ">
                  {step.heading}
                </h2>

                {/* Description — bottom */}
                <p className="font-[Arial] text-white/60 text-base md:text-lg leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
