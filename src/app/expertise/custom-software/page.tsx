import type { Metadata } from "next";
import CustomSoftwareHero from "@/components/expertise/custom-software/CustomSoftwareHero";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Custom Software Development Company India | Purpose-Built Systems | RITGB",
  description:
    "Your workflow is different. Your software can be too. RITGB is a custom software development company in India building purpose-built systems tailored to your business operations.",
  openGraph: {
    title: "Custom Software Development Company India | RITGB",
    description:
      "RITGB develops purpose-built systems with a clear scope and a practical reason behind each feature.",
    url: "https://www.ritgb.com/expertise/custom-software",
    type: "website",
  },
};

export default function CustomSoftwarePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "Custom Software",
            url: "https://www.ritgb.com/expertise/custom-software",
          },
        ]}
      />

      <main className="w-full bg-[#f8f8f7] min-h-screen">
        <CustomSoftwareHero />
        <div id="next-section">
          <Footer />
        </div>
      </main>
    </>
  );
}
