import BiggerPictureSection from "@/components/expertise/BiggerPictureSection";

export default function WebsiteDevelopmentBiggerPicture() {
  return (
    <BiggerPictureSection
      tag={null}
      bgClass="bg-[#61BEAE]"
      headline={
        <>
          LESS GUESSWORK. <br />
          MORE CLEAR NEXT <br />
          STEPS.
        </>
      }
      paragraphs={[
        "We define the page structure and functionality first, then develop the experience around your content and business goals.",
        "Visitors should know where to go. Your team should know how the website works. Nobody should need a guided tour to find the contact button.",
      ]}
    />
  );
}
