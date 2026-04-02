import type { Metadata } from "next";

import { BriefArtifactPreview } from "@/components/BriefArtifactPreview";
import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  accessPathCards,
  integrationPoints,
  moleculeCategoryGroups,
  pricingBuckets,
  productHeroCapabilities,
  productInclusions,
  sampleDataHighlights,
} from "@/content/site";

const sampleDataHref = "/samples/sentinel-molecule-depth-sample.csv";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Explore Sentinel Imports product coverage, grouped molecule views, pricing models, downloadable sample depth, and direct demo or contact paths.",
};

const productSignals = [
  {
    label: "Coverage design",
    value: "Watchlist-first",
    detail: "Configured around the molecules and companies your team actually follows.",
  },
  {
    label: "Decision support",
    value: "Company + molecule detail",
    detail: "Supplier activity, landed value, and drill-down fields in one operating view.",
  },
  {
    label: "Category views",
    value: "Agro / pharma / fertilizer",
    detail: "Grouped molecule portfolios make it easier to review adjacent categories cleanly.",
  },
  {
    label: "Access model",
    value: "Demo + sample + direct contact",
    detail: "Buyers can request a walkthrough, inspect sample depth, and reach the team directly.",
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <LinkButton href="/demo">Request private demo</LinkButton>
            <LinkButton download href={sampleDataHref} variant="ghost">
              Download free sample
            </LinkButton>
          </>
        }
        description="Sentinel is built around recurring molecule monitoring, company drill-down, landed-value context, and delivery formats that fit real operating teams."
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
            <article className="page-panel-card">
              <span className="small-label">Included intelligence</span>
              <h3>Company, supplier, and molecule detail in one file</h3>
              <p>
                Sentinel keeps the product narrow enough to act on by focusing the
                page on company drill-down, supplier movement, landed-value context,
                and delivery that supports real review workflows.
              </p>
              <ul className="detail-list page-checklist">
                {productInclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="page-panel-card">
              <span className="small-label">Workflow fit</span>
              <h3>Built for working teams instead of a generic search portal</h3>
              <p>
                The product story is strongest when buyers can see how Sentinel fits
                current analyst, manager, and leadership workflows without needing a
                heavy platform rollout.
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
            description="Grouped category views make it easier for buyers to understand how Sentinel can organize diverse molecule portfolios inside one product."
            eyebrow="Molecules"
            title="Category views can be grouped into clear molecule portfolios"
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

      <section className="section page-section-tight sentinel-subpage-emphasis engagement-models-section">
        <div className="section-inner">
          <SectionHeading
            description="The product page should make the pricing model easy to understand even when public dollar figures stay off the website."
            eyebrow="Pricing model"
            title="Three pricing models explain how the product scope expands"
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

      <section className="section section-tint page-section-tight">
        <div className="section-inner">
          <SectionHeading
            description="Competitor sites commonly make three things obvious: how to request a demo, how to inspect sample depth, and how to reach a real team."
            eyebrow="Access"
            title="Review the workflow before committing to a broader scope"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {accessPathCards.map((item) => (
              <article className="page-panel-card" key={item.title}>
                <span className="small-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.label === "Free sample" ? (
                  <ul className="detail-list page-checklist">
                    {sampleDataHighlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
                <div className="button-row page-button-row">
                  {item.label === "Request a demo" ? (
                    <LinkButton href="/demo">Request a private demo</LinkButton>
                  ) : null}
                  {item.label === "Free sample" ? (
                    <LinkButton download href={sampleDataHref}>
                      Download free sample
                    </LinkButton>
                  ) : null}
                  {item.label === "Direct contact" ? (
                    <LinkButton href="/contact">Contact the team</LinkButton>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
