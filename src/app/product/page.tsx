import type { Metadata } from "next";

import { BriefArtifactPreview } from "@/components/BriefArtifactPreview";
import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ctaDirectory, integrationPoints, productInclusions } from "@/content/site";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Explore Sentinel Imports product coverage, grouped molecule views, pricing models, deliverable structure, and direct demo or contact paths.",
};

const proofRoutes = [
  {
    label: "Dashboard Preview",
    title: "Move through the working surface",
    description:
      "See the dashboard as a product surface with active filters, drill-down, and hierarchy.",
    href: "/dashboard",
    action: "View dashboard",
  },
  {
    label: "Reports Preview",
    title: "See how the signal leaves the screen",
    description:
      "Review the report format buyers would circulate after the monthly read and escalation pass.",
    href: "/reports",
    action: "View reports",
  },
] as const;

export default function ProductPage() {
  return (
    <>
      <PageHero
        variant="proof"
        actions={
          <>
            <LinkButton href={ctaDirectory.demo.href}>{ctaDirectory.demo.label}</LinkButton>
            <LinkButton href={ctaDirectory.contact.href} variant="ghost">
              {ctaDirectory.contact.label}
            </LinkButton>
          </>
        }
        description="Sentinel turns recurring monitoring into files buyers can circulate, question, and act on."
        eyebrow="Product"
        title="Monitoring built like a deliverable"
      />

      <section className="section page-section-tight">
        <div className="section-inner">
          <div className="simple-product-artifact">
            <BriefArtifactPreview />
          </div>
        </div>
      </section>

      <section className="section page-section-tight subpage-shorthead product-core-section">
        <div className="section-inner product-core-shell">
          <SectionHeading
            description="Keep the product story anchored in what arrives, what gets reviewed, and where it fits in the workflow."
            eyebrow="Core product"
            title="What arrives each cycle"
          />
          <div className="page-panel-grid page-panel-grid-two">
            <article className="page-panel-card">
              <span className="small-label">Included intelligence</span>
              <h3>Reviewed company, supplier, and molecule detail</h3>
              <p>
                Sentinel keeps the scope narrow enough to act on by centering company
                drill-down, supplier movement, landed-value context, and files that move
                cleanly across teams.
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
                Buyers should be able to see analyst review, manager circulation, and
                executive briefing without imagining a heavy rollout.
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
            description="Dashboard and report previews stay live here as product proof instead of competing as primary site destinations."
            eyebrow="Proof paths"
            title="Use Product as the proof hub"
          />
          <div className="page-panel-grid page-panel-grid-two product-proof-links">
            {proofRoutes.map((item) => (
              <article className="page-panel-card product-proof-link" key={item.href}>
                <span className="small-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="button-row page-button-row">
                  <LinkButton href={item.href} variant="secondary">
                    {item.action}
                  </LinkButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
