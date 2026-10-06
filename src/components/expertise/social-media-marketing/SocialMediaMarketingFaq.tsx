import FaqSection, { FAQItem } from "@/components/expertise/FaqSection";

const socialMediaFaqs: FAQItem[] = [
  {
    question: "Which social media platforms should my business use?",
    answer:
      "We choose platforms based on your audience, offer and capacity to create relevant content. You do not need to be active everywhere to have a focused social strategy.",
  },
  {
    question: "Does this include paid social advertising?",
    answer:
      "Paid advertising can be added as a separate scope. Organic content builds your ongoing presence; paid campaigns support defined reach, traffic or conversion objectives.",
  },
  {
    question: "Do you create videos and manage messages?",
    answer:
      "Video production, on-site shoots and inbox or comment management depend on the agreed package. We clarify these responsibilities before work begins.",
  },
];

export default function SocialMediaMarketingFaq() {
  return (
    <FaqSection
      tag="QUESTIONS / ANSWERS"
      faqs={socialMediaFaqs}
    />
  );
}
