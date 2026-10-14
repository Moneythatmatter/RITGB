import FaqSection, { FAQItem } from "@/components/expertise/FaqSection";

const crmFaqs: FAQItem[] = [
  {
    question: "Can you connect our existing CRM?",
    answer:
      "We first check the integration options supported by your CRM and the other tools involved.",
  },
  {
    question: "Are software subscriptions included?",
    answer:
      "External software and subscription costs are separate unless the proposal states otherwise.",
  },
];

export default function CrmIntegrationsFaq() {
  return (
    <FaqSection
      faqs={crmFaqs}
      defaultOpenAll={true}
    />
  );
}
