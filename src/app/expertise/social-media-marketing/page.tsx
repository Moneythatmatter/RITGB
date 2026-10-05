import type { Metadata } from "next";
import SocialMediaMarketingHero from "@/components/expertise/social-media-marketing/SocialMediaMarketingHero";
import SocialMediaMarketingVisualConcept from "@/components/expertise/social-media-marketing/SocialMediaMarketingVisualConcept";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Social Media Marketing Agency India | SMM Services | RITGB",
  description:
    "Give people a reason to follow and choose you. RITGB creates strategic social media marketing campaigns, high-converting organic & paid social strategies, and brand presence across India.",
  openGraph: {
    title: "Social Media Marketing Agency India | RITGB",
    description:
      "Build a social presence that makes your business easier to understand and remember.",
    url: "https://www.ritgb.com/expertise/social-media-marketing",
    type: "website",
  },
};

export default function SocialMediaMarketingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "Social Media Marketing",
            url: "https://www.ritgb.com/expertise/social-media-marketing",
          },
        ]}
      />

      <main className="w-full bg-[#f8f8f7] min-h-screen">
        <SocialMediaMarketingHero />
        <div id="next-section">
          <SocialMediaMarketingVisualConcept />
          <Footer />
        </div>
      </main>
    </>
  );
}
