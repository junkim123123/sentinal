import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";

export const metadata: Metadata = {
  title: "Thanks",
  description: "Confirmation page for Sentinel Imports contact requests.",
};

export default function ThanksPage() {
  return (
    <section className="page-hero">
      <div className="section-inner narrow thanks-panel">
        <span className="eyebrow">Request received</span>
        <h1>Thanks for reaching out.</h1>
        <p>
          Sentinel has your request. The next reply will focus on fit, scope,
          and the best way to shape the reporting need you described.
        </p>
        <div className="button-row">
          <LinkButton href="/">Back to home</LinkButton>
          <LinkButton href="/solutions" variant="secondary">
            Review solutions
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
