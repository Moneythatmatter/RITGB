import KeepExploringSection, {
  KeepExploringItem,
} from "@/components/expertise/KeepExploringSection";

const socialMediaExploringItems: KeepExploringItem[] = [
  {
    title: "Content Marketing",
    href: "/expertise/content-marketing",
  },
  {
    title: "Influencer Marketing",
    href: "/expertise/influencer-marketing",
  },
  {
    title: "Performance Marketing",
    href: "/expertise/performance-marketing",
  },
];

export default function SocialMediaMarketingKeepExploring() {
  return (
    <KeepExploringSection
      tag="KEEP EXPLORING"
      items={socialMediaExploringItems}
    />
  );
}
