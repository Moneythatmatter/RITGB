import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { privacyPolicyData } from "@/data/privacyPolicyData";

export const metadata: Metadata = {
  title: "Privacy Policy | RITGB",
  description:
    "Learn how RITGB collects, uses, protects, and handles personal data under applicable data protection laws including the Digital Personal Data Protection Act (DPDP Act).",
  alternates: {
    canonical: "https://www.ritgb.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | RITGB",
    description:
      "Learn how RITGB collects, uses, protects, and handles personal data under applicable data protection laws.",
    url: "https://www.ritgb.com/privacy-policy",
    siteName: "RITGB",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const { title, lastUpdated, introParagraphs, sections, contactInfo, footerNote } =
    privacyPolicyData;

  return (
    <main className="bg-white min-h-screen text-black flex flex-col justify-between">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Privacy Policy", url: "https://www.ritgb.com/privacy-policy" },
        ]}
      />

      <div className="pt-28 md:pt-36 pb-20 px-6 sm:px-10 md:px-16 lg:px-24 max-w-5xl mx-auto w-full">
        {/* Header */}
        <header className="border-b border-black/10 pb-8 md:pb-12 mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-black/60 text-xs font-[Arial] tracking-widest uppercase mb-4">
            <span>Last Updated:</span>
            <span className="font-semibold text-black">{lastUpdated}</span>
          </div>

          <h1 className="font-(family-name:--font-right-grotesk) text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-black leading-[1.05]">
            {title}
          </h1>

          <div className="mt-6 space-y-4 font-[Arial] text-base sm:text-lg text-black/80 leading-relaxed">
            {introParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </header>

        {/* Policy Sections */}
        <div className="space-y-12 md:space-y-16">
          {sections.map((section) => (
            <section
              key={section.number}
              id={`section-${section.number}`}
              className="scroll-mt-32 border-b border-black/5 pb-10 last:border-b-0"
            >
              <h2 className="font-(family-name:--font-right-grotesk) text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-4">
                {section.number}. {section.title}
              </h2>

              {section.intro && (
                <div className="space-y-3 font-[Arial] text-black/80 text-base sm:text-lg leading-relaxed mb-4">
                  {Array.isArray(section.intro) ? (
                    section.intro.map((p, idx) => <p key={idx}>{p}</p>)
                  ) : (
                    <p>{section.intro}</p>
                  )}
                </div>
              )}

              {section.paragraphs && (
                <div className="space-y-3 font-[Arial] text-black/80 text-base sm:text-lg leading-relaxed mb-4">
                  {section.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              )}

              {section.items && (
                <ul className="space-y-2.5 my-4 pl-2 font-[Arial] text-base sm:text-lg">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2.5" />
                      <span className="text-black/85">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.followUp && (
                <div className="space-y-3 font-[Arial] text-black/80 text-base sm:text-lg leading-relaxed mt-4">
                  {section.followUp.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              )}

              {/* Subsections */}
              {section.subsections && (
                <div className="mt-6 space-y-8 pl-0 md:pl-4">
                  {section.subsections.map((sub) => (
                    <div key={sub.title} className="space-y-3">
                      <h3 className="font-(family-name:--font-right-grotesk) text-xl sm:text-2xl font-bold uppercase tracking-tight text-black">
                        {sub.number ? `${sub.number} ` : ""}
                        {sub.title}
                      </h3>

                      {sub.intro && (
                        <p className="font-[Arial] text-black/80 text-base sm:text-lg leading-relaxed">
                          {sub.intro}
                        </p>
                      )}

                      {sub.paragraphs && (
                        <div className="space-y-3 font-[Arial] text-black/80 text-base sm:text-lg leading-relaxed">
                          {sub.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      )}

                      {sub.items && (
                        <ul className="space-y-2.5 my-3 pl-2 font-[Arial] text-base sm:text-lg">
                          {sub.items.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-black/60 shrink-0 mt-2.5" />
                              <span className="text-black/85">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {sub.outro && (
                        <p className="font-[Arial] text-black/80 text-base sm:text-lg leading-relaxed pt-1">
                          {sub.outro}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Contact Information block for section 14 */}
              {section.number === "14" && (
                <div className="mt-6 p-6 sm:p-8 bg-neutral-50 rounded-2xl border border-black/10 space-y-3 font-[Arial] text-base sm:text-lg">
                  <p>
                    <strong className="text-black font-semibold">Company:</strong>{" "}
                    {contactInfo.company}
                  </p>
                  <p>
                    <strong className="text-black font-semibold">Location:</strong>{" "}
                    {contactInfo.location}
                  </p>
                  <p>
                    <strong className="text-black font-semibold">Support Phone:</strong>{" "}
                    <a
                      href={`tel:${contactInfo.supportPhone.replace(/\s+/g, "")}`}
                      className="text-black underline underline-offset-4 decoration-black/30 hover:decoration-black transition-colors"
                    >
                      {contactInfo.supportPhone}
                    </a>
                  </p>
                  <p>
                    <strong className="text-black font-semibold">
                      Sales &amp; Enquiry Phone:
                    </strong>{" "}
                    <a
                      href={`tel:${contactInfo.salesPhone.replace(/\s+/g, "")}`}
                      className="text-black underline underline-offset-4 decoration-black/30 hover:decoration-black transition-colors"
                    >
                      {contactInfo.salesPhone}
                    </a>
                  </p>
                  <p>
                    <strong className="text-black font-semibold">Website:</strong>{" "}
                    <a
                      href={contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black underline underline-offset-4 decoration-black/30 hover:decoration-black transition-colors"
                    >
                      {contactInfo.website}
                    </a>
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Footer Note */}
        <aside className="mt-16 pt-8 border-t border-black/10 text-center sm:text-left">
          <p className="font-(family-name:--font-right-grotesk) text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
            {footerNote.agency}
          </p>
          <p className="mt-1 font-[Arial] text-base sm:text-lg text-black/70">
            {footerNote.statement}
          </p>
        </aside>

        {/* Back Link */}
        <div className="mt-12 pt-6 border-t border-black/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-[Arial] font-bold text-xs sm:text-sm uppercase tracking-wider text-black hover:opacity-60 transition-opacity"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
