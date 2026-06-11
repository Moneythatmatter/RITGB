"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: "/images/project2.png",
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
    src: "/images/project5.png",
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

  useGSAP(
    () => {
      // Headline animation
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
      className="bg-black min-h-screen md:min-h-screen relative px-8 md:px-27.75 py-16 overflow-hidden"
    >
      {/* Top row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-16">
        {/* Headline */}
        <div className="overflow-hidden">
          <h2 className="portfolio-title font-(family-name:--font-right-grotesk) text-[8vw] md:text-[4vw] font-black leading-tight tracking-[-0.02em] uppercase text-white">
            Selected Client <br /> Projects
          </h2>
        </div>

        {/* Button */}
        <button className="border border-white text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-white hover:text-black transition-colors duration-300 whitespace-nowrap self-start italic cursor-pointer">
          View All Projects →
        </button>
      </div>

      {/* Images */}
      <div className="relative h-[50vh] md:h-[80vh] group">
        {images.map((img, i) => (
          <div
            key={i}
            className="portfolio-img absolute w-[28%] md:w-[22%] transition-all duration-300 md:group-hover:opacity-40 md:hover:opacity-100! md:hover:scale-105 md:hover:z-100"
            style={{
              left: img.style.left,
              bottom: img.style.bottom,
              rotate: img.style.rotate,
              transformOrigin: img.style.transformOrigin,
            }}
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
