import BiggerPictureSection from "@/components/expertise/BiggerPictureSection";

export default function PaymentIntegrationsBiggerPicture() {
  return (
    <BiggerPictureSection
      tag={null}
      bgClass="bg-[#52B788]"
      headline={
        <>
          CONNECT THE <br />
          PAYMENT WITH <br />
          WHAT HAPPENS <br />
          NEXT.
        </>
      }
      paragraphs={[
        "A payment flow should account for more than the checkout screen.",
        "We clarify how customers receive confirmation and how your business receives the status information it needs. Fewer “Did it go through?” conversations is a sensible place to start.",
      ]}
    />
  );
}
