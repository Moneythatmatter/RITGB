import BiggerPictureSection from "@/components/expertise/BiggerPictureSection";

export default function PerformanceMarketingBiggerPicture() {
  return (
    <BiggerPictureSection
      tag="THE BIGGER PICTURE"
      headline={
        <>
          A CONNECTED PATH{" "}
          <br className="hidden lg:block" />
          FROM AD TO ACTION
        </>
      }
      paragraphs={[
        "Advertising attracts attention. The landing page explains the offer. The enquiry or checkout process makes the next step possible. Your follow-up or fulfilment process completes the journey.",
        "We identify where that path needs attention and coordinate improvements within the agreed scope. Your team's feedback on lead quality and sales helps make campaign decisions more useful.",
      ]}
    />
  );
}
