import DarkCtaSection from "@/components/expertise/DarkCtaSection";

export default function PaymentIntegrationsCta() {
  return (
    <DarkCtaSection
      headline={
        <>
          LET&apos;S MAKE THE NEXT STEP <br />
          EASIER.
        </>
      }
      description="Share your platform, selected provider and required payment journey."
      buttonText="Discuss Your Payment Setup"
      buttonHref="/contact"
    />
  );
}
