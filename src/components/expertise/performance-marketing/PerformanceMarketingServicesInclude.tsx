import ServicesIncludeSection, {
  ServiceIncludeItem,
} from "@/components/expertise/ServicesIncludeSection";

const performanceMarketingServices: ServiceIncludeItem[] = [
  {
    num: "01",
    title: "Acquisition strategy:",
    description:
      "Define target audiences, channel roles, budget priorities and conversion goals.",
  },
  {
    num: "02",
    title: "Paid campaign management:",
    description:
      "Plan and manage selected Google or Meta campaigns based on audience fit and the agreed scope.",
  },
  {
    num: "03",
    title: "Creative and message testing:",
    description:
      "Compare hooks, offers and formats to learn which combinations generate relevant responses.",
  },
  {
    num: "04",
    title: "Landing page alignment:",
    description:
      "Review the connection between the ad promise and the page experience. New landing pages can be included in the delivery scope.",
  },
  {
    num: "05",
    title: "Conversion measurement:",
    description:
      "Set up agreed tracking where access and technical conditions allow, with clear definitions for each conversion.",
  },
  {
    num: "06",
    title: "Budget and performance reviews:",
    description:
      "Review cost per action, lead quality or purchase data where available before recommending spend changes.",
  },
];

export default function PerformanceMarketingServicesInclude() {
  return (
    <ServicesIncludeSection
      tag="THE SCOPE / WHAT WE DO"
      headline="WHAT OUR PERFORMANCE MARKETING SERVICES INCLUDE"
      services={performanceMarketingServices}
    />
  );
}
