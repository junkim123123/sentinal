import type { Metadata } from "next";

import { InquiryPageTemplate } from "@/components/InquiryPageTemplate";
import { LinkButton } from "@/components/LinkButton";
import { consultationPaths, consultationPrompts } from "@/content/site";

export const metadata: Metadata = {
  title: "Consultation",
  description:
    "Start a Sentinel Imports consultation around recurring reporting, custom intelligence, or workflow fit.",
};

export default function ConsultationPage() {
  return (
    <InquiryPageTemplate
      actions={
        <LinkButton href="/about" variant="secondary">
          Review Sentinel
        </LinkButton>
      }
      assuranceLabel="Advisory standard"
      assuranceText="Consultations are handled as direct strategic intake, with the business decision clarified before scope, cadence, or reporting format is proposed."
      assuranceTitle="The advisory conversation starts with judgment, not a canned sequence."
      description="Start here when the business problem is already clear and the next step is a more private strategy conversation about scope, delivery, and stakeholders."
      eyebrow="Advisory intake"
      expectationItems={[
        "Sentinel reviews the commercial, sourcing, compliance, or market question behind the request.",
        "The conversation is shaped around the reporting model and stakeholder group that will use the output.",
        "The next step can move directly into scoping recurring work, a custom project, or an executive-ready brief.",
      ]}
      expectationLabel="Advisory flow"
      expectationTitle="The discussion is built around the business decision first, then the reporting model."
      formPlaceholder="Tell us the business problem, stakeholder group, and timing behind the conversation."
      heroHighlight="A strategy conversation grounded in the reporting and decision need"
      heroImageAlt="Agricultural field operation captured from above"
      heroImageSrc="/images/fields.jpg"
      heroLabel="Advisory start"
      pathLabel="Conversation types"
      pathTitle="How Sentinel can frame the discussion"
      paths={consultationPaths}
      promptLabel="Best starting points"
      promptTitle="What makes the consultation more productive"
      prompts={consultationPrompts}
      submitLabel="Request consultation"
      title="Use a dedicated advisory intake when the next step needs to be defined with more precision"
    />
  );
}
