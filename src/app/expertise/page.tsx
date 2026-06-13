import ClientsSection from "@/components/expertise/ClientsSection";
import ExpertiseCategories from "@/components/expertise/ExpertiseCategories";
import ExpertiseCta from "@/components/expertise/ExpertiseCta";
import ExpertiseHero from "@/components/expertise/ExpertiseHero";
import ExpertiseIntro from "@/components/expertise/ExpertiseIntro";
import Industries from "@/components/expertise/Industries";
import Portfolio from "@/components/sections/Portfolio";
import Projects from "@/components/sections/Projects";

export default function ExpertisePage() {
  return (
    <>
      <ExpertiseHero />
      <ExpertiseIntro />
      <ExpertiseCategories />
      <ClientsSection />
      <Industries />
      <Portfolio />
      <Projects />
      <ExpertiseCta />
    </>
  );
}
