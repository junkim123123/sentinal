import type { Metadata } from "next";

import { InquiryPageTemplate } from "@/components/InquiryPageTemplate";
import { demoPaths, demoPrompts } from "@/content/site";

export const metadata: Metadata = {
  title: "Private Briefing",
  description:
    "Request a Sentinel Imports private briefing focused on recurring monitoring, custom analysis, or delivery workflow fit.",
};

export default function DemoPage() {
  return (
    <InquiryPageTemplate
      assuranceLabel="Review standard"
      assuranceText="Sentinel keeps the session narrow, confidential, and anchored to the decision behind the request rather than running a generic product tour."
      assuranceTitle="Private briefings are shaped around fit, not volume."
      description="Request a guided private briefing of Sentinel's coverage, working output, and delivery model around the molecules and workflows that matter to you."
      eyebrow="Private briefing"
      expectationItems={[
        "Sentinel reviews the molecules, teams, and workflow questions you want to cover in the session.",
        "The walkthrough is shaped around recurring monitoring, custom analysis, or delivery fit rather than a generic product script.",
        "The follow-up conversation stays tied to the business need surfaced in the private briefing.",
      ]}
      expectationLabel="Briefing process"
      expectationTitle="Each walkthrough is tailored to the molecules, workflow, and business question you are evaluating."
      formPlaceholder="Tell us which molecules, workflows, or use cases the private briefing should cover."
      heroHighlight="A walkthrough built around the molecules and workflow that matter to you"
      heroLabel="Private session"
      pathLabel="Briefing paths"
      pathTitle="What the session can be tailored around"
      paths={demoPaths}
      promptLabel="Best briefing context"
      promptTitle="What helps tailor the session"
      prompts={demoPrompts}
      submitLabel="Request private briefing"
      title="Request a private Sentinel briefing built around your monitoring workflow"
    />
  );
}
