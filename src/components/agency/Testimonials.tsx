"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "It's always a pleasure working with RITGB. The team does an excellent job of taking our designs and turning them into fully functional websites that look and perform beautifully. Their skill, responsiveness, and attention to detail make every project a smooth and enjoyable journey.",
    name: "-Anurag Anupam",
    color: "#FA435B",
  },
  {
    quote:
      "RITGB completely transformed our online presence. From branding to the final build, everything felt thought through. Communication was smooth and the end result exceeded our expectations.",
    name: "-Priya Sharma",
    color: "#5ECFC9",
  },
  {
    quote:
      "Working with this team was refreshing. No fluff, no buzzwords — just solid execution and a final product that actually works the way it's supposed to.",
    name: "-Rohan Mehta",
    color: "#FBC7E0",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.set(card, {
          x: i * 16,
          y: i * -16,
          scale: 1 - i * 0.05,
          zIndex: testimonials.length - i,
        });
      });
    },
    { scope: containerRef },
  );

  const handleNext = () => {
    const current = cardRefs.current[activeIndex];
    if (!current) return;

    gsap.to(current, {
      x: "150%",
      rotate: 8,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        // Reset this card and move it to the back
        gsap.set(current, {
          x: (testimonials.length - 1) * 16,
          y: (testimonials.length - 1) * -16,
          scale: 1 - (testimonials.length - 1) * 0.05,
          zIndex: 1,
          opacity: 1,
          rotate: 0,
          display: "flex",
        });
      },
    });

    const nextIndex = (activeIndex + 1) % testimonials.length;

    for (let i = 1; i < testimonials.length; i++) {
      const idx = (activeIndex + i) % testimonials.length;
      const card = cardRefs.current[idx];
      if (!card) continue;
      const newPos = i - 1;

      gsap.to(card, {
        x: newPos * 16,
        y: newPos * -16,
        scale: 1 - newPos * 0.05,
        zIndex: testimonials.length - newPos,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    setActiveIndex(nextIndex);
  };

  return (
    <section className="w-full bg-black py-16 md:py-32 px-6 md:px-16 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-white/60 mb-8">
            Testimonials Section
          </p>

          <h2 className="font-(family-name:--font-right-grotesk) text-white text-[11vw] md:text-[5vw] font-black uppercase leading-[1.05] tracking-[-0.03em] mb-8">
            Things Clients <br /> Said Instead Of
            <br />
            &ldquo;Looks Nice&rdquo;
          </h2>

          <div className="relative w-full md:w-64 hidden md:block">
            <Image
              src="/images/noice.png"
              alt="Noice"
              width={300}
              height={250}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right side - image + card stack */}
        <div className="w-full">
          {/* Meme image, full width, only on mobile/tablet */}
          <div className="relative w-full md:hidden mb-5">
            <Image
              src="/images/noice.png"
              alt="Noice"
              width={300}
              height={250}
              className="w-full h-auto"
            />
          </div>

          <div
            ref={containerRef}
            className="relative h-100 md:h-112.5 flex items-center justify-center"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="absolute w-full max-w-md rounded-tl-3xl p-8 md:p-10 flex flex-col justify-between"
                style={{ backgroundColor: t.color, height: "420px" }}
              >
                <span className="font-(family-name:--font-right-grotesk) text-black text-6xl md:text-7xl font-black leading-none -mb-4">
                  &ldquo;
                </span>

                <p className="font-[Arial] text-black text-sm md:text-base leading-relaxed pl-6 md:pl-8 -mt-4">
                  {t.quote}
                </p>

                <div className="flex items-center justify-between">
                  <p className="text-black font-bold text-lg">{t.name}</p>

                  <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer shrink-0 font-bold border-2"
                    style={{
                      visibility: i === activeIndex ? "visible" : "hidden",
                    }}
                  >
                    →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
