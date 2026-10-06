import KeepExploringSection, {
  KeepExploringItem,
} from "@/components/expertise/KeepExploringSection";

const contentMarketingExploringItems: KeepExploringItem[] = [
  {
    title: "SEO",
    href: "/expertise/seo",
  },
  {
    title: "Social Media Marketing",
    href: "/expertise/social-media-marketing",
  },
  {
    title: "Lead Generation",
    href: "/expertise/lead-generation",
  },
];

export default function ContentMarketingKeepExploring() {
  return (
    <KeepExploringSection
      tag="KEEP EXPLORING"
      items={contentMarketingExploringItems}
    />
  );
}
