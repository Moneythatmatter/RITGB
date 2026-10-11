import ServicesIncludeSection, {
  ServiceIncludeItem,
} from "@/components/expertise/ServicesIncludeSection";

const googleAdsServices: ServiceIncludeItem[] = [
  {
    num: "01",
    title: "Search and keyword planning:",
    description:
      "Identify relevant searches, organise themes and use negative keywords to reduce unsuitable traffic.",
  },
  {
    num: "02",
    title: "Campaign structure:",
    description:
      "Build campaigns around your offers, locations and priorities so budgets and results are easier to assess.",
  },
  {
    num: "03",
    title: "Ad copy and assets:",
    description:
      "Explain your offer clearly and guide customers towards the most relevant next step.",
  },
  {
    num: "04",
    title: "Landing page review:",
    description:
      "Assess message alignment, page clarity and the enquiry or purchase journey. Page design and development are scoped separately when needed.",
  },
  {
    num: "05",
    title: "Conversion tracking:",
    description:
      "Configure agreed conversion events where account and website access allow, distinguishing meaningful actions from general traffic.",
  },
  {
    num: "06",
    title: "Ongoing optimisation:",
    description:
      "Review search terms, bidding, budgets and ad performance to guide campaign changes.",
  },
];

export default function GoogleAdsServicesInclude() {
  return (
    <ServicesIncludeSection
      tag="THE SCOPE / WHAT WE DO"
      headline="WHAT OUR GOOGLE ADS MANAGEMENT SERVICES INCLUDE"
      services={googleAdsServices}
    />
  );
}
