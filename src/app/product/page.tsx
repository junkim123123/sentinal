import type { Metadata } from "next";

import { BriefArtifactPreview } from "@/components/BriefArtifactPreview";
import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ctaDirectory,
  integrationPoints,
  moleculeCategoryGroups,
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
    value: "Workbook + export-ready pack",
    detail: "The product is shown as summary, working tabs, and rows built to leave the screen.",
  },
  {
    label: "Category posture",
    value: "Agro first, adjacent lanes visible",
    detail: "Agrochemical depth stays primary while pharma and fertilizer show up as real fit paths.",
  },
  {
    label: "Review model",
    value: "Named sources + analyst interpretation",
    detail: "Human checks stay visible instead of hiding behind a generic dashboard pitch.",
  },
  {
    label: "Delivery fit",
    value: "Excel + Tableau + brief",
    detail: "The pack fits analyst review, manager circulation, and leadership handoff.",
  },
] as const;

export default function ProductPage() {
  return (
    <>
      <PageHero
        family="proof"
        headingMeasure="balanced"
        surfaceTone="proof"
        actions={
          <>
            <LinkButton href={ctaDirectory.demo.href}>{ctaDirectory.demo.label}</LinkButton>
            <LinkButton href={ctaDirectory.contact.href} variant="secondary">
              {ctaDirectory.contact.label}
            </LinkButton>
          </>
        }
        description="Sentinel combines recurring monitoring, company drill-down, and files that already feel ready to circulate."
        eyebrow="Product"
        theme="light"
        visual={
          <div className="page-hero-brief page-hero-brief-hero product-hero-artifact">
            <BriefArtifactPreview />
            <div className="page-hero-tag-row">
              {productHeroCapabilities.slice(0, 2).map((item) => (
                <span className="page-hero-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        }
        title="Reviewed monitoring built like a deliverable"
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

      <section className="section page-section-tight subpage-shorthead product-core-section">
        <div className="section-inner product-core-shell">
          <SectionHeading
            description="The product story is strongest when included intelligence and delivery fit show up together."
            eyebrow="Core product"
            title="What arrives each cycle"
          />
          <div className="page-panel-grid page-panel-grid-two">
            <article className="page-panel-card">
              <span className="small-label">Included intelligence</span>
              <h3>Reviewed company, supplier, and molecule detail</h3>
              <p>
                Sentinel keeps the scope narrow enough to act on by centering
                company drill-down, supplier movement, landed-value context, and
                files that move cleanly across teams.
              </p>
              <ul className="detail-list page-checklist">
                {productInclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="page-panel-card page-panel-card-accent">
              <span className="small-label">Workflow fit</span>
              <h3>Built for working teams</h3>
              <p>
                Buyers should be able to see analyst review, manager circulation,
                and executive briefing without imagining a heavy rollout.
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

      <section className="section page-section-tight sentinel-subpage-emphasis subpage-shorthead">
        <div className="section-inner">
          <SectionHeading
            description="Category groupings should show that agrochemical remains the deepest lane while adjacent scopes still fit the same model."
            eyebrow="Category coverage"
            title="One structure across categories"
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

      <section className="section page-section-tight subpage-shorthead">
        <div className="section-inner">
          <SectionHeading
            description="Keep the routes clear so buyers do not guess which page to use. Consultation stays contextual when scope judgment matters more than another walkthrough."
            eyebrow="Next move"
            title="Choose the next step"
          />
          <div className="page-panel-grid page-panel-grid-two">
            <article className="page-panel-card">
              <span className="small-label">{ctaDirectory.demo.label}</span>
              <h3>Use Demo to review the workflow</h3>
              <p>Best when the team wants to see the artifact depth and live review flow before deeper scoping.</p>
              <div className="button-row page-button-row">
                <LinkButton href={ctaDirectory.demo.href}>{ctaDirectory.demo.label}</LinkButton>
              </div>
            </article>
            <article className="page-panel-card page-panel-card-accent">
              <span className="small-label">{ctaDirectory.contact.label}</span>
              <h3>Use Contact to route the need</h3>
              <p>Best when the intelligence need is clear but the right next motion still needs routing.</p>
              <div className="button-row page-button-row">
                <LinkButton href={ctaDirectory.contact.href} variant="secondary">
                  {ctaDirectory.contact.label}
                </LinkButton>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
