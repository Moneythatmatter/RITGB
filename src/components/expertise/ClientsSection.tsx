"use client";

import Image from "next/image";

const clients = [
  { id: 1, name: "The Shivalik", file: "/images/clients/client1.png" },
  { id: 2, name: "Hotel JK Regency", file: "/images/clients/client2.png" },
  { id: 3, name: "Vladivostok Fish Port", file: "/images/clients/client3.png" },
  { id: 4, name: "Pawzwell", file: "/images/clients/client4.png" },
  { id: 5, name: "The bliss", file: "/images/clients/client5.png" },
  { id: 6, name: "Victoria grand", file: "/images/clients/client6.png" },
  { id: 7, name: "Hotel de park", file: "/images/clients/client7.png" },
  { id: 8, name: "Antaraal", file: "/images/clients/client8.png" },
  { id: 9, name: "Epsum Labs", file: "/images/clients/client9.png" },
  { id: 10, name: "Drivionix", file: "/images/clients/client11.png" },
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
            alt={client.name}
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
