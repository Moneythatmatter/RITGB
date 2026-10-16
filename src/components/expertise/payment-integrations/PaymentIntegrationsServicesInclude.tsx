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
    title: "Requirements planning",
    description:
      "Define the payment methods, customer journey and business systems involved.",
  },
  {
    num: "02",
    title: "Provider integration",
    description:
      "Connect the selected provider using its supported integration approach.",
  },
  {
    num: "03",
    title: "Payment status handling",
    description:
      "Implement the agreed response to successful, pending or unsuccessful payments.",
  },
  {
    num: "04",
    title: "System updates",
    description:
      "Connect relevant payment information with orders, accounts or other agreed workflows.",
  },
  {
    num: "05",
    title: "Testing and handover",
    description:
      "Check the supported scenarios and prepare the agreed implementation guidance.",
  },
];

export default function PaymentIntegrationsServicesInclude() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".payment-services-header", {
        y: 40,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".payment-service-row", {
        y: 30,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".payment-services-list",
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
        {/* 2-Column Header */}
        <div className="payment-services-header grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mb-12 sm:mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-(family-name:--font-right-grotesk) text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black uppercase leading-[0.9] tracking-[-0.03em] text-black select-none">
              PAYMENT GATEWAY <br />
              INTEGRATION SERVICES <br />
              INDIA
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:pt-1">
            <h3 className="font-arial text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-neutral-900 leading-[1.15] tracking-tight">
              A Clear Path from Checkout <br />
              to Confirmation.
            </h3>
          </div>
        </div>

        {/* Services List */}
        <div className="payment-services-list border-t border-neutral-300">
          {services.map((item, index) => (
            <div
              key={index}
              className="payment-service-row group py-7 sm:py-9 md:py-11 border-b border-neutral-300 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-8 items-start md:items-center transition-colors duration-200 hover:bg-neutral-100/60 px-2 sm:px-3 -mx-2 sm:-mx-3 rounded-lg"
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
