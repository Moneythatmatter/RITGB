import FaqSection, { FAQItem } from "@/components/expertise/FaqSection";

const leadGenerationFaqs: FAQItem[] = [
  {
    question: "What counts as a qualified lead?",
    answer:
      "A qualified lead meets the criteria agreed for your business, such as location, relevant need or project fit. Qualification criteria should be defined before results are reported.",
  },
  {
    question: "Do you guarantee meetings or sales?",
    answer:
      "No. An enquiry is different from a confirmed meeting or sale. Booking and sales outcomes depend on prospect intent, availability, your offer and how follow-up is handled.",
  },
  {
    question: "Can enquiries go into our CRM?",
    answer:
      "Yes, where the chosen tools support an integration. We confirm account access, required fields, routing and any additional software costs before implementation.",
  },
];

export default function LeadGenerationFaq() {
  return (
    <FaqSection
      tag="QUESTIONS / ANSWERS"
      faqs={leadGenerationFaqs}
      defaultOpenAll={false}
    />
  );
}
