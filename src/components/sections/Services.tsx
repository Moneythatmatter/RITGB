"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    number: "1",
    title: "DESIGN",
    description:
      "We design brands that people remember, stalk, and accidentally become obsessed with. From visuals and websites to full brand systems — we make sure your business doesn't look like it was built in a hurry.",
    bullets: [
      "Brand Identity",
      "Logo Design",
      "UI/UX Design",
      "Website Design",
      "Packaging Design",
      "Visual Systems",
      "Social Media Design",
      "Creative Direction",
    ],
    src: "/images/design.gif",
    gifAlt: "Design",
  },
  {
    number: "2",
    title: "TECHNOLOGY",
    description:
      "We build fast, scalable digital products that actually work. From websites to full-stack applications — we make sure your tech doesn't embarrass your brand.",
    bullets: [
      "Web Development",
      "Mobile Apps",
      "E-commerce",
      "CMS Integration",
      "API Development",
      "Performance Optimization",
    ],
    src: "/images/design.gif",
    alt: "Technology",
    gifAlt: "Technology",
  },
  {
    number: "3",
    title: "MARKETING",
    description:
      "We run campaigns that get your brand noticed, remembered, and chosen. No vanity metrics — just real growth.",
    bullets: [
      "Social Media",
      "Paid Ads",
      "SEO",
      "Content Strategy",
      "Email Marketing",
      "Analytics",
    ],
    src: "/images/design.gif",
    alt: "Marketing",
    gifAlt: "Marketing",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".services-line", {
        yPercent: 120,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-white">
      <p className="font-[Arial] text-xs tracking-widest uppercase text-black mb-16 px-8 md:px-27.75 pt-24">
        service section
      </p>

      {/* Headline */}
      <div className="py-24 px-8 md:px-27.75">
        <div className="overflow-hidden">
          <h2 className="font-(family-name:--font-right-grotesk) services-line font-grotesk text-[4vw] font-black leading-none tracking-[-0.02em] uppercase text-center">
            Where We Cause Internet Problems
          </h2>
        </div>
        <div className="overflow-hidden">
          <h2 className="font-(family-name:--font-right-grotesk) services-line text-[4vw] font-black leading-none tracking-[-0.02em] uppercase text-center">
            (For Your Competitors)
          </h2>
        </div>
      </div>

      {/* Stacked Cards */}
      <div className="relative">
        {cards.map((card, i) => (
          <div key={i} className="sticky h-screen" style={{ top: "0px" }}>
            <div className="w-full h-full bg-black flex flex-col md:flex-row">
              {/* Left text content */}
              <div className="flex flex-col justify-between w-full md:w-[60%] h-full px-8 md:px-16 py-12">
                {/* Top content */}
                <div className="flex flex-col gap-6">
                  {/* Circled number */}
                  <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {card.number}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-[Arial] text-white text-sm leading-relaxed max-w-lg">
                    {card.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-1">
                    {card.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="font-[Arial] text-white text-sm flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-white inline-block" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom big title */}
                <h2 className="font-(family-name:--font-right-grotesk) text-white font-black uppercase leading-none text-[10vw] md:text-[11vw] tracking-[-0.02em]">
                  {card.title}
                </h2>
              </div>

              {/* Right gif */}
              <div className="w-full h-[60vh] md:h-full md:w-[40%] relative">
                <Image
                  src={card.src}
                  alt={card.gifAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
