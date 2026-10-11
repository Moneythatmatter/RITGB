import ServicesIncludeSection, {
  ServiceIncludeItem,
} from "@/components/expertise/ServicesIncludeSection";

const websiteServices: ServiceIncludeItem[] = [
  {
    num: "01",
    title: "Responsive development",
    description:
      "Create layouts that work across desktop, tablet and mobile, with clear navigation and readable content.",
  },
  {
    num: "02",
    title: "Content management",
    description:
      "Set up an agreed way for your team to update the information that changes regularly.",
  },
  {
    num: "03",
    title: "Forms and functionality",
    description:
      "Build the enquiry forms, booking connections or other functions included in your scope.",
  },
  {
    num: "04",
    title: "Integrations",
    description:
      "Connect suitable external tools where your website needs to share information or support an action.",
  },
  {
    num: "05",
    title: "Testing and launch",
    description:
      "Check the agreed pages and key journeys before deployment and handover.",
  },
];

export default function WebsiteDevelopmentServicesInclude() {
  return (
    <ServicesIncludeSection
      tag="THE SCOPE / WHAT WE DO"
      headline="WEBSITE DEVELOPMENT SERVICES INDIA"
      services={websiteServices}
    />
  );
}
