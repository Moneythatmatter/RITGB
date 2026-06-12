"use client";

import Image from "next/image";

const clients = [
  { id: 1, name: "Vostokcement", file: "/images/clients/client1.png" },
  { id: 2, name: "Vladivostok Sea Port", file: "/images/clients/client2.png" },
  { id: 3, name: "Vladivostok Fish Port", file: "/images/clients/client3.png" },
  { id: 4, name: "Slavda Group", file: "/images/clients/client4.png" },
  { id: 5, name: "DNS City", file: "/images/clients/client5.png" },
  { id: 6, name: "Eskadra", file: "/images/clients/client1.png" },
  { id: 7, name: "Nobel", file: "/images/clients/client2.png" },
  { id: 8, name: "Inlav", file: "/images/clients/client3.png" },
  { id: 9, name: "Brynner", file: "/images/clients/client4.png" },
  { id: 10, name: "Port May", file: "/images/clients/client5.png" },
];

export default function ClientsSection() {
  return (
    <section className="w-full bg-[#F5F5F5] py-24 px-6 md:px-16">
      <p className="text-sm font-medium uppercase tracking-wide mb-6">
        Our Client Section
      </p>

      <h2 className="font-(family-name:--font-right-grotesk) text-center text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[3.2vw] font-black uppercase leading-tight mb-16 md:whitespace-nowrap">
        People Who Said &ldquo;Let&apos;s Build Something Sick&rdquo;
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
