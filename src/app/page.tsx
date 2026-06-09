import Navbar from "@/components/layout/Navbar";
import AboutImage from "@/components/sections/AboutImage";
import AboutText from "@/components/sections/AboutText";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div id="next-section">
        <AboutImage />
        <AboutText />
      </div>
    </main>
  );
}
