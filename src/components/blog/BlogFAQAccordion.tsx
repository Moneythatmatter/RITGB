"use client";

import { useState } from "react";
import { FAQItem } from "@/data/blogData";
import { Plus } from "lucide-react";

interface BlogFAQAccordionProps {
  faqs: FAQItem[];
}

export default function BlogFAQAccordion({ faqs }: BlogFAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-8 divide-y divide-black/10 border-y border-black/10">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-5 transition-colors">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg"
              aria-expanded={isOpen}
            >
              <h3 className="font-arial! font-bold text-lg md:text-xl text-black leading-snug">
                {faq.question}
              </h3>
              <span
                className={`shrink-0 w-8 h-8 rounded-full border border-black/15 flex items-center justify-center text-sm font-bold transition-transform duration-300 ${isOpen ? "rotate-45 bg-black text-white" : "bg-neutral-50 text-black"
                  }`}
              >
                <Plus strokeWidth={1} />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isOpen
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0"
                }`}
            >
              <div className="overflow-hidden">
                <p className="font-arial text-base text-black/80 leading-relaxed pl-1">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
