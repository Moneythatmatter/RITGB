import type { Metadata } from "next";
import GoogleAdsHero from "@/components/expertise/google-ads/GoogleAdsHero";
import GoogleAdsVisualConcept from "@/components/expertise/google-ads/GoogleAdsVisualConcept";
import GoogleAdsApproach from "@/components/expertise/google-ads/GoogleAdsApproach";
import GoogleAdsServicesInclude from "@/components/expertise/google-ads/GoogleAdsServicesInclude";
import GoogleAdsBiggerPicture from "@/components/expertise/google-ads/GoogleAdsBiggerPicture";
import GoogleAdsHowWeWork from "@/components/expertise/google-ads/GoogleAdsHowWeWork";
import GoogleAdsFaq from "@/components/expertise/google-ads/GoogleAdsFaq";
import GoogleAdsCta from "@/components/expertise/google-ads/GoogleAdsCta";
import GoogleAdsKeepExploring from "@/components/expertise/google-ads/GoogleAdsKeepExploring";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Google Ads Agency India | High ROI PPC Management | RITGB",
  description:
    "Be there when customers are looking for you. RITGB plans and manages high-converting Google Ads campaigns, PPC management, and search advertising across India.",
  openGraph: {
    title: "Google Ads Agency India | PPC Management | RITGB",
    description:
      "Connect relevant searches with a clear offer and a useful next step with strategic Google Ads from RITGB.",
    url: "https://www.ritgb.com/expertise/google-ads",
    type: "website",
  },
};

export default function GoogleAdsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "Google Ads",
            url: "https://www.ritgb.com/expertise/google-ads",
          },
        ]}
      />

      <main className="w-full bg-[#f8f8f7] min-h-screen">
        <GoogleAdsHero />
        <div id="next-section">
          <GoogleAdsVisualConcept />
          <GoogleAdsApproach />
          <GoogleAdsServicesInclude />
          <GoogleAdsBiggerPicture />
          <GoogleAdsHowWeWork />
          <GoogleAdsFaq />
          <GoogleAdsCta />
          <GoogleAdsKeepExploring />
          <Footer />
        </div>
      </main>
    </>
  );
}
