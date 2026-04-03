import type { Metadata } from "next";

import { InquiryPageTemplate } from "@/components/InquiryPageTemplate";
import { LinkButton } from "@/components/LinkButton";
import { ctaDirectory, inquiryPageContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Private Demo",
  description:
    "Request a Sentinel Imports private demo or free sample focused on recurring monitoring, molecule depth, or delivery workflow fit.",
};

export default function DemoPage() {
  const content = inquiryPageContent.demo;

  return (
    <InquiryPageTemplate
      {...content}
      actions={
        <>
          <LinkButton href={ctaDirectory.contact.href} variant="secondary">
            {ctaDirectory.contact.label}
          </LinkButton>
          <LinkButton href={ctaDirectory.consultation.href} variant="ghost">
            {ctaDirectory.consultation.label}
          </LinkButton>
        </>
      }
    />
  );
}
