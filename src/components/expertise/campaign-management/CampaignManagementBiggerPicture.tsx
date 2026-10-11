import BiggerPictureSection from "@/components/expertise/BiggerPictureSection";

export default function CampaignManagementBiggerPicture() {
  return (
    <BiggerPictureSection
      tag="THE BIGGER PICTURE"
      headline={
        <>
          BUILT FOR LAUNCHES, <br />
          PROMOTIONS AND <br />
          FOCUSED INITIATIVES
        </>
      }
      paragraphs={[
        "Introduce a new product or service. Support a seasonal promotion. Build awareness around a specific offer. Coordinate a lead generation initiative across several channels.",
        "The scope follows the campaign's purpose, budget and timeline. We agree on what needs to be produced, what your team provides and which channels need active management.",
      ]}
    />
  );
}
