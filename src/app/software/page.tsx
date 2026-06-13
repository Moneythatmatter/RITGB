import ServiceCards from "@/components/software/ServiceCards";
import SoftwareCTA from "@/components/software/SoftwareCta";
import SoftwareHero from "@/components/software/SoftwareHero";
import SoftwareHighlight from "@/components/software/SoftwareHightlight";
import SoftwareIntro from "@/components/software/SoftwareIntro";

export default function SoftwarePage() {
  return (
    <>
      <SoftwareHero />
      <SoftwareIntro />
      <SoftwareHighlight />
      <ServiceCards />
      <SoftwareCTA />
    </>
  );
}
