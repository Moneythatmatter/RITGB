import type { Metadata } from "next";
import PaymentIntegrationsHero from "@/components/expertise/payment-integrations/PaymentIntegrationsHero";
import PaymentIntegrationsVisualConcept from "@/components/expertise/payment-integrations/PaymentIntegrationsVisualConcept";
import PaymentIntegrationsServicesInclude from "@/components/expertise/payment-integrations/PaymentIntegrationsServicesInclude";
import PaymentIntegrationsBiggerPicture from "@/components/expertise/payment-integrations/PaymentIntegrationsBiggerPicture";
import PaymentIntegrationsFaq from "@/components/expertise/payment-integrations/PaymentIntegrationsFaq";
import PaymentIntegrationsCta from "@/components/expertise/payment-integrations/PaymentIntegrationsCta";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Payment Integration Company India | Secure Gateways & Checkout | RITGB",
  description:
    "Don't make 'ready to pay' a complicated moment. RITGB is a payment integration company in India connecting websites and apps with Razorpay, Stripe, PayPal, UPI, and recurring billing systems.",
  openGraph: {
    title: "Payment Integration Company India | RITGB",
    description:
      "Connect your website or application with a suitable payment provider and a clear checkout journey.",
    url: "https://www.ritgb.com/expertise/payment-integrations",
    type: "website",
  },
};

export default function PaymentIntegrationsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "Payment Integrations",
            url: "https://www.ritgb.com/expertise/payment-integrations",
          },
        ]}
      />

      <main className="w-full bg-[#f8f8f7] min-h-screen">
        <PaymentIntegrationsHero />
        <div id="next-section">
          <PaymentIntegrationsVisualConcept />
          <PaymentIntegrationsServicesInclude />
          <PaymentIntegrationsBiggerPicture />
          <PaymentIntegrationsFaq />
          <PaymentIntegrationsCta />
          <Footer />
        </div>
      </main>
    </>
  );
}
