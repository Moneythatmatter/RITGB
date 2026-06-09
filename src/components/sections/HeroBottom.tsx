export default function HeroBottom() {
  return (
    <div className="font-[Arial] flex flex-col md:flex-row md:items-end md:justify-between px-8 md:px-27.75 pb-10 mt-16 gap-6 md:gap-0 ">
      {/* Left */}
      <div className="flex flex-col gap-1">
        <span className="font-bold text-base">Let&apos;s Talk</span>

        <a href="#" className="text-sm text-black hover:underline">
          Make Us Impossible To Ignore ↗
        </a>
      </div>

      {/* Right */}
      <p className="text-sm text-black md:max-w-xs md:text-right leading-relaxed ">
        Your business doesn&apos;t need &quot; more content.&quot; It needs
        attention. Leads. Sales. And a brand people actually remember.
      </p>
    </div>
  );
}
