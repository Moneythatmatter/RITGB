"use client";

import { useState } from "react";

type Category = {
  number: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  imageColor: string;
  items: { label: string; content: string }[];
};

const categories: Category[] = [
  {
    number: "1.",
    title: "DESIGN",
    description:
      "Your audience judges your brand in seconds. We make sure those seconds work in your favor.",
    bgColor: "bg-black",
    textColor: "text-white",
    imageColor: "bg-[#A42111]",
    items: [
      {
        label: "BRAND IDENTITY",
        content:
          "We craft logos, color systems, and visual identities that make your brand instantly recognizable.",
      },
      {
        label: "UI/UX & APP DESIGN",
        content:
          "Intuitive, user-friendly interfaces designed to keep people engaged and coming back.",
      },
      {
        label: "WEBSITE DESIGN & DEVELOPMENT",
        content:
          "Custom websites that look great and convert visitors into customers.",
      },
      {
        label: "SOCIAL MEDIA & CREATIVE DESIGN",
        content:
          "Eye-catching creatives tailored for every platform and audience.",
      },
      {
        label: "PACKAGING & PRINT DESIGN",
        content:
          "Packaging and print materials that make your product stand out on the shelf.",
      },
      {
        label: "PHOTOGRAPHY & VIDEOGRAPHY",
        content:
          "High-quality visual content that tells your brand's story authentically.",
      },
    ],
  },
  {
    number: "2.",
    title: "TECH",
    description:
      "Cool Design Means Nothing If The Website Breaks. We build websites, apps, automations, and digital systems that work smoothly without giving users emotional damage. Fast. Functional. Slightly addictive to use.",
    bgColor: "bg-[#FFC4DE]",
    textColor: "text-black",
    imageColor: "bg-white",
    items: [
      {
        label: "WEBSITE DEVELOPMENT",
        content:
          "Fast, responsive websites built on modern frameworks for performance and scalability.",
      },
      {
        label: "WEB APPLICATIONS",
        content:
          "Custom web apps tailored to your business workflows and processes.",
      },
      {
        label: "MOBILE APPS",
        content:
          "Native and cross-platform mobile apps designed for a smooth user experience.",
      },
      {
        label: "CRM INTEGRATIONS",
        content:
          "Seamlessly connect your tools so leads and customer data never fall through the cracks.",
      },
      {
        label: "PAYMENT INTEGRATIONS",
        content:
          "Secure, reliable payment systems integrated into your platform.",
      },
      {
        label: "CUSTOM TECH SOLUTIONS",
        content:
          "Bespoke systems and automations designed around how your business actually operates.",
      },
    ],
  },
  {
    number: "3.",
    title: "MARKETING",
    description:
      'We Market Brands Like People Actually Exist. No random posting. No "let\'s just boost it". Everything built to attract attention, leads, and growth.',
    bgColor: "bg-[#6DC9BC]",
    textColor: "text-black",
    imageColor: "bg-white",
    items: [
      {
        label: "SOCIAL MEDIA MARKETING",
        content:
          "Consistent, strategic content that builds community and brand presence.",
      },
      {
        label: "GOOGLE ADS",
        content:
          "Targeted ad campaigns designed to maximize ROI and reach the right audience.",
      },
      {
        label: "SEO",
        content:
          "Improve your search rankings and drive organic traffic that converts.",
      },
      {
        label: "INFLUENCER CAMPAIGNS",
        content:
          "Partner with the right voices to expand your brand's reach authentically.",
      },
      {
        label: "PERFORMANCE MARKETING",
        content:
          "Data-driven campaigns optimized continuously for measurable results.",
      },
      {
        label: "CONTENT MARKETING",
        content:
          "Valuable content that builds trust and positions your brand as an authority.",
      },
      {
        label: "LEAD GENERATION",
        content:
          "Strategies and funnels designed to bring in qualified leads consistently.",
      },
      {
        label: "CAMPAIGN MANAGEMENT",
        content:
          "End-to-end management of your marketing campaigns, from planning to reporting.",
      },
    ],
  },
];

function AccordionItem({
  item,
  textColor,
}: {
  item: { label: string; content: string };
  textColor: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border-b ${textColor === "text-white" ? "border-white/30" : "border-black/30"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="font-[Arial] text-sm md:text-base font-medium tracking-wide uppercase">
          {item.label}
        </span>
        <span
          className={`text-2xl font-light leading-none w-6 text-center transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="pb-6">
          <p className="text-sm md:text-base opacity-80 max-w-2xl">
            {item.content}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ExpertiseCategories() {
  return (
    <section className="w-full">
      {categories.map((cat, idx) => (
        <div
          key={idx}
          className={`${cat.bgColor} ${cat.textColor} py-16 px-6 md:px-16`}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-16">
            <div>
              <span className="font-(family-name:--font-right-grotesk) text-4xl md:text-5xl font-black uppercase block mb-2">
                {cat.number}
              </span>
              <h2 className="font-(family-name:--font-right-grotesk) text-[18vw] md:text-[10vw] font-black uppercase leading-[0.9] tracking-[-0.03em] mb-6">
                {cat.title}
              </h2>
              <p className="font-[Arial] text-sm md:text-base max-w-md opacity-80">
                {cat.description}
              </p>
            </div>

            <div
              className={`${cat.imageColor} w-full md:w-100 aspect-4/5 shrink-0`}
            />
          </div>

          <div>
            {cat.items.map((item, i) => (
              <AccordionItem key={i} item={item} textColor={cat.textColor} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
