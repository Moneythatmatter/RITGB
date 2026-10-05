"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface KeepExploringItem {
  title: string;
  href: string;
}

const items: KeepExploringItem[] = [
  {
    title: "Content Marketing",
    href: "/expertise/content-marketing",
  },
  {
    title: "Influencer Marketing",
    href: "/expertise/influencer-marketing",
  },
  {
    title: "Performance Marketing",
    href: "/expertise/performance-marketing",
  },
];

export default function SocialMediaMarketingKeepExploring() {
  return (
    <section className="w-full bg-[#f8f8f7] text-black pt-16 pb-20 md:pt-20 md:pb-28 px-6 md:px-14 lg:px-20 border-b border-neutral-300">
      <div className="mb-8 md:mb-12">
        <span className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-black">
          KEEP EXPLORING
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group block border-t border-black pt-6 pb-4 md:pt-7 md:pb-6 transition-all"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-(family-name:--font-right-grotesk) text-2xl sm:text-3xl lg:text-[2.2rem] font-black tracking-tight text-black group-hover:opacity-60 transition-opacity">
                {item.title}
              </h3>
              <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6 stroke-[2.5] text-black shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
