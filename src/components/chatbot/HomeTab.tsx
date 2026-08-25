'use client';

import React from 'react';
import Image from 'next/image';
import {
  Sparkles,
  Target,
  Trophy,
  Coffee,
  MessageSquare,
  ChevronRight,
} from 'lucide-react';

interface HomeTabProps {
  onSelectAction: (query: string) => void;
  onStartChat: () => void;
}

const ACTION_CARDS = [
  {
    id: 'services',
    title: 'Explore Services 🚀',
    description: 'Branding, Next.js Web Dev, SEO & High-ROAS Ads.',
    icon: Sparkles,
    query: 'What core services does RITGB provide?',
  },
  {
    id: 'audit',
    title: 'Free Growth Audit 🎯',
    description: 'Uncover conversion leaks & ad fatigue (zero fluff).',
    icon: Target,
    query: 'How can I claim a Free Growth Audit for my brand?',
  },
  {
    id: 'case-studies',
    title: 'Case Studies & Wins 💅',
    description: '4.8x ROAS, +340% inbound leads & 99/100 speed scores.',
    icon: Trophy,
    query: 'Can you share recent client case studies and results?',
  },
  {
    id: 'pricing',
    title: 'Pricing & Retainers ☕',
    description: 'Transparent project sprints & monthly growth retainers.',
    icon: Coffee,
    query: 'How does RITGB structure its pricing and retainers?',
  },
];

export const HomeTab: React.FC<HomeTabProps> = ({
  onSelectAction,
  onStartChat,
}) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F8F9FA] scrollbar-thin scrollbar-thumb-slate-200 font-sans">
      {/* 1. Ritzy Specialist Intro Card */}
      <div className="bg-white rounded-2xl p-4.5 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-start gap-4">
        {/* Mascot Avatar with pulsing green dot */}
        <div className="relative shrink-0">
          <div className="w-14 h-14 rounded-full bg-black p-0.5 shadow-md flex items-center justify-center border border-black/10 overflow-hidden">
            <Image
              src="/images/chatbot/mascot.gif"
              alt="Ritzy Mascot"
              width={56}
              height={56}
              className="w-full h-full object-cover rounded-full"
              unoptimized
            />
          </div>
          {/* Online green indicator */}
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          </span>
        </div>

        {/* Intro copy */}
        <div className="space-y-1.5 flex-1">
          <h3 className="text-[15px] font-bold text-slate-900 leading-snug">
            Hi, I&apos;m Ritzy 👋 <br />
            <span className="text-black font-black">AI Growth Specialist at RITGB.</span>
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Dropping unfiltered tea on Branding, Next.js Web Dev, High-ROAS Ads & SEO without the corporate buzzwords.
          </p>
          <p className="text-xs font-bold text-slate-800 pt-0.5">
            Ready to make your business impossible to ignore? 🚀
          </p>
        </div>
      </div>

      {/* 2. Quick Action Cards */}
      <div className="space-y-2.5">
        {ACTION_CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => onSelectAction(card.query)}
              className="w-full text-left bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-200/80 hover:border-black/30 rounded-2xl p-3.5 transition-all duration-200 shadow-xs flex items-center justify-between gap-3 group cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight group-hover:text-black transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                    {card.description}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-black group-hover:translate-x-0.5 transition-all shrink-0" />
            </button>
          );
        })}
      </div>

      {/* 3. Start a Conversation Banner Card */}
      <div className="bg-black text-white rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-md border border-white/10">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0">
            <MessageSquare className="w-4 h-4 text-white" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-[13px] font-bold text-white">
              Have a custom growth goal?
            </h4>
            <p className="text-[11px] text-white/70 truncate mt-0.5">
              Chat directly with Ritzy or contact our team.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onStartChat}
          className="bg-white hover:bg-slate-100 text-black text-xs font-bold px-3.5 py-2 rounded-full flex items-center gap-1.5 shrink-0 shadow-sm transition-all cursor-pointer transform active:scale-95"
        >
          <span>Start Chat</span>
          <ChevronRight className="w-3.5 h-3.5 text-black" />
        </button>
      </div>
    </div>
  );
};
