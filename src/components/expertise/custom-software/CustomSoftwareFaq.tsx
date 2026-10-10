import FaqSection, { FAQItem } from "@/components/expertise/FaqSection";

const customSoftwareFaqs: FAQItem[] = [
  {
    question: "Should we use an existing tool instead?",
    answer:
      "Possibly. We assess the requirements before recommending a custom build. Sometimes the right integration is more useful than an entirely new system.",
  },
  {
    question: "Can the project be delivered in stages?",
    answer:
      "Yes. We can prioritise the core functionality and plan additional work as separate stages.",
  },
];

export default function CustomSoftwareFaq() {
  return (
    <FaqSection
      tag="QUESTIONS / answers"
      faqs={customSoftwareFaqs}
      defaultOpenAll={false}
    />
  );
}
