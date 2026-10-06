import FaqSection, { FAQItem } from "@/components/expertise/FaqSection";

const contentMarketingFaqs: FAQItem[] = [
  {
    question: "Is content marketing the same as SEO?",
    answer:
      "They overlap, but have different scopes. Content marketing covers communication across the customer journey; SEO also addresses search discovery, technical foundations and website structure.",
  },
  {
    question: "Can you write about a specialist industry?",
    answer:
      "We can develop content with research and input from your subject experts. Your team should review technical claims and business-specific details before publication.",
  },
  {
    question: "Who approves the content?",
    answer:
      "Your designated reviewer approves brand details, claims and final wording. We agree on the review process and revision scope at the start.",
  },
];

export default function ContentMarketingFaq() {
  return (
    <FaqSection
      tag="QUESTIONS / ANSWERS"
      faqs={contentMarketingFaqs}
      defaultOpenAll={true}
    />
  );
}
