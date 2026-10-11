import ServicesIncludeSection, {
  ServiceIncludeItem,
} from "@/components/expertise/ServicesIncludeSection";

const campaignManagementServices: ServiceIncludeItem[] = [
  {
    num: "01",
    title: "Campaign brief and strategy:",
    description:
      "Define the objective, audience, offer, message and measures of progress.",
  },
  {
    num: "02",
    title: "Channel planning:",
    description:
      "Identify how selected paid, organic, creator or email activity will contribute to the campaign.",
  },
  {
    num: "03",
    title: "Creative coordination:",
    description:
      "Keep copy, design and formats aligned with the central message and the requirements of each channel.",
  },
  {
    num: "04",
    title: "Delivery schedule:",
    description:
      "Set milestones, approvals, launch dates and responsibilities across the agreed scope.",
  },
  {
    num: "05",
    title: "Launch coordination:",
    description:
      "Check assets, links, landing pages and measurement requirements before activity goes live.",
  },
  {
    num: "06",
    title: "Reporting and review:",
    description:
      "Bring relevant results together, highlight what worked and identify useful changes for the next campaign.",
  },
];

export default function CampaignManagementServicesInclude() {
  return (
    <ServicesIncludeSection
      tag="THE SCOPE / WHAT WE DO"
      headline="WHAT OUR MARKETING CAMPAIGN MANAGEMENT INCLUDES"
      services={campaignManagementServices}
    />
  );
}
