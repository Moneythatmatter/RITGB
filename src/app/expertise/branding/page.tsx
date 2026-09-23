import type { Metadata } from "next";
import BrandingHero from "@/components/expertise/branding/BrandingHero";
import BrandingIdea from "@/components/expertise/branding/BrandingIdea";
import BrandingWhatWeDesign from "@/components/expertise/branding/BrandingWhatWeDesign";
import BrandingSelectedWork from "@/components/expertise/branding/BrandingSelectedWork";
import BrandingProcess from "@/components/expertise/branding/BrandingProcess";
import BrandingDeliverables from "@/components/expertise/branding/BrandingDeliverables";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Brand Strategy & Visual Identity Design Agency | RITGB",
  description:
    "We build brands built to be seen. RITGB creates iconic brand identities, bespoke logo suites, packaging design, and brand guidelines that demand market attention.",
  openGraph: {
    title: "Brand Strategy & Visual Identity Design Agency | RITGB",
    description:
      "A clear strategy. A distinctive identity. A brand people know is yours before they even see your name.",
    url: "https://www.ritgb.com/expertise/branding",
    type: "website",
  },
};

export default function BrandingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          { name: "Branding", url: "https://www.ritgb.com/expertise/branding" },
        ]}
      />

      <main className="w-full bg-[#050505] min-h-screen">
        <BrandingHero />
        <div id="next-section">
          <BrandingIdea />
          <BrandingWhatWeDesign />
          <BrandingSelectedWork />
          <BrandingProcess />
          <BrandingDeliverables />
          <Footer />
        </div>
      </main>
    </>
  );
}
