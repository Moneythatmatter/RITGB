import ServicesIncludeSection, {
  ServiceIncludeItem,
} from "@/components/expertise/ServicesIncludeSection";

const influencerMarketingServices: ServiceIncludeItem[] = [
  {
    num: "01",
    title: "Campaign planning:",
    description:
      "Define the objective, offer, target audience and intended customer action.",
  },
  {
    num: "02",
    title: "Creator research and shortlisting:",
    description:
      "Review potential creators for audience relevance, content fit and available performance information.",
  },
  {
    num: "03",
    title: "Outreach and coordination:",
    description:
      "Discuss availability, deliverables and commercial terms with shortlisted creators.",
  },
  {
    num: "04",
    title: "Creative briefs:",
    description:
      "Set the message, product information, content requirements and approval process while allowing room for the creator's voice.",
  },
  {
    num: "05",
    title: "Delivery management:",
    description:
      "Coordinate agreed timelines, reviews and publishing requirements.",
  },
  {
    num: "06",
    title: "Campaign reporting:",
    description:
      "Review available reach, engagement, referral traffic and tracked actions without treating every interaction as a sale.",
  },
];

export default function InfluencerMarketingServicesInclude() {
  return (
    <ServicesIncludeSection
      tag="THE SCOPE / WHAT WE DO"
      headline="WHAT OUR INFLUENCER MARKETING SERVICES INCLUDE"
      services={influencerMarketingServices}
    />
  );
}
