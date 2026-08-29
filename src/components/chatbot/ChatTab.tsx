"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import {
  AlertCircle,
  ChevronRight,
  Sparkles,
  Code,
  Bot,
  TrendingUp,
} from "lucide-react";
import { ChatMessage, Message } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

interface ChatTabProps {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  onSendMessage: (text: string) => void;
  onClearHistory?: () => void;
}

const CHAT_SUGGESTIONS = [
  {
    title: "Brand & UI/UX Design 🎨",
    description: "Logo systems, style guides & digital experiences.",
    icon: Sparkles,
    query: "Tell me about RITGB branding and UI/UX design services.",
  },
  {
    title: "Web & Mobile Dev ⚡",
    description: "Next.js apps, iOS/Android & sub-second speed.",
    icon: Code,
    query: "Can RITGB build a custom website or mobile app for my business?",
  },
  {
    title: "AI Automation & Bots 🤖",
    description: "24/7 customer support bots & workflow automation.",
    icon: Bot,
    query: "Does RITGB provide AI chatbot development and automation?",
  },
  {
    title: "Paid Ads & Local SEO 📈",
    description: "High-ROAS Meta/Google Ads & Google map rankings.",
    icon: TrendingUp,
    query: "How do your Meta and Google Ads deliver high ROAS?",
  },
];

export const ChatTab: React.FC<ChatTabProps> = ({
  messages,
  isLoading,
  error,
  onSendMessage,
  onClearHistory,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (smooth = true) => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: smooth ? "smooth" : "auto",
        block: "end",
      });
    }
  };

  useEffect(() => {
    scrollToBottom(true);
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col flex-1 h-full min-h-0 bg-[#F8F9FA] font-sans">
      {/* Messages Scroll Area */}
      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-2.5 scrollbar-thin scrollbar-thumb-slate-200"
      >
        {/* Render all conversation messages */}
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {/* Suggestion cards shown below initial greeting */}
        {messages.length <= 1 && !isLoading && (
          <div className="pt-2 pb-1 space-y-2 animate-in fade-in duration-300">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">
              Popular Topics to Explore:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CHAT_SUGGESTIONS.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => onSendMessage(card.query)}
                    className="text-left bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-black/40 rounded-xl p-2.5 sm:p-3 transition-all flex items-center justify-between gap-2 group cursor-pointer shadow-xs"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-black transition-colors truncate">
                          {card.title}
                        </div>
                        <div className="text-[10px] text-slate-500 truncate">
                          {card.description}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-black group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Typing indicator */}
        {isLoading && (
          <div className="flex items-center gap-2 text-xs text-black my-2 pl-1">
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center overflow-hidden p-0.5 border border-white/20 shadow-xs">
              <Image
                src="/images/chatbot/mascot.gif"
                alt="Ritzy Typing"
                width={28}
                height={28}
                className="w-full h-full object-cover rounded-full"
                unoptimized
              />
            </div>
            <div className="flex items-center gap-1 bg-white border border-slate-200/90 px-3.5 py-2.5 rounded-2xl rounded-tl-xs shadow-xs">
              <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" />
            </div>
          </div>
        )}

        {/* Error notification */}
        {error && (
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 my-2 text-xs text-rose-700 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-500 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input bar */}
      <ChatInput
        onSendMessage={onSendMessage}
        onClearHistory={onClearHistory}
        isLoading={isLoading}
      />
    </div>
  );
};
