import DarkCtaSection from "@/components/expertise/DarkCtaSection";

export default function MobileAppDevelopmentCta() {
  return (
    <DarkCtaSection
      headline={
        <>
          LET&apos;S BUILD AN APP <br className="hidden md:block" />
          WITH A CLEAR PURPOSE.
        </>
      }
      description="Tell us who it is for and why they would use it."
      buttonText="Discuss Your App Idea"
      buttonHref="/contact"
    />
  );
}
