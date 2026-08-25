"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = "hidden";

    const counter = { value: 0 };
    const tl = gsap.timeline();

    tl.to(counter, {
      value: 90,
      duration: 1,
      ease: "power1.out",
      onUpdate: () => {
        const val = Math.round(counter.value);
        if (barRef.current) barRef.current.style.width = `${val}%`;
        if (numberRef.current) numberRef.current.textContent = `${val}%`;
      },
    });

    const finish = () => {
      gsap.to(counter, {
        value: 100,
        duration: 1.5,
        ease: "power1.out",
        onUpdate: () => {
          const val = Math.round(counter.value);
          if (barRef.current) barRef.current.style.width = `${val}%`;
          if (numberRef.current) numberRef.current.textContent = `${val}%`;
        },
        onComplete: () => {
          // Exit animation
          const exitTl = gsap.timeline({
            onComplete: () => {
              document.body.style.overflow = "";
              setIsDone(true);
              onComplete?.();
            },
          });

          exitTl.to(containerRef.current, {
            yPercent: -100,
            duration: 0.9,
            ease: "power4.inOut",
            delay: 0.2,
          });
        },
      });
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    return () => {
      window.removeEventListener("load", finish);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black text-white"
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-center text-4xl leading-tight sm:text-5xl">
          Lowkey <em className="font-serif italic">Worth</em> The Wait
        </h1>

        <div className="mt-8 h-48 w-48 overflow-hidden sm:h-56 sm:w-56">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/loading/waiting meme gif.webp"
            alt="Loading waiting meme GIF"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-10 h-px w-[90vw] max-w-xl bg-white/25 sm:w-[70vw]">
          <div ref={barRef} className="h-px bg-white" style={{ width: "0%" }} />
        </div>

        <span
          ref={numberRef}
          className="mt-6 text-6xl font-bold text-[#EF5A3D] sm:text-7xl"
        >
          0%
        </span>
      </div>
    </div>
  );
}
