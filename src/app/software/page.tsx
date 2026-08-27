import type { Metadata } from "next";
import ServiceCards from "@/components/software/ServiceCards";
import SoftwareCTA from "@/components/software/SoftwareCta";
import SoftwareHero from "@/components/software/SoftwareHero";
import SoftwareHighlight from "@/components/software/SoftwareHightlight";
import SoftwareIntro from "@/components/software/SoftwareIntro";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Custom Software & Web Development Services",
  description:
    "RITGB builds fast, scalable websites, e-commerce stores, mobile apps and custom software so your tech never embarrasses your brand.",
};

export default function SoftwarePage() {
  return (
    <>
      <SoftwareHero />
      <div id="next-section">
        <SoftwareIntro />
        <SoftwareHighlight />
        <ServiceCards />
        <SoftwareCTA />
        <Footer />
      </div>
    </>
  );
}
