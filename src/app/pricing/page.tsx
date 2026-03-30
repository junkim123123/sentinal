import type { Metadata } from "next";

import { AmbientSignalField } from "@/components/AmbientSignalField";
import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { pricingBuckets, pricingNotes } from "@/content/site";

export const metadata: Metadata = {
  title: "Engagement Models",
  description:
    "See how Sentinel Imports scopes monitoring, investigation, and embedded intelligence relationships without forcing a public price-card model.",
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
  const engagementSignals = pricingBuckets.map((bucket) => ({
    label: bucket.name,
    title: bucket.fit,
    text: bucket.description,
  }));

  return (
    <>
      <PageHero
        actions={<LinkButton href="/consultation">Discuss engagement fit</LinkButton>}
        description="Sentinel scopes work around monitoring depth, investigation pressure, and stakeholder complexity rather than a public SaaS rate card."
        eyebrow="Engagement models"
        theme="dark"
        visual={
          <AmbientSignalField
            description="The relationship expands as cadence, investigative depth, and internal stakeholder surface expand."
            items={engagementSignals}
            label="Scope architecture"
            title="Three engagement models explain how Sentinel can sit inside the work."
          />
        }
        title="Three engagement models that make scope easier to understand"
      />

      <section className="section page-section-tight sentinel-subpage-emphasis engagement-models-section">
        <div className="section-inner">
          <SectionHeading
            description="This page is meant to clarify operating fit, not publish public sticker prices."
            eyebrow="Relationship models"
            title="How Sentinel scopes recurring and custom work"
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

      <section className="section section-tint page-section-tight engagement-notes-section">
        <div className="section-inner page-story-grid">
          <div>
            <SectionHeading
              description="These notes do the trust-building work by showing how Sentinel scopes responsibly."
              eyebrow="Scope notes"
              title="What the engagement models are meant to clarify"
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
