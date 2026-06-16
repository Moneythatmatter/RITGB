import AgencyAbout from "@/components/agency/AgencyAbout";
import AgencyHero from "@/components/agency/AgencyHero";
import AgencyMarquee from "@/components/agency/AgencyMarquee";
import AgencyMission from "@/components/agency/AgencyMission";
import ProcessSection from "@/components/agency/ProcessSection";
import TeamSection from "@/components/agency/TeamSection";
import Testimonials from "@/components/agency/Testimonials";
import Footer from "@/components/Footer";
import CaseStudy from "@/components/sections/CaseStudy";
import Contact from "@/components/sections/Contact";
import Industry from "@/components/sections/Industry";

export default function AgencyPage() {
  return (
    <>
      <AgencyHero />
      <div id="next-section">
        <AgencyAbout />
        <AgencyMission />
        <AgencyMarquee />
        <TeamSection />
        <ProcessSection />
        {/* <CaseStudy /> */}
        <Industry />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
