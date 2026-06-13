import Testimonials from "@/components/agency/Testimonials";
import Footer from "@/components/Footer";
import Navbar from "@/components/layout/Navbar";
import AboutImage from "@/components/sections/AboutImage";
import AboutText from "@/components/sections/AboutText";
import CaseStudy from "@/components/sections/CaseStudy";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Industry from "@/components/sections/Industry";
import MemeSection from "@/components/sections/MemeSection";
import Numbers from "@/components/sections/Numbers";
import Portfolio from "@/components/sections/Portfolio";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <div id="next-section">
        <AboutImage />
        <AboutText />
        <MemeSection />
        <Numbers />
        <Services />
        <Portfolio />
        <Projects />
        <CaseStudy />
        <Industry />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
