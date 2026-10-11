import DarkCtaSection from "@/components/expertise/DarkCtaSection";

export default function GoogleAdsCta() {
  return (
    <DarkCtaSection
      tag="YOUR NEXT MOVE"
      headline={
        <>
          MAKE SEARCH INTENT PART
          <br />
          OF YOUR GROWTH PLAN
        </>
      }
      description="Tell us what you offer and where your customers are. We'll discuss a campaign approach that fits your priorities."
      buttonText="Discuss Your Google Ads Goals"
      buttonHref="/contact"
    />
  );
}
