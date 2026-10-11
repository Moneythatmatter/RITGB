import KeepExploringSection, {
  KeepExploringItem,
} from "@/components/expertise/KeepExploringSection";

const seoExploringItems: KeepExploringItem[] = [
  {
    title: "Content Marketing",
    href: "/expertise/content-marketing",
  },
  {
    title: "Google Ads",
    href: "/expertise/google-ads",
  },
  {
    title: "Lead Generation",
    href: "/expertise/lead-generation",
  },
];

export default function SeoKeepExploring() {
  return (
    <KeepExploringSection
      tag="KEEP EXPLORING"
      items={seoExploringItems}
    />
  );
}
