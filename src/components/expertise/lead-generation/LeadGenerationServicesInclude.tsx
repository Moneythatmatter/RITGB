import ServicesIncludeSection, {
  ServiceIncludeItem,
} from "@/components/expertise/ServicesIncludeSection";

const leadGenerationServices: ServiceIncludeItem[] = [
  {
    num: "01",
    title: "Audience and qualification planning:",
    description:
      "Define customer fit, service area, relevant needs and the information needed to assess an enquiry.",
  },
  {
    num: "02",
    title: "Offer development:",
    description:
      "Clarify what prospects receive and why taking the next step is worthwhile.",
  },
  {
    num: "03",
    title: "Acquisition campaigns:",
    description:
      "Use selected advertising or content channels to bring relevant people to the offer.",
  },
  {
    num: "04",
    title: "Landing pages and lead forms:",
    description:
      "Build or improve the information and capture journey within the agreed design and development scope.",
  },
  {
    num: "05",
    title: "Lead routing:",
    description:
      "Plan delivery to your agreed inbox or CRM. Integrations and follow-up automation are scoped according to the tools you use.",
  },
  {
    num: "06",
    title: "Quality reviews:",
    description:
      "Review enquiries with your team, using available feedback to identify mismatches and improve the campaign.",
  },
];

export default function LeadGenerationServicesInclude() {
  return (
    <ServicesIncludeSection
      tag="THE SCOPE / WHAT WE DO"
      headline="WHAT OUR LEAD GENERATION SERVICES INCLUDE"
      services={leadGenerationServices}
    />
  );
}
