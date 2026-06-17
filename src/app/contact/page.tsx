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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const toggleBudget = (option: string) => {
    setSelectedBudgets((prev) =>
      prev.includes(option)
        ? prev.filter((b) => b !== option)
        : [...prev, option],
    );
  };

  const handleSubmit = async () => {
    if (
      !name ||
      !email ||
      !company ||
      !message ||
      selectedBudgets.length === 0
    ) {
      alert("Please fill in all fields and select a budget range.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          selectedBudgets,
          message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
        setSelectedBudgets([]);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-white  px-5 py-4 text-sm font-[Arial] outline-none placeholder:text-black/40"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white px-5 py-4 text-sm font-[Arial] outline-none placeholder:text-black/40"
        />

        {/* Company */}
        <input
          type="text"
          placeholder="Company *"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full bg-white  px-5 py-4 text-sm font-[Arial] outline-none placeholder:text-black/40"
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
                className={`w-5 h-5  flex items-center justify-center border transition-colors ${
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="w-full  bg-white  px-5 py-4 text-sm font-[Arial] outline-none placeholder:text-black/40 resize-none"
        />

        {/* Success or error message  */}
        {status === "success" && (
          <p className="text-white text-shadow-2xs font-bold text-sm text-center">
            Thank you! We&apos;ll be in touch soon.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-400 text-shadow-2xs font-bold text-sm text-center">
            Something went wrong. Please try again.
          </p>
        )}
        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className="w-full bg-black text-white font-(family-name:--font-right-grotesk) font-bold text-sm tracking-widest uppercase py-4  hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Book A 15 Min Call"}
        </button>
      </div>
    </div>
  );
}
