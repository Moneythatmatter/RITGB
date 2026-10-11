import FaqSection, { FAQItem } from "@/components/expertise/FaqSection";

const digitalMarketingFaqs: FAQItem[] = [
  {
    question:
      "How do I choose the “Best digital marketing agency in India” for my business?",
    answer:
      "Choose an agency that understands your business, explains its approach and defines how progress will be measured. Ask about deliverables, communication, reporting and the responsibilities your team will retain.",
  },
  {
    question:
      "Looking for “Affordable digital marketing agency in India”? Can I start with a smaller scope?",
    answer:
      "Yes. You can begin with one business priority and a focused service scope. The work should match your budget, goals and ability to handle new enquiries.",
  },
  {
    question:
      "Digital marketing services for businesses in India: Which services should I choose?",
    answer:
      "Start with your audience and the problem you need to solve. Your priority may be search visibility, a clearer website message, relevant advertising or a better enquiry journey.",
  },
  {
    question:
      "Digital marketing agency for startups in India: What should the initial focus be?",
    answer:
      "A clear offer, a defined audience and focused activity that helps you learn which messages and channels generate useful interest.",
  },
  {
    question:
      "Digital marketing agency for small businesses: How can RITGB help?",
    answer:
      "We help you prioritise marketing activities around your market, budget and capacity, with clear deliverables and a manageable plan.",
  },
  {
    question:
      "Looking for “SEO and digital marketing agency India”? Can the services work together?",
    answer:
      "Yes. Search visibility, content and advertising can support the same business goals. We define a distinct role for each activity and review it using relevant measures.",
  },
];

export default function DigitalMarketingFaq() {
  return (
    <FaqSection
      faqs={digitalMarketingFaqs}
      defaultOpenAll={false}
      stickyHeadline={true}
    />
  );
}
