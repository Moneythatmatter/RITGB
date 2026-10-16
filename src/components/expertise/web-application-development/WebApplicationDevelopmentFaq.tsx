import FaqSection, { FAQItem } from "@/components/expertise/FaqSection";

const webAppFaqs: FAQItem[] = [
  {
    question: "Can the application connect with our existing tools?",
    answer:
      "Where those tools support suitable integrations, we can include the connection in the project scope.",
  },
  {
    question: "Can we add features later?",
    answer:
      "Yes. We can discuss future priorities while keeping the initial build focused.",
  },
];

export default function WebApplicationDevelopmentFaq() {
  return (
    <FaqSection
      faqs={webAppFaqs}
    />
  );
}
