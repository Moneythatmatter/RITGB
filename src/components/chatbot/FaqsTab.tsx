'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, Search } from 'lucide-react';

interface FaqsTabProps {
  onAskQuestion: (question: string) => void;
}

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS_LIST: FaqItem[] = [
  {
    question: 'What is Impact PMS and who is it built for?',
    answer:
      'Impact PMS is an all-in-one property management system built for boutique hotels, business hotels, luxury resorts, independent properties, and multi-property hotel chains to streamline front office, billing, housekeeping, inventory, and direct bookings.',
    category: 'General',
  },
  {
    question: 'How does the 2-Way Channel Manager prevent overbooking?',
    answer:
      'Whenever a reservation, cancellation, or modification occurs (on Booking.com, Agoda, MakeMyTrip, Expedia, Airbnb, or direct bookings), Impact PMS instantly synchronizes available room counts and rates across all connected OTA channels in real time.',
    category: 'Channel Manager',
  },
  {
    question: 'How does the direct booking engine (Impact ABS) work?',
    answer:
      'Impact ABS is a commission-free (0% commission), mobile-responsive booking widget that integrates directly onto your hotel website. Guests can browse real-time room availability, add upsell packages, apply promo codes, and complete instant online payments.',
    category: 'Direct Bookings',
  },
  {
    question: 'Does Impact PMS integrate with Tally and Payment Gateways?',
    answer:
      'Yes! Impact PMS provides automated ledger and journal synchronization with Tally Prime / Tally.ERP 9 and QuickBooks, as well as seamless payment gateway integrations with Razorpay, Stripe, Paytm, UPI, and major card processors.',
    category: 'Integrations',
  },
  {
    question: 'How does the POS module handle multi-outlet dining & room service?',
    answer:
      'The Food & Beverage POS module manages table layouts, Kitchen Order Tickets (KOT/KDS), and lets staff post restaurant, café, room service, or spa bills directly to the guest’s front desk room folio with one click.',
    category: 'POS & Operations',
  },
  {
    question: 'How long does onboarding and past data migration take?',
    answer:
      'Our dedicated implementation team handles data migration of past guest history, room categories, corporate accounts, and inventory records. Most properties go live smoothly within 3 to 7 business days with comprehensive staff training.',
    category: 'Onboarding & Support',
  },
  {
    question: 'Can I schedule a free live product demo?',
    answer:
      'Yes! You can request a personalized walkthrough tailored to your hotel size, departments, and specific operational needs by clicking Book a Free Demo.',
    category: 'Demo & Pricing',
  },
];

export const FaqsTab: React.FC<FaqsTabProps> = ({ onAskQuestion }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const filteredFaqs = FAQS_LIST.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#F7F9F6] scrollbar-thin scrollbar-thumb-slate-200">
      {/* Header */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#E8F2EA] text-[#0B351B] flex items-center justify-center shrink-0">
          <HelpCircle className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-900">
            Frequently Asked Questions
          </h3>
          <p className="text-xs text-slate-500">
            Quick answers about Impact PMS features & integrations.
          </p>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search questions or topics..."
          className="w-full bg-white border border-slate-200/90 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#267a47] focus:ring-1 focus:ring-[#267a47]/20 shadow-xs"
        />
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-2.5">
        {filteredFaqs.length === 0 ? (
          <div className="bg-white rounded-2xl p-6 text-center text-xs text-slate-500 border border-slate-200/70">
            No matching questions found. Try asking our AI assistant directly in Chat!
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/70 rounded-2xl overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-50/50"
                >
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-[#0B351B]' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-0 text-xs sm:text-[12.5px] text-slate-600 leading-relaxed border-t border-slate-100 bg-[#FAFCF9]">
                    <p className="mt-2">{faq.answer}</p>
                    <button
                      type="button"
                      onClick={() => onAskQuestion(faq.question)}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B351B] hover:text-[#267a47] cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Ask more about this in Chat →</span>
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
