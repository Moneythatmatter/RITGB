'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Copy, Check, CheckCheck } from 'lucide-react';

export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: string;
  isStreaming?: boolean;
  suggestions?: Array<{
    title: string;
    description: string;
    action: string;
  }>;
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
}) => {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === 'user';

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`flex items-start gap-2.5 my-3 transition-opacity duration-200 ${
        isUser ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      {/* Avatar Icon */}
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-white text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5 overflow-hidden p-0.5 border border-slate-200/80">
          <Image
            src="/images/chatbot/mascot.gif"
            alt="Ritzy Mascot"
            width={32}
            height={32}
            className="w-full h-full object-cover rounded-full"
            unoptimized
          />
        </div>
      )}

      {/* Message Content Container */}
      <div
        className={`relative max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-[0_2px_8px_rgba(0,0,0,0.03)] ${
          isUser
            ? 'bg-[#E2EFE4] text-[#132018] font-medium rounded-tr-xs border border-[#cfe3d3]'
            : 'bg-white text-[#1f2937] border border-slate-100 rounded-tl-xs'
        }`}
      >
        {/* Render formatted message content */}
        <div className="space-y-1.5 break-words">
          {formatMessageContent(message.content, isUser)}
        </div>

        {/* Streaming Cursor Animation */}
        {message.isStreaming && (
          <span className="inline-block w-1.5 h-4 ml-1 bg-[#267a47] animate-pulse align-middle" />
        )}

        {/* Footer with copy button & timestamp */}
        <div
          className={`flex items-center gap-1.5 pt-1.5 mt-1.5 text-[10px] ${
            isUser
              ? 'justify-end text-slate-500 font-normal'
              : 'justify-between border-t border-slate-100 text-slate-400'
          }`}
        >
          <span>{message.timestamp || 'Just now'}</span>

          {isUser && (
            <CheckCheck className="w-3.5 h-3.5 text-[#267a47] shrink-0 inline-block ml-0.5" />
          )}

          {!isUser && !message.isStreaming && message.content && (
            <button
              onClick={handleCopy}
              type="button"
              aria-label="Copy message"
              className="inline-flex items-center gap-1 hover:text-[#0B351B] transition-colors p-1 rounded hover:bg-slate-100 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-600">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * Parses markdown-like strings (bold, bullets, headings, links) safely into React nodes.
 */
function formatMessageContent(content: string, isUser: boolean): React.ReactNode {
  if (!content) return null;

  const lines = content.split('\n');

  return lines.map((line, lineIdx) => {
    const trimmed = line.trim();

    if (!trimmed) {
      return <div key={lineIdx} className="h-1.5" />;
    }

    // Heading 3 (###)
    if (trimmed.startsWith('### ')) {
      return (
        <h4
          key={lineIdx}
          className={`font-bold text-sm mt-2 mb-1 ${
            isUser ? 'text-[#132018]' : 'text-[#0B351B]'
          }`}
        >
          {renderInlineStyles(trimmed.slice(4), isUser)}
        </h4>
      );
    }

    // Bullet points (- or * )
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      return (
        <div key={lineIdx} className="flex items-start gap-2 pl-0.5 my-0.5">
          <span
            className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
              isUser ? 'bg-[#0B351B]' : 'bg-[#267a47]'
            }`}
          />
          <span className="flex-1">{renderInlineStyles(trimmed.slice(2), isUser)}</span>
        </div>
      );
    }

    // Numbered lists (e.g. "1. ")
    const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
    if (numMatch) {
      return (
        <div key={lineIdx} className="flex items-start gap-2 pl-0.5 my-0.5">
          <span
            className={`font-semibold shrink-0 text-xs mt-0.5 ${
              isUser ? 'text-[#132018]' : 'text-[#0B351B]'
            }`}
          >
            {numMatch[1]}.
          </span>
          <span className="flex-1">{renderInlineStyles(numMatch[2], isUser)}</span>
        </div>
      );
    }

    return (
      <p key={lineIdx} className="my-0.5">
        {renderInlineStyles(line, isUser)}
      </p>
    );
  });
}

/**
 * Formats inline bold text and markdown links [Label](url)
 */
function renderInlineStyles(text: string, isUser: boolean): React.ReactNode[] {
  const tokenRegex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;
  const nodes: React.ReactNode[] = [];
  let lastIdx = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      nodes.push(text.substring(lastIdx, match.index));
    }

    if (match[2] && match[3]) {
      const label = match[2];
      const url = match[3];
      const isInternal = url.startsWith('/') || url.startsWith('#');
      const isMailto = url.startsWith('mailto:');

      if (isInternal || isMailto) {
        nodes.push(
          <Link
            key={`link-${match.index}`}
            href={url}
            className={`font-semibold underline underline-offset-2 transition-colors inline-flex items-center gap-0.5 ${
              isUser
                ? 'text-[#0B351B] hover:text-black font-bold'
                : 'text-[#0B351B] hover:text-[#267a47] bg-[#E8F2EA] px-1.5 py-0.5 rounded border border-[#cfe3d3]'
            }`}
          >
            {label} →
          </Link>
        );
      } else {
        nodes.push(
          <a
            key={`ext-${match.index}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-semibold underline underline-offset-2 transition-colors inline-flex items-center gap-1 ${
              isUser
                ? 'text-[#0B351B] hover:text-black font-bold'
                : 'text-[#0B351B] hover:text-[#267a47] bg-[#E8F2EA] px-1.5 py-0.5 rounded border border-[#cfe3d3]'
            }`}
          >
            {label} ↗
          </a>
        );
      }
    } else if (match[4]) {
      nodes.push(
        <strong
          key={`bold-${match.index}`}
          className={isUser ? 'font-bold text-[#132018]' : 'font-semibold text-slate-900'}
        >
          {match[4]}
        </strong>
      );
    }

    lastIdx = tokenRegex.lastIndex;
  }

  if (lastIdx < text.length) {
    nodes.push(text.substring(lastIdx));
  }

  return nodes;
}
