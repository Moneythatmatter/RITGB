import Testimonials from "@/components/agency/Testimonials";

import Footer from "@/components/Footer";
import CaseStudy from "@/components/sections/CaseStudy";
import Contact from "@/components/sections/Contact";
import Industry from "@/components/sections/Industry";
import ProudOf from "@/components/work/ProudOf";
import ShowReel from "@/components/work/ShowReel";
import WorkHero from "@/components/work/WorkIntro";

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <ShowReel />
      <ProudOf />
      <Industry />
      <CaseStudy />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
