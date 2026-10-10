import BiggerPictureSection from "@/components/expertise/BiggerPictureSection";

export default function MobileAppDevelopmentBiggerPicture() {
  return (
    <BiggerPictureSection
      tag={null}
      bgClass="bg-[#61BEAE]"
      headline={
        <>
          BUILD THE REASON <br />
          TO RETURN.
        </>
      }
      paragraphs={[
        "We start with the app's core job, organise the requirements and develop the experience in agreed stages.",
        "Features should make that job easier. They should not turn a simple action into a ten-screen adventure.",
      ]}
    />
  );
}
