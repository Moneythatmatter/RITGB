import DarkCtaSection from "@/components/expertise/DarkCtaSection";

export default function CustomSoftwareCta() {
  return (
    <DarkCtaSection
      headline={
        <>
          LET&apos;S BUILD AROUND <br className="hidden md:block" />
          YOUR BUSINESS.
        </>
      }
      description="Show us the process, the problem and the parts your team keeps working around."
      buttonText="Tell Us What Needs Fixing"
      buttonHref="/contact"
    />
  );
}
