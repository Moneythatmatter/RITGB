"use client";

import Image from "next/image";

const projects = [
  {
    title: "Redesign Project: Fitness Tracker App Revamp",
    description:
      "Elevating the user experience of a renowned fitness tracker app through a strategic.",
    link: "www.google.com",
    image: "/images/iphone.png",
  },
  {
    title: "Internship Project: Social Dining App Design",
    description:
      "Designing a mobile app to connect food enthusiasts through shared dining experiences,",
    link: "www.google.com",
    image: "/images/iphone2.png",
  },
  {
    title: "Redesign Project: Fitness Tracker App Revamp",
    description:
      "Elevating the user experience of a renowned fitness tracker app through a strategic.",
    link: "www.google.com",
    image: "/images/iphone.png",
  },
  {
    title: "Internship Project: Social Dining App Design",
    description:
      "Designing a mobile app to connect food enthusiasts through shared dining experiences,",
    link: "www.google.com",
    image: "/images/iphone2.png",
  },
  {
    title: "Redesign Project: Fitness Tracker App Revamp",
    description:
      "Elevating the user experience of a renowned fitness tracker app through a strategic.",
    link: "www.google.com",
    image: "/images/iphone.png",
  },
  {
    title: "Internship Project: Social Dining App Design",
    description:
      "Designing a mobile app to connect food enthusiasts through shared dining experiences,",
    link: "www.google.com",
    image: "/images/iphone2.png",
  },
];

export default function ProudOf() {
  return (
    <section className="w-full bg-[#F5F5F5] py-16 md:py-24 px-6 md:px-16">
      <p className="text-xs font-medium uppercase tracking-widest mb-12">
        Our Team Section
      </p>

      <h2 className="font-(family-name:--font-right-grotesk) text-[10vw] md:text-[5vw] font-black uppercase leading-none tracking-[-0.03em] mb-16">
        Stuff We&apos;re Proud Of
      </h2>

      <div className="grid md:grid-cols-2 gap-12 md:gap-8">
        {projects.map((project, i) => (
          <div key={i}>
            <div className="relative w-full aspect-[4/3] overflow-hidden mb-6">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out hover:scale-110"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-black/70 text-sm md:text-base mb-4 max-w-md">
              {project.description}
            </p>

            <a
              href={`https://${project.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-sm md:text-base hover:underline"
            >
              Website link: {project.link} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
