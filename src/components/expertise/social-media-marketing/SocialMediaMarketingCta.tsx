import DarkCtaSection from "@/components/expertise/DarkCtaSection";

export default function SocialMediaMarketingCta() {
  return (
    <DarkCtaSection
      tag="YOUR NEXT MOVE"
      headline={
        <>
          BUILD A SOCIAL PRESENCE
          <br />
          WITH A PURPOSE
        </>
      }
      description="Let's define what your audience needs to hear and how your content can support your business."
      buttonText="Discuss Your Social Media Goals"
      buttonHref="/contact"
    />
  );
}
