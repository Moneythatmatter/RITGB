import type { Metadata } from "next";
import WebsiteDevelopmentHero from "@/components/expertise/website-development/WebsiteDevelopmentHero";
import WebsiteDevelopmentVisualConcept from "@/components/expertise/website-development/WebsiteDevelopmentVisualConcept";
import WebsiteDevelopmentServicesInclude from "@/components/expertise/website-development/WebsiteDevelopmentServicesInclude";
import WebsiteDevelopmentBiggerPicture from "@/components/expertise/website-development/WebsiteDevelopmentBiggerPicture";
import WebsiteDevelopmentFaq from "@/components/expertise/website-development/WebsiteDevelopmentFaq";
import WebsiteDevelopmentCta from "@/components/expertise/website-development/WebsiteDevelopmentCta";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Website Development Company India | Next.js & Full-Stack | RITGB",
  description:
    "A website that does more than exist. RITGB is a leading website development company in India crafting high-performance, fast-loading, and visually captivating web platforms designed to convert visitors.",
  openGraph: {
    title: "Website Development Company India | RITGB",
    description:
      "RITGB builds websites that balance a strong visual presence with practical functionality. Good looks get attention. A clear experience gives that attention somewhere to go.",
    url: "https://www.ritgb.com/expertise/website-development",
    type: "website",
  },
};

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "Website Development",
            url: "https://www.ritgb.com/expertise/website-development",
          },
        ]}
      />

      <main className="w-full bg-[#f8f8f7] min-h-screen">
        <WebsiteDevelopmentHero />
        <div id="next-section">
          <WebsiteDevelopmentVisualConcept />
          <WebsiteDevelopmentServicesInclude />
          <WebsiteDevelopmentBiggerPicture />
          <WebsiteDevelopmentFaq />
          <WebsiteDevelopmentCta />
          <Footer />
        </div>
      </main>
    </>
  );
}
