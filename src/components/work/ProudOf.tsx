"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Antaraal Resort — Complete\nDigital Growth Partnership",
    // move and to new line
    description:
      "Developed the resort's brand identity and website, and currently managing social media marketing, SEO, and performance marketing to drive visibility, engagement\nand bookings.",
    link: "https://antaraalresort.com/",
    instagramLink: "https://www.instagram.com/antaraal_resort/",
    instagramUsername: "antaraal_resort",
    image: "/images/work/work1.png",
  },
  {
    title: "Pawzwell — End-to-End\nBrand Growth Partnership",
    // move and to new line
    description:
      "Developed the brand identity, logo, and website, and currently managing social media marketing, SEO, and performance marketing focused on brand growth, customer acquisition, and long-term digital visibility.",
    link: "https://pawzwell.com/",
    instagramLink: "https://www.instagram.com/pawzwellofficial/",
    instagramUsername: "pawzwellofficial",
    image: "/images/work/temp.png",
  },
  {
    title: "The Bliss Palampur — Ongoing\nDigital Growth Partnership",
    description:
      "From branding to website development, we have helped build the resort's digital presence and are currently managing social media marketing focused on customer acquisition, engagement, and brand growth.",
    link: "https://theblisspalampur.com/",
    instagramLink: "https://www.instagram.com/the.blisspalampur/",
    instagramUsername: "the.blisspalampur",
    image: "/images/work/work3.png",
  },
  {
    title: "Hotel Victoria Grand — Complete\nHospitality Marketing Support",
    // move 'to' to new line
    description:
      "Managing the hotel's social media growth while delivering end-to-end marketing collateral, including brochures, posters, promotional creatives, and branding materials to strengthen customer engagement and drive brand visibility.",
    link: "https://hotelvictoriagrand.com/",
    instagramLink: "https://www.instagram.com/hotelvictoriagrand/",
    instagramUsername: "hotelvictoriagrand",
    image: "/images/work/work4.png",
  },
  {
    title: "Antaraal Resort — Website\nDesign & Development",
    // move 'aligned' & "user" to new line
    description:
      "Designed and developed a fully responsive website aligned with the resort's brand identity, featuring smooth animations, optimized performance, and a seamless user experience across all devices.",
    link: "https://antaraalresort.com/",
    instagramLink: "https://www.instagram.com/antaraal_resort/",
    instagramUsername: "antaraal_resort",
    image: "/images/work/work5.png",
  },
  {
    title: "Epsum Labs — Website\nRedesign & Digital Experience",
    description:
      "Redesigned and developed the company's website with a refined brand identity, cohesive visual language, custom-designed imagery, and a consistent user experience that reflects their technology-driven positioning.",
    link: "https://epsumlabs.com/",
    instagramLink: "https://www.instagram.com/epsumlabs/",
    instagramUsername: "epsumlabs",
    image: "/images/work/work6.png",
  },
  {
    title: "Shopify E-commerce Store Development",
    // move e-commerce to new line
    description:
      "Designed and developed a high-performance Shopify e-commerce platform for a pet care brand, focused on seamless shopping experiences, conversion optimization, and scalable online growth.",
    link: "https://pawzwell.com/",
    instagramLink: "https://www.instagram.com/pawzwellofficial/",
    instagramUsername: "pawzwellofficial",
    image: "/images/work/work8.png",
  },
  {
    title: "Fashion E-commerce Website Development",
    description:
      "Designed and developed a premium e-commerce website for a clothing brand, creating a modern digital storefront that enhances brand identity and drives online sales.",
    link: "https://www.monicanera.com/",
    instagramLink: "https://www.instagram.com/pawzwellofficial/",
    // instagramUsername: "pawzwellofficial",
    image: "/images/work/work7.png",
  },
];

export default function ProudOf() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest(".project-card"),
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F5F5F5] py-37.5 md:py-24 px-6 md:px-16"
    >
      <p className="text-xs font-medium uppercase tracking-widest mb-12">
        Portfolio Section
      </p>

      <h2 className="font-(family-name:--font-right-grotesk) text-[10vw] md:text-[5vw] font-black uppercase leading-none tracking-[-0.03em] mb-16">
        Stuff We&apos;re Proud Of
      </h2>

      <div className="grid md:grid-cols-2 gap-37.5 md:gap-18">
        {projects.map((project, i) => (
          <div key={i} className="flex flex-col gap-10">
            {/* Image container — clips the oversized parallax image */}
            <div className="project-card relative w-full overflow-hidden rounded-sm">
              <div className="parallax-img w-full h-[120%]">
                <Image
                  src={project.image}
                  alt={project.title}
                  loading="eager"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-3 whitespace-pre-line">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-black/60 text-sm md:text-base mb-6">
              {project.description}
            </p>

            {/* Links */}
            <div className="flex flex-col gap-1">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm md:text-base hover:underline underline-offset-2 w-fit"
              >
                Website link:{" "}
                {project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")} →
              </a>

              {project.instagramLink && project.instagramUsername && (
                <a
                  href={project.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm md:text-base hover:underline underline-offset-2 w-fit"
                >
                  Instagram: @{project.instagramUsername} →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
