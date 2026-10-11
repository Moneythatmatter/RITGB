import FaqSection, { FAQItem } from "@/components/expertise/FaqSection";

const websiteFaqs: FAQItem[] = [
  {
    question: "Can our team update the website?",
    answer:
      "Yes, where content management is included. We agree on which areas your team needs to manage.",
  },
  {
    question: "Can you work with our existing design?",
    answer:
      "Yes. We can develop from an approved design and clarify any functionality requirements before building.",
  },
];

export default function WebsiteDevelopmentFaq() {
  return (
    <FaqSection
      tag="QUESTIONS / ANSWERS"
      faqs={websiteFaqs}
      defaultOpenAll={false}
    />
  );
}
