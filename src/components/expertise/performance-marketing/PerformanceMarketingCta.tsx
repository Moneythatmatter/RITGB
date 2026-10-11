import DarkCtaSection from "@/components/expertise/DarkCtaSection";

export default function PerformanceMarketingCta() {
  return (
    <DarkCtaSection
      tag="YOUR NEXT MOVE"
      headline={
        <>
          BUILD A CAMPAIGN YOU CAN
          <br />
          LEARN FROM
        </>
      }
      description="Let's define the action you want customers to take and the campaign structure needed to support it."
      buttonText="Discuss Your Performance Goals"
      buttonHref="/contact"
    />
  );
}
