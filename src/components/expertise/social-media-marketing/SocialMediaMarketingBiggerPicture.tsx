"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SocialMediaMarketingBiggerPicture() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".picture-headline", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".picture-right", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.2,
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
      className="w-full bg-[#52BEAB] text-black py-20 md:py-28 px-6 md:px-14 lg:px-20 border-t border-black/5"
    >
      <div className="flex items-center gap-2.5 pb-4 mb-10 md:mb-14">
        <span className="font-[Arial] text-[11px] md:text-xs uppercase tracking-widest text-black">
          THE BIGGER PICTURE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-6">
          <h2 className="picture-headline font-(family-name:--font-right-grotesk) text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black uppercase leading-[0.92] tracking-[-0.03em] text-black select-none">
            CONTENT THAT {" "}
            <br className="hidden lg:block" />
            HELPS CUSTOMERS {" "}
            <br className="hidden lg:block" />
            DECIDE
          </h2>
        </div>

        <div className="picture-right lg:col-span-6 flex flex-col items-start lg:pt-2 space-y-6">
          <p className="text-black text-base sm:text-lg lg:text-xl font-sans leading-relaxed max-w-xl">
            We build content around the questions people ask before buying: What
            does your business do? Who is it for? How does it work? Why should
            they trust it?
          </p>

          <p className="text-black/90 text-base sm:text-lg lg:text-xl font-sans leading-relaxed max-w-xl">
            The mix may include service explanations, product demonstrations,
            educational posts and approved customer stories. Every format should
            help the audience move from recognition towards a useful next step.
          </p>
        </div>
      </div>
    </section>
  );
}
