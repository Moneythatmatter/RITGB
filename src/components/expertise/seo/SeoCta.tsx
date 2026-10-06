import DarkCtaSection from "@/components/expertise/DarkCtaSection";

export default function SeoCta() {
  return (
    <DarkCtaSection
      tag="YOUR NEXT MOVE"
      headline={
        <>
          MAKE YOUR WEBSITE
          <br />
          EASIER TO DISCOVER
        </>
      }
      description="Let's identify the search opportunities that fit your business and the website improvements that deserve attention first."
      buttonText="Discuss Your SEO Goals"
      buttonHref="/contact"
    />
  );
}
