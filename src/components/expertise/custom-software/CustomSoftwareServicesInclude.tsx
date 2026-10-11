import ServicesIncludeSection, {
  ServiceIncludeItem,
} from "@/components/expertise/ServicesIncludeSection";

const customSoftwareServices: ServiceIncludeItem[] = [
  {
    num: "01",
    title: "Requirements discovery",
    description:
      "Understand the people, tasks and information involved in the process.",
  },
  {
    num: "02",
    title: "Scope and planning",
    description:
      "Define the functionality, priorities and delivery stages.",
  },
  {
    num: "03",
    title: "Interface and development",
    description:
      "Build an experience around the users and the work they need to complete.",
  },
  {
    num: "04",
    title: "Integrations",
    description:
      "Connect relevant systems where supported and included in the scope.",
  },
  {
    num: "05",
    title: "Testing and deployment",
    description:
      "Check the agreed workflows and coordinate launch, handover and support responsibilities.",
  },
];

export default function CustomSoftwareServicesInclude() {
  return (
    <ServicesIncludeSection
      tag="THE SCOPE / WHAT WE DO"
      headline="WHAT OUR CUSTOM SOFTWARE DEVELOPMENT INCLUDES"
      services={customSoftwareServices}
    />
  );
}
