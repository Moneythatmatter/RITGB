import BiggerPictureSection from "@/components/expertise/BiggerPictureSection";

export default function GoogleAdsBiggerPicture() {
  return (
    <BiggerPictureSection
      tag="THE BIGGER PICTURE"
      headline={
        <>
          CHOOSE THE RIGHT{" "}
          <br className="hidden lg:block" />
          CAMPAIGN FOR THE{" "}
          <br className="hidden lg:block" />
          OBJECTIVE
        </>
      }
      paragraphs={[
        "Search campaigns can reach people expressing a specific need. Shopping campaigns may suit eligible ecommerce businesses with a suitable product feed. Other Google Ads formats can support discovery or re-engagement when they fit the audience, assets and budget.",
        "We recommend the campaign mix after understanding your business rather than adding every format by default.",
      ]}
    />
  );
}
