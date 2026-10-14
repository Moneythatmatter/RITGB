import type { Metadata } from "next";
import WebApplicationDevelopmentHero from "@/components/expertise/web-application-development/WebApplicationDevelopmentHero";
import WebApplicationDevelopmentVisualConcept from "@/components/expertise/web-application-development/WebApplicationDevelopmentVisualConcept";
import WebApplicationDevelopmentServicesInclude from "@/components/expertise/web-application-development/WebApplicationDevelopmentServicesInclude";
import WebApplicationDevelopmentBiggerPicture from "@/components/expertise/web-application-development/WebApplicationDevelopmentBiggerPicture";
import WebApplicationDevelopmentFaq from "@/components/expertise/web-application-development/WebApplicationDevelopmentFaq";
import WebApplicationDevelopmentCta from "@/components/expertise/web-application-development/WebApplicationDevelopmentCta";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Web Application Development Company India | Custom Web Apps | RITGB",
  description:
    "Your browser can handle more than another spreadsheet. RITGB is a web application development company in India building custom portals, SaaS apps, internal tools, and client platforms.",
  openGraph: {
    title: "Web Application Development Company India | RITGB",
    description:
      "Give customers or your team a focused place to complete tasks, manage information and keep work moving.",
    url: "https://www.ritgb.com/expertise/web-application-development",
    type: "website",
  },
};

export default function WebApplicationDevelopmentPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "Web Application Development",
            url: "https://www.ritgb.com/expertise/web-application-development",
          },
        ]}
      />

      <main className="w-full bg-[#f8f8f7] min-h-screen">
        <WebApplicationDevelopmentHero />
        <div id="next-section">
          <WebApplicationDevelopmentVisualConcept />
          <WebApplicationDevelopmentServicesInclude />
          <WebApplicationDevelopmentBiggerPicture />
          <WebApplicationDevelopmentFaq />
          <WebApplicationDevelopmentCta />
          <Footer />
        </div>
      </main>
    </>
  );
}
