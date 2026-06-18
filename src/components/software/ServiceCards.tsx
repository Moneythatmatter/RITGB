"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "(01)",
    title: "IMPACT PMS: HOTEL MANAGEMENT WITHOUT THE OPERATIONAL CHAOS",
    description: [
      "Running a hotel means juggling bookings, housekeeping, guest requests, revenue, staff, and approximately 400 things at once.",
      "Impact PMS keeps everything organized in one place.",
    ],
    listTitle: "What It Handles:",
    items: [
      "Real-Time Reservations",
      "Housekeeping Management",
      "Front Desk Operations",
      "Guest Profiles & History",
      "Revenue Reports",
      "OTA Integration",
      "Multi-Property Management",
      "Direct Booking Integration",
    ],
    image: "/images/software/impact.png",
    imageAlt: "Impact PMS",
  },
  {
    number: "(02)",
    title: "CRM SOLUTIONS: BECAUSE LOST LEADS DON'T PAY BILLS",
    description: [
      'Our CRM platform helps businesses manage leads, projects, teams, follow-ups, and workflows without things disappearing into "we\'ll check later."',
      "Basically your business, but more organized.",
    ],
    listTitle: "What It Handles:",
    items: [
      "Lead Management",
      "Sales Pipelines",
      "Task Tracking",
      "Team Collaboration",
      "Project Management",
      "Customer Records",
      "Automated Reminders",
      "Analytics Dashboards",
    ],
    image: "/images/software/crm.png",
    imageAlt: "CRM Solutions",
  },
  {
    number: "(03)",
    title: "DIRECT BOOKING ENGINE: STOP PAYING EXTRA OTA COMMISSIONS",
    description: [
      "Your website should bring bookings too. Not just look pretty. Our booking engine helps hotels accept direct reservations smoothly, securely, and without making guests fight the interface.",
    ],
    listTitle: "What It Handles:",
    items: [
      "Real-Time Availability",
      "Mobile Optimized Booking",
      "Promo Codes & Offers",
      "Secure Payments",
      "Booking Analytics",
      "OTA Syncing",
    ],
    image: "/images/software/direct.png",
    imageAlt: "Direct booking engine",
  },
  {
    number: "(04)",
    title:
      "PAYMENT GATEWAY INTEGRATION: IF CHECKOUT FEELS COMPLICATED, PEOPLE LEAVE",
    description: [
      "We integrate secure payment systems that make paying ridiculously easy",
    ],
    listTitle: "Supported Payments:",
    items: [
      "UPI",
      "Credit & Debit Cards",
      "Net Banking",
      "Wallets",
      "Hotel Payments",
      "E-commerce Payments",
    ],
    secondList: {
      listTitle: "Features:",
      items: [
        "Secure Transactions",
        "Real-Time Tracking",
        "Smooth Checkout Experience",
        "System Integrations",
        "Payment Reports",
      ],
    },
    image: "/images/software/payment.png",
    imageAlt: "Payment gateway:",
  },
  {
    number: "(05)",
    title: "CUSTOM SOFTWARE SECTION: SOMETIMES BUSINESSES NEED CUSTOM TECH",
    description: [
      "Not every business fits inside generic software. So we build custom systems, workflows, dashboards, apps, and platforms designed specifically around how your business actually operates.",
    ],
    listTitle: "What We Build:",
    items: [
      "Custom Dashboards",
      "Web Applications",
      "Automation Systems",
      "Internal Tools",
      "Booking Platforms",
      "Business Management Systems",
    ],
    image: "/images/software/custom.png",
    imageAlt: "Custom software",
  },
];

function splitInTwo<T>(arr: T[]): [T[], T[]] {
  const half = Math.ceil(arr.length / 2);
  return [arr.slice(0, half), arr.slice(half)];
}

export default function ServiceCards() {
  return (
    <section className="w-full bg-white">
      {services.map((service, idx) => {
        const [colA, colB] = splitInTwo(service.items);
        const secondCols = service.secondList
          ? splitInTwo(service.secondList.items)
          : null;

        return (
          <div
            key={idx}
            className="grid md:grid-cols-2 gap-12 border-t border-black/10 py-16 px-6 md:px-16"
          >
            {/* Left column */}
            <div>
              <span className="text-xs font-medium block mb-4">
                {service.number}
              </span>

              <h2 className="font-(family-name:--font-right-grotesk) text-3xl md:text-4xl font-black uppercase leading-tight mb-6 max-w-xl">
                {service.title}
              </h2>

              <div className="space-y-3 mb-8 max-w-md text-sm text-black/70">
                {service.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mb-8">
                <h3 className="font-bold mb-4">{service.listTitle}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-xs max-w-md">
                  {colA.map((item, i) => (
                    <span key={`a-${i}`}>• {item}</span>
                  ))}
                  {colB.map((item, i) => (
                    <span key={`b-${i}`}>• {item}</span>
                  ))}
                </div>
              </div>

              {service.secondList && secondCols && (
                <div className="mb-8">
                  <h3 className="font-bold mb-4">
                    {service.secondList.listTitle}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-xs max-w-md">
                    {secondCols[0].map((item, i) => (
                      <span key={`sa-${i}`}>• {item}</span>
                    ))}
                    {secondCols[1].map((item, i) => (
                      <span key={`sb-${i}`}>• {item}</span>
                    ))}
                  </div>
                </div>
              )}

              <Link href="/contact">
                <button className="bg-black text-white font-(family-name:--font-right-grotesk) flex items-center justify-center gap-3 rounded-full px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-black/80 transition-colors duration-300 cursor-pointer mt-8">
                  Book a Call
                </button>
              </Link>
            </div>

            {/* Right column - image */}
            <div className="relative min-h-75 md:min-h-125 w-full rounded-xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
