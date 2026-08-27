"use client";

import { useState } from "react";
import Image from "next/image";

type Category = {
  number: string;
  title: string;
  alt: string;
  description: string;
  bgColor: string;
  textColor: string;
  imageUrl: string;
  items: { label: string; pills: string[] }[];
};

const categories: Category[] = [
  {
    number: "1.",
    title: "DESIGN",
    alt: "Brand identity and UI/UX design services",
    description:
      "Your audience judges your brand in seconds. We make sure those seconds work in your favor.",
    bgColor: "bg-black",
    textColor: "text-white",
    imageUrl: "/images/services/design.png",
    items: [
      {
        label: "BRAND IDENTITY",
        pills: [
          "Logo Design",
          "Brand Strategy",
          "Brand Positioning",
          "Visual Identity System",
          "Brand Guidelines",
          "Color Palette & Typography",
          "Stationery Design",
          "Brand Collateral Design",
        ],
      },
      {
        label: "UI/UX & APP DESIGN",
        pills: [
          "Mobile App UI Design",
          "Web Application Design",
          "Dashboard & SaaS Design",
          "UX Research",
          "Wireframing & User Flows",
          "Interactive Prototyping",
          "Design Systems",
          "Usability Optimization",
        ],
      },
      {
        label: "WEBSITE DESIGN & DEVELOPMENT",
        pills: [
          "Corporate Websites",
          "Custom Website Development",
          "E-commerce Websites",
          "Landing Page Design",
          "WordPress Development",
          "Shopify Development",
          "Website Maintenance",
          "Website Performance Optimization",
          "SEO-Friendly Development",
        ],
      },
      {
        label: "SOCIAL MEDIA & CREATIVE DESIGN",
        pills: [
          "Social Media Post Design",
          "Campaign Creatives",
          "Ad Creatives (Meta, Google, LinkedIn)",
          "Motion Graphics",
          "Reels & Story Design",
          "Presentation Design",
          "Marketing Collateral",
          "Creative Content Design",
        ],
      },
      {
        label: "PACKAGING & PRINT DESIGN",
        pills: [
          "Product Packaging Design",
          "Label Design",
          "Brochure Design",
          "Catalogue Design",
          "Flyer & Poster Design",
          "Menu Design",
          "Exhibition & Event Branding",

          "Corporate Print Materials",
        ],
      },
      {
        label: "PHOTOGRAPHY & VIDEOGRAPHY",
        pills: [
          "Product Photography",
          "Corporate Photography",
          "Industrial Photography",
          "Lifestyle Photography",
          "Brand Films",
          "Promotional Videos",
          "Social Media Reels",
          "Drone Videography",
          "Video Editing & Post Production",
        ],
      },
    ],
  },
  {
    number: "2.",
    title: "TECH",
    alt: "Web & app development services",
    description:
      "Cool Design Means Nothing If The Website Breaks. We build websites, apps, automations, and digital systems that work smoothly without giving users emotional damage. Fast. Functional. Slightly addictive to use.",
    bgColor: "bg-[#FFC4DE]",
    textColor: "text-black",
    imageUrl: "/images/services/tech.png",
    items: [
      {
        label: "WEBSITE DEVELOPMENT",
        pills: [
          "Corporate Website Development",
          "Custom-Coded Website Development",
          "WordPress Development",
          "Shopify Development",
          "Website Redesign",

          "E-commerce Website Development",
          "Landing Page Development",

          "Website Maintenance & Support",
          "Website Speed Optimization",
        ],
      },
      {
        label: "WEB APPLICATIONS",
        pills: [
          "SaaS Platform Development",
          "Enterprise Web Applications",
          "Customer Portals",
          "Admin Dashboards",
          "ERP & MIS Systems",
          "Workflow Automation",
          "Progressive Web Apps (PWA)",
          "API Integrations",
        ],
      },
      {
        label: "MOBILE APPS",
        pills: [
          "Android App Development",
          "iOS App Development",
          "Cross-Platform Apps",
          "Enterprise Mobile Applications",
          "E-commerce Apps",
          "On-Demand Apps",
          "App Maintenance & Support",
          "App Store Deployment",
        ],
      },
      {
        label: "CRM INTEGRATIONS",
        pills: [
          "Salesforce Integration",
          "HubSpot Integration",
          "Zoho CRM Integration",
          "Microsoft Dynamics Integration",
          "CRM Customization",
          "Lead Management Automation",
          "Customer Support Automation",
          "Data Migration & Sync",
        ],
      },
      {
        label: "PAYMENT INTEGRATIONS",
        pills: [
          "Razorpay Integration",
          "Stripe Integration",
          "PayPal Integration",
          "UPI Integration",
          "Subscription Billing Systems",
          "Recurring Payment Solutions",
          "Secure Checkout Setup",
          "Multi-Gateway Integration",
        ],
      },
      {
        label: "CUSTOM SOFTWARE SOLUTIONS",
        pills: [
          "Custom Software Development",
          "ERP Development",
          "CRM Development",
          "Inventory Management Systems",
          "HRMS Solutions",
          "Business Process Automation",
          "AI-Powered Applications",
          "API Development & Integration",
        ],
      },
    ],
  },
  {
    number: "3.",
    title: "MARKETING",
    alt: "SEO and digital marketing services",
    description:
      'We Market Brands Like People Actually Exist. No random posting. No "let\'s just boost it". Everything built to attract attention, leads, and growth.',
    bgColor: "bg-[#6DC9BC]",
    textColor: "text-black",
    imageUrl: "/images/services/marketingNew.png",
    items: [
      {
        label: "SOCIAL MEDIA MARKETING",
        pills: [
          "Social Media Strategy",
          "Content Planning",
          "Creative Design",
          "Reels & Short Videos",
          "Community Management",
          "Monthly Reporting",
          "Social Media Advertising",
          "Brand Growth Campaigns",
        ],
      },
      {
        label: "GOOGLE ADS",
        pills: [
          "Search Ads",
          "Display Ads",
          "Shopping Ads",
          "YouTube Ads",
          "Remarketing Campaigns",
          "Conversion Tracking",
          "Landing Page Optimization",
          "Campaign Reporting",
        ],
      },
      {
        label: "SEO",
        pills: [
          "Technical SEO",
          "On-Page SEO",
          "Off-Page SEO",
          "Local SEO",
          "Keyword Research",
          "Content Optimization",
          "Link Building",
          "SEO Reporting",
        ],
      },
      {
        label: "INFLUENCER CAMPAIGNS",
        pills: [
          "Influencer Discovery",
          "Influencer Outreach",
          "Campaign Planning",
          "Content Collaboration",
          "Product Promotions",
          "Performance Tracking",
          "Brand Partnerships",
          "UGC Campaigns",
        ],
      },
      {
        label: "PERFORMANCE MARKETING",
        pills: [
          "Meta Ads Management",
          "Google Ads Management",
          "Conversion Optimization",
          "Retargeting Campaigns",
          "Funnel Optimization",
          "A/B Testing",
          "ROAS Optimization",
          "Analytics & Reporting",
        ],
      },
      {
        label: "CONTENT MARKETING",
        pills: [
          "Content Strategy",
          "Blog Writing",
          "Website Content",
          "Social Media Content",
          "Video Content",
          "Copywriting",
          "Content Distribution",
          "Content Calendar Planning",
        ],
      },
      {
        label: "LEAD GENERATION",
        pills: [
          "B2B Lead Generation",
          "B2C Lead Generation",
          "LinkedIn Outreach",
          "Email Marketing",
          "Landing Page Funnels",
          "Lead Qualification",
          "CRM Lead Management",
          "Appointment Setting",
        ],
      },
      {
        label: "CAMPAIGN MANAGEMENT",
        pills: [
          "Campaign Planning",
          "Media Buying",
          "Budget Management",
          "Audience Targeting",
          "Campaign Execution",
          "Performance Monitoring",
          "Reporting & Insights",
          "Marketing Automation",
        ],
      },
    ],
  },
];

function AccordionItem({
  item,
  textColor,
}: {
  item: { label: string; pills: string[] };
  textColor: string;
}) {
  const [open, setOpen] = useState(false);
  const isWhite = textColor === "text-white";

  return (
    <div
      className={`border-b ${isWhite ? "border-white/20" : "border-black/20"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="font-[Arial] text-sm md:text-base font-bold tracking-wide uppercase">
          {item.label}
        </span>
        <span className="text-2xl font-light leading-none w-6 text-center">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="pb-8 flex flex-wrap gap-3">
          {item.pills.map((pill, i) => (
            <span
              key={i}
              className={`px-4 py-2 rounded-full border text-sm font-[Arial] ${
                isWhite
                  ? "border-white/40 text-white"
                  : "border-black/40 text-black"
              }`}
            >
              {pill}
            </span>
          ))}
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

            <div className="relative w-full aspect-4/5 md:w-100 md:shrink-0 overflow-hidden">
              <Image
                src={cat.imageUrl}
                alt={cat.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
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
