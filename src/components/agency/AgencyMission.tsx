"use client";

import Image from "next/image";

export default function AgencyMission() {
  return (
    <section className="w-full bg-black py-24 md:py-32 px-6 flex flex-col items-center justify-center gap-12">
      <h2 className="font-(family-name:--font-right-grotesk) text-center text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight max-w-4xl">
        <span className="text-white">
          We Mix Creativity, Strategy, Design, Content, And Performance
          <br />
          Marketing To Help Brands Become <br />
        </span>{" "}
        <span className="text-[#5ECFC9]">Harder To Ignore Online.</span>
      </h2>

      <div className="relative w-full max-w-xl">
        <Image
          src="/images/agency/agency.png"
          alt="Team collaboration"
          width={960}
          height={540}
          sizes="(max-width: 768px) 100vw, 600px"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
