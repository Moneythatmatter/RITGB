import type { Metadata } from "next";
import SocialMediaCreativesHero from "@/components/expertise/social-media-creatives/SocialMediaCreativesHero";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Social Media Creative Design Services | Posts, Stories & Ads | RITGB",
  description:
    "Make the scroll stop. RITGB creates high-impact social media creatives, ad banners, carousel designs, and story assets engineered for engagement and conversions.",
  openGraph: {
    title: "Social Media Creative Design Services | RITGB",
    description:
      "Social visuals designed for your brand, your message and the format they live in.",
    url: "https://www.ritgb.com/expertise/social-media-creatives",
    type: "website",
  },
};

export default function SocialMediaCreativesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "Social Media Creatives",
            url: "https://www.ritgb.com/expertise/social-media-creatives",
          },
        ]}
      />

      <main className="w-full bg-[#050505] min-h-screen">
        <SocialMediaCreativesHero />
        <div id="next-section">
          <Footer />
        </div>
      </main>
    </>
  );
}
