import KeepExploringSection, {
  KeepExploringItem,
} from "@/components/expertise/KeepExploringSection";

const influencerMarketingExploringItems: KeepExploringItem[] = [
  {
    title: "Social Media Marketing",
    href: "/expertise/social-media-marketing",
  },
  {
    title: "Content Marketing",
    href: "/expertise/content-marketing",
  },
  {
    title: "Campaign Management",
    href: "/expertise/campaign-management",
  },
];

export default function InfluencerMarketingKeepExploring() {
  return (
    <KeepExploringSection
      tag="KEEP EXPLORING"
      items={influencerMarketingExploringItems}
    />
  );
}
