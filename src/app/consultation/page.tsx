import type { Metadata } from "next";

import { InquiryPageTemplate } from "@/components/InquiryPageTemplate";
import { LinkButton } from "@/components/LinkButton";
import { ctaDirectory, inquiryPageContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Consultation",
  description:
    "Start a Sentinel Imports consultation around recurring reporting, custom intelligence, or workflow fit.",
};

export default function ConsultationPage() {
  const content = inquiryPageContent.consultation;

  return (
    <InquiryPageTemplate
      {...content}
      actions={
        <>
          <LinkButton href={ctaDirectory.contact.href} variant="secondary">
            {ctaDirectory.contact.label}
          </LinkButton>
          <LinkButton href={ctaDirectory.demo.href} variant="ghost">
            {ctaDirectory.demo.label}
          </LinkButton>
        </>
      }
    />
  );
}
