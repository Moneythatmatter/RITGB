import Link from "next/link";
import GradientButton from "@/components/GradientButton";

export default function Contact() {
  return (
    <section className="min-h-[40vh] md:min-h-[50vh] bg-[#ECECEC] flex flex-col items-center justify-center px-6 py-37.5 md:py-24">
      {/* Heading */}
      <h2
        className="
          font-(family-name:--font-right-grotesk)
          text-[clamp(4rem,12vw,10rem)]
          font-black
          uppercase
          leading-none
          tracking-tight
          text-black
          text-center
          mb-12
        "
      >
        Let&apos;s Talk!
      </h2>

      {/* CTA Button */}
      <Link href="/contact">
        <GradientButton className="group flex items-center gap-4 font-(family-name:--font-right-grotesk) text-sm md:text-lg! font-black! tracking-wider! uppercase! px-10! md:px-16! h-18! md:h-22! rounded-full!">
          <span>Make Us Impossible To Ignore</span>
          <span
            className="
              text-xl
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          >
            ↗
          </span>
        </GradientButton>
      </Link>
    </section>
  );
}
