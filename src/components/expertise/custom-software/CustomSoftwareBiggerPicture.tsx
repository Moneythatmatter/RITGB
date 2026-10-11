import BiggerPictureSection from "@/components/expertise/BiggerPictureSection";

export default function CustomSoftwareBiggerPicture() {
  return (
    <BiggerPictureSection
      tag={null}
      bgClass="bg-[#46A778]"
      headline={
        <>
          CUSTOM SOFTWARE <br />
          SOLUTIONS INDIA
        </>
      }
      subheading="Built for the Process You Actually Have."
      paragraphs={[
        "We work backwards from the job your team needs to do.",
        "That may mean organising information, reducing repeated steps or giving users a clearer way to complete a task. The software follows the requirement—not the other way around.",
      ]}
    />
  );
}
