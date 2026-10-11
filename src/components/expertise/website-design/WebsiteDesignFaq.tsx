"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Does this include website development?",
    answer:
      "This page describes the web design service: planning, visual design, responsive screens and handoff. Development can be scoped as a separate service.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We can use your current site as a starting point, review what works, and redesign the structure and visuals around your updated goals.",
  },
  {
    question: "Will the design include mobile screens?",
    answer:
      "Yes. The agreed pages are designed for desktop, tablet and mobile so the experience remains clear across screen sizes.",
  },
];

export default function WebsiteDesignFaq() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section className="w-full bg-[#f7f7f6] text-black py-20 md:py-28 px-6 md:px-14 lg:px-20 border-t border-black/5">
      <div className="flex items-center gap-2.5 pb-4 mb-12 md:mb-16">
        <span className="font-[Arial] text-xs uppercase tracking-widest text-black font-medium">
          GOOD TO KNOW
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <h2 className="font-(family-name:--font-right-grotesk) text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase leading-[0.88] tracking-[-0.03em] text-black select-none">
            QUICK
            <br />
            ANSWERS.
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
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
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
