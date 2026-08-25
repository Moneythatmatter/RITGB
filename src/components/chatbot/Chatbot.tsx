'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Sparkles } from 'lucide-react';
import { ChatWindow } from './ChatWindow';
import { Message } from './ChatMessage';

const INITIAL_MESSAGE: Message = {
  id: 'welcome-1',
  role: 'assistant',
  content:
    "I’m **Ritzy**—dropping some unfiltered tea: ☕👀\n\nMost legacy hotel PMS software is literally digital slop. Running a property shouldn't feel like mental warfare every shift fr. 💀\n\nI can help you unpack our core modules, 2-way OTA channel sync (zero double bookings 🚫), direct booking engine (0% commission slay 💅), or custom pricing.\n\nWhat part of your hotel operations are we rescuing today? 🤝",
  timestamp: 'Just now',
};

const STORAGE_KEY = 'impact_pms_chat_history';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = sessionStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        }
      } catch {
        // Ignore storage errors
      }
    }
    return [INITIAL_MESSAGE];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Persist chat to sessionStorage
  useEffect(() => {
    if (messages.length > 1 || (messages.length === 1 && messages[0].id !== 'welcome-1')) {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      } catch {
        // Ignore storage errors
      }
    }
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    setError(null);
    setHasInteracted(true);

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const assistantPlaceholderId = `assistant-${Date.now()}`;
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Convert messages to API format
      const payloadMessages = newMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: payloadMessages }),
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(
          errJson.error || `Error ${res.status}: Failed to fetch response from assistant.`
        );
      }

      if (!res.body) {
        throw new Error('Readable stream not supported by browser.');
      }

      // Add empty streaming assistant message
      const initialAssistantMessage: Message = {
        id: assistantPlaceholderId,
        role: 'assistant',
        content: '',
        isStreaming: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, initialAssistantMessage]);

      // Read streaming chunks
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        accumulatedContent += chunk;

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantPlaceholderId
              ? { ...msg, content: accumulatedContent }
              : msg
          )
        );
      }

      // Finalize message streaming status
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantPlaceholderId
            ? { ...msg, content: accumulatedContent, isStreaming: false }
            : msg
        )
      );
    } catch (err: unknown) {
      const errMessage =
        err instanceof Error
          ? err.message
          : 'Unable to reach the assistant. Please try again.';
      setError(errMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([INITIAL_MESSAGE]);
    setError(null);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  return (
    <>
      {/* 1. Floating Chat Trigger Button */}
      <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-[999] flex flex-col items-end">
        {/* Floating helper nudge bubble when chat hasn't been opened */}
        {!isOpen && !hasInteracted && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 2, duration: 0.4 }}
            className="hidden sm:flex items-center gap-2 bg-[#082E15] text-white border border-[#267a47]/50 px-4 py-2 rounded-full shadow-[0_10px_25px_rgba(8,46,21,0.35)] mb-3 cursor-pointer group hover:border-[#62b578] transition-all"
            onClick={() => setIsOpen(true)}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#bce5cb]" />
            <span className="text-xs font-sans text-slate-200 group-hover:text-white font-medium">
              Need hotel tech tea? Ask Impact PMS ☕✨
            </span>
          </motion.div>
        )}

        <motion.button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close chat' : 'Open Impact PMS Assistant'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`cursor-pointer relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 border ${isOpen
              ? 'bg-[#082E15] text-white border-[#267a47] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
              : 'bg-white hover:bg-slate-50 text-white border-[#267a47]/30 shadow-[0_10px_25px_rgba(8,46,21,0.35)] hover:shadow-[0_14px_35px_rgba(8,46,21,0.5)] p-1'
            }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#bce5cb]" />
          ) : (
            <>
              <div className="w-full h-full relative flex items-center justify-center overflow-hidden rounded-full">
                <Image
                  src="/images/chatbot/mascot.gif"
                  alt="Impact PMS Mascot"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-full"
                  unoptimized
                />
              </div>
              {/* Pulsing online emerald badge */}
              <span className="absolute top-0.5 right-0.5 z-20 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white shadow-md" />
              </span>
            </>
          )}
        </motion.button>
      </div>

      {/* 2. Chat Panel Modal / Popup */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[998] sm:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.95 }}
              transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="fixed z-[999] inset-x-3 bottom-22 top-auto sm:inset-auto sm:bottom-24 sm:right-8 w-auto sm:w-[420px] h-[82vh] sm:h-[640px] max-h-[680px] flex shadow-2xl"
            >
              <ChatWindow
                messages={messages}
                isLoading={isLoading}
                error={error}
                onSendMessage={handleSendMessage}
                onClearHistory={handleClearHistory}
                onClose={() => setIsOpen(false)}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
