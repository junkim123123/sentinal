import type { Metadata } from "next";

import { InquiryPageTemplate } from "@/components/InquiryPageTemplate";
import { inquiryPageContent } from "@/content/site";

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
    />
  );
}
