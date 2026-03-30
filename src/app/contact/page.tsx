import type { Metadata } from "next";

import { InquiryPageTemplate } from "@/components/InquiryPageTemplate";
import { contactPrompts, engagementModels } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sentinel Imports to discuss recurring monitoring, a custom intelligence project, or Tableau-ready agricultural chemical reporting.",
};

export default function ContactPage() {
  return (
    <InquiryPageTemplate
      assuranceLabel="Handling standard"
      assuranceText="Initial requests are reviewed directly and scoped with discretion, so the first response clarifies fit instead of pushing a generic sales path."
      assuranceTitle="Private intake is designed to filter for fit, timing, and seriousness."
      description="Start the conversation when you need recurring monitoring, a custom investigation, or a delivery model that fits the way your team works."
      eyebrow="Private intake"
      expectationItems={[
        "Sentinel reviews the molecule scope, workflow need, and business context behind the request.",
        "The team confirms whether the best next step is a private briefing, a scoped commercial conversation, or a direct project discussion.",
        "Follow-up stays centered on the decision your team needs to make next.",
      ]}
      expectationLabel="Intake review"
      expectationTitle="The team routes the conversation around the reporting need, not a generic queue."
      formPlaceholder="Tell us the molecules, reporting need, and business context behind the request."
      heroHighlight="Start with the reporting need and Sentinel will help shape the right scope"
      heroLabel="Conversation start"
      pathLabel="Scope paths"
      pathTitle="Typical ways a request gets scoped"
      paths={engagementModels}
      promptLabel="Useful context"
      promptTitle="What makes the conversation more useful"
      prompts={contactPrompts}
      submitLabel="Send private request"
      title="Begin a private intake and let Sentinel shape the right reporting scope around it"
    />
  );
}
