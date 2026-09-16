import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Contact RITGB – Get a Free Digital Marketing Consultation",
  description:
    "Ready to grow your brand? Contact RITGB, Bhubaneswar's digital growth agency, for a free consultation on branding, web design & marketing..",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Contact", url: "https://www.ritgb.com/contact" },
        ]}
      />
      {children}
    </>
  );
}
