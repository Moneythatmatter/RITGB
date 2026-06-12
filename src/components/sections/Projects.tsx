"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: "/images/project1.png",
    alt: "Project 1",
    style: {
      left: "5%",
      bottom: "25%",
      rotate: "-22deg",
      transformOrigin: "bottom center",
    },
  },
  {
    src: "/images/project2.png",
    alt: "Project 2",
    style: {
      left: "12%",
      bottom: "27%",
      rotate: "-14deg",
      transformOrigin: "bottom center",
    },
  },
  {
    src: "/images/project3.png",
    alt: "Project 3",
    style: {
      left: "26%",
      bottom: "30%",
      rotate: "-4deg",
      transformOrigin: "bottom center",
    },
  },
  {
    src: "/images/project4.png",
    alt: "Project 4",
    style: {
      left: "40%",
      bottom: "33%",
      rotate: "4deg",
      transformOrigin: "bottom center",
    },
  },
  {
    src: "/images/project5.png",
    alt: "Project 5",
    style: {
      left: "55%",
      bottom: "30%",
      rotate: "12deg",
      transformOrigin: "bottom center",
    },
  },
  {
    src: "/images/project2.png",
    alt: "Project 6",
    style: {
      left: "68%",
      bottom: "27%",
      rotate: "22deg",
      transformOrigin: "bottom center",
    },
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      gsap.from(".portfolio-title", {
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
    <section
      ref={sectionRef}
      className="bg-black min-h-[75svh] md:min-h-screen relative px-8 md:px-27.75 py-10 md:py-16"
    >
      {/* Top row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8 md:mb-16 overflow-hidden">
        <div className="overflow-hidden">
          <h2 className="portfolio-title font-(family-name:--font-right-grotesk) text-[8vw] md:text-[4vw] font-black leading-tight tracking-[-0.02em] uppercase text-white">
            Selected Client <br /> Projects
          </h2>
        </div>
        <button className="border border-white text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-white hover:text-black transition-colors duration-300 whitespace-nowrap self-start italic cursor-pointer">
          View All Projects →
        </button>
      </div>

      {/* Images */}
      <div className="relative h-[38svh] md:h-[80vh]">
        {images.map((img, i) => (
          <div
            key={i}
            className="portfolio-img absolute w-[28%] md:w-[22%] transition-all duration-300"
            style={{
              left: img.style.left,
              bottom: img.style.bottom,
              transformOrigin: img.style.transformOrigin,
              transform: `rotate(${img.style.rotate}) ${hoveredIndex === i ? "translateY(-20px)" : "translateY(0px)"}`,
              zIndex: hoveredIndex === i ? 50 : i + 1,
              filter:
                hoveredIndex !== null && hoveredIndex !== i
                  ? "brightness(0.3)"
                  : "brightness(1)",
              transition:
                "filter 0.4s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={500}
              loading="eager"
              className="w-full h-auto object-cover shadow-2xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
