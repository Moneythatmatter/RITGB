"use client";

const steps = [
  {
    num: "01 / 04",
    title: "REVIEW",
    description:
      "We assess the footage, brief and target format.",
    active: true,
  },
  {
    num: "02 / 04",
    title: "STRUCTURE",
    description:
      "We assemble the story and choose the pacing.",
    active: false,
  },
  {
    num: "03 / 04",
    title: "REFINE",
    description:
      "We add sound, color, graphics and revisions.",
    active: false,
  },
  {
    num: "04 / 04",
    title: "EXPORT",
    description:
      "We deliver final videos in agreed formats.",
    active: false,
  },
];

export default function VideoProductionProcess() {
  return (
    <section className="w-full bg-[#050505] text-white py-20 md:py-28 px-6 md:px-14 lg:px-20 border-t border-white/5">
      <div className="flex items-center gap-2.5 pb-4 mb-12 md:mb-16">
        <span className="font-[Arial] text-xs uppercase tracking-widest text-neutral-300 font-medium">
          A CLEAR WAY FORWARD
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 md:mb-20">
        <div className="lg:col-span-6">
          <h2 className="font-(family-name:--font-right-grotesk) text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase leading-[0.88] tracking-[-0.03em] text-white select-none">
            HOW WE MAKE IT HAPPEN.
          </h2>
        </div>

        <div className="lg:col-span-6 flex flex-col items-start lg:pt-4">
          <p className="text-white text-lg sm:text-xl font-light leading-relaxed max-w-md opacity-90">
            A practical process with a reason behind every decision and room for
            your feedback at each stage.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-14 md:mb-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 min-h-[260px] md:min-h-[300px] flex flex-col justify-between rounded-sm bg-[#0a0a0a] transition-colors duration-200 border border-white/20 hover:border-white/50"
          >
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs tracking-wider font-semibold">
                {step.num}
              </span>
            </div>

            <div className="pt-8">
              <h3 className="font-(family-name:--font-right-grotesk) text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3 leading-none">
                {step.title}
              </h3>
              <p className="text-white text-xs sm:text-sm leading-relaxed font-normal opacity-85">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 pt-6">
        <p className="font-serif italic text-[#F4A6B8] text-base sm:text-lg font-normal tracking-wide">
          Good work begins with the right questions.
        </p>
      </div>
    </section>
  );
}
