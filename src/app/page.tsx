import Testimonials from "@/components/agency/Testimonials";
import AboutImage from "@/components/sections/AboutImage";
import AboutText from "@/components/sections/AboutText";
// import CaseStudy from "@/components/sections/CaseStudy";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Industry from "@/components/sections/Industry";
import MemeSection from "@/components/sections/MemeSection";
import Numbers from "@/components/sections/Numbers";
import Portfolio from "@/components/sections/Portfolio";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import SiteFooter from "@/components/SiteFooter";
import Footer from "@/components/Footer";
import ClientsSection from "@/components/expertise/ClientsSection";
import ShowReel from "@/components/work/ShowReel";

export default function Home() {
  return (
    <main>
      <Hero />
      <div id="next-section">
        {/* Desktop */}
        <div className="hidden md:block">
          <AboutImage />
        </div>

        {/* Mobile */}
        <div className="block md:hidden">
          <ShowReel />
        </div>
        <AboutText />
        <MemeSection />
        <Numbers />
        <ClientsSection />
        <Services />
        <Portfolio />
        <Projects />
        {/* <CaseStudy /> */}
        <Industry />
        <Testimonials />
        <Contact />

        <Footer />
      </div>
    </main>
  );
}
