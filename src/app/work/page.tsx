import type { Metadata } from "next";
import Testimonials from "@/components/agency/Testimonials";
import Footer from "@/components/Footer";
import Contact from "@/components/sections/Contact";
import Industry from "@/components/sections/Industry";
import ProudOf from "@/components/work/ProudOf";
import ShowReel from "@/components/work/ShowReel";
import WorkIntro from "@/components/work/WorkIntro";

import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Our Work – Branding, Web Design & Marketing Portfolio",
  description:
    "RITGB Portfolio: hospitality, hotel, e-commerce & healthcare branding and web design projects. Case studies of brands we made impossible to ignore.",
};

export default function WorkPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Work", url: "https://www.ritgb.com/work" },
        ]}
      />
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
