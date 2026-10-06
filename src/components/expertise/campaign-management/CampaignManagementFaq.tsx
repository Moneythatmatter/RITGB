import FaqSection, { FAQItem } from "@/components/expertise/FaqSection";

const campaignManagementFaqs: FAQItem[] = [
  {
    question: "How is campaign management different from performance marketing?",
    answer:
      "Campaign management coordinates the full initiative, including messaging, assets, schedules and multiple channels. Performance marketing focuses on paid acquisition and measurable conversion outcomes. A campaign may include both.",
  },
  {
    question: "Can you work with our internal team or other partners?",
    answer:
      "Yes. We can coordinate agreed responsibilities with your team and existing partners, with clear ownership of approvals, production and channel access.",
  },
  {
    question: "Are all channel services included automatically?",
    answer:
      "No. The proposal defines the channels, production work and ongoing management included. Advertising spend, creator fees and external software costs are identified separately where applicable.",
  },
];

export default function CampaignManagementFaq() {
  return (
    <FaqSection
      tag="QUESTIONS / ANSWERS"
      faqs={campaignManagementFaqs}
      defaultOpenAll={false}
    />
  );
}
