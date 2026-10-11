import BiggerPictureSection from "@/components/expertise/BiggerPictureSection";

export default function ContentMarketingBiggerPicture() {
  return (
    <BiggerPictureSection
      tag="THE BIGGER PICTURE"
      headline={
        <>
          A USEFUL CONTENT{" "}
          <br className="hidden lg:block" />
          LIBRARY, BUILT WITH{" "}
          <br className="hidden lg:block" />
          INTENT
        </>
      }
      paragraphs={[
        "We start with the pages and topics that matter most to your audience. Service pages explain your offer. Supporting articles build understanding. Campaign content helps people take the next step.",
        "Each piece should have a distinct purpose and enough substance to be useful, rather than repeating the same message across multiple pages.",
      ]}
    />
  );
}
