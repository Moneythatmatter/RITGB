"use client";

import Image from "next/image";

type Member = {
  name: string;
  role: string;
  image: string;
  objectPosition?: string;
};

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
        role: "CEO / Co-Founder",
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
        image: "/images/agency/ankita-final-img.webp",
        objectPosition: "top",
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
        name: " Soumya Ranjan Barik",
        role: "Seo Specialist",
        image: "/images/agency/soumya.png",
      },
      {
        name: "Shriniti Babu",
        role: "Seo Specialist",
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
        image: "/images/agency/hemantNew.png",
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
        name: "Chinmayee Sahoo",
        role: "Content Writer",
        image: "/images/agency/chinmayee-sahoo.png",
      },
      // {
      //   name: "Xyz-1",
      //   role: "Founder, CFO",
      //   image: "/images/agency/team.png",
      // },
    ],
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-[#F5F5F5]">
      {/* Header */}
      <div className="py-16 md:py-24 px-6 md:px-16">
        <p className="text-xs font-medium uppercase tracking-widest mb-12">
          Portfolio Section
        </p>
        <h2 className="font-(family-name:--font-right-grotesk) text-center text-[10vw] md:text-[5vw] font-black uppercase leading-[1.05] tracking-[-0.03em]">
          The Brains Behind
          <br />
          The Browser Tabs
        </h2>
      </div>

      {/* Groups */}
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
                    className={`object-cover ${member.objectPosition ? '' : ''}`}
                    style={member.objectPosition ? { objectPosition: member.objectPosition } : undefined}
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
