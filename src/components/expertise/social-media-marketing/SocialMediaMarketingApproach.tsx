import ApproachSection from "@/components/expertise/ApproachSection";

export default function SocialMediaMarketingApproach() {
  return (
    <ApproachSection
      tag="RITGB / THE APPROACH"
      headline={
        <>
          TURN REGULAR{" "}
          <br className="hidden lg:block" />
          POSTING INTO A{" "}
          <br className="hidden lg:block" />
          CLEAR BRAND{" "}
          <br className="hidden lg:block" />
          STORY
        </>
      }
      paragraphs={[
        "Publishing more content does not automatically create more interest. Your audience needs to understand what you offer, why it matters and what to do next.",
        "Our Social Media Marketing Services give each post a purpose, from introducing your business and explaining your services to answering questions and supporting enquiries.",
      ]}
    />
  );
}
