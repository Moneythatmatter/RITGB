import type { Metadata } from "next";
import LeadGenerationHero from "@/components/expertise/lead-generation/LeadGenerationHero";
import LeadGenerationVisualConcept from "@/components/expertise/lead-generation/LeadGenerationVisualConcept";
import LeadGenerationApproach from "@/components/expertise/lead-generation/LeadGenerationApproach";
import LeadGenerationServicesInclude from "@/components/expertise/lead-generation/LeadGenerationServicesInclude";
import LeadGenerationBiggerPicture from "@/components/expertise/lead-generation/LeadGenerationBiggerPicture";
import LeadGenerationHowWeWork from "@/components/expertise/lead-generation/LeadGenerationHowWeWork";
import LeadGenerationFaq from "@/components/expertise/lead-generation/LeadGenerationFaq";
import LeadGenerationCta from "@/components/expertise/lead-generation/LeadGenerationCta";
import LeadGenerationKeepExploring from "@/components/expertise/lead-generation/LeadGenerationKeepExploring";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Lead Generation Agency India | B2B & B2C Pipeline Growth | RITGB",
  description:
    "Make it easier for the right prospects to enquire. RITGB is a lead generation agency in India combining targeting, landing pages, and conversion optimisation to grow your pipeline.",
  openGraph: {
    title: "Lead Generation Agency India | RITGB",
    description:
      "Connect relevant audiences with a clear reason to contact your business with strategic lead generation by RITGB.",
    url: "https://www.ritgb.com/expertise/lead-generation",
    type: "website",
  },
};

export default function LeadGenerationPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "Lead Generation",
            url: "https://www.ritgb.com/expertise/lead-generation",
          },
        ]}
      />

      <main className="w-full bg-[#f8f8f7] min-h-screen">
        <LeadGenerationHero />
        <div id="next-section">
          <LeadGenerationVisualConcept />
          <LeadGenerationApproach />
          <LeadGenerationServicesInclude />
          <LeadGenerationBiggerPicture />
          <LeadGenerationHowWeWork />
          <LeadGenerationFaq />
          <LeadGenerationCta />
          <LeadGenerationKeepExploring />
          <Footer />
        </div>
      </main>
    </>
  );
}
