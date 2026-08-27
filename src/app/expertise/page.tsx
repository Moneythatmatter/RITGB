import type { Metadata } from "next";
import ClientsSection from "@/components/expertise/ClientsSection";
import ExpertiseCategories from "@/components/expertise/ExpertiseCategories";
import ExpertiseCta from "@/components/expertise/ExpertiseCta";
import ExpertiseHero from "@/components/expertise/ExpertiseHero";
import ExpertiseIntro from "@/components/expertise/ExpertiseIntro";
import Industries from "@/components/expertise/Industries";
import Portfolio from "@/components/sections/Portfolio";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Expertise – Branding, Web Development & SEO Services",
  description:
    "Explore RITGB's core expertise: brand identity, UI/UX & web design, full-stack development, SEO, paid ads and content strategy.",
};
export default function ExpertisePage() {
  return (
    <>
      <ExpertiseHero />
      <div id="next-section">
        <ExpertiseIntro />
        <ExpertiseCategories />
        <ClientsSection />
        <Industries />
        <Portfolio />
        <Projects />
        <ExpertiseCta />
        <Footer />
      </div>
    </>
  );
}
