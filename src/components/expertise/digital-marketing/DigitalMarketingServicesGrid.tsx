"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ServiceCard {
  title: string;
  description: string;
  href: string;
  topIcon: React.ReactNode;
}

const serviceCards: ServiceCard[] = [
  {
    title: "SOCIAL MEDIA MARKETING AGENCY INDIA",
    description:
      "Build a consistent presence with content that introduces your business, answers customer questions and gives people a reason to engage.",
    href: "/expertise/social-media-marketing",
    topIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        className="w-5 h-5 text-black"
      >
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="3.5" y1="7" x2="20.5" y2="17" />
        <line x1="3.5" y1="17" x2="20.5" y2="7" />
      </svg>
    ),
  },
  {
    title: "GOOGLE ADS AGENCY INDIA",
    description:
      "Put your offer in front of people searching for relevant products and services, with focused campaigns and clear next steps.",
    href: "/expertise/google-ads",
    topIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-black"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    ),
  },
  {
    title: "SEO AGENCY INDIA",
    description:
      "Make your website easier to discover through relevant content, organised pages and stronger technical foundations.",
    href: "/expertise/seo",
    topIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        className="w-5 h-5 text-black"
      >
        <circle cx="10" cy="10" r="5" />
        <line x1="14" y1="14" x2="19" y2="19" />
      </svg>
    ),
  },
  {
    title: "PERFORMANCE MARKETING AGENCY INDIA",
    description:
      "Connect paid campaigns with measurable actions, using creative testing, conversion tracking and regular performance reviews.",
    href: "/expertise/performance-marketing",
    topIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-black"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    ),
  },
  {
    title: "INFLUENCER MARKETING AGENCY INDIA",
    description:
      "Bring your brand into relevant conversations through creators whose content and audiences fit your business.",
    href: "/expertise/influencer-marketing",
    topIcon: (
      <svg
        viewBox="0 0 100 100"
        className="w-5 h-5 text-black fill-current"
      >
        <path d="M50 0 C50 32, 68 50, 100 50 C68 50, 50 68, 50 100 C50 68, 32 50, 0 50 C32 50, 50 32, 50 0 Z" />
      </svg>
    ),
  },
  {
    title: "CONTENT MARKETING AGENCY INDIA",
    description:
      "Explain your offer clearly with content that helps customers understand, compare and make decisions.",
    href: "/expertise/content-marketing",
    topIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="w-5 h-5 text-black"
      >
        <line x1="4" y1="7" x2="20" y2="7" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="17" x2="20" y2="17" />
      </svg>
    ),
  },
  {
    title: "LEAD GENERATION AGENCY INDIA",
    description:
      "Create a clearer journey from initial interest to enquiry, with relevant targeting, focused offers and practical lead capture.",
    href: "/expertise/lead-generation",
    topIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5 text-black"
      >
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "DIGITAL MARKETING CAMPAIGN MANAGEMENT",
    description:
      "Keep your messaging, creative, channels and launch schedule working towards one shared objective.",
    href: "/expertise/campaign-management",
    topIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        className="w-5 h-5 text-black"
      >
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="5" y1="5" x2="19" y2="19" />
        <line x1="5" y1="19" x2="19" y2="5" />
      </svg>
    ),
  },
];

export default function DigitalMarketingServicesGrid() {
  return (
    <section className="w-full bg-[#4DB685] text-black py-20 md:py-28 px-6 md:px-14 lg:px-20 border-t border-black/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 md:mb-20">
        <div className="lg:col-span-7">
          <h2 className="font-(family-name:--font-right-grotesk) text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black uppercase leading-[0.92] tracking-[-0.03em] text-black select-none">
            DIGITAL MARKETING <br className="hidden lg:block" />
            SERVICES IN INDIA
          </h2>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center">
          <p className="font-arial text-2xl sm:text-3xl lg:text-[2rem] text-black leading-snug tracking-tight">
            The Right Services. <br className="hidden lg:block" />
            Working Together.
          </p>
        </div>
      </div>

      <div className="border border-black bg-transparent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {serviceCards.map((card, index) => {
          const isLgRightBorder = (index + 1) % 4 !== 0;
          const isLgBottomBorder = index < 4;
          const isMdRightBorder = (index + 1) % 2 !== 0;
          const isMdBottomBorder = index < 6;
          const isMobileBottomBorder = index < 7;

          return (
            <Link
              key={index}
              href={card.href}
              className={`group flex flex-col justify-between p-6 sm:p-7 md:p-8 transition-colors duration-300 hover:bg-white text-black cursor-pointer relative min-h-[300px] sm:min-h-[330px] md:min-h-[360px] ${isLgRightBorder ? "lg:border-r lg:border-black" : "lg:border-r-0"
                } ${isLgBottomBorder ? "lg:border-b lg:border-black" : "lg:border-b-0"
                } ${isMdRightBorder ? "md:border-r md:border-black" : "md:border-r-0"
                } ${isMdBottomBorder ? "md:border-b md:border-black" : "md:border-b-0"
                } ${isMobileBottomBorder ? "border-b border-black md:border-b-0" : ""
                }`}
            >
              <div className="mb-8 md:mb-10">{card.topIcon}</div>

              <div className="grow flex flex-col justify-between">
                <div>
                  <h3 className="font-(family-name:--font-right-grotesk) text-xl sm:text-2xl font-black uppercase text-black leading-tight tracking-[-0.02em] mb-3">
                    {card.title}
                  </h3>
                  <p className="font-sans text-neutral-800 text-xs sm:text-[13px] md:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 sm:pt-8 flex items-center">
                  <ArrowUpRight className="w-5 h-5 text-black transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 md:mt-16 flex justify-start">
        <Link
          href="/expertise"
          className="group inline-flex items-center gap-2.5 bg-black text-white hover:bg-neutral-900 font-sans font-bold text-sm sm:text-base px-8 sm:px-10 py-4 sm:py-4.5 rounded-full transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
        >
          <span>Explore Our Services</span>
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}
