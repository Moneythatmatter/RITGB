"use client";

export default function AgencyAbout() {
  return (
    <section className="w-full bg-[#F5F5F5] py-32 flex flex-col items-center justify-center">
      <p className="text-xs font-medium uppercase tracking-widest mb-8">
        About Us Section
      </p>

      <p className="text-center text-2xl md:text-3xl lg:text-4xl font-bold leading-snug px-4">
        RITGB Was Built For Brands Tired Of Boring Marketing,
        <br />
        Random Posting, And{" "}
        <span className="font-serif italic font-medium">
          &ldquo;Growth Hacks&rdquo;
        </span>{" "}
        That Solve
        <br />
        Absolutely Nothing.
      </p>
    </section>
  );
}
