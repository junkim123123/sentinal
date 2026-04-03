import type { Metadata } from "next";

import { InquiryPageTemplate } from "@/components/InquiryPageTemplate";
import { LinkButton } from "@/components/LinkButton";
import { ctaDirectory, inquiryPageContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Support Request",
  description:
    "Contact Sentinel Imports support for delivery issues, workflow interpretation, or advanced escalation.",
};

export default function SupportRequestPage() {
  const content = inquiryPageContent["support-request"];

  return (
    <InquiryPageTemplate
      {...content}
      actions={
        <>
          <LinkButton href="/support" variant="secondary">
            Review support policy
          </LinkButton>
          <LinkButton href={ctaDirectory.contact.href} variant="ghost">
            {ctaDirectory.contact.label}
          </LinkButton>
        </>
      }
    />
  );
}
