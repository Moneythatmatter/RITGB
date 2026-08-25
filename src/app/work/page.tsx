import type { Metadata } from "next";
import Testimonials from "@/components/agency/Testimonials";

import Footer from "@/components/Footer";
import CaseStudy from "@/components/sections/CaseStudy";
import Contact from "@/components/sections/Contact";
import Industry from "@/components/sections/Industry";
import ProudOf from "@/components/work/ProudOf";
import ShowReel from "@/components/work/ShowReel";
import WorkIntro from "@/components/work/WorkIntro";

export const metadata: Metadata = {
  title: "Our Work – Branding, Web Design & Marketing Portfolio",
  description:
    "RITGB Portfolio: hospitality, hotel, e-commerce & healthcare branding and web design projects. Case studies of brands we made impossible to ignore.",
};

export default function WorkPage() {
  return (
    <>
      <WorkIntro />
      <div id="next-section">
        <ShowReel />
        <ProudOf />
        <Industry />
        {/* <CaseStudy /> */}
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
