"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
  num: string;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    num: "01",
    title: "Workflow review",
    description:
      "Understand where customer information comes from and how your team needs to use it.",
  },
  {
    num: "02",
    title: "Field mapping",
    description:
      "Match the required information between systems, with clear rules for where each value belongs.",
  },
  {
    num: "03",
    title: "Integration setup",
    description:
      "Build the agreed connections using the methods supported by your tools.",
  },
  {
    num: "04",
    title: "Routing and automation",
    description:
      "Define relevant triggers, updates and handoffs within the project scope.",
  },
  {
    num: "05",
    title: "Testing",
    description:
      "Check how sample information moves through the connection and how identified exceptions are handled.",
  },
];

export default function CrmIntegrationsServicesInclude() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".crm-services-header", {
        y: 40,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".crm-service-row", {
        y: 30,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".crm-services-list",
          start: "top 85%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f8f8f7] text-black py-16 sm:py-20 md:py-28 px-6 md:px-14 lg:px-20 border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="crm-services-header grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mb-12 sm:mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-(family-name:--font-right-grotesk) text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black uppercase leading-[0.9] tracking-[-0.03em] text-black select-none">
              CRM INTEGRATION <br className="hidden lg:block" />
              SERVICES INDIA
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:pt-1">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-neutral-900 leading-[1.15] tracking-tight">
              Less Re-entering. More <br className="hidden lg:block" />
              Following Up.
            </h3>
          </div>
        </div>

        <div className="crm-services-list border-t border-neutral-300">
          {services.map((item, index) => (
            <div
              key={index}
              className="crm-service-row group py-7 sm:py-9 md:py-11 border-b border-neutral-300 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-8 items-start md:items-center transition-colors duration-200 hover:bg-neutral-100/60 px-2 sm:px-3 -mx-2 sm:-mx-3 rounded-lg"
            >
              <div className="md:col-span-1">
                <span className="font-sans font-bold text-xs sm:text-sm text-black">
                  {item.num}
                </span>
              </div>

              <div className="md:col-span-5 lg:col-span-4">
                <h4 className="font-(family-name:--font-right-grotesk) text-2xl sm:text-3xl md:text-[2.1rem] font-black text-black leading-tight">
                  {item.title}
                </h4>
              </div>

              <div className="md:col-span-6 lg:col-span-7">
                <p className="font-sans text-neutral-700 text-sm sm:text-base leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
