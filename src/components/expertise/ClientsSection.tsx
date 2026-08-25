"use client";

import Image from "next/image";

const clients = [
  {
    id: 1,
    name: "The Shivalik",
    file: "/images/clients/client1.png",
    alt: "The Shivalik Resort – RITGB branding client",
  },

  {
    id: 2,
    name: "Hotel JK Regency",
    file: "/images/clients/client2.png",
    alt: "Hotel JK Regency – digital marketing client",
  },

  {
    id: 3,
    name: "Vladivostok Fish Port",
    file: "/images/clients/client3.png",
    alt: "Vladivostok Fish Port – RITGB client",
  },

  {
    id: 4,
    name: "Pawzwell",
    file: "/images/clients/client4.png",
    alt: "Pawzwell – RITGB client",
  },

  {
    id: 5,
    name: "The Bliss",
    file: "/images/clients/client5.png",
    alt: "The Bliss – RITGB client",
  },

  {
    id: 6,
    name: "Victoria Grand",
    file: "/images/clients/client6.png",
    alt: "Victoria Grand – RITGB client",
  },

  {
    id: 7,
    name: "Hotel De Park",
    file: "/images/clients/client7.png",
    alt: "Hotel De Park – RITGB client",
  },

  {
    id: 8,
    name: "Antaraal",
    file: "/images/clients/client8.png",
    alt: "Antaraal – RITGB client",
  },

  {
    id: 9,
    name: "Epsum Labs",
    file: "/images/clients/client9.png",
    alt: "Epsum Labs – RITGB client",
  },

  {
    id: 10,
    name: "Drivionix",
    file: "/images/clients/client11.png",
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
            loading="eager"
            className="w-full h-auto aspect-[4/3 object-contain bg-[#EFEFEF] p-1"
          />
        ))}
      </div>
    </section>
  );
}
