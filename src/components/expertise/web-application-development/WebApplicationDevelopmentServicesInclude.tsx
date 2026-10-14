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
    title: "Workflow planning",
    description:
      "Understand the steps users need to complete and where the current process creates friction.",
  },
  {
    num: "02",
    title: "User access",
    description:
      "Define suitable account roles and permissions for the agreed application.",
  },
  {
    num: "03",
    title: "Application development",
    description:
      "Build the interfaces and functionality needed to support your core workflows.",
  },
  {
    num: "04",
    title: "System connections",
    description:
      "Connect relevant tools and data sources within the agreed integration scope.",
  },
  {
    num: "05",
    title: "Testing and handover",
    description:
      "Check key functions and prepare the documentation or guidance included in the project.",
  },
];

export default function WebApplicationDevelopmentServicesInclude() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".web-app-services-header", {
        y: 40,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".web-app-service-row", {
        y: 30,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".web-app-services-list",
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
        <div className="web-app-services-header grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mb-12 sm:mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-(family-name:--font-right-grotesk) text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black uppercase leading-[0.9] tracking-[-0.03em] text-black select-none">
              WEB APPLICATION <br />
              DEVELOPMENT SERVICES <br />
              INDIA
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:pt-1">
            <h3 className="font-arial text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-neutral-900 leading-[1.15] tracking-tight">
              Built Around the Task. Not <br />
              Around the Template.
            </h3>
          </div>
        </div>

        <div className="web-app-services-list border-t border-neutral-300">
          {services.map((item, index) => (
            <div
              key={index}
              className="web-app-service-row group py-7 sm:py-9 md:py-11 border-b border-neutral-300 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-8 items-start md:items-center transition-colors duration-200 hover:bg-neutral-100/60 px-2 sm:px-3 -mx-2 sm:-mx-3 rounded-lg"
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
