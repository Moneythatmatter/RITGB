"use client";

import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/data/blogData";

interface BlogCardProps {
  post: BlogPost;
  priority?: boolean;
}

export default function BlogCard({ post, priority = false }: BlogCardProps) {
  return (
    <article className="group flex flex-col h-full bg-white rounded-2xl transition-all duration-300">
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-2xl"
      >
        {/* Card Image Container */}
        <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-100 shadow-sm">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            priority={priority}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Card Content */}
        <div className="flex flex-col flex-1 pt-6 pb-2">
          {/* Category Tag with underline */}
          <div className="mb-3">
            <span className="font-arial inline-block text-[11px] md:text-[12px] font-bold tracking-[0.18em] uppercase text-black border-b border-black/20 pb-0.5">
              {post.categoryLabel || post.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-(family-name:--font-right-grotesk) text-2xl md:text-[28px] lg:text-[30px] font-black leading-[1.1] tracking-[-0.01em] text-black group-hover:text-black/75 transition-colors duration-200 mb-5">
            {post.title}
          </h3>

          {/* Read Article CTA Link */}
          <div className="mt-auto pt-2 flex items-center gap-1.5 font-arial text-xs md:text-sm font-bold tracking-wider uppercase text-black">
            <span>READ ARTICLE</span>
            <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
              →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
