import type { Metadata } from "next";

import { InquiryPageTemplate } from "@/components/InquiryPageTemplate";
import { LinkButton } from "@/components/LinkButton";
import { ctaDirectory, inquiryPageContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sentinel Imports to discuss recurring monitoring, a custom intelligence project, or Tableau-ready agricultural chemical reporting.",
};

export default function ContactPage() {
  const content = inquiryPageContent.contact;

  return (
    <InquiryPageTemplate
      {...content}
      actions={
        <>
          <LinkButton href={ctaDirectory.demo.href} variant="secondary">
            {ctaDirectory.demo.label}
          </LinkButton>
          <LinkButton href={ctaDirectory.consultation.href} variant="ghost">
            {ctaDirectory.consultation.label}
          </LinkButton>
        </>
      }
    />
  );
}
