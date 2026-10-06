import FaqSection, { FAQItem } from "@/components/expertise/FaqSection";

const influencerMarketingFaqs: FAQItem[] = [
  {
    question: "Are creator fees included?",
    answer:
      "Creator fees, products, shipping, production expenses and usage rights depend on the campaign. These costs should be itemised separately from management fees unless stated otherwise.",
  },
  {
    question: "Should we choose smaller or larger creators?",
    answer:
      "Choose based on relevance, audience fit, content quality and budget. A smaller creator can be suitable for a focused audience; a larger creator may support broader exposure.",
  },
  {
    question: "Can we reuse influencer content in ads?",
    answer:
      "Only when the agreement provides the required permission. Paid usage, creator-account advertising and other reuse terms need to be agreed explicitly.",
  },
];

export default function InfluencerMarketingFaq() {
  return (
    <FaqSection
      tag="QUESTIONS / ANSWERS"
      faqs={influencerMarketingFaqs}
      defaultOpenAll={false}
    />
  );
}
