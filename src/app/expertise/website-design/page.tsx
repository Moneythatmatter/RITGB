import type { Metadata } from "next";
import WebsiteDesignHero from "@/components/expertise/website-design/WebsiteDesignHero";
import WebsiteDesignIdea from "@/components/expertise/website-design/WebsiteDesignIdea";
import WebsiteDesignWhatWeDesign from "@/components/expertise/website-design/WebsiteDesignWhatWeDesign";
import WebsiteDesignSelectedWork from "@/components/expertise/website-design/WebsiteDesignSelectedWork";
import WebsiteDesignProcess from "@/components/expertise/website-design/WebsiteDesignProcess";
import WebsiteDesignDeliverables from "@/components/expertise/website-design/WebsiteDesignDeliverables";
import WebsiteDesignFaq from "@/components/expertise/website-design/WebsiteDesignFaq";
import WebsiteDesignCta from "@/components/expertise/website-design/WebsiteDesignCta";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Website Design Services | Custom, Modern & High-Converting Websites | RITGB",
  description:
    "Websites worth exploring. RITGB designs modern, responsive, and high-performance websites that showcase your brand, drive conversions, and deliver seamless user experiences.",
  openGraph: {
    title: "Website Design Services | RITGB",
    description:
      "We design websites that show people who you are, what you offer, and why they should choose you.",
    url: "https://www.ritgb.com/expertise/website-design",
    type: "website",
  },
};

export default function WebsiteDesignPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "Website Design",
            url: "https://www.ritgb.com/expertise/website-design",
          },
        ]}
      />

      <main className="w-full bg-[#050505] min-h-screen">
        <WebsiteDesignHero />
        <div id="next-section">
          <WebsiteDesignIdea />
          <WebsiteDesignWhatWeDesign />
          <WebsiteDesignSelectedWork />
          <WebsiteDesignProcess />
          <WebsiteDesignDeliverables />
          <WebsiteDesignFaq />
          <WebsiteDesignCta />
          <Footer />
        </div>
      </main>
    </>
  );
}
