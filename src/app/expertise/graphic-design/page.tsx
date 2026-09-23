import type { Metadata } from "next";
import GraphicDesignHero from "@/components/expertise/graphic-design/GraphicDesignHero";
import GraphicDesignIdea from "@/components/expertise/graphic-design/GraphicDesignIdea";
import GraphicDesignWhatWeDesign from "@/components/expertise/graphic-design/GraphicDesignWhatWeDesign";
import GraphicDesignSelectedWork from "@/components/expertise/graphic-design/GraphicDesignSelectedWork";
import GraphicDesignProcess from "@/components/expertise/graphic-design/GraphicDesignProcess";
import GraphicDesignDeliverables from "@/components/expertise/graphic-design/GraphicDesignDeliverables";
import GraphicDesignCta from "@/components/expertise/graphic-design/GraphicDesignCta";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Graphic Design Services | Creative Digital & Print Design | RITGB",
  description:
    "Design that says more at a glance. RITGB creates clear, distinctive visual graphics, campaign assets, print design, and digital collateral that communicate fast.",
  openGraph: {
    title: "Graphic Design Services | RITGB",
    description:
      "Clear, distinctive visuals for the moments your business needs to communicate fast.",
    url: "https://www.ritgb.com/expertise/graphic-design",
    type: "website",
  },
};

export default function GraphicDesignPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "Graphic Design",
            url: "https://www.ritgb.com/expertise/graphic-design",
          },
        ]}
      />

      <main className="w-full bg-[#050505] min-h-screen">
        <GraphicDesignHero />
        <div id="next-section">
          <GraphicDesignIdea />
          <GraphicDesignWhatWeDesign />
          <GraphicDesignSelectedWork />
          <GraphicDesignProcess />
          <GraphicDesignDeliverables />
          <GraphicDesignCta />
          <Footer />
        </div>
      </main>
    </>
  );
}




