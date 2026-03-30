import type { Metadata } from "next";

import { InquiryPageTemplate } from "@/components/InquiryPageTemplate";
import { LinkButton } from "@/components/LinkButton";
import { contactPrompts, engagementModels, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sentinel Imports to discuss recurring monitoring, a custom intelligence project, or Tableau-ready agricultural chemical reporting.",
};

export default function ContactPage() {
  return (
    <InquiryPageTemplate
      actions={
        <LinkButton external href={siteConfig.loginHref} variant="ghost">
          Existing client log in
        </LinkButton>
      }
      description="Start the conversation when you need recurring monitoring, a custom investigation, or a delivery model that fits the way your team works."
      eyebrow="Contact"
      expectationItems={[
        "Sentinel reviews the molecule scope, workflow need, and business context behind the request.",
        "The team confirms whether the best next step is a demo, a scoped commercial conversation, or a direct project discussion.",
        "Follow-up stays centered on the decision your team needs to make next.",
      ]}
      expectationLabel="What happens next"
      expectationTitle="The team routes the conversation around the reporting need, not a generic queue."
      formPlaceholder="Tell us the molecules, reporting need, and business context behind the request."
      heroHighlight="Start with the reporting need and Sentinel will help shape the right scope"
      heroImageAlt="Cargo containers stacked in a port yard"
      heroImageSrc="/images/hero-port.jpg"
      heroLabel="Conversation start"
      pathLabel="Conversation paths"
      pathTitle="Typical ways a request gets scoped"
      paths={engagementModels}
      promptLabel="Useful context"
      promptTitle="What makes the conversation more useful"
      prompts={contactPrompts}
      submitLabel="Send inquiry"
      title="Start with the reporting question and let Sentinel shape the right scope around it"
    />
  );
}
