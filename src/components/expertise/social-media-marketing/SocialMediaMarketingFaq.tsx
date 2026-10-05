"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Which social media platforms should my business use?",
    answer:
      "We choose platforms based on your audience, offer and capacity to create relevant content. You do not need to be active everywhere to have a focused social strategy.",
  },
  {
    question: "Does this include paid social advertising?",
    answer:
      "Paid advertising can be added as a separate scope. Organic content builds your ongoing presence; paid campaigns support defined reach, traffic or conversion objectives.",
  },
  {
    question: "Do you create videos and manage messages?",
    answer:
      "Video production, on-site shoots and inbox or comment management depend on the agreed package. We clarify these responsibilities before work begins.",
  },
];

export default function SocialMediaMarketingFaq() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section className="w-full bg-[#f8f8f7] text-black py-20 md:py-28 px-6 md:px-14 lg:px-20 border-t border-black/5">
      <div className="flex items-center gap-2.5 pb-4 mb-10 md:mb-14">
        <span className="font-[Arial] text-[11px] md:text-xs uppercase tracking-widest text-neutral-800">
          faq
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <h2 className="font-(family-name:--font-right-grotesk) text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black uppercase leading-[0.9] tracking-[-0.03em] text-black select-none">
            FREQUENTLY {" "}
            <br className="hidden lg:block" />
            ASKED {" "}
            <br className="hidden lg:block" />
            QUESTIONS
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
