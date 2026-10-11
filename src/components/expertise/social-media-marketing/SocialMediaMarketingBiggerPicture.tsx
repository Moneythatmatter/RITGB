import BiggerPictureSection from "@/components/expertise/BiggerPictureSection";

export default function SocialMediaMarketingBiggerPicture() {
  return (
    <BiggerPictureSection
      tag="THE BIGGER PICTURE"
      headline={
        <>
          CONTENT THAT{" "}
          <br className="hidden lg:block" />
          HELPS CUSTOMERS{" "}
          <br className="hidden lg:block" />
          DECIDE
        </>
      }
      paragraphs={[
        "We build content around the questions people ask before buying: What does your business do? Who is it for? How does it work? Why should they trust it?",
        "The mix may include service explanations, product demonstrations, educational posts and approved customer stories. Every format should help the audience move from recognition towards a useful next step.",
      ]}
    />
  );
}
