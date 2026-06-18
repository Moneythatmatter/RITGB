import ServiceCards from "@/components/software/ServiceCards";
import SoftwareCTA from "@/components/software/SoftwareCta";
import SoftwareHero from "@/components/software/SoftwareHero";
import SoftwareHighlight from "@/components/software/SoftwareHightlight";
import SoftwareIntro from "@/components/software/SoftwareIntro";
import Footer from "@/components/Footer";

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
