import KeepExploringSection, {
  KeepExploringItem,
} from "@/components/expertise/KeepExploringSection";

const exploringItems: KeepExploringItem[] = [
  {
    title: "Performance Marketing",
    href: "/expertise/performance-marketing",
  },
  {
    title: "Google Ads",
    href: "/expertise/google-ads",
  },
  {
    title: "Content Marketing",
    href: "/expertise/content-marketing",
  },
];

export default function LeadGenerationKeepExploring() {
  return (
    <KeepExploringSection
      tag="KEEP EXPLORING"
      items={exploringItems}
    />
  );
}
