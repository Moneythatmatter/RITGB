import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function HeroBottom() {
  return (
    <div className="font-[Arial] flex flex-col md:flex-row md:items-end md:justify-between px-8 md:px-27.75 md:pb-10 mt-16 gap-6 md:gap-0">
      {/* Left */}
      <div className="flex flex-col gap-1">
        <span className="font-bold text-2xl md:text-base">Let&apos;s Talk</span>

        <Link
          href="/work"
          className="group flex items-center gap-1 text-sm text-black hover:underline"
        >
          Make Us Impossible To Ignore
          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>

      {/* Right */}
      <p className="text-sm text-black md:max-w-xs md:text-left leading-relaxed">
        Your business doesn&apos;t need &quot;more content.&quot; It needs
        attention. Leads. Sales. And a brand people actually remember.
      </p>
    </div>
  );
}
