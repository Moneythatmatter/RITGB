import DarkCtaSection from "@/components/expertise/DarkCtaSection";

export default function CampaignManagementCta() {
  return (
    <DarkCtaSection
      tag="YOUR NEXT MOVE"
      headline={
        <>
          GIVE YOUR NEXT CAMPAIGN <br className="hidden md:block" />
          A CLEAR PLAN
        </>
      }
      description="Share your objective, offer and intended launch date. We'll discuss the work and coordination needed to bring it together."
      buttonText="Plan Your Next Campaign"
      buttonHref="/contact"
    />
  );
}
