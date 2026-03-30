import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms information for the Sentinel Imports website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        description="This placeholder terms page gives the footer a real legal destination and can be replaced with approved contract language later."
        eyebrow="Terms"
        title="Website terms and product information notices"
      />
      <section className="section">
        <div className="section-inner narrow">
          <div className="stacked-copy">
            <p className="statement">
              Public website content is informational and intended to start a
              sales conversation around Sentinel&apos;s current agricultural
              chemical intelligence services.
            </p>
            <p className="statement">
              Final project scope, delivery format, and reporting access are
              defined during direct client engagement.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
