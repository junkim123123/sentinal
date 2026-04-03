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
    detail: "Trade, customs, regulatory, and crop-data systems feed the current method.",
  },
  {
    label: "Normalization",
    value: "Molecule-level structure",
    detail: "Records are translated into views built for monitoring and company drill-down.",
  },
  {
    label: "Review ownership",
    value: "Human checks stay visible",
    detail: "Human review stays explicit so buyers can see where interpretation enters.",
  },
  {
    label: "Delivery",
    value: "Monthly brief + follow-through",
    detail: "The output is built for review, sharing, escalation, and support.",
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
        description="Sentinel combines named sources, molecule-level normalization, human review, and client-ready delivery into a method buyers can inspect."
        eyebrow="Methodology"
        theme="dark"
        visual={
          <div className="page-hero-brief page-hero-brief-dark page-hero-brief-hero">
            <div className="page-hero-brief-head">
              <div>
                <span className="small-label">Source to delivery</span>
                <strong>A short workflow with visible review</strong>
              </div>
              <p>
                Trust improves when buyers can see where data is normalized,
                where judgment enters, and how the output gets packaged.
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
        title="From source records to review-ready output"
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

      <section className="section section-tint page-section-tight subpage-shorthead methodology-governance-section">
        <div className="section-inner">
          <SectionHeading
            description="Method buyers usually want three answers: who reviews anomalies, how escalations are handled, and where judgment enters."
            eyebrow="Review control"
            title="Where review happens"
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

      <section className="section page-section-tight subpage-shorthead methodology-detail-section">
        <div className="section-inner page-story-grid">
          <div>
            <SectionHeading
              description="The page should also show what teams can actually inspect in the deliverable, not only how the data is sourced."
              eyebrow="Report detail"
              title="What the brief shows"
            />
            <article className="page-panel-card page-panel-card-accent">
              <span className="small-label">Included context</span>
              <h3>What teams review each cycle</h3>
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
              <h3>Molecule examples in scope</h3>
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
