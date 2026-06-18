"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    number: "01",
    title: "Hospitality",
    description:
      "We develop high-quality digital solutions for modern hospitality brands — from luxury-oriented websites and booking experiences to premium social media creatives and promotional campaigns designed to elevate guest engagement and brand presence.",
    items: [
      "Hotels & Resorts",
      "Luxury Stays",
      "Travel Brands",
      "Restaurant & Hospitality Groups",
    ],
    image: "/images/industries/hospitality.png",
  },
  {
    number: "02",
    title: "Education",
    description:
      "We create modern digital experiences for educational institutions and learning platforms — including professional websites, student-focused branding, social media creatives, promotional campaigns, and digital marketing solutions that improve visibility and engagement.",
    items: [
      "Schools & Colleges",
      "EdTech Platforms",
      "Coaching Institutes",
      "Training Centers",
    ],
    image: "/images/industries/education.png",
  },
  {
    number: "03",
    title: "Healthcare",
    description:
      "We build trusted and professional digital solutions for healthcare brands — from informative websites and patient-focused platforms to healthcare marketing creatives and awareness campaigns designed to strengthen credibility and communication.",
    items: [
      "Hospitals & Clinics",
      "Healthcare Brands",
      "Wellness Centers",
      "Medical Practices",
    ],
    image: "/images/industries/hospital.png",
  },
  {
    number: "04",
    title: "E-commerce",
    description:
      "We help e-commerce and retail brands grow through high-converting websites, performance-driven creatives, product-focused marketing campaigns, and engaging social media content that improves customer experience and sales.",
    items: [
      "Online Stores",
      "D2C Brands",
      "Retail Businesses",
      "Fashion & Lifestyle Brands",
    ],
    image: "/images/industries/ecommerce.png",
  },
  {
    number: "05",
    title: "Tech & startups",
    description:
      "We support startups and technology companies with scalable digital products, modern websites, UI/UX design, branding, launch campaigns, and creative marketing solutions that help brands grow faster and stand out in competitive markets.",
    items: [
      "SaaS Companies",
      "Technology",
      "Software Product Companies",
      "AI & Innovation Companies",
    ],
    image: "/images/industries/tech.png",
  },
  {
    number: "06",
    title: "Real estate",
    description:
      "We develop premium digital experiences for real estate businesses — including luxury property websites, project branding, social media creatives, promotional campaigns, and marketing materials that enhance project visibility and customer trust.",
    items: [
      "Real Estate Agencies",
      "Builders & Developers",
      "Property Consultants",
      "Commercial Projects",
    ],
    image: "/images/industries/realEstate.png",
  },
  {
    number: "07",
    title: "Restaurants & cafés",
    description:
      "We create visually engaging digital experiences for restaurants, cafés, and food brands — including modern websites, menu-focused creatives, promotional campaigns, social media marketing, and luxury food branding content.",
    items: [
      "Cafés & Coffee Brands",
      "Restaurants & Chains",
      "Food & Beverage Brands",
      "Fine Dining Businesses",
    ],
    image: "/images/industries/restaurant.png",
  },
  {
    number: "08",
    title: "Local businesses",
    description:
      "We help local businesses strengthen their online presence through professional websites, social media management, creative promotions, and digital marketing solutions designed to attract more customers and drive local growth.",
    items: [
      "Service-Based Businesses",
      "Retail Stores",
      "Local Brands & Enterprises",
      "Small & Medium Businesses",
    ],
    image: "/images/industries/localBusinesses.png",
  },
];

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".industries-line", {
        yPercent: 120,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-[#F5F5F5]">
      {/* Headline */}
      <div className="py-16 md:py-24 px-8 md:px-16">
        <p className="text-xs tracking-widest uppercase text-black mb-12.5">
          Industry Section
        </p>
        <div className="overflow-hidden">
          <h2 className="industries-line font-(family-name:--font-right-grotesk) text-[9.5vw] md:text-[3.5vw] font-black leading-none tracking-[-0.02em] uppercase text-center">
            Our Comfort Zone? We Don&apos;t Have One.
          </h2>
        </div>
      </div>

      {/* Stacked Cards */}
      <div className="relative bg-white">
        {industries.map((industry, i) => (
          <div
            key={i}
            className="sticky h-screen flex items-center"
            style={{ top: "0px", backgroundColor: "#fff" }}
          >
            <div className="w-full h-full flex flex-col md:flex-row items-center px-8 md:px-16 py-12 md:py-0 gap-8 md:gap-16 border-t border-black/10">
              {/* Left text content */}
              <div className="w-full md:w-[45%]">
                <span className="text-xs font-medium block mb-6">
                  ({industry.number})
                </span>

                <h2 className="font-[Arial] text-3xl md:text-4xl lg:text-5xl font-black mb-6">
                  {industry.title}
                </h2>

                <p className="text-sm md:text-base text-black/70 max-w-md mb-10">
                  {industry.description}
                </p>

                <ul className="flex flex-col gap-3">
                  {industry.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 font-bold text-sm md:text-base"
                    >
                      <span>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right image */}
              <div className="w-full md:w-[55%] aspect-16/10 relative">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
