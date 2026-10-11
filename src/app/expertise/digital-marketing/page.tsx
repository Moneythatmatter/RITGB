import type { Metadata } from "next";
import DigitalMarketingHero from "@/components/expertise/digital-marketing/DigitalMarketingHero";
import DigitalMarketingVisualConcept from "@/components/expertise/digital-marketing/DigitalMarketingVisualConcept";
import DigitalMarketingPhilosophy from "@/components/expertise/digital-marketing/DigitalMarketingPhilosophy";
import DigitalMarketingServicesGrid from "@/components/expertise/digital-marketing/DigitalMarketingServicesGrid";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in India | Growth & Strategy | RITGB",
  description:
    "Turn online attention into business opportunities. RITGB is a leading digital marketing agency in India connecting visibility, advertising, and content to high-intent leads and measurable revenue growth.",
  openGraph: {
    title: "Digital Marketing Agency in India | RITGB",
    description:
      "From search visibility to advertising and content, we connect your marketing with the enquiries, customers and sales your business wants to generate.",
    url: "https://www.ritgb.com/expertise/digital-marketing",
    type: "website",
  },
};

export default function DigitalMarketingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "Digital Marketing",
            url: "https://www.ritgb.com/expertise/digital-marketing",
          },
        ]}
      />

      <main className="w-full bg-[#f8f8f7] min-h-screen">
        <DigitalMarketingHero />
        <div id="next-section">
          <DigitalMarketingVisualConcept />
          <DigitalMarketingPhilosophy />
          <DigitalMarketingServicesGrid />
          <Footer />
        </div>
      </main>
    </>
  );
}
