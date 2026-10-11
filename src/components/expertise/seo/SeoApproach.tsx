import ApproachSection from "@/components/expertise/ApproachSection";

export default function SeoApproach() {
  return (
    <ApproachSection
      tag="RITGB / THE APPROACH"
      headline={
        <>
          BUILD SEARCH{" "}
          <br className="hidden lg:block" />
          VISIBILITY AROUND{" "}
          <br className="hidden lg:block" />
          CUSTOMER INTENT
        </>
      }
      paragraphs={[
        "Ranking for a phrase is more useful when the people searching it are relevant to your offer. We look at what your customers need, how they search and which pages can best answer those needs.",
        "Our Search Engine Optimization Services focus on improving your website's foundations and building content that supports both discovery and decision-making.",
      ]}
    />
  );
}
