"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// ── Process steps ──────────────────────────────────────────────
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

// ── Team data ──────────────────────────────────────────────────
type Member = { name: string; role: string; image: string };
type TeamGroup = {
  number: string;
  titlePrefix: string;
  titleRest: string;
  members: Member[];
};

const groups: TeamGroup[] = [
  {
    number: "(01)",
    titlePrefix: "Strategists",
    titleRest: 'asking "but will people actually care?"',
    members: [
      {
        name: "Sagarika Patra",
        role: "CEO/Co-Founder",
        image: "/images/agency/sagarika.png",
      },
      {
        name: "Atul Ranjan Das",
        role: "Director / Co-Founder",
        image: "/images/agency/atul.png",
      },
      {
        name: "Premchand Kumar Shaw",
        role: "Managing Director",
        image: "/images/agency/prem.png",
      },
    ],
  },
  {
    number: "(02)",
    titlePrefix: "Our advisory board",
    titleRest:
      ": wisdom, guidance, and the occasional tough question",
    members: [
      // {
      //   name: "Arindam Roy Chowdhury",
      //   role: "Advisor",
      //   image: "/images/agency/arindam.png",
      // },
      // {
      //   name: "Kamal Kumar Rout",
      //   role: "Advisor",
      //   image: "/images/agency/kamal.png",
      // },
      {
        name: "Abhijit Karfi Das",
        role: "Advisor",
        image: "/images/agency/abhijit.png",
      },
    ],
  },
  {
    number: "(03)",
    titlePrefix: "Designers",
    titleRest: "obsessed with pixels",
    members: [
      {
        name: "Ankita Rani Sahu",
        role: "Senior Graphic Designer",
        image: "/images/agency/ankita.png",
      },
      {
        name: "Soumya Shree Panda",
        role: "Graphic Designer",
        image: "/images/agency/soumyashree.png",
      },
    ],
  },
  {
    number: "(04)",
    titlePrefix: "Marketers",
    titleRest: "fighting algorithms daily",
    members: [
      {
        name: "Soumya Ranjan Barik",
        role: "SEO Specialist",
        image: "/images/agency/soumya.png",
      },
      {
        name: "Shriniti Babu",
        role: "SEO Specialist",
        image: "/images/agency/shrinithi.png",
      },
    ],
  },
  {
    number: "(05)",
    titlePrefix: "Tech",
    titleRest: "people not just vibe-coding websites & apps",
    members: [
      {
        name: "Mohit Kumar Saw",
        role: "Software Engineer",
        image: "/images/agency/mohit.png",
      },
      {
        name: "Hemant Kumar",
        role: "Assistant Software Engineer",
        image: "/images/agency/hemant.png",
      },
      {
        name: "Jay Kumar Saw",
        role: "Assistant Software Engineer",
        image: "/images/agency/jay.jpeg",
      },
    ],
  },
  {
    number: "(06)",
    titlePrefix: "Content",
    titleRest: "writers proving AI still needs a human touch",
    members: [
      {
        name: "Shrinidhi Sharma",
        role: "Content Writer",
        image: "/images/agency/shrinidhi.png",
      },
      {
        name: "Priyanka Mishra",
        role: "Content Writer",
        image: "/images/agency/priyanka.png",
      },
    ],
  },
];

// ── Combined component ─────────────────────────────────────────
export default function ProcessAndTeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".process-card");

      cards.forEach((card, i) => {
        gsap.set(card, {
          zIndex: i + 1,
          y: i === 0 ? 0 : "100%",
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=" + steps.length * 100 + "%",
          scrub: true,
          pin: true,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.to(card, { y: 0, ease: "none" }, i * 0.5);
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="w-full bg-[#F5F5F5]">
      {/* ── Process: header ── */}
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

      {/* ── Process: pinned card stack ── */}
      <div
        ref={triggerRef}
        className="relative h-screen w-full overflow-hidden flex items-start justify-center pt-16 md:pt-24"
      >
        {steps.map((step, i) => (
          <div
            key={i}
            className="process-card absolute w-[75vw] h-[80vw] md:w-110 md:h-110 rounded-sm shadow-2xl bg-black flex flex-col justify-between p-8 md:p-12 text-center overflow-hidden"
          >
            <h3 className="font-(family-name:--font-right-grotesk) text-white text-3xl md:text-5xl font-black uppercase leading-tight">
              {step.heading}
            </h3>
            <p className="text-white text-sm md:text-base max-w-xs mx-auto">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* ── Team: header ── */}
      <div className="py-16 md:py-24 px-6 md:px-16">
        <p className="text-xs font-medium uppercase tracking-widest mb-12">
          Team Section
        </p>
        <h2 className="font-(family-name:--font-right-grotesk) text-center text-[10vw] md:text-[5vw] font-black uppercase leading-[1.05] tracking-[-0.03em]">
          The Brains Behind
          <br />
          The Browser Tabs
        </h2>
      </div>

      {/* ── Team: groups ── */}
      {groups.map((group, i) => (
        <div key={i} className="px-6 md:px-16 py-12 border-t border-black/10">
          <div className="flex items-start gap-4 mb-10">
            <span className="text-xs font-medium shrink-0 mt-1">
              {group.number}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
              <span className="font-serif italic font-medium">
                {group.titlePrefix}
              </span>{" "}
              {group.titleRest}
            </h3>
          </div>

          <div
            className={`grid grid-cols-1 gap-8 md:gap-12 ${group.members.length % 2 === 0
              ? "md:grid-cols-2"
              : "md:grid-cols-3"
              }`}
          >
            {group.members.map((member, j) => (
              <div
                key={j}
                className={
                  group.members.length === 1 && j === 0
                    ? "md:col-start-2 md:w-[140%] md:-ml-[20%]"
                    : ""
                }
              >
                <div className="relative w-full aspect-3/4 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="font-bold text-sm md:text-base">{member.name}</p>
                <p className="text-sm md:text-base text-black/70">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
