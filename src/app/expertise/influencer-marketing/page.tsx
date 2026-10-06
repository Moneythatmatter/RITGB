import type { Metadata } from "next";
import InfluencerMarketingHero from "@/components/expertise/influencer-marketing/InfluencerMarketingHero";
import InfluencerMarketingVisualConcept from "@/components/expertise/influencer-marketing/InfluencerMarketingVisualConcept";
import InfluencerMarketingApproach from "@/components/expertise/influencer-marketing/InfluencerMarketingApproach";
import InfluencerMarketingServicesInclude from "@/components/expertise/influencer-marketing/InfluencerMarketingServicesInclude";
import InfluencerMarketingBiggerPicture from "@/components/expertise/influencer-marketing/InfluencerMarketingBiggerPicture";
import InfluencerMarketingHowWeWork from "@/components/expertise/influencer-marketing/InfluencerMarketingHowWeWork";
import InfluencerMarketingFaq from "@/components/expertise/influencer-marketing/InfluencerMarketingFaq";
import InfluencerMarketingCta from "@/components/expertise/influencer-marketing/InfluencerMarketingCta";
import InfluencerMarketingKeepExploring from "@/components/expertise/influencer-marketing/InfluencerMarketingKeepExploring";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Influencer Marketing Agency India | Creator Campaigns | RITGB",
  description:
    "Put your brand in the right conversation. RITGB is an influencer marketing agency in India helping brands plan, execute, and scale high-impact creator collaborations.",
  openGraph: {
    title: "Influencer Marketing Agency India | RITGB",
    description:
      "Connect with creators whose content and audiences fit your offer with strategic influencer marketing campaigns from RITGB.",
    url: "https://www.ritgb.com/expertise/influencer-marketing",
    type: "website",
  },
};

export default function InfluencerMarketingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "Influencer Marketing",
            url: "https://www.ritgb.com/expertise/influencer-marketing",
          },
        ]}
      />

      <main className="w-full bg-[#f8f8f7] min-h-screen">
        <InfluencerMarketingHero />
        <div id="next-section">
          <InfluencerMarketingVisualConcept />
          <InfluencerMarketingApproach />
          <InfluencerMarketingServicesInclude />
          <InfluencerMarketingBiggerPicture />
          <InfluencerMarketingHowWeWork />
          <InfluencerMarketingFaq />
          <InfluencerMarketingCta />
          <InfluencerMarketingKeepExploring />
          <Footer />
        </div>
      </main>
    </>
  );
}
