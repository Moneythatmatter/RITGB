import type { Metadata } from "next";
import SeoHero from "@/components/expertise/seo/SeoHero";
import SeoVisualConcept from "@/components/expertise/seo/SeoVisualConcept";
import SeoApproach from "@/components/expertise/seo/SeoApproach";
import SeoServicesInclude from "@/components/expertise/seo/SeoServicesInclude";
import SeoBiggerPicture from "@/components/expertise/seo/SeoBiggerPicture";
import SeoHowWeWork from "@/components/expertise/seo/SeoHowWeWork";
import SeoFaq from "@/components/expertise/seo/SeoFaq";
import SeoCta from "@/components/expertise/seo/SeoCta";
import SeoKeepExploring from "@/components/expertise/seo/SeoKeepExploring";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "SEO Agency India | Search Engine Optimization Services | RITGB",
  description:
    "Help the right customers find your business. RITGB provides technical SEO, on-page optimization, content strategy, and high-impact search engine rankings across India.",
  openGraph: {
    title: "SEO Agency India | Search Engine Optimization | RITGB",
    description:
      "Make your website easier to discover, understand and use with strategic SEO from RITGB.",
    url: "https://www.ritgb.com/expertise/seo",
    type: "website",
  },
};

export default function SeoPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "SEO",
            url: "https://www.ritgb.com/expertise/seo",
          },
        ]}
      />

      <main className="w-full bg-[#f8f8f7] min-h-screen">
        <SeoHero />
        <div id="next-section">
          <SeoVisualConcept />
          <SeoApproach />
          <SeoServicesInclude />
          <SeoBiggerPicture />
          <SeoHowWeWork />
          <SeoFaq />
          <SeoCta />
          <SeoKeepExploring />
          <Footer />
        </div>
      </main>
    </>
  );
}
