import FaqSection, { FAQItem } from "@/components/expertise/FaqSection";

const performanceMarketingFaqs: FAQItem[] = [
  {
    question: "How is performance marketing different from Google Ads management?",
    answer:
      "Google Ads management focuses on one advertising platform. Performance marketing can coordinate multiple paid channels, creative tests and landing-page improvements around a shared conversion goal.",
  },
  {
    question: "Can you guarantee a return on ad spend?",
    answer:
      "No fixed return is guaranteed. Results depend on the offer, pricing, competition, budget, website, tracking and sales or fulfilment process.",
  },
  {
    question: "What do you need from our team?",
    answer:
      "Relevant account access, accurate offer information, timely approvals and feedback on lead quality or sales. These inputs help connect platform data with business outcomes.",
  },
];

export default function PerformanceMarketingFaq() {
  return (
    <FaqSection
      tag="QUESTIONS / ANSWERS"
      faqs={performanceMarketingFaqs}
    />
  );
}
