"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  MoreVertical,
  Home,
  MessageSquare,
  HelpCircle,
  RotateCcw,
  Sparkles,
  ExternalLink,
  Target,
} from "lucide-react";
import { Message } from "./ChatMessage";
import { HomeTab } from "./HomeTab";
import { ChatTab } from "./ChatTab";
import { FaqsTab } from "./FaqsTab";

export type TabType = "home" | "chat" | "faqs";

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  onSendMessage: (text: string) => void;
  onClearHistory: () => void;
  onClose: () => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  isLoading,
  error,
  onSendMessage,
  onClearHistory,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelectQuery = (query: string) => {
    setActiveTab("chat");
    onSendMessage(query);
  };

  const handleStartChat = () => {
    setActiveTab("chat");
  };

  return (
    <div className="flex flex-col h-full w-full bg-[#F8F9FA] text-slate-900 rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_25px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl font-sans">
      {/* 1. Header (Black / Obsidian) */}
      <div className="bg-black px-4 py-3.5 flex items-center justify-between shrink-0 text-white relative shadow-sm border-b border-white/10">
        <div className="flex items-center gap-3">
          {/* Avatar badge with green online dot */}
          <div className="relative shrink-0">
            <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center shadow-md overflow-hidden p-0.5 border border-white/20">
              <Image
                src="/images/chatbot/mascot.gif"
                alt="Ritzy Mascot"
                width={40}
                height={40}
                className="w-full h-full object-cover rounded-full"
                unoptimized
              />
            </div>
            {/* Green online badge */}
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-black rounded-full" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm sm:text-base font-black text-white leading-tight tracking-tight uppercase">
                Ritzy
              </h3>
              {/* <span className="bg-white/15 text-[10px] font-bold uppercase tracking-wider text-white px-1.5 py-0.2 rounded">
                AI Mascot
              </span> */}
            </div>
            <p className="text-[11px] text-white/70 font-normal">
              RITGB Growth Specialist
            </p>
          </div>
        </div>

        {/* Controls: More Menu & Collapse Chevron */}
        <div className="flex items-center gap-0.5 relative">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            title="Options"
            className="p-2 text-white/80 hover:text-white hover:bg-white/15 rounded-full transition-colors cursor-pointer"
            aria-label="Chat options"
          >
            <MoreVertical className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onClose}
            title="Minimize"
            className="p-2 text-white/80 hover:text-white hover:bg-white/15 rounded-full transition-colors cursor-pointer"
            aria-label="Minimize chat window"
          >
            <ChevronDown className="w-5 h-5" />
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 top-11 bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-100 py-2 w-52 z-50 animate-in fade-in zoom-in-95 duration-150 font-sans">
              <button
                type="button"
                onClick={() => {
                  onClearHistory();
                  setMenuOpen(false);
                }}
                className="w-full text-left px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                <span>Reset Conversation</span>
              </button>
              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-full text-left px-3.5 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-50 flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Target className="w-3.5 h-3.5 text-[#E64A5C]" />
                <span>Claim Free Audit</span>
              </a>
              <a
                href="/expertise"
                onClick={() => setMenuOpen(false)}
                className="w-full text-left px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-slate-400" />
                <span>Explore Services</span>
              </a>
              <a
                href="/work"
                onClick={() => setMenuOpen(false)}
                className="w-full text-left px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                <span>View Portfolio</span>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* 2. Active Tab Content Viewport */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden relative">
        {activeTab === "home" && (
          <HomeTab
            onSelectAction={handleSelectQuery}
            onStartChat={handleStartChat}
          />
        )}

        {activeTab === "chat" && (
          <ChatTab
            messages={messages}
            isLoading={isLoading}
            error={error}
            onSendMessage={onSendMessage}
            onClearHistory={onClearHistory}
          />
        )}

        {activeTab === "faqs" && <FaqsTab onAskQuestion={handleSelectQuery} />}
      </div>

      {/* 3. Footer Branding */}
      <div className="py-1 px-4 text-center bg-[#F8F9FA] border-t border-slate-200/60 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium">
        <span>Powered by</span>
        <span className="inline-flex items-center gap-1 font-bold text-black uppercase tracking-wider">
          RITGB
        </span>
      </div>

      {/* 4. Bottom Tab Navigation Bar */}
      <div className="bg-white border-t border-slate-200 px-2 py-1.5 flex items-center justify-around shrink-0">
        {/* Tab 1: Home */}
        <button
          type="button"
          onClick={() => setActiveTab("home")}
          className={`flex flex-col items-center gap-1 py-1 px-4 relative rounded-xl transition-colors cursor-pointer ${
            activeTab === "home"
              ? "text-black font-bold"
              : "text-slate-500 hover:text-slate-800 font-medium"
          }`}
        >
          <Home
            className={`w-5 h-5 ${
              activeTab === "home" ? "text-black" : "text-slate-400"
            }`}
          />
          <span className="text-[11px] leading-none">Home</span>
          {activeTab === "home" && (
            <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-black rounded-full" />
          )}
        </button>

        {/* Tab 2: Chat */}
        <button
          type="button"
          onClick={() => setActiveTab("chat")}
          className={`flex flex-col items-center gap-1 py-1 px-4 relative rounded-xl transition-colors cursor-pointer ${
            activeTab === "chat"
              ? "text-black font-bold"
              : "text-slate-500 hover:text-slate-800 font-medium"
          }`}
        >
          <MessageSquare
            className={`w-5 h-5 ${
              activeTab === "chat" ? "text-black" : "text-slate-400"
            }`}
          />
          <span className="text-[11px] leading-none">Chat</span>
          {activeTab === "chat" && (
            <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-black rounded-full" />
          )}
        </button>

        {/* Tab 3: FAQs */}
        <button
          type="button"
          onClick={() => setActiveTab("faqs")}
          className={`flex flex-col items-center gap-1 py-1 px-4 relative rounded-xl transition-colors cursor-pointer ${
            activeTab === "faqs"
              ? "text-black font-bold"
              : "text-slate-500 hover:text-slate-800 font-medium"
          }`}
        >
          <HelpCircle
            className={`w-5 h-5 ${
              activeTab === "faqs" ? "text-black" : "text-slate-400"
            }`}
          />
          <span className="text-[11px] leading-none">FAQs</span>
          {activeTab === "faqs" && (
            <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-black rounded-full" />
          )}
        </button>
      </div>
    </div>
  );
};
