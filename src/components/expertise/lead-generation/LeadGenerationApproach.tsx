import ApproachSection from "@/components/expertise/ApproachSection";

export default function LeadGenerationApproach() {
  return (
    <ApproachSection
      tag="RITGB / THE APPROACH"
      headline={
        <>
          START BY DEFINING A{" "}
          <br className="hidden lg:block" />
          USEFUL LEAD
        </>
      }
      paragraphs={[
        "More form submissions do not always mean more sales opportunities. A useful lead matches your target customer and has a need your business can serve.",
        "Our Lead Generation Services start with that definition. We align the campaign message and enquiry journey with the people your sales team wants to speak to.",
      ]}
    />
  );
}
