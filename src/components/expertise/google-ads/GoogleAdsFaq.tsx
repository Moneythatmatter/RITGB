import FaqSection, { FAQItem } from "@/components/expertise/FaqSection";

const googleAdsFaqs: FAQItem[] = [
  {
    question: "Is the advertising budget included in your fee?",
    answer:
      "Media spend and management fees are separate unless a proposal explicitly states otherwise. Your campaign plan should make both costs clear.",
  },
  {
    question: "Can Google Ads guarantee enquiries or sales?",
    answer:
      "No fixed result can be promised. Outcomes depend on demand, competition, budget, your offer, the landing page and how your business handles enquiries.",
  },
  {
    question: "Can you manage an existing Google Ads account?",
    answer:
      "Yes. We can review the current structure, tracking and campaign history before recommending changes. Access requirements are agreed at the start.",
  },
];

export default function GoogleAdsFaq() {
  return (
    <FaqSection
      tag="QUESTIONS / ANSWERS"
      faqs={googleAdsFaqs}
      defaultOpenAll={true}
    />
  );
}
