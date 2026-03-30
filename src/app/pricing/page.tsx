import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { pricingBuckets, pricingNotes } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing Approach",
  description:
    "See Sentinel Imports' three-bucket pricing approach for recurring monitoring, custom intelligence, and strategic workflow support.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <LinkButton href="/consultation">Discuss your scope</LinkButton>
            <LinkButton href="/demo" variant="secondary">
              Request a demo
            </LinkButton>
          </>
        }
        description="Sentinel uses three buckets to explain how scope expands, while keeping final pricing inside a real commercial conversation."
        eyebrow="Pricing approach"
        theme="light"
        title="Three buckets that clarify scope"
      />

      <section className="section page-section-tight">
        <div className="section-inner">
          <SectionHeading
            description="See how Sentinel scopes recurring monitoring, deeper investigations, and more embedded workflow support."
            eyebrow="Three buckets"
            title="How Sentinel packages recurring and custom work"
          />
          <div className="line-column-grid">
            {pricingBuckets.map((bucket) => (
              <article className="line-column" key={bucket.name}>
                <span className="small-label">{bucket.name}</span>
                <h3>{bucket.fit}</h3>
                <p>{bucket.description}</p>
                <ul className="detail-list">
                  {bucket.inclusions.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint page-section-tight">
        <div className="section-inner">
          <div className="simple-proof-band">
            {pricingNotes.map((note) => (
              <div className="simple-proof-item simple-proof-item-note" key={note}>
                <p>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
