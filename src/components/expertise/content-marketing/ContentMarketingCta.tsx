import DarkCtaSection from "@/components/expertise/DarkCtaSection";

export default function ContentMarketingCta() {
  return (
    <DarkCtaSection
      tag="YOUR NEXT MOVE"
      headline={
        <>
          MAKE YOUR BUSINESS
          <br />
          EASIER TO UNDERSTAND
        </>
      }
      description="Let's turn the questions your customers ask into content that helps them move forward."
      buttonText="Discuss Your Content Goals"
      buttonHref="/contact"
    />
  );
}
