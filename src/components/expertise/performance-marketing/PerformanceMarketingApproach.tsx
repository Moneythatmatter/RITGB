import ApproachSection from "@/components/expertise/ApproachSection";

export default function PerformanceMarketingApproach() {
  return (
    <ApproachSection
      tag="RITGB / THE APPROACH"
      headline={
        <>
          MEASURE BEYOND{" "}
          <br className="hidden lg:block" />
          THE CLICK
        </>
      }
      paragraphs={[
        "Low-cost clicks are useful only when they help you reach the right customers. We consider what happens after the ad: whether visitors understand the offer, take action and become useful opportunities for your business.",
        "Our Performance Marketing Services connect campaign metrics with the customer journey, so optimisation has a clear purpose.",
      ]}
    />
  );
}
