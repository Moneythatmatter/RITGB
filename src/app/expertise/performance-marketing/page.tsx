import type { Metadata } from "next";
import PerformanceMarketingHero from "@/components/expertise/performance-marketing/PerformanceMarketingHero";
import PerformanceMarketingVisualConcept from "@/components/expertise/performance-marketing/PerformanceMarketingVisualConcept";
import PerformanceMarketingApproach from "@/components/expertise/performance-marketing/PerformanceMarketingApproach";
import PerformanceMarketingServicesInclude from "@/components/expertise/performance-marketing/PerformanceMarketingServicesInclude";
import PerformanceMarketingBiggerPicture from "@/components/expertise/performance-marketing/PerformanceMarketingBiggerPicture";
import PerformanceMarketingHowWeWork from "@/components/expertise/performance-marketing/PerformanceMarketingHowWeWork";
import PerformanceMarketingFaq from "@/components/expertise/performance-marketing/PerformanceMarketingFaq";
import PerformanceMarketingCta from "@/components/expertise/performance-marketing/PerformanceMarketingCta";
import PerformanceMarketingKeepExploring from "@/components/expertise/performance-marketing/PerformanceMarketingKeepExploring";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Performance Marketing Agency India | ROI-Driven Paid Ads | RITGB",
  description:
    "Give every campaign a business goal. RITGB creates high-converting performance marketing campaigns, Google Ads, Meta Ads, and ROI-driven paid advertising across India.",
  openGraph: {
    title: "Performance Marketing Agency India | RITGB",
    description:
      "Build paid campaigns around the actions that matter: qualified enquiries, purchases, and agreed conversions.",
    url: "https://www.ritgb.com/expertise/performance-marketing",
    type: "website",
  },
};

export default function PerformanceMarketingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "Performance Marketing",
            url: "https://www.ritgb.com/expertise/performance-marketing",
          },
        ]}
      />

      <main className="w-full bg-[#f8f8f7] min-h-screen">
        <PerformanceMarketingHero />
        <div id="next-section">
          <PerformanceMarketingVisualConcept />
          <PerformanceMarketingApproach />
          <PerformanceMarketingServicesInclude />
          <PerformanceMarketingBiggerPicture />
          <PerformanceMarketingHowWeWork />
          <PerformanceMarketingFaq />
          <PerformanceMarketingCta />
          <PerformanceMarketingKeepExploring />
          <Footer />
        </div>
      </main>
    </>
  );
}
