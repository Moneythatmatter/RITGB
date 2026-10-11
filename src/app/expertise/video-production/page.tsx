import type { Metadata } from "next";
import VideoProductionHero from "@/components/expertise/video-production/VideoProductionHero";
import VideoProductionIdea from "@/components/expertise/video-production/VideoProductionIdea";
import VideoProductionWhatWeDesign from "@/components/expertise/video-production/VideoProductionWhatWeDesign";
import VideoProductionSelectedWork from "@/components/expertise/video-production/VideoProductionSelectedWork";
import VideoProductionProcess from "@/components/expertise/video-production/VideoProductionProcess";
import VideoProductionDeliverables from "@/components/expertise/video-production/VideoProductionDeliverables";
import VideoProductionCta from "@/components/expertise/video-production/VideoProductionCta";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Video Editing & Production Services | Motion & Brand Videos | RITGB",
  description:
    "Turn footage into a story. RITGB creates high-impact video edits, promotional videos, motion graphics, and social content built for engagement and retention.",
  openGraph: {
    title: "Video Editing & Production Services | RITGB",
    description:
      "Edits with a clear pace, message and finish, built for where people will watch.",
    url: "https://www.ritgb.com/expertise/video-production",
    type: "website",
  },
};

export default function VideoProductionPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.ritgb.com" },
          { name: "Expertise", url: "https://www.ritgb.com/expertise" },
          {
            name: "Video Production",
            url: "https://www.ritgb.com/expertise/video-production",
          },
        ]}
      />

      <main className="w-full bg-[#050505] min-h-screen">
        <VideoProductionHero />
        <div id="next-section">
          <VideoProductionIdea />
          <VideoProductionWhatWeDesign />
          <VideoProductionSelectedWork />
          <VideoProductionProcess />
          <VideoProductionDeliverables />
          <VideoProductionCta />
          <Footer />
        </div>
      </main>
    </>
  );
}

