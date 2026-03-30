import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SignalChart } from "@/components/SignalChart";
import {
  integrationPoints,
  productHeroCapabilities,
  productInclusions,
  workflowStages,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Explore Sentinel Imports product coverage, inclusions, workflows, integrations, and sample output visuals.",
};

export default function ProductPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <LinkButton href="/demo">Request walkthrough</LinkButton>
            <LinkButton href="/contact" variant="secondary">
              Contact team
            </LinkButton>
          </>
        }
        description="Sentinel is built around recurring molecule monitoring, landed-value context, and delivery formats that fit real operating teams."
        eyebrow="Product"
        theme="light"
        visual={
          <div className="product-hero-board">
            <div className="product-hero-meta">
              <span className="small-label">Product snapshot</span>
              <strong>Monthly monitoring with room for custom investigations</strong>
              <p>Focused coverage, working output, and a clean path to deeper analysis.</p>
            </div>
            <div className="product-hero-grid">
              <SignalChart label="Movement signal" title="Monthly import movement" />
              <div className="table-preview-card">
                <span className="small-label">Working file</span>
                <strong>Shipment watchlist snapshot</strong>
                <div className="table-preview">
                  <span>Molecule</span>
                  <span>Supplier</span>
                  <span>CIF</span>
                  <span>Status</span>
                  <span>Glyphosate</span>
                  <span>Supplier A</span>
                  <span>$1.22</span>
                  <span>Stable</span>
                  <span>Dicamba</span>
                  <span>Supplier B</span>
                  <span>$1.09</span>
                  <span>Watch</span>
                </div>
              </div>
            </div>
          </div>
        }
        title="Import intelligence built for working teams"
      />

      <section className="section page-section-tight">
        <div className="section-inner">
          <SectionHeading
            description="See the core monitoring, delivery, and integration capabilities that define a Sentinel scope."
            eyebrow="Core capabilities"
            title="What the product needs to do well"
          />
          <div className="line-column-grid">
            {productHeroCapabilities.map((item, index) => (
              <article className="line-column" key={item}>
                <span className="small-label">{`0${index + 1}`}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint page-section-tight">
        <div className="section-inner page-story-grid">
          <div>
          <SectionHeading
            description="Understand what is included in a standard reporting engagement and how it fits existing workflows."
            eyebrow="Inclusions"
            title="What a Sentinel product scope includes"
          />
            <ul className="detail-list">
              {productInclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="stack-panel">
            <div className="stack-panel-top">
              <div>
                <span className="small-label">Workflow fit</span>
                <h3>Reporting designed for existing tools and teams</h3>
              </div>
              <p>Sentinel works best when delivery is easy to review, share, and escalate.</p>
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
        <div className="section-inner split-grid">
          <div>
          <SectionHeading
            description="Sentinel turns source records into a monthly brief teams can review, share, and escalate."
            eyebrow="Source to action"
            title="How Sentinel moves from records to decisions"
          />
          </div>
          <div className="compact-step-grid">
            {workflowStages.map((item) => (
              <article className="compact-step" key={item.step}>
                <span className="home-method-number">{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
