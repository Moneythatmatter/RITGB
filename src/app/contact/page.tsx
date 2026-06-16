"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const budgetOptions = [
  "$500 - $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
];

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedBudgets, setSelectedBudgets] = useState<string[]>([]);

  const toggleBudget = (option: string) => {
    setSelectedBudgets((prev) =>
      prev.includes(option)
        ? prev.filter((b) => b !== option)
        : [...prev, option],
    );
  };

  useGSAP(
    () => {
      gsap.from(".contact-line", {
        yPercent: 120,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        delay: 0.2,
      });

      gsap.from(".contact-form", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#FFC4DE] px-8 md:px-27.75 py-32 flex flex-col items-center"
    >
      {/* Headline */}
      <div className="text-center mb-16 w-full">
        {["GOOD THINGS", "START WITH ONE", "MESSAGE"].map((line, i) => (
          <div key={i} className="overflow-hidden">
            <h1 className="contact-line font-(family-name:--font-right-grotesk) text-[10vw] md:text-[8vw] font-black leading-none tracking-[-0.02em] uppercase text-black">
              {line}
            </h1>
          </div>
        ))}
      </div>

      {/* Form */}
      <div className="contact-form w-full max-w-lg flex flex-col gap-4">
        {/* Name */}
        <input
          type="text"
          placeholder="Name *"
          className="w-full bg-white rounded-xl px-5 py-4 text-sm font-[Arial] outline-none placeholder:text-black/40"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email *"
          className="w-full bg-white rounded-xl px-5 py-4 text-sm font-[Arial] outline-none placeholder:text-black/40"
        />

        {/* Company */}
        <input
          type="text"
          placeholder="Company *"
          className="w-full bg-white rounded-xl px-5 py-4 text-sm font-[Arial] outline-none placeholder:text-black/40"
        />

        {/* Budget Range */}
        <div className="flex flex-col gap-3 py-2">
          <p className="font-[Arial] text-xs font-bold tracking-widest uppercase text-black">
            Budget Range:
          </p>
          {budgetOptions.map((option, i) => (
            <label
              key={i}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => toggleBudget(option)}
            >
              <div
                className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                  selectedBudgets.includes(option)
                    ? "bg-black border-black"
                    : "bg-white border-gray-300"
                }`}
              >
                {selectedBudgets.includes(option) && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="font-[Arial] text-sm text-black">{option}</span>
            </label>
          ))}
        </div>

        {/* Message */}
        <textarea
          placeholder="Message"
          rows={6}
          className="w-full bg-white rounded-xl px-5 py-4 text-sm font-[Arial] outline-none placeholder:text-black/40 resize-none"
        />

        {/* Submit */}
        <button className="w-full bg-black text-white font-(family-name:--font-right-grotesk) font-bold text-sm tracking-widest uppercase py-4 rounded-lg hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
          Book A 15 Min Call
        </button>
      </div>
    </div>
  );
}
