import type { Metadata } from "next";
import ContentMarketingHero from "@/components/expertise/content-marketing/ContentMarketingHero";
import ContentMarketingVisualConcept from "@/components/expertise/content-marketing/ContentMarketingVisualConcept";
import ContentMarketingApproach from "@/components/expertise/content-marketing/ContentMarketingApproach";
import ContentMarketingServicesInclude from "@/components/expertise/content-marketing/ContentMarketingServicesInclude";
import ContentMarketingBiggerPicture from "@/components/expertise/content-marketing/ContentMarketingBiggerPicture";
import ContentMarketingHowWeWork from "@/components/expertise/content-marketing/ContentMarketingHowWeWork";
import ContentMarketingFaq from "@/components/expertise/content-marketing/ContentMarketingFaq";
import ContentMarketingCta from "@/components/expertise/content-marketing/ContentMarketingCta";
import ContentMarketingKeepExploring from "@/components/expertise/content-marketing/ContentMarketingKeepExploring";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Content Marketing Agency India | Content Strategy & Creation | RITGB",
  description:
    "Answer the questions that come before the sale. RITGB is a content marketing agency in India helping brands create high-impact content around customer questions and buying decisions.",
  openGraph: {
    title: "Content Marketing Agency India | RITGB",
    description:
      "Help people understand what you offer, why it matters, and whether it fits their needs with strategic content marketing by RITGB.",
    url: "https://www.ritgb.com/expertise/content-marketing",
    type: "website",
  },
};

export default function ContentMarketingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "Content Marketing",
            url: "https://www.ritgb.com/expertise/content-marketing",
          },
        ]}
      />

      <main className="w-full bg-[#f8f8f7] min-h-screen">
        <ContentMarketingHero />
        <div id="next-section">
          <ContentMarketingVisualConcept />
          <ContentMarketingApproach />
          <ContentMarketingServicesInclude />
          <ContentMarketingBiggerPicture />
          <ContentMarketingHowWeWork />
          <ContentMarketingFaq />
          <ContentMarketingCta />
          <ContentMarketingKeepExploring />
          <Footer />
        </div>
      </main>
    </>
  );
}
