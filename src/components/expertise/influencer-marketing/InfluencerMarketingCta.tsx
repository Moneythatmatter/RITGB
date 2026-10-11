import DarkCtaSection from "@/components/expertise/DarkCtaSection";

export default function InfluencerMarketingCta() {
  return (
    <DarkCtaSection
      tag="YOUR NEXT MOVE"
      headline={
        <>
          FIND CREATORS WHO FIT
          <br />
          YOUR BRAND
        </>
      }
      description="Tell us about your offer and audience. We'll discuss how creator collaborations could support your campaign."
      buttonText="Discuss Your Influencer Campaign"
      buttonHref="/contact"
    />
  );
}
