"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const steps = [
//   {
//     heading: "WE UNDERSTAND",
//     description:
//       "Your Brand, Audience, Goals, Problems, And Why Your Current Marketing Probably Feels Stuck",
//   },
//   {
//     heading: "WE BUILD",
//     description:
//       "Strategy, Visuals, Campaigns, Content, And Systems Designed To Grab Attention",
//   },
//   {
//     heading: "WE OPTIMIZE",
//     description:
//       "Test. Improve. Repeat. Because Good Marketing Rarely Happens Accidentally",
//   },
//   {
//     heading: "WE LAUNCH",
//     description: "Into The Internet Battlefield We Go",
//   },
// ];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  // const triggerRef = useRef<HTMLDivElement>(null);

  // useGSAP(
  //   () => {
  //     const cards = gsap.utils.toArray<HTMLElement>(".process-card");

  //     cards.forEach((card, i) => {
  //       gsap.set(card, {
  //         zIndex: i + 1,
  //         y: i === 0 ? 0 : "100vh",
  //       });
  //     });

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: triggerRef.current,
  //         start: "top 10%",
  //         end: "+=" + steps.length * 100 + "%",
  //         scrub: true,
  //         pin: true,
  //       },
  //     });

  //     cards.forEach((card, i) => {
  //       if (i === 0) return;
  //       tl.to(card, { y: 0, ease: "none" }, i * 0.5);
  //     });
  //   },
  //   { scope: sectionRef },
  // );

  return (
    <section ref={sectionRef} className="w-full bg-[#F5F5F5]">
      {/* Header */}
      <div className="py-16 md:py-24 px-6 md:px-16">
        <p className="text-xs font-medium uppercase tracking-widest mb-12">
          Process Section
        </p>
        <h2 className="font-(family-name:--font-right-grotesk) text-center text-[9vw] md:text-[5vw] font-black uppercase leading-[1.05] tracking-[-0.03em]">
          Our Process
          <br />
          Without The Buzzwords
        </h2>
      </div>
    </section>
  );
}
