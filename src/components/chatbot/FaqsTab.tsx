"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare, Search } from "lucide-react";
import { RITGB_KNOWLEDGE, FaqItem } from "@/lib/knowledge/ritgbKnowledge";

interface FaqsTabProps {
  onAskQuestion: (question: string) => void;
}

export const FaqsTab: React.FC<FaqsTabProps> = ({ onAskQuestion }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const filteredFaqs: FaqItem[] = RITGB_KNOWLEDGE.faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#F8F9FA] scrollbar-thin scrollbar-thumb-slate-200 font-sans">
      {/* Header Info Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
          <HelpCircle className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">
            Agency FAQs
          </h3>
          <p className="text-xs text-slate-500">
            Quick answers about RITGB services, AI, web dev, SEO & process.
          </p>
        </div>
      </div>

      {/* Live Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search services, AI, web, SEO, pricing, careers..."
          className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black/10 shadow-xs transition-all"
        />
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-2.5">
        {filteredFaqs.length === 0 ? (
          <div className="bg-white rounded-2xl p-6 text-center text-xs text-slate-500 border border-slate-200/80">
            No matching questions found. Ask Ritzy directly in the Chat tab! 🚀
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-50/70 transition-colors"
                >
                  <span className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-black" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-0 text-xs sm:text-[12.5px] text-slate-600 leading-relaxed border-t border-slate-100 bg-[#FAFAFA]">
                    <p className="mt-2 text-slate-700">{faq.answer}</p>
                    <button
                      type="button"
                      onClick={() => onAskQuestion(faq.question)}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-black hover:text-[#E64A5C] transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Ask Ritzy more about this in Chat →</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
