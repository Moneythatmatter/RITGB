import DarkCtaSection from "@/components/expertise/DarkCtaSection";

export default function LeadGenerationCta() {
  return (
    <DarkCtaSection
      tag="YOUR NEXT MOVE"
      headline={
        <>
          BUILD A BETTER PATH TO <br className="hidden md:block" />
          YOUR NEXT CUSTOMER
        </>
      }
      description="Tell us who you want to reach and what makes an enquiry useful to your business."
      buttonText="Discuss Your Lead Generation Goals"
      buttonHref="/contact"
    />
  );
}
