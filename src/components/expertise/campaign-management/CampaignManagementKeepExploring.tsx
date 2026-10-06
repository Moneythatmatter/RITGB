import KeepExploringSection, {
  KeepExploringItem,
} from "@/components/expertise/KeepExploringSection";

const exploringItems: KeepExploringItem[] = [
  {
    title: "Performance Marketing",
    href: "/expertise/performance-marketing",
  },
  {
    title: "Influencer Marketing",
    href: "/expertise/influencer-marketing",
  },
  {
    title: "Content Marketing",
    href: "/expertise/content-marketing",
  },
];

export default function CampaignManagementKeepExploring() {
  return (
    <KeepExploringSection
      tag="KEEP EXPLORING"
      items={exploringItems}
    />
  );
}
