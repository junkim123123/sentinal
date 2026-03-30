import type { Metadata } from "next";

import { InquiryPageTemplate } from "@/components/InquiryPageTemplate";
import { LinkButton } from "@/components/LinkButton";
import { demoPaths, demoPrompts } from "@/content/site";

export const metadata: Metadata = {
  title: "Demo",
  description:
    "Request a Sentinel Imports demo focused on recurring monitoring, custom analysis, or delivery workflow fit.",
};

export default function DemoPage() {
  return (
    <InquiryPageTemplate
      actions={
        <LinkButton href="/product" variant="secondary">
          Review product coverage
        </LinkButton>
      }
      description="Request a guided walkthrough of Sentinel's coverage, working output, and delivery model around the molecules and workflows that matter to you."
      eyebrow="Demo"
      expectationItems={[
        "Sentinel reviews the molecules, teams, and workflow questions you want to cover in the session.",
        "The walkthrough is shaped around recurring monitoring, custom analysis, or delivery fit rather than a generic product script.",
        "The follow-up conversation stays tied to the business need surfaced in the demo.",
      ]}
      expectationLabel="Demo process"
      expectationTitle="Each walkthrough is tailored to the molecules, workflow, and business question you are evaluating."
      formPlaceholder="Tell us which molecules, workflows, or use cases the demo should cover."
      heroHighlight="A walkthrough built around the molecules and workflow that matter to you"
      heroImageAlt="Port activity and logistics infrastructure viewed from above"
      heroImageSrc="/images/hero-port.jpg"
      heroLabel="Live walkthrough"
      pathLabel="Demo paths"
      pathTitle="What the session can be tailored around"
      paths={demoPaths}
      promptLabel="Best demo context"
      promptTitle="What helps tailor the session"
      prompts={demoPrompts}
      submitLabel="Request walkthrough"
      title="Request a focused Sentinel demo built around your monitoring workflow"
    />
  );
}
