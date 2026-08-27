import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import BlogFAQAccordion from "@/components/blog/BlogFAQAccordion";
import { getAllPosts, getPostBySlug } from "@/data/blogData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | RITGB Blog",
      description: "The requested blog article could not be found.",
    };
  }

  return {
    title: `${post.title} | RITGB`,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.ritgb.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://www.ritgb.com/blog/${post.slug}`,
      siteName: "RITGB",
      type: "article",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 800,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const faqSection = post.content.find((section) => section.type === "faq");
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `https://www.ritgb.com${post.image}`,
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: "https://www.ritgb.com",
    },
    publisher: {
      "@type": "Organization",
      name: "RITGB",
      url: "https://www.ritgb.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.ritgb.com/images/logo/ritgb-logo-transparent.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.ritgb.com/blog/${post.slug}`,
    },
  };

  const jsonLdFaq = faqSection?.faqs
    ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqSection.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }
    : null;

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}

      <main className="bg-white min-h-screen text-black flex flex-col justify-between">
        <article className="pt-28 md:pt-36 pb-20 px-6 sm:px-10 md:px-16 lg:px-24 max-w-full mx-auto w-full">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-wider text-black/60 mb-6">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-black transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-black">{post.categoryLabel || post.category}</span>
          </div>

          {/* Article Header */}
          <header className="mb-10 md:mb-12">
            <h1 className="font-(family-name:--font-right-grotesk) text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black uppercase leading-[1.08] tracking-[-0.02em] text-black mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-black/10 text-xs md:text-sm font-arial text-black/60">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-black text-white font-bold flex items-center justify-center text-xs">
                  R
                </div>
                <div>
                  <p className="font-bold text-black">{post.author.name}</p>
                  <p className="text-[11px] text-black/50">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 mb-12 md:mb-16 shadow-md">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>

          {/* Main Article Body */}
          <div className="max-w-full mx-auto space-y-6 md:space-y-8 font-arial text-base sm:text-lg text-black/85 leading-relaxed">
            {post.content.map((section, idx) => {
              switch (section.type) {
                case "heading2":
                  return (
                    <h2
                      key={idx}
                      className="font-(family-name:--font-right-grotesk) text-2xl sm:text-3xl md:text-4xl font-black uppercase text-black pt-6 pb-2 border-b border-black/10 tracking-tight"
                    >
                      {section.content}
                    </h2>
                  );
                case "heading3":
                  return (
                    <h3
                      key={idx}
                      className="font-(family-name:--font-right-grotesk) text-xl sm:text-2xl font-bold uppercase text-black pt-4 pb-1"
                    >
                      {section.content}
                    </h3>
                  );
                case "paragraph":
                  return (
                    <p
                      key={idx}
                      dangerouslySetInnerHTML={{ __html: section.content || "" }}
                    />
                  );
                case "quote":
                  return (
                    <blockquote
                      key={idx}
                      className="border-l-4 border-black pl-6 py-3 my-6 bg-neutral-50 rounded-r-xl italic font-medium text-lg md:text-xl text-black"
                    >
                      “{section.content}”
                    </blockquote>
                  );
                case "list":
                  return (
                    <ul key={idx} className="space-y-2.5 my-4 pl-2">
                      {section.items?.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-2.5"></span>
                          <span className="text-black/90 font-normal">{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                case "cta":
                  return (
                    <div
                      key={idx}
                      className="my-8 py-4 border-y border-black/10"
                    >
                      {section.ctaLink && section.ctaText && (
                        <a
                          href={section.ctaLink}
                          className="font-arial font-bold text-base md:text-lg text-black underline underline-offset-4 decoration-black/40 hover:decoration-black transition-colors"
                        >
                          {section.ctaText} →
                        </a>
                      )}
                    </div>
                  );
                case "faq":
                  return (
                    <div key={idx} className="w-full">
                      {section.faqs && <BlogFAQAccordion faqs={section.faqs} />}
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* Back link */}
          <div className="max-w-3xl mx-auto mt-14 pt-8 border-t border-black/10 flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-arial font-bold text-xs md:text-sm uppercase tracking-wider text-black hover:opacity-60 transition-opacity"
            >
              ← Back to All Articles
            </Link>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}
