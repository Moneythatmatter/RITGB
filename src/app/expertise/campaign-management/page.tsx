import type { Metadata } from "next";
import CampaignManagementHero from "@/components/expertise/campaign-management/CampaignManagementHero";
import CampaignManagementVisualConcept from "@/components/expertise/campaign-management/CampaignManagementVisualConcept";
import CampaignManagementApproach from "@/components/expertise/campaign-management/CampaignManagementApproach";
import CampaignManagementServicesInclude from "@/components/expertise/campaign-management/CampaignManagementServicesInclude";
import CampaignManagementBiggerPicture from "@/components/expertise/campaign-management/CampaignManagementBiggerPicture";
import CampaignManagementHowWeWork from "@/components/expertise/campaign-management/CampaignManagementHowWeWork";
import CampaignManagementFaq from "@/components/expertise/campaign-management/CampaignManagementFaq";
import CampaignManagementCta from "@/components/expertise/campaign-management/CampaignManagementCta";
import CampaignManagementKeepExploring from "@/components/expertise/campaign-management/CampaignManagementKeepExploring";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Digital Marketing Campaign Management | Multi-Channel Campaigns | RITGB",
  description:
    "One Campaign. A Clear Message Across Every Channel. RITGB coordinates campaign strategy, creative assets, channel distribution and reporting for unified growth.",
  openGraph: {
    title: "Digital Marketing Campaign Management | RITGB",
    description:
      "Bring your launch, promotion or awareness campaign together with a shared objective and organised delivery plan.",
    url: "https://www.ritgb.com/expertise/campaign-management",
    type: "website",
  },
};

export default function CampaignManagementPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "Campaign Management",
            url: "https://www.ritgb.com/expertise/campaign-management",
          },
        ]}
      />

      <main className="w-full bg-[#f8f8f7] min-h-screen">
        <CampaignManagementHero />
        <div id="next-section">
          <CampaignManagementVisualConcept />
          <CampaignManagementApproach />
          <CampaignManagementServicesInclude />
          <CampaignManagementBiggerPicture />
          <CampaignManagementHowWeWork />
          <CampaignManagementFaq />
          <CampaignManagementCta />
          <CampaignManagementKeepExploring />
          <Footer />
        </div>
      </main>
    </>
  );
}
