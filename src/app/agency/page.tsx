import AgencyAbout from "@/components/agency/AgencyAbout";
import AgencyHero from "@/components/agency/AgencyHero";
import AgencyMarquee from "@/components/agency/AgencyMarquee";
import AgencyMission from "@/components/agency/AgencyMission";
import ProcessSection from "@/components/agency/ProcessSection";
import TeamSection from "@/components/agency/TeamSection";
import Footer from "@/components/Footer";
import CaseStudy from "@/components/sections/CaseStudy";
import Contact from "@/components/sections/Contact";
import Industry from "@/components/sections/Industry";

export default function AgencyPage() {
  return (
    <>
      <AgencyHero />
      <AgencyAbout />
      <AgencyMission />
      <AgencyMarquee />
      <TeamSection />
      <ProcessSection />
      <CaseStudy />
      <Industry />
      <Contact />
      <Footer />
    </>
  );
}
