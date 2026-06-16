"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const projects = [
  {
    title: "Antaraal Resort — Complete\nDigital Growth Partnership",
    description:
      "Developed the resort's brand identity and website, and currently managing social media marketing, SEO, and performance marketing to drive visibility, engagement, and bookings.",
    link: "https://antaraalresort.com/",
    image: "/images/work/work1.png",
  },
  {
    title: "Internship Project: Social Dining App Design",
    description:
      "Designing a mobile app to connect food enthusiasts through shared dining experiences,",
    link: "www.google.com",
    image: "/images/work/work2.png",
  },
  {
    title: "Redesign Project: Fitness Tracker App Revamp",
    description:
      "Elevating the user experience of a renowned fitness tracker app through a strategic.",
    link: "www.google.com",
    image: "/images/work/work4.png",
  },
  {
    title: "Internship Project: Social Dining App Design",
    description:
      "Designing a mobile app to connect food enthusiasts through shared dining experiences,",
    link: "www.google.com",
    image: "/images/work/work3.png",
  },
  {
    title: "Redesign Project: Fitness Tracker App Revamp",
    description:
      "Elevating the user experience of a renowned fitness tracker app through a strategic.",
    link: "www.google.com",
    image: "/images/work/work5.png",
  },
  {
    title: "Internship Project: Social Dining App Design",
    description:
      "Designing a mobile app to connect food enthusiasts through shared dining experiences,",
    link: "www.google.com",
    image: "/images/work/work6.png",
  },
  {
    title: "Internship Project: Social Dining App Design",
    description:
      "Designing a mobile app to connect food enthusiasts through shared dining experiences,",
    link: "www.google.com",
    image: "/images/work/work7.png",
  },
  {
    title: "Internship Project: Social Dining App Design",
    description:
      "Designing a mobile app to connect food enthusiasts through shared dining experiences,",
    link: "www.google.com",
    image: "/images/work/work8.png",
  },
  {
    title: "Internship Project: Social Dining App Design",
    description:
      "Designing a mobile app to connect food enthusiasts through shared dining experiences,",
    link: "www.google.com",
    image: "/images/work/work9.png",
  },
  {
    title: "Internship Project: Social Dining App Design",
    description:
      "Designing a mobile app to connect food enthusiasts through shared dining experiences,",
    link: "www.google.com",
    image: "/images/work/work10.png",
  },
];

export default function ProudOf() {
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    wrapperRefs.current.forEach((wrapper, i) => {
      const inner = innerRefs.current[i];
      if (!wrapper || !inner) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = wrapper.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const xPercent = ((e.clientX - centerX) / rect.width) * 2;
        const yPercent = ((e.clientY - centerY) / rect.height) * 2;

        gsap.to(inner, {
          x: -xPercent * 30,
          y: -yPercent * 30,
          duration: 0.6,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(inner, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      };

      wrapper.addEventListener("mousemove", handleMouseMove);
      wrapper.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        wrapper.removeEventListener("mousemove", handleMouseMove);
        wrapper.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  });

  return (
    <section className="w-full bg-[#F5F5F5] py-16 md:py-24 px-6 md:px-16">
      <p className="text-xs font-medium uppercase tracking-widest mb-12">
        Our Team Section
      </p>

      <h2 className="font-(family-name:--font-right-grotesk) text-[10vw] md:text-[5vw] font-black uppercase leading-none tracking-[-0.03em] mb-16">
        Stuff We&apos;re Proud Of
      </h2>

      <div className="grid md:grid-cols-2 gap-16 md:gap-12">
        {projects.map((project, i) => (
          <div
            key={i}
            ref={(el) => {
              wrapperRefs.current[i] = el;
            }}
          >
            <div
              ref={(el) => {
                innerRefs.current[i] = el;
              }}
              className="flex flex-col flex-start"
            >
              {/* Image container — overflow-hidden here only, so text never clips */}
              <div className="relative w-full aspect-4/3 overflow-hidden mb-6 rounded-sm">
                <div className="mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={400}
                    className="w-auto h-auto max-w-full"
                  />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-black/60 text-sm md:text-base mb-6 max-w-md">
                {project.description}
              </p>

              <a
                href={
                  project.link.startsWith("http")
                    ? project.link
                    : `https://${project.link}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm md:text-base hover:underline"
              >
                Website link: {project.link} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
