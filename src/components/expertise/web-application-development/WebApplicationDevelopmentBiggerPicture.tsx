import BiggerPictureSection from "@/components/expertise/BiggerPictureSection";

export default function WebApplicationDevelopmentBiggerPicture() {
  return (
    <BiggerPictureSection
      tag={null}
      bgClass="bg-[#52B788]"
      headline={
        <>
          ONE PLACE TO WORK. <br />
          FEWER PLACES TO <br />
          LOSE TRACK.
        </>
      }
      paragraphs={[
        "We turn the requirements into a clear development plan, then build and review the application in agreed stages.",
        "The aim is a tool people can understand and use—not another system your team quietly works around.",
      ]}
    />
  );
}
