import type { Metadata } from "next";

import { InquiryPageTemplate } from "@/components/InquiryPageTemplate";
import { demoPaths, demoPrompts } from "@/content/site";

export const metadata: Metadata = {
  title: "Private Demo",
  description:
    "Request a Sentinel Imports private demo or free sample focused on recurring monitoring, molecule depth, or delivery workflow fit.",
};

export default function DemoPage() {
  return (
    <InquiryPageTemplate
      assuranceLabel="Review standard"
      assuranceText="Sentinel keeps the session or sample review narrow, confidential, and anchored to the decision behind the request rather than running a generic product tour."
      assuranceTitle="Private demos are shaped around fit, not volume."
      description="Request a guided private demo or free sample review of Sentinel's coverage, working output, and delivery model around the molecules and workflows that matter to you."
      eyebrow="Private demo"
      expectationItems={[
        "Sentinel reviews the molecules, teams, and workflow questions you want to cover in the session or sample review.",
        "The walkthrough can focus on recurring monitoring, company detail, downloadable sample depth, or delivery fit rather than a generic product script.",
        "The follow-up conversation stays tied to the business need surfaced in the demo.",
      ]}
      expectationLabel="Demo process"
      expectationTitle="Each walkthrough is tailored to the molecules, workflow, and business question you are evaluating."
      formPlaceholder="Tell us which molecules, workflows, or sample-data questions the private demo should cover."
      heroHighlight="A private demo or sample review built around the molecules and workflow that matter to you"
      heroLabel="Private session"
      pathLabel="Demo paths"
      pathTitle="What the session can be tailored around"
      paths={demoPaths}
      promptLabel="Best demo context"
      promptTitle="What helps tailor the session"
      prompts={demoPrompts}
      submitLabel="Request private demo"
      title="Request a private Sentinel demo built around your monitoring workflow"
    />
  );
}
