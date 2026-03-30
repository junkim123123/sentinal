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

const pricingProcess = [
  {
    step: "01",
    title: "Start with the reporting decision",
    text: "Scope begins with the question the team needs answered, not a pre-fixed software package.",
  },
  {
    step: "02",
    title: "Shape coverage and delivery around the workflow",
    text: "Molecule scope, cadence, custom work, and output format determine the right commercial level.",
  },
  {
    step: "03",
    title: "Turn the right bucket into a scoped proposal",
    text: "The buckets clarify the buying conversation before detailed proposal work begins.",
  },
];

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
        theme="dark"
        visual={
          <div className="page-hero-brief page-hero-brief-dark">
            <div className="page-hero-brief-head">
              <div>
                <span className="small-label">Commercial structure</span>
                <strong>Three buckets that clarify how scope expands</strong>
              </div>
              <p>
                The pricing page should create confidence about buying logic even
                without posting public rates.
              </p>
            </div>
            <div className="page-hero-brief-grid">
              {pricingBuckets.map((bucket) => (
                <article className="page-hero-stat" key={bucket.name}>
                  <span>{bucket.name}</span>
                  <strong>{bucket.fit}</strong>
                  <p>{bucket.description}</p>
                </article>
              ))}
            </div>
          </div>
        }
        title="Three pricing buckets that make scope easier to understand"
      />

      <section className="section page-section-tight">
        <div className="section-inner">
          <SectionHeading
            description="The page should read like a serious commercial framework: clear fit, clear inclusions, and a clear path to the next conversation."
            eyebrow="Three buckets"
            title="How Sentinel packages recurring and custom work"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {pricingBuckets.map((bucket) => (
              <article className="page-panel-card page-panel-card-accent" key={bucket.name}>
                <span className="small-label">{bucket.name}</span>
                <h3>{bucket.fit}</h3>
                <p>{bucket.description}</p>
                <ul className="detail-list page-checklist">
                  {bucket.inclusions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint page-section-tight">
        <div className="section-inner page-story-grid">
          <div>
            <SectionHeading
              description="The pricing notes do the trust-building work here by showing how Sentinel scopes responsibly."
              eyebrow="Commercial notes"
              title="What the buckets are meant to clarify"
            />
            <div className="simple-text-list">
              {pricingNotes.map((note) => (
                <div className="simple-text-row" key={note}>
                  <p>{note}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              description="The buying conversation is usually more straightforward when the process is visible."
              eyebrow="How buying starts"
              title="A short path from first question to scoped proposal"
            />
            <div className="compact-step-grid">
              {pricingProcess.map((item) => (
                <article className="compact-step" key={item.step}>
                  <span className="home-method-number">{item.step}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
