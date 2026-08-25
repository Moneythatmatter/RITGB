import type { Metadata } from "next";
import AgencyAbout from "@/components/agency/AgencyAbout";
import AgencyHero from "@/components/agency/AgencyHero";
import AgencyMarquee from "@/components/agency/AgencyMarquee";
import AgencyMission from "@/components/agency/AgencyMission";
import ProcessSection from "@/components/agency/ProcessSection";
import StackingCards from "@/components/agency/StackingCards";
import TeamSection from "@/components/agency/TeamSection";
import Testimonials from "@/components/agency/Testimonials";
import Footer from "@/components/Footer";
// import CaseStudy from "@/components/sections/CaseStudy";
import Contact from "@/components/sections/Contact";
import Industry from "@/components/sections/Industry";

export const metadata: Metadata = {
  title: "About RITGB – Full-Service Digital Growth Agency, Bhubaneswar",
  description:
    "Meet RITGB — a Bhubaneswar-based branding, web design & digital marketing agency helping 50+ brands grow with bold, no-boring-marketing strategy.",
};

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
        <StackingCards />
        <Industry />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
