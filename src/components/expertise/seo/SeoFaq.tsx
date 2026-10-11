import FaqSection, { FAQItem } from "@/components/expertise/FaqSection";

const seoFaqs: FAQItem[] = [
  {
    question: "How long does SEO take?",
    answer:
      "SEO is an ongoing investment rather than an instant traffic switch. Progress varies with the website's condition, competition, content and the pace of implementation. We set review points based on the agreed scope.",
  },
  {
    question: "Can you guarantee first-page rankings?",
    answer:
      "No. Search rankings are controlled by search engines and change over time. We commit to an agreed scope of work and clear reporting rather than a guaranteed position.",
  },
  {
    question: "Does SEO include writing and development?",
    answer:
      "Content production and technical implementation can be included or handled by your team. The proposal should identify who writes, approves and publishes each change.",
  },
];

export default function SeoFaq() {
  return (
    <FaqSection
      tag="QUESTIONS / ANSWERS"
      faqs={seoFaqs}
    />
  );
}
