import KeepExploringSection, {
  KeepExploringItem,
} from "@/components/expertise/KeepExploringSection";

const googleAdsExploringItems: KeepExploringItem[] = [
  {
    title: "Performance Marketing",
    href: "/expertise/performance-marketing",
  },
  {
    title: "Lead Generation",
    href: "/expertise/lead-generation",
  },
  {
    title: "SEO",
    href: "/expertise/seo",
  },
];

export default function GoogleAdsKeepExploring() {
  return (
    <KeepExploringSection
      tag="KEEP EXPLORING"
      items={googleAdsExploringItems}
    />
  );
}
