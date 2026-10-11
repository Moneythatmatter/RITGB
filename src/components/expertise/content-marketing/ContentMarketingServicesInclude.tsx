import ServicesIncludeSection, {
  ServiceIncludeItem,
} from "@/components/expertise/ServicesIncludeSection";

const contentMarketingServices: ServiceIncludeItem[] = [
  {
    num: "01",
    title: "Content strategy:",
    description:
      "Define audiences, topics, formats and the role each piece plays in the customer journey.",
  },
  {
    num: "02",
    title: "Website and service copy:",
    description:
      "Explain your offer clearly, answer common objections and guide visitors towards a relevant next step.",
  },
  {
    num: "03",
    title: "Articles and supporting guides:",
    description:
      "Develop useful content around the questions customers ask when researching a problem or solution.",
  },
  {
    num: "04",
    title: "Campaign content:",
    description:
      "Create messages for ads, landing pages and email sequences within the agreed scope.",
  },
  {
    num: "05",
    title: "Lead magnets:",
    description:
      "Plan useful checklists, guides or other resources that give relevant visitors a reason to enquire or share their details.",
  },
  {
    num: "06",
    title: "Content repurposing:",
    description:
      "Adapt core ideas into suitable social posts, campaign messages and other agreed formats.",
  },
];

export default function ContentMarketingServicesInclude() {
  return (
    <ServicesIncludeSection
      tag="THE SCOPE / WHAT WE DO"
      headline="WHAT OUR CONTENT MARKETING SERVICES INCLUDE"
      services={contentMarketingServices}
    />
  );
}
