"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  tag?: string;
  headline?: React.ReactNode;
  faqs: FAQItem[];
  defaultOpenAll?: boolean;
}

export default function FaqSection({
  tag = "QUESTIONS / ANSWERS",
  headline,
  faqs,
  defaultOpenAll = false,
}: FaqSectionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>(
    defaultOpenAll ? faqs.map((_, i) => i) : [],
  );

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section className="w-full bg-[#f8f8f7] text-black py-20 md:py-28 px-6 md:px-14 lg:px-20 border-t border-black/5">
      <div className="flex items-center gap-2.5 pb-4 mb-10 md:mb-14">
        <span className="font-sans text-[11px] md:text-xs uppercase tracking-widest text-neutral-800">
          {tag}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <h2 className="font-(family-name:--font-right-grotesk) text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black uppercase leading-[0.9] tracking-[-0.03em] text-black select-none">
            {headline || (
              <>
                FREQUENTLY{" "}
                <br className="hidden lg:block" />
                ASKED{" "}
                <br className="hidden lg:block" />
                QUESTIONS
              </>
            )}
          </h2>
        </div>

        <div className="lg:col-span-7 border-t border-neutral-300">
          {faqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className="border-b border-neutral-300 py-6 md:py-8 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-sans font-bold text-base sm:text-lg md:text-xl text-black leading-snug">
                    {faq.question}
                  </h3>
                  <span className="text-black text-xl font-light shrink-0 ml-4">
                    {isOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isOpen
                    ? "grid-rows-[1fr] opacity-100 mt-4 md:mt-5"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
