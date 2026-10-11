import ServicesIncludeSection, {
  ServiceIncludeItem,
} from "@/components/expertise/ServicesIncludeSection";

const socialMediaServices: ServiceIncludeItem[] = [
  {
    num: "01",
    title: "Social media strategy:",
    description:
      "Audience priorities, channel selection, content themes and a publishing plan tied to your business goals.",
  },
  {
    num: "02",
    title: "Content calendars:",
    description:
      "A structured schedule of topics, formats and calls to action, so your presence feels consistent rather than improvised.",
  },
  {
    num: "03",
    title: "Creative and copy:",
    description:
      "Branded static posts, carousels and agreed video formats with messages customers can understand quickly.",
  },
  {
    num: "04",
    title: "Profile improvements:",
    description:
      "Clear descriptions, relevant links and a more direct path from your profile to your website or enquiry channel.",
  },
  {
    num: "05",
    title: "Publishing and coordination:",
    description:
      "An approval and scheduling process that keeps content moving and responsibilities clear.",
  },
  {
    num: "06",
    title: "Performance reviews:",
    description:
      "A review of reach, engagement, relevant clicks and enquiries where tracking is available.",
  },
];

export default function SocialMediaMarketingServicesInclude() {
  return (
    <ServicesIncludeSection
      tag="THE SCOPE / WHAT WE DO"
      headline="WHAT OUR SOCIAL MEDIA MARKETING SERVICES INCLUDE"
      services={socialMediaServices}
    />
  );
}
