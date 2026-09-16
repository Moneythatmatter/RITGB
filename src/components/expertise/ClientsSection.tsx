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
    name: "Vladivostok Fish Port",
    file: "/images/clients/client3.webp",
    alt: "Vladivostok Fish Port – RITGB client",
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
    name: "Epsum Labs",
    file: "/images/clients/client9.webp",
    alt: "Epsum Labs – RITGB client",
  },

  {
    id: 11,
    name: "Drivionix",
    file: "/images/clients/client11.webp",
    alt: "Drivionix – RITGB client",
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

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {clients.map((client) => (
          <Image
            key={client.id}
            src={client.file}
            alt={client.alt}
            width={160}
            height={80}
            className="w-full h-auto aspect-[4/3 object-contain bg-[#EFEFEF] p-1"
          />
        ))}
      </div>
    </section>
  );
}
