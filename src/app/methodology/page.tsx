import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ctaDirectory,
  dataSources,
  methodologyGovernanceCards,
  methodologySteps,
  moleculeExamples,
  reportHighlights,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "Explore Sentinel Imports data sources, review ownership, and delivery approach for import intelligence.",
};

const methodSignals = [
  {
    label: "Source stack",
    value: "7 named inputs",
    detail: "Trade, customs, regulatory, and crop-data systems inform the current method.",
  },
  {
    label: "Normalization",
    value: "Molecule-level structure",
    detail: "Records are translated into views built for category-specific monitoring and company drill-down.",
  },
  {
    label: "Review ownership",
    value: "Human checks stay visible",
    detail: "Sentinel makes the human review step explicit so buyers know where interpretation enters the workflow.",
  },
  {
    label: "Delivery",
    value: "Monthly brief + follow-through",
    detail: "The output is designed to support review, sharing, escalation, and direct support.",
  },
] as const;

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <LinkButton href="/product" variant="secondary">
              Review product
            </LinkButton>
            <LinkButton href={ctaDirectory.contact.href} variant="ghost">
              {ctaDirectory.contact.label}
            </LinkButton>
          </>
        }
        description="Sentinel combines named data sources, molecule-level normalization, human review ownership, and client-ready delivery to make trade records more usable and more defensible."
        eyebrow="Methodology"
        theme="dark"
        visual={
          <div className="page-hero-brief page-hero-brief-dark page-hero-brief-hero">
            <div className="page-hero-brief-head">
              <div>
                <span className="small-label">Source to delivery</span>
                <strong>A short workflow with visible review and governance</strong>
              </div>
              <p>
                The method builds more trust when buyers can see where raw records
                are normalized, where judgment enters, and how output is shaped for
                client use.
              </p>
            </div>
            <div className="page-hero-brief-grid">
              {methodologySteps.map((item) => (
                <article className="page-hero-stat" key={item.step}>
                  <span>{item.step}</span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
            <div className="page-hero-tag-row">
              {dataSources.slice(0, 5).map((source) => (
                <span className="page-hero-tag" key={source}>
                  {source}
                </span>
              ))}
            </div>
          </div>
        }
        title="A disciplined path from source records to client-ready reporting"
      />

      <section className="section section-evidence home-proof-section methodology-proof-section">
        <div className="section-inner">
          <div className="page-signal-band">
            {methodSignals.map((item) => (
              <article className="page-signal-card" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section-tight sentinel-subpage-emphasis methodology-process-section">
        <div className="section-inner">
          <SectionHeading
            description="A method page needs to explain both the technical path and the human controls that keep the output reviewable."
            eyebrow="How it works"
            title="Three steps from records to working output"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {methodologySteps.map((item) => (
              <article className="page-panel-card" key={item.step}>
                <span className="small-label">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint page-section-tight methodology-governance-section">
        <div className="section-inner">
          <SectionHeading
            description="These governance notes answer the buyer question behind the methodology page: who reviews the output, how anomalies are handled, and what happens when a signal deserves tighter checking."
            eyebrow="Review and governance"
            title="How Sentinel handles quality control and escalations"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {methodologyGovernanceCards.map((item) => (
              <article className="page-panel-card page-panel-card-accent" key={item.title}>
                <span className="small-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section-tight methodology-detail-section">
        <div className="section-inner page-story-grid">
          <div>
            <SectionHeading
              description="The output details matter because they show what teams can actually review in the monthly brief, not only how the data was sourced."
              eyebrow="Report detail"
              title="What Sentinel reporting is designed to surface"
            />
            <article className="page-panel-card page-panel-card-accent">
              <span className="small-label">Included context</span>
              <h3>What teams can review in the monthly brief</h3>
              <ul className="detail-list page-checklist">
                {reportHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="page-panel-grid">
            <article className="page-panel-card">
              <span className="small-label">Named inputs</span>
              <h3>Current source stack</h3>
              <div className="page-hero-tag-row page-hero-tag-row-light">
                {dataSources.map((source) => (
                  <span className="page-hero-tag page-hero-tag-light" key={source}>
                    {source}
                  </span>
                ))}
              </div>
            </article>
            <article className="page-panel-card">
              <span className="small-label">Representative coverage</span>
              <h3>Molecule examples in the current lens</h3>
              <div className="page-hero-tag-row page-hero-tag-row-light">
                {moleculeExamples.map((molecule) => (
                  <span className="page-hero-tag page-hero-tag-light" key={molecule}>
                    {molecule}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
