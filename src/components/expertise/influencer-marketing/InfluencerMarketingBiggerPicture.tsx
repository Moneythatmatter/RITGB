import BiggerPictureSection from "@/components/expertise/BiggerPictureSection";

export default function InfluencerMarketingBiggerPicture() {
  return (
    <BiggerPictureSection
      tag="THE BIGGER PICTURE"
      headline={
        <>
          CONTENT YOUR{" "}
          <br className="hidden lg:block" />
          BRAND CAN USE{" "}
          <br className="hidden lg:block" />
          WITH CLEAR{" "}
          <br className="hidden lg:block" />
          PERMISSION
        </>
      }
      paragraphs={[
        "Creator content may support your social channels, website or paid campaigns, depending on the agreement. We define intended use early so permissions, duration and any additional charges can be discussed before production.",
      ]}
    />
  );
}
