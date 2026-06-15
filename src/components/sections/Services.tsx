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
    titleSize: "text-[28vw] md:text-[15vw]",
    background: "#000",
    text: "#fff",
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
    src: "/images/services/design.png",
    gifAlt: "Design",
  },
  {
    number: "2",
    title: "TECH",
    titleSize: "text-[38vw] md:text-[18vw]",
    background: "#E64A5C",
    text: "#fff",
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
    src: "/images/services/tech.png",
    alt: "Technology",
    gifAlt: "Technology",
  },
  {
    number: "3",
    title: "MARKETING",
    titleSize: "text-[20vw] md:text-[13vw]",
    background: "#FFC4DE",
    text: "#000",
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
    src: "/images/services/marketing.png",
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
      <div className="py-16 md:py-0">
        <p className="font-[Arial] text-xs tracking-widest uppercase text-black mb-12 md:mb-16 px-8 md:px-27.75 md:pt-24">
          service section
        </p>

        {/* Headline */}
        <div className="md:pb-24 md:pt-0 px-4 md:px-27.75">
          <div className="overflow-hidden">
            <h2 className="font-(family-name:--font-right-grotesk) services-line font-grotesk text-[6vw] md:text-[4vw] font-black leading-none tracking-[-0.02em] whitespace-nowrap uppercase text-center">
              Where We Cause Internet Problems
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="font-(family-name:--font-right-grotesk) services-line text-[8vw] md:text-[4vw] font-black leading-none tracking-[-0.02em] uppercase text-center">
              (For Your Competitors)
            </h2>
          </div>
        </div>
      </div>

      {/* Stacked Cards */}
      <div className="relative">
        {cards.map((card, i) => (
          <div
            key={i}
            className="sticky min-h-max md:h-screen"
            style={{ top: "0px", backgroundColor: card.background }}
          >
            <div className="w-full h-full flex flex-col md:flex-row">
              {/* Left text content */}
              <div className="flex flex-col w-full md:w-[60%] h-auto md:h-full px-8 md:px-16 py-10 md:py-12 gap-6 md:gap-8">
                {/* Top content */}
                <div className="flex flex-col gap-4">
                  {/* Circled number */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ borderColor: card.text, borderWidth: "1px" }}
                  >
                    <span
                      style={{ color: card.text }}
                      className="text-sm font-medium"
                    >
                      {card.number}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{ color: card.text }}
                    className="font-[Arial] text-sm leading-relaxed max-w-lg"
                  >
                    {card.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-1">
                    {card.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="font-[Arial] text-sm flex items-center gap-2"
                        style={{ color: card.text }}
                      >
                        <span
                          className="w-1 h-1 rounded-full inline-block"
                          style={{ backgroundColor: card.text }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <h2
                  className={`font-(family-name:--font-right-grotesk) font-black uppercase leading-none tracking-[-0.02em] mt-6 md:mt-8 ${card.titleSize}`}
                  style={{ color: card.text }}
                >
                  {card.title}
                </h2>
              </div>

              {/* Right image */}
              <div className="hidden md:flex w-full md:w-[40%] items-center justify-center p-6 md:p-10">
                <div className="relative w-full h-[40vh] md:h-[75%] rounded-lg overflow-hidden">
                  <Image
                    src={card.src}
                    alt={card.gifAlt}
                    fill
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
