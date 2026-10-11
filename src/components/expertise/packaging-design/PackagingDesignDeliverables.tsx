"use client";

const deliverables = [
  "PACKAGING CONCEPT",
  "FINAL ARTWORK",
  "VARIANT SYSTEM",
  "PRINT-READY FILES",
  "EDITABLE SOURCE FILES",
];

export default function PackagingDesignDeliverables() {
  return (
    <section className="w-full bg-[#f7f7f6] text-black py-20 md:py-28 px-6 md:px-14 lg:px-20 border-t border-black/5">
      <div className="flex items-center gap-2.5 pb-4 mb-12 md:mb-16">
        <span className="font-[Arial] text-xs uppercase tracking-widest text-black font-medium">
          WHAT YOU WALK AWAY WITH
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-6">
          <h2 className="font-(family-name:--font-right-grotesk) text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase leading-[0.88] tracking-[-0.03em] text-black select-none">
            MADE TO USE. MADE TO LAST.
          </h2>
        </div>

        <div className="lg:col-span-6 border-t border-black/15">
          {deliverables.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 py-5 sm:py-6 border-b border-black/15 transition-colors duration-200 hover:bg-black/5 px-2 cursor-default"
            >
              <span className="text-[#4db685] text-lg sm:text-xl font-light transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                ↗
              </span>
              <h3 className="font-(family-name:--font-right-grotesk) text-2xl sm:text-3xl md:text-[2rem] font-black uppercase tracking-tight text-black leading-none">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
