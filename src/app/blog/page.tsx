import type { Metadata } from "next";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import BlogHero from "@/components/blog/BlogHero";
import { getAllPosts } from "@/data/blogData";

export const metadata: Metadata = {
  title: "The Blog – Things Worth Knowing | RITGB",
  description:
    "Ideas, strategies and uncomfortable truths about websites, marketing, automation and growth.",
  openGraph: {
    title: "The Blog – Things Worth Knowing | RITGB",
    description:
      "Ideas, strategies and uncomfortable truths about websites, marketing, automation and growth.",
    url: "https://www.ritgb.com/blog",
    siteName: "RITGB",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-white min-h-screen text-black flex flex-col justify-between">
      <div className="pt-28 md:pt-36 pb-20 px-6 sm:px-10 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
        {/* Animated Hero Header */}
        <BlogHero />

        {/* Blog Cards Grid */}
        <div
          id="articles"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-12 gap-y-17 md:gap-y-16"
        >
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} priority={index === 0} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
