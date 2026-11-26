"use client";

import Image from "next/image";

const clients = [
  {
    id: 1,
    name: "Bravia Hotel",
    file: "/images/clients/client13.webp",
    alt: "Bravia Hotel – RITGB client",
  },
  {
    id: 2,
    name: "The Shivalik",
    file: "/images/clients/client1.webp",
    alt: "The Shivalik Resort – RITGB branding client",
  },

  {
    id: 3,
    name: "Hotel JK Regency",
    file: "/images/clients/client2.webp",
    alt: "Hotel JK Regency – digital marketing client",
  },

  {
    id: 4,
    name: "Hotel & restaurant association of Palampur",
    file: "/images/clients/client3.webp",
    alt: "Hotel & restaurant association of Palampur",
  },

  {
    id: 5,
    name: "Pawzwell",
    file: "/images/clients/client4.webp",
    alt: "Pawzwell – RITGB client",
  },

  {
    id: 6,
    name: "The Bliss",
    file: "/images/clients/client5.webp",
    alt: "The Bliss – RITGB client",
  },

  {
    id: 7,
    name: "Victoria Grand",
    file: "/images/clients/client6.webp",
    alt: "Victoria Grand – RITGB client",
  },

  {
    id: 8,
    name: "Hotel De Park",
    file: "/images/clients/client7.webp",
    alt: "Hotel De Park – RITGB client",
  },

  {
    id: 9,
    name: "Antaraal",
    file: "/images/clients/client8.webp",
    alt: "Antaraal – RITGB client",
  },

  {
    id: 10,
    name: "Hailiot (formerly Epsum Labs)",
    file: "/images/clients/client9.webp",
    alt: "Hailiot (formerly Epsum Labs) – RITGB client",
  },

  {
    id: 11,
    name: "Drivionix",
    file: "/images/clients/client11.webp",
    alt: "Drivionix – RITGB client",
  },
  {
    id: 12,
    name: "Hotel Prabhupada",
    file: "/images/clients/client14.webp",
    alt: "Hotel Prabhupada – RITGB client",
  },
  {
    id: 13,
    name: "Laghmano",
    file: "/images/clients/client15.webp",
    alt: "Laghmano – RITGB client",
  },
  {
    id: 14,
    name: "Desia",
    file: "/images/clients/client16.webp",
    alt: "Desia Koraput – RITGB client",
  },
  {
    id: 15,
    name: "Aarohana Resort",
    file: "/images/clients/client17.webp",
    alt: "Aarohana Wellness Resort & Conventions – RITGB client",
  },
  {
    id: 16,
    name: "In Interior Design Studio",
    file: "/images/clients/client18.webp",
    alt: "In Interior Design Studio – RITGB client",
  },
  {
    id: 17,
    name: "The HHI Bhubaneswar",
    file: "/images/clients/client19.webp",
    alt: "The HHI Bhubaneswar – RITGB client",
  },
  {
    id: 18,
    name: "The Foothill Farm Stay",
    file: "/images/clients/client20.webp",
    alt: "The Foothill Farm Stay – RITGB client",
  },
];

export default function ClientsSection() {
  return (
    <section className="w-full bg-[#F5F5F5] py-24 px-6 md:px-16">
      <p className="text-sm font-medium uppercase tracking-wide mb-12.5">
        Our Client Section
      </p>

      <h2 className="font-(family-name:--font-right-grotesk) text-center text-[10vw] sm:text-[6vw] md:text-[4vw] lg:text-[3.2vw] font-black uppercase leading-11 mb-16 md:whitespace-nowrap">
        People Who <br /> Said &ldquo;Let&apos;s Build Something Sick&rdquo;
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {clients.map((client) => (
          <Image
            key={client.id}
            src={client.file}
            alt={client.alt}
            width={160}
            height={80}
            className="w-full h-auto aspect-[4/3] object-contain bg-[#EFEFEF] p-1"
          />
        ))}
      </div>
    </section>
  );
}
