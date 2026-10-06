import BiggerPictureSection from "@/components/expertise/BiggerPictureSection";

export default function SeoBiggerPicture() {
  return (
    <BiggerPictureSection
      tag="THE BIGGER PICTURE"
      headline={
        <>
          USEFUL PAGES{" "}
          <br className="hidden lg:block" />
          BEFORE MORE PAGES
        </>
      }
      paragraphs={[
        "We prioritise pages that help visitors understand your services and take action. Supporting articles should add depth, answer specific questions and link naturally to relevant service pages.",
        "The aim is a clear website that serves your audience, with SEO built into how information is organised and presented.",
      ]}
    />
  );
}
