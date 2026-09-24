import type { Metadata } from "next";
import PackagingDesignHero from "@/components/expertise/packaging-design/PackagingDesignHero";
import PackagingDesignIdea from "@/components/expertise/packaging-design/PackagingDesignIdea";
import PackagingDesignWhatWeDesign from "@/components/expertise/packaging-design/PackagingDesignWhatWeDesign";
import PackagingDesignSelectedWork from "@/components/expertise/packaging-design/PackagingDesignSelectedWork";
import PackagingDesignProcess from "@/components/expertise/packaging-design/PackagingDesignProcess";
import PackagingDesignDeliverables from "@/components/expertise/packaging-design/PackagingDesignDeliverables";
import PackagingDesignCta from "@/components/expertise/packaging-design/PackagingDesignCta";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Packaging Design Services | Box, Label & Product Packaging | RITGB",
  description:
    "Built to stand out on shelf. RITGB creates premium packaging designs, labels, product structures, and print-ready files tailored to your brand.",
  openGraph: {
    title: "Packaging Design Services | RITGB",
    description:
      "Packaging that catches attention, communicates clearly and feels true to your brand.",
    url: "https://www.ritgb.com/expertise/packaging-design",
    type: "website",
  },
};

export default function PackagingDesignPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "Packaging Design",
            url: "https://www.ritgb.com/expertise/packaging-design",
          },
        ]}
      />

      <main className="w-full bg-[#050505] min-h-screen">
        <PackagingDesignHero />
        <div id="next-section">
          <PackagingDesignIdea />
          <PackagingDesignWhatWeDesign />
          <PackagingDesignSelectedWork />
          <PackagingDesignProcess />
          <PackagingDesignDeliverables />
          <PackagingDesignCta />
          <Footer />
        </div>
      </main>
    </>
  );
}
