import ApproachSection from "@/components/expertise/ApproachSection";

export default function GoogleAdsApproach() {
  return (
    <ApproachSection
      tag="RITGB / THE APPROACH"
      headline={
        <>
          A CLICK IS THE START{" "}
          <br className="hidden lg:block" />
          OF THE JOURNEY
        </>
      }
      paragraphs={[
        "An effective search campaign needs more than an ad. The search term, message and landing page should match what the customer is trying to find.",
        "Our Google Ads Management Services bring those elements together, helping you understand where your spend goes and which actions your campaigns generate.",
      ]}
    />
  );
}
