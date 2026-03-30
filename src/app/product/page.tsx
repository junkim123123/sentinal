import type { Metadata } from "next";

import { BriefArtifactPreview } from "@/components/BriefArtifactPreview";
import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  integrationPoints,
  productClusters,
  productHeroCapabilities,
  productInclusions,
  workflowStages,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Explore Sentinel Imports product coverage, inclusions, workflows, integrations, and sample output visuals.",
};

const productSignals = [
  {
    label: "Coverage design",
    value: "Watchlist-first",
    detail: "Configured around the molecules your team actually follows.",
  },
  {
    label: "Decision support",
    value: "Signal + context",
    detail: "Supplier movement, landed value, and change interpretation in one read.",
  },
  {
    label: "Delivery model",
    value: "Analyst-ready",
    detail: "Excel, Tableau, and secure delivery fit for current workflows.",
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        actions={<LinkButton href="/demo">Request private briefing</LinkButton>}
        description="Sentinel is built around recurring molecule monitoring, landed-value context, and delivery formats that fit real operating teams."
        eyebrow="Product"
        theme="dark"
        visual={
          <div className="page-hero-brief page-hero-brief-dark page-hero-brief-hero product-hero-artifact">
            <BriefArtifactPreview />
            <div className="page-hero-tag-row">
              {productHeroCapabilities.map((item) => (
                <span className="page-hero-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        }
        title="Import intelligence built to fit how teams already work"
      />

      <section className="section section-evidence home-proof-section">
        <div className="section-inner">
          <div className="page-signal-band">
            {productSignals.map((item) => (
              <article className="page-signal-card" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section-tight product-core-section">
        <div className="section-inner product-core-shell">
          <SectionHeading
            description="The product works best when the page explains the operating model, the included intelligence, and the delivery fit in one pass."
            eyebrow="Core design"
            title="What the Sentinel product is structured to deliver"
          />
          <div className="page-panel-grid page-panel-grid-two">
            {productClusters.map((item) => (
              <article className="page-panel-card" key={item.title}>
                <span className="small-label">Capability cluster</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul className="detail-list page-checklist">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
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
              description="A Sentinel scope is clearer when included output and workflow fit are shown together."
              eyebrow="Scope and fit"
              title="What teams receive and how the work lands"
            />
            <article className="page-panel-card page-panel-card-accent">
              <span className="small-label">Standard inclusions</span>
              <h3>What a typical product scope includes</h3>
              <ul className="detail-list page-checklist">
                {productInclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="stack-panel">
            <div className="stack-panel-top">
              <div>
                <span className="small-label">Workflow fit</span>
                <h3>Designed for teams reviewing the brief together</h3>
              </div>
              <p>
                Sentinel works best when delivery is easy to review, annotate,
                share, and escalate.
              </p>
            </div>
            <div className="stack-panel-grid">
              {integrationPoints.map((item) => (
                <div className="stack-panel-row" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section page-section-tight">
        <div className="section-inner">
          <SectionHeading
            description="The workflow can stay short as long as it is obvious how raw records turn into something the business can use."
            eyebrow="Source to action"
            title="How the product moves from records to decisions"
          />
          <div className="page-panel-grid page-panel-grid-four">
            {workflowStages.map((item) => (
              <article className="page-panel-card" key={item.step}>
                <span className="small-label">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
