import FaqSection, { FAQItem } from "@/components/expertise/FaqSection";

const mobileAppFaqs: FAQItem[] = [
  {
    question: "Can you build for more than one mobile platform?",
    answer:
      "We can discuss the required platforms and choose an approach based on your functionality and project scope.",
  },
  {
    question: "Is ongoing maintenance included?",
    answer:
      "Maintenance and future updates are defined separately unless included in the proposal.",
  },
];

export default function MobileAppDevelopmentFaq() {
  return (
    <FaqSection
      tag="QUESTIONS / ANSWERS"
      faqs={mobileAppFaqs}
      defaultOpenAll={false}
    />
  );
}
