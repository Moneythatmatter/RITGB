import type { Metadata } from "next";
import MobileAppDevelopmentHero from "@/components/expertise/mobile-app-development/MobileAppDevelopmentHero";
import MobileAppDevelopmentVisualConcept from "@/components/expertise/mobile-app-development/MobileAppDevelopmentVisualConcept";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Mobile App Development Company India | iOS & Android Apps | RITGB",
  description:
    "Earn a place on their phone. RITGB is a mobile app development company in India building intuitive, high-performance iOS and Android applications engineered for user retention and business growth.",
  openGraph: {
    title: "Mobile App Development Company India | RITGB",
    description:
      "RITGB builds mobile experiences around useful actions, clear navigation and the people you want to serve. The download is the beginning. What happens next matters more.",
    url: "https://www.ritgb.com/expertise/mobile-app-development",
    type: "website",
  },
};

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "Mobile App Development",
            url: "https://www.ritgb.com/expertise/mobile-app-development",
          },
        ]}
      />

      <main className="w-full bg-[#f8f8f7] min-h-screen">
        <MobileAppDevelopmentHero />
        <div id="next-section">
          <MobileAppDevelopmentVisualConcept />
          <Footer />
        </div>
      </main>
    </>
  );
}
