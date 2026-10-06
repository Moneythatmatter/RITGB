import ApproachSection from "@/components/expertise/ApproachSection";

export default function ContentMarketingApproach() {
  return (
    <ApproachSection
      tag="RITGB / THE APPROACH"
      headline={
        <>
          GIVE YOUR EXPERTISE{" "}
          <br className="hidden lg:block" />
          A CLEAR VOICE
        </>
      }
      paragraphs={[
        "Your business may know its subject well, but customers need that knowledge in a form they can use. Clear content explains the value of your offer and makes complex decisions easier.",
        "Our Content Marketing Services connect audience needs, search intent and brand messaging with a practical production plan.",
      ]}
    />
  );
}
