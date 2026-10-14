import FaqSection, { FAQItem } from "@/components/expertise/FaqSection";

const paymentFaqs: FAQItem[] = [
  {
    question: "Do we need an account with the payment provider?",
    answer:
      "Yes. Your business needs the appropriate provider account and approvals before the live integration can be completed.",
  },
  {
    question: "Are transaction charges included in your fee?",
    answer:
      "Provider charges are separate from development fees unless explicitly stated otherwise.",
  },
];

export default function PaymentIntegrationsFaq() {
  return (
    <FaqSection faqs={paymentFaqs} />
  );
}
