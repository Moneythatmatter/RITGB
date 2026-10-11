import ServicesIncludeSection, {
  ServiceIncludeItem,
} from "@/components/expertise/ServicesIncludeSection";

const seoServices: ServiceIncludeItem[] = [
  {
    num: "01",
    title: "Website and technical review:",
    description:
      "Identify issues affecting crawling, indexing, page experience and site structure, with a prioritised improvement plan.",
  },
  {
    num: "02",
    title: "Keyword and intent mapping:",
    description:
      "Assign relevant searches to the right service, product and supporting content pages.",
  },
  {
    num: "03",
    title: "On-page optimisation:",
    description:
      "Improve titles, descriptions, headings, internal links and page content so each page has a clear purpose.",
  },
  {
    num: "04",
    title: "Content planning:",
    description:
      "Find customer questions and topic gaps that deserve useful, original content.",
  },
  {
    num: "05",
    title: "Local search support:",
    description:
      "Review business profile information and location content when local discovery is relevant to the engagement.",
  },
  {
    num: "06",
    title: "Measurement and reporting:",
    description:
      "Review visibility, organic traffic and tracked enquiries alongside completed work and next priorities.",
  },
];

export default function SeoServicesInclude() {
  return (
    <ServicesIncludeSection
      tag="THE SCOPE / WHAT WE DO"
      headline="SEO SERVICES INDIA: WHAT WE WORK ON"
      services={seoServices}
    />
  );
}
