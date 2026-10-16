import BiggerPictureSection from "@/components/expertise/BiggerPictureSection";

export default function CrmIntegrationsBiggerPicture() {
  return (
    <BiggerPictureSection
      tag={null}
      bgClass="bg-[#FFC4DE]"
      headline={
        <>
          GET THE <br />
          INFORMATION <br />
          WHERE IT NEEDS TO <br />
          GO.
        </>
      }
      paragraphs={[
        "We agree on the source, destination and required fields before implementation.",
        "Then we test the connection against the defined workflow. Because moving data is useful only when the right information arrives in the right place.",
      ]}
    />
  );
}
