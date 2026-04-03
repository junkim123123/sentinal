import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ctaDirectory, methodologyGovernanceCards, reportHighlights } from "@/content/site";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "Explore Sentinel Imports data sources, review ownership, and delivery approach for import intelligence.",
};

const methodSignals = [
  {
    label: "Sources",
    value: "Named trade and regulatory inputs",
    detail: "The method starts with traceable inputs rather than a generic feed.",
  },
  {
    label: "Review",
    value: "Human checks stay explicit",
    detail: "Interpretation points remain visible from cleanup to escalation framing.",
  },
  {
    label: "Delivery",
    value: "Monthly brief plus follow-through",
    detail: "The output is built to move from review into sharing and action.",
  },
] as const;

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        variant="method"
        actions={
          <LinkButton href={ctaDirectory.contact.href} variant="secondary">
            {ctaDirectory.contact.label}
          </LinkButton>
        }
        description="Sentinel keeps source inputs, review ownership, and delivery logic visible enough for buyers to inspect."
        eyebrow="Methodology"
        title="A method buyers can inspect"
      />

      <section className="section section-evidence home-proof-section methodology-proof-section">
        <div className="section-inner">
          <div className="method-strip">
            {methodSignals.map((item) => (
              <article className="method-strip-card" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint page-section-tight subpage-shorthead methodology-governance-section">
        <div className="section-inner page-story-grid">
          <div>
            <SectionHeading
              description="Method buyers usually want to know where judgment enters, who owns escalations, and how caution is communicated."
              eyebrow="Review control"
              title="Where review happens"
            />
            <div className="methodology-note-list">
              {methodologyGovernanceCards.map((item) => (
                <article className="page-panel-card page-panel-card-accent" key={item.title}>
                  <span className="small-label">{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              description="The site should show what teams actually receive without restarting the page with another grid."
              eyebrow="Delivery detail"
              title="What the brief shows"
            />
            <article className="page-panel-card">
              <span className="small-label">Included context</span>
              <h3>What teams review each cycle</h3>
              <ul className="detail-list page-checklist">
                {reportHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
