"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Meme() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".meme-line", {
        yPercent: 120,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(imageRef.current, {
        scale: 0.2,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-black flex flex-col items-center justify-center py-24 px-8 gap-10"
    >
      <div className="text-center text-white text-3xl md:text-4xl leading-snug">
        <div className="overflow-hidden">
          <p className="meme-line">Basically:</p>
        </div>
        <div className="overflow-hidden">
          <p className="meme-line">
            You <span className="font-serif italic">focus</span> On Your
            Business.
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="meme-line">
            We Handle The <em className="font-serif italic">internet</em> Drama.
          </p>
        </div>
      </div>

      <div ref={imageRef} className="w-full max-w-lg">
        <Image
          src="/images/breaking-bad.gif"
          alt="Let's Cook"
          loading="eager"
          width={484}
          height={282}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
