import ApproachSection from "@/components/expertise/ApproachSection";

export default function InfluencerMarketingApproach() {
  return (
    <ApproachSection
      tag="RITGB / THE APPROACH"
      headline={
        <>
          START WITH{" "}
          <br className="hidden lg:block" />
          AUDIENCE FIT
        </>
      }
      paragraphs={[
        "A large follower count does not tell you whether a creator is right for your business. The audience, content style and relevance of the collaboration matter too.",
        "Our Influencer Marketing Services begin with the people you want to reach and the role creator content should play in your marketing.",
      ]}
    />
  );
}
