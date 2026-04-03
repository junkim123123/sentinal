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
    title: "Start with the decision and the category surface",
    text: "Scope begins with what the team needs to know, which molecules or categories matter, and how often the signal must be reviewed.",
  },
  {
    step: "02",
    title: "Translate that need into cadence, delivery, and investigation depth",
    text: "Recurring monitoring, custom investigations, and executive circulation all change the commercial shape.",
  },
  {
    step: "03",
    title: "Turn the right relationship into a scoped proposal",
    text: "The engagement models are there to frame the buying conversation before Sentinel writes a proposal.",
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
        description="Sentinel does not publish a public rate card because the real scope drivers are molecule breadth, cadence, investigation depth, and how many stakeholders need to trust and circulate the output."
        eyebrow="Engagement models"
        theme="dark"
        visual={
          <AmbientSignalField
            description="The relationship expands as category coverage, review cadence, investigative depth, and stakeholder surface expand."
            items={engagementSignals}
            label="Scope architecture"
            title="Three engagement models explain how Sentinel can sit inside the work."
          />
        }
        title="Understand what expands scope before you ever talk about price"
      />

      <section className="section section-evidence home-proof-section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Scope drivers"
            title="Four things usually determine how large the engagement becomes"
            description="This page works better when buyers can explain what makes a proposal larger or smaller before the commercial conversation starts."
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

      <section className="section page-section-tight sentinel-subpage-emphasis engagement-models-section">
        <div className="section-inner">
          <SectionHeading
            description="The engagement models are meant to clarify relationship shape, not to imitate a public SaaS price table."
            eyebrow="Relationship models"
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

      <section className="section section-tint page-section-tight engagement-notes-section">
        <div className="section-inner page-story-grid">
          <div>
            <SectionHeading
              description="These notes build trust because they explain why the website points toward a scoped conversation instead of pretending pricing can be reduced to a single posted number."
              eyebrow="Scope notes"
              title="What this page is trying to clarify before a proposal exists"
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
              description="A visible buying process reduces uncertainty and helps buyers understand what kind of conversation to ask for next."
              eyebrow="How buying starts"
              title="A short path from first conversation to scoped engagement"
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
