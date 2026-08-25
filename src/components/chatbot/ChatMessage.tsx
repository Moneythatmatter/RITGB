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

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === 'user';

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`flex items-start gap-2.5 my-2.5 transition-opacity duration-200 ${
        isUser ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      {/* Mascot Avatar for Assistant */}
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5 overflow-hidden p-0.5 border border-white/20">
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

      {/* Message Content Bubble */}
      <div
        className={`relative max-w-[86%] sm:max-w-[82%] rounded-2xl px-4 py-3 text-[13px] sm:text-sm leading-relaxed shadow-sm ${
          isUser
            ? 'bg-black text-white font-medium rounded-tr-xs border border-white/10'
            : 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-xs shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
        }`}
      >
        {/* Render formatted message content */}
        <div className="space-y-1.5 break-words font-sans">
          {formatMessageContent(message.content, isUser)}
        </div>

        {/* Streaming Cursor */}
        {message.isStreaming && (
          <span className="inline-block w-1.5 h-3.5 ml-1 bg-black animate-pulse align-middle" />
        )}

        {/* Footer with copy button & timestamp */}
        <div
          className={`flex items-center gap-1.5 pt-1.5 mt-1.5 text-[10px] ${
            isUser
              ? 'justify-end text-white/50 font-normal'
              : 'justify-between border-t border-slate-100 text-slate-400'
          }`}
        >
          <span>{message.timestamp || 'Just now'}</span>

          {isUser && (
            <CheckCheck className="w-3.5 h-3.5 text-white/70 shrink-0 inline-block ml-0.5" />
          )}

          {!isUser && !message.isStreaming && message.content && (
            <button
              onClick={handleCopy}
              type="button"
              aria-label="Copy message"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-black transition-colors p-1 rounded hover:bg-slate-100 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-600 font-medium">Copied</span>
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
 * Parses markdown-like strings (bold, bullets, numbered lists, headings, links) safely into React nodes.
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
            isUser ? 'text-white' : 'text-black'
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
              isUser ? 'bg-white' : 'bg-black'
            }`}
          />
          <span className="flex-1 leading-snug">
            {renderInlineStyles(trimmed.slice(2), isUser)}
          </span>
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
              isUser ? 'text-white/80' : 'text-black'
            }`}
          >
            {numMatch[1]}.
          </span>
          <span className="flex-1 leading-snug">
            {renderInlineStyles(numMatch[2], isUser)}
          </span>
        </div>
      );
    }

    return (
      <p key={lineIdx} className="my-0.5 leading-snug">
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
            className={`font-bold underline underline-offset-2 transition-all inline-flex items-center gap-0.5 ${
              isUser
                ? 'text-white hover:text-white/80'
                : 'text-black hover:text-[#E64A5C] bg-black/5 hover:bg-black/10 px-1.5 py-0.5 rounded border border-black/10'
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
            className={`font-bold underline underline-offset-2 transition-all inline-flex items-center gap-0.5 ${
              isUser
                ? 'text-white hover:text-white/80'
                : 'text-black hover:text-[#E64A5C] bg-black/5 hover:bg-black/10 px-1.5 py-0.5 rounded border border-black/10'
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
          className={isUser ? 'font-bold text-white' : 'font-bold text-black'}
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
