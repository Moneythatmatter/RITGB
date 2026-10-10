import DarkCtaSection from "@/components/expertise/DarkCtaSection";

export default function WebsiteDevelopmentCta() {
  return (
    <DarkCtaSection
      headline={
        <>
          LET&apos;S GIVE YOUR <br className="hidden md:block" />
          BUSINESS A WEBSITE <br className="hidden md:block" />
          THAT PULLS ITS WEIGHT.
        </>
      }
      description="Share your goals, content and the features you need."
      buttonText="Let's Build Your Website"
      buttonHref="/contact"
    />
  );
}
