import type { Metadata } from "next";

import { AmbientSignalField } from "@/components/AmbientSignalField";
import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ctaDirectory,
  pricingBuckets,
  pricingNotes,
  pricingScopeDrivers,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Engagement Models",
  description:
    "See how Sentinel Imports scopes monitoring, investigation, and embedded intelligence relationships without forcing a public price-card model.",
};

const pricingProcess = [
  {
    step: "01",
    title: "Start with the category and decision",
    text: "Scope begins with the category surface, timing, and the decision the team is making.",
  },
  {
    step: "02",
    title: "Set cadence and depth",
    text: "Recurring monitoring, escalation speed, and investigation depth change the workload quickly.",
  },
  {
    step: "03",
    title: "Turn that shape into a proposal",
    text: "Sentinel uses the relationship models to frame scope before writing a proposal.",
  },
] as const;

export default function PricingPage() {
  const engagementSignals = pricingBuckets.map((bucket) => ({
    label: bucket.name,
    title: bucket.fit,
    text: bucket.description,
  }));

  return (
    <>
      <PageHero
        actions={
          <>
            <LinkButton href={ctaDirectory.consultation.href}>{ctaDirectory.consultation.label}</LinkButton>
            <LinkButton href={ctaDirectory.contact.href} variant="secondary">
              {ctaDirectory.contact.label}
            </LinkButton>
          </>
        }
        description="Sentinel does not post a rate card because scope changes with molecule breadth, cadence, investigation depth, and stakeholder surface."
        eyebrow="Engagement models"
        theme="dark"
        visual={
          <AmbientSignalField
            description="The relationship grows as coverage, review cadence, depth, and stakeholder count expand."
            items={engagementSignals}
            label="Scope architecture"
            title="Three models frame the commercial shape."
          />
        }
        title="What expands scope before price"
      />

      <section className="section section-evidence home-proof-section subpage-shorthead">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Scope drivers"
            title="What usually expands scope"
            description="Buyers should be able to explain proposal size before the pricing conversation starts."
          />
          <div className="page-panel-grid page-panel-grid-four">
            {pricingScopeDrivers.map((item) => (
              <article className="page-panel-card" key={item.title}>
                <span className="small-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section-tight sentinel-subpage-emphasis subpage-shorthead engagement-models-section">
        <div className="section-inner">
          <SectionHeading
            description="These models clarify relationship shape, not a SaaS-style pricing table."
            eyebrow="Relationship models"
            title="How Sentinel packages work"
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

      <section className="section section-tint page-section-tight subpage-shorthead engagement-notes-section">
        <div className="section-inner page-story-grid">
          <div>
            <SectionHeading
              description="The point is to replace price-card confusion with clearer scope language."
              eyebrow="Scope notes"
              title="What this page answers"
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
              description="A visible path lowers uncertainty before the first commercial call."
              eyebrow="How buying starts"
              title="How scope starts"
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
