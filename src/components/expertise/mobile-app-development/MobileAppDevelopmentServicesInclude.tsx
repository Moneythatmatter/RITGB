import ServicesIncludeSection, {
  ServiceIncludeItem,
} from "@/components/expertise/ServicesIncludeSection";

const mobileAppServices: ServiceIncludeItem[] = [
  {
    num: "01",
    title: "App planning",
    description:
      "Define the audience, core purpose and functionality needed for the first release.",
  },
  {
    num: "02",
    title: "Interface development",
    description:
      "Create a clear mobile experience around the tasks users need to complete.",
  },
  {
    num: "03",
    title: "Core functionality",
    description:
      "Develop the agreed features, account flows and interactions.",
  },
  {
    num: "04",
    title: "Integrations",
    description:
      "Connect relevant systems, services or payment functionality where included.",
  },
  {
    num: "05",
    title: "Testing and release preparation",
    description:
      "Check key journeys and coordinate the agreed submission and handover work.",
  },
];

export default function MobileAppDevelopmentServicesInclude() {
  return (
    <ServicesIncludeSection
      tag="THE SCOPE / WHAT WE DO"
      headline="MOBILE APP DEVELOPMENT SERVICES INDIA"
      services={mobileAppServices}
    />
  );
}
