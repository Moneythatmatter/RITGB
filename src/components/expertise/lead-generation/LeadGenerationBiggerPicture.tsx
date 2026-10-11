import BiggerPictureSection from "@/components/expertise/BiggerPictureSection";

export default function LeadGenerationBiggerPicture() {
  return (
    <BiggerPictureSection
      tag="THE BIGGER PICTURE"
      headline={
        <>
          CONNECT{" "}
          <br className="hidden lg:block" />
          MARKETING WITH{" "}
          <br className="hidden lg:block" />
          FOLLOW-UP
        </>
      }
      paragraphs={[
        "A clear handoff helps your team respond while the enquiry is still relevant. We agree on where leads go, what information is captured and who handles the next step.",
        "Marketing can create opportunities and make the enquiry journey easier. Your team's response, qualification and sales process determine how those opportunities progress.",
      ]}
    />
  );
}
