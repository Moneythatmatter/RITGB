import KeepExploringSection, {
  KeepExploringItem,
} from "@/components/expertise/KeepExploringSection";

const performanceMarketingExploringItems: KeepExploringItem[] = [
  {
    title: "Google Ads",
    href: "/expertise/google-ads",
  },
  {
    title: "Lead Generation",
    href: "/expertise/lead-generation",
  },
  {
    title: "Campaign Management",
    href: "/expertise/campaign-management",
  },
];

export default function PerformanceMarketingKeepExploring() {
  return (
    <KeepExploringSection
      tag="KEEP EXPLORING"
      items={performanceMarketingExploringItems}
    />
  );
}
