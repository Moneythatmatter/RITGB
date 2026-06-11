import Navbar from "@/components/layout/Navbar";
import AboutImage from "@/components/sections/AboutImage";
import AboutText from "@/components/sections/AboutText";
import Hero from "@/components/sections/Hero";
import MemeSection from "@/components/sections/MemeSection";
import Numbers from "@/components/sections/Numbers";
import Portfolio from "@/components/sections/Portfolio";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div id="next-section">
        <AboutImage />
        <AboutText />
        <MemeSection />
        <Numbers />
        <Services />
        <Portfolio />
        <Projects />
      </div>
    </main>
  );
}
