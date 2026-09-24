import type { Metadata } from "next";
import UiUxHero from "@/components/expertise/ui-ux/UiUxHero";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "UI/UX Design Services | Digital Product & Web Design | RITGB",
  description:
    "Make it easy to love using. RITGB designs intuitive digital experiences, user flows, interfaces, and design systems built around real people.",
  openGraph: {
    title: "UI/UX Design Services | RITGB",
    description:
      "Digital experiences that feel clear, considered and built around real people.",
    url: "https://www.ritgb.com/expertise/ui-ux",
    type: "website",
  },
};

export default function UiUxPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "UI/UX Design",
            url: "https://www.ritgb.com/expertise/ui-ux",
          },
        ]}
      />

      <main className="w-full bg-[#050505] min-h-screen">
        <UiUxHero />
        <div id="next-section">
          <Footer />
        </div>
      </main>
    </>
  );
}
