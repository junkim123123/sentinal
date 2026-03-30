import type { Metadata } from "next";

import { InquiryPageTemplate } from "@/components/InquiryPageTemplate";
import { LinkButton } from "@/components/LinkButton";
import { supportRequestPaths, supportRequestPrompts } from "@/content/site";

export const metadata: Metadata = {
  title: "Support Request",
  description:
    "Contact Sentinel Imports support for delivery issues, workflow interpretation, or advanced escalation.",
};

export default function SupportRequestPage() {
  return (
    <InquiryPageTemplate
      actions={
        <LinkButton href="/support" variant="secondary">
          Review support model
        </LinkButton>
      }
      description="Start here for delivery issues, workflow interpretation, or support questions that need a faster expert response."
      eyebrow="Support request"
      expectationItems={[
        "Sentinel reviews the file, workflow, or escalation context behind the request.",
        "The team decides whether the next step is delivery support, guided interpretation, or a deeper custom review.",
        "Existing client issues stay close to the secure delivery path and current reporting workflow.",
      ]}
      expectationLabel="Support handling"
      expectationTitle="Support requests are routed by urgency and workflow impact, not treated as a generic inbox."
      formPlaceholder="Tell us what changed, which file or workflow is involved, and what help you need."
      heroHighlight="A dedicated intake path for delivery, workflow, and expert support"
      heroImageAlt="Analysts working together in a laboratory environment"
      heroImageSrc="/images/lab.jpg"
      heroLabel="Support intake"
      pathLabel="Support lanes"
      pathTitle="How Sentinel can route the request"
      paths={supportRequestPaths}
      promptLabel="Useful support context"
      promptTitle="What helps the team respond faster"
      prompts={supportRequestPrompts}
      submitLabel="Send request"
      title="Start a dedicated support request when the issue needs a faster expert response"
    />
  );
}
