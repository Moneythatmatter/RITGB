import BiggerPictureSection from "@/components/expertise/BiggerPictureSection";

export default function DigitalMarketingFullService() {
  return (
    <BiggerPictureSection
      tag={null}
      bgClass="bg-[#f8f8f7]"
      headline={
        <>
          FULL SERVICE <br className="hidden lg:block" />
          DIGITAL MARKETING <br className="hidden lg:block" />
          AGENCY INDIA
        </>
      }
      subheading="One Direction Across Your Marketing."
      paragraphs={[
        "Your ads, content, search presence and website should tell a connected story.",
        "RITGB brings these activities together, so customers see a consistent offer and understand what to do next. Choose support for one priority or an agreed plan across several channels.",
      ]}
    />
  );
}
