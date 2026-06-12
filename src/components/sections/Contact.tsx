export default function Contact() {
  return (
    <section className="min-h-screen bg-[#ECECEC] flex flex-col items-center justify-center px-6">
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
      <button
        className="group flex items-center gap-4 bg-black text-white rounded-full px-10 md:px-16 h-18
          md:h-22
          transition-all
          duration-300
          hover:scale-105 cursor-pointer"
      >
        <span
          className="
          font-(family-name:--font-right-grotesk)
          text-sm
          md:text-lg
          font-black
          uppercase
        "
        >
          Make Us Impossible To Ignore
        </span>

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
      </button>
    </section>
  );
}
