'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, RotateCcw } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (content: string) => void;
  onClearHistory?: () => void;
  isLoading: boolean;
  disabled?: boolean;
}

const MAX_CHAR_LIMIT = 500;

export const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  onClearHistory,
  isLoading,
  disabled = false,
}) => {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!isLoading && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isLoading]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading || disabled) return;
    onSendMessage(trimmed);
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (val.length <= MAX_CHAR_LIMIT) {
      setInput(val);
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${Math.min(
          textareaRef.current.scrollHeight,
          100
        )}px`;
      }
    }
  };

  const isSendDisabled = !input.trim() || isLoading || disabled;

  return (
    <div className="px-3 pb-3 pt-2 bg-[#F7F9F6] border-t border-slate-200/70 shrink-0">
      <div className="flex items-center gap-2 bg-white border border-slate-200/90 focus-within:border-[#267a47] focus-within:ring-1 focus-within:ring-[#267a47]/20 rounded-full px-3.5 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all">
        {onClearHistory && (
          <button
            type="button"
            onClick={onClearHistory}
            title="Reset conversation"
            className="text-slate-400 hover:text-slate-600 transition-colors p-1 -ml-1 cursor-pointer shrink-0"
            aria-label="Reset conversation"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        )}

        <textarea
          ref={textareaRef}
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={isLoading ? 'Assistant is typing...' : 'Type your message...'}
          disabled={isLoading || disabled}
          rows={1}
          className="w-full bg-transparent text-[#132018] placeholder-slate-400 text-xs sm:text-sm font-sans focus:outline-none resize-none max-h-[80px] py-1.5 leading-relaxed"
        />

        <button
          type="button"
          onClick={handleSend}
          disabled={isSendDisabled}
          aria-label="Send message"
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 cursor-pointer ${
            isSendDisabled
              ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
              : 'bg-[#0B351B] hover:bg-[#144e2b] text-white shadow-sm transform active:scale-95'
          }`}
        >
          <Send className="w-3.5 h-3.5 text-white" />
        </button>
      </div>
    </div>
  );
};
