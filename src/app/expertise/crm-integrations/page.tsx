import type { Metadata } from "next";
import CrmIntegrationsHero from "@/components/expertise/crm-integrations/CrmIntegrationsHero";
import CrmIntegrationsVisualConcept from "@/components/expertise/crm-integrations/CrmIntegrationsVisualConcept";
import CrmIntegrationsServicesInclude from "@/components/expertise/crm-integrations/CrmIntegrationsServicesInclude";
import CrmIntegrationsBiggerPicture from "@/components/expertise/crm-integrations/CrmIntegrationsBiggerPicture";
import CrmIntegrationsFaq from "@/components/expertise/crm-integrations/CrmIntegrationsFaq";
import CrmIntegrationsCta from "@/components/expertise/crm-integrations/CrmIntegrationsCta";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "CRM Integration Company India | Systems & Automation | RITGB",
  description:
    "Your customer information shouldn't need a copy-paste department. RITGB is a CRM integration company in India helping you connect tools, sync customer data, and automate workflows.",
  openGraph: {
    title: "CRM Integration Company India | RITGB",
    description:
      "RITGB helps you plan practical connections, so information reaches the agreed place with fewer manual steps.",
    url: "https://www.ritgb.com/expertise/crm-integrations",
    type: "website",
  },
};

export default function CrmIntegrationsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "CRM Integrations",
            url: "https://www.ritgb.com/expertise/crm-integrations",
          },
        ]}
      />

      <main className="w-full bg-[#f8f8f7] min-h-screen">
        <CrmIntegrationsHero />
        <div id="next-section">
          <CrmIntegrationsVisualConcept />
          <CrmIntegrationsServicesInclude />
          <CrmIntegrationsBiggerPicture />
          <CrmIntegrationsFaq />
          <CrmIntegrationsCta />
          <Footer />
        </div>
      </main>
    </>
  );
}
