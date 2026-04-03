import type { Metadata } from "next";

import { BriefArtifactPreview } from "@/components/BriefArtifactPreview";
import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ctaDirectory,
  integrationPoints,
  moleculeCategoryGroups,
  pricingBuckets,
  productHeroCapabilities,
  productInclusions,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Explore Sentinel Imports product coverage, grouped molecule views, pricing models, deliverable structure, and direct demo or contact paths.",
};

const productSignals = [
  {
    label: "Artifact proof",
    value: "Workbook + export logic",
    detail: "The product is presented as a reporting pack with summary, working tabs, and export-ready rows.",
  },
  {
    label: "Category posture",
    value: "Agro first, pharma and fertilizer adjacent",
    detail: "The site keeps agrochemical depth visible while showing adjacent strategic chemical coverage as a real fit path.",
  },
  {
    label: "Review model",
    value: "Named sources + analyst interpretation",
    detail: "Human review and signal framing stay visible instead of hiding behind a generic dashboard promise.",
  },
  {
    label: "Delivery fit",
    value: "Excel + Tableau + brief",
    detail: "The product fits analyst workflows, manager review, and leadership circulation without a platform rollout.",
  },
] as const;

const deliveryProofCards = [
  {
    label: "Cadence",
    title: "Recurring monitoring can arrive on a predictable monthly rhythm.",
    description:
      "The product is designed around reviewed refreshes, not a one-time static export that dies after the first meeting.",
  },
  {
    label: "File structure",
    title: "Summary, drill-down, and export surfaces sit inside the same deliverable family.",
    description:
      "Buyers can see how a headline brief, company detail, and row-level tables connect without needing a custom explanation every cycle.",
  },
  {
    label: "Follow-through",
    title: "Escalation is part of the product story, not a separate service afterthought.",
    description:
      "When the watchlist changes materially, Sentinel can move from recurring monitoring into deeper supplier or market review without losing context.",
  },
] as const;

export default function ProductPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <LinkButton href={ctaDirectory.demo.href}>{ctaDirectory.demo.label}</LinkButton>
            <LinkButton href={ctaDirectory.contact.href} variant="secondary">
              {ctaDirectory.contact.label}
            </LinkButton>
          </>
        }
        description="Sentinel is built around recurring molecule monitoring, company drill-down, landed-value context, and deliverables that feel like real working output instead of a generic portal demo."
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
        title="Import intelligence built to feel like a deliverable, not a teaser"
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
            description="The strongest product story combines included intelligence, delivery mechanics, and who can act on the output without forcing buyers to infer the workflow."
            eyebrow="Core product"
            title="What Sentinel is built to deliver every cycle"
          />
          <div className="page-panel-grid page-panel-grid-two">
            <article className="page-panel-card">
              <span className="small-label">Included intelligence</span>
              <h3>Company, supplier, and molecule detail in one reviewed structure</h3>
              <p>
                Sentinel keeps the scope narrow enough to act on by focusing on
                company drill-down, supplier movement, landed-value context, and
                file formats that carry the signal cleanly across teams.
              </p>
              <ul className="detail-list page-checklist">
                {productInclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="page-panel-card page-panel-card-accent">
              <span className="small-label">Workflow fit</span>
              <h3>Built for working teams instead of a self-serve data destination</h3>
              <p>
                Buyers should be able to see how the product fits analyst review,
                manager circulation, and executive briefing without imagining a
                heavy rollout or a new internal operating model.
              </p>
              <ul className="detail-list page-checklist">
                {integrationPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-tint page-section-tight">
        <div className="section-inner">
          <SectionHeading
            description="These delivery cues raise product realism by showing how the artifact behaves once it leaves the screen and enters a client workflow."
            eyebrow="Delivery proof"
            title="Why the product reads like a contractable deliverable"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {deliveryProofCards.map((item) => (
              <article className="page-panel-card" key={item.title}>
                <span className="small-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section-tight sentinel-subpage-emphasis">
        <div className="section-inner">
          <SectionHeading
            description="Category groupings help buyers see that agrochemical remains the deepest public lane while adjacent pharma and fertilizer scopes can still fit the same operating model."
            eyebrow="Category coverage"
            title="One molecule-first structure across core and adjacent categories"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {moleculeCategoryGroups.map((group) => (
              <article className="page-panel-card molecule-category-card" key={group.title}>
                <span className="small-label">Illustrative grouping</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="molecule-scroll-list" role="list" aria-label={group.title}>
                  {group.bullets.map((item) => (
                    <span className="molecule-pill" key={item} role="listitem">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint page-section-tight engagement-models-section">
        <div className="section-inner">
          <SectionHeading
            description="The product page should still explain how scope expands commercially, but the expansion needs to read like delivery complexity instead of an abstract pricing ladder."
            eyebrow="Engagement growth"
            title="How the product scope expands commercially"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {pricingBuckets.map((bucket) => (
              <article className="page-panel-card page-panel-card-accent" key={bucket.name}>
                <span className="small-label">{bucket.name}</span>
                <h3>{bucket.name}</h3>
                <p className="page-panel-subtitle">{bucket.fit}</p>
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

      <section className="section page-section-tight">
        <div className="section-inner">
          <SectionHeading
            description="Keep the next steps explicit so buyers can validate the product, start a commercial intake, or open a strategic advisory path without guessing which page does what."
            eyebrow="Next move"
            title="Choose the route that matches the question in front of the team"
          />
          <div className="page-panel-grid page-panel-grid-three">
            <article className="page-panel-card">
              <span className="small-label">{ctaDirectory.demo.label}</span>
              <h3>Use Demo for product validation</h3>
              <p>Best when the team wants to see the workflow, artifact depth, and live review structure before moving into deeper scoping.</p>
              <div className="button-row page-button-row">
                <LinkButton href={ctaDirectory.demo.href}>{ctaDirectory.demo.label}</LinkButton>
              </div>
            </article>
            <article className="page-panel-card">
              <span className="small-label">{ctaDirectory.contact.label}</span>
              <h3>Use Contact for broad commercial intake</h3>
              <p>Best when the intelligence need is clear but the right next motion still needs to be routed by Sentinel.</p>
              <div className="button-row page-button-row">
                <LinkButton href={ctaDirectory.contact.href} variant="secondary">
                  {ctaDirectory.contact.label}
                </LinkButton>
              </div>
            </article>
            <article className="page-panel-card">
              <span className="small-label">{ctaDirectory.consultation.label}</span>
              <h3>Use Consultation for higher-stakes advisory scoping</h3>
              <p>Best when stakeholder alignment, executive framing, or scope judgment matters more than another walkthrough.</p>
              <div className="button-row page-button-row">
                <LinkButton href={ctaDirectory.consultation.href} variant="secondary">
                  {ctaDirectory.consultation.label}
                </LinkButton>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
