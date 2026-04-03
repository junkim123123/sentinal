import type { Metadata } from "next";

import { InteractiveDashboardPreview } from "@/components/InteractiveDashboardPreview";
import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ctaDirectory, dashboardPreviewCues } from "@/content/site";

export const metadata: Metadata = {
  title: "Dashboard Preview",
  description:
    "View the Sentinel Imports dashboard preview without authentication.",
};

const heroSummaryCards = [
  { label: "Tracked molecules", value: "148", note: "Across agrochemical, pharma, and fertilizer watchlists" },
  { label: "Priority alerts", value: "12", note: "Signals ready for manager review this week" },
] as const;

export default function DashboardPage() {
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
        description="This preview is no longer static. Click views, filters, rows, and company cards to move through the operating story."
        eyebrow="Dashboard preview"
        family="proof"
        headingMeasure="balanced"
        surfaceTone="proof"
        theme="light"
        visual={
          <div className="page-hero-brief page-hero-brief-dark page-hero-brief-hero">
            <div className="page-hero-brief-head">
              <div>
                <span className="small-label">Interactive mode</span>
                <strong>Preview the working dashboard structure</strong>
              </div>
              <p>
                The preview now keeps the first click, the hierarchy, and the export
                path visible in one interactive surface.
              </p>
            </div>
            <div className="page-hero-brief-grid">
              {heroSummaryCards.map((item) => (
                <article className="page-hero-stat" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        }
        title="A dashboard preview you can actually move through"
      />

      <section className="section page-section-tight sentinel-subpage-emphasis">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Preview logic"
            title="Move through the operating surface in one pass"
            description="The layout below behaves like a lightweight product preview so buyers can test drill-down logic, filters, and export context before a live session."
            measure="wide"
          />
          <InteractiveDashboardPreview cues={dashboardPreviewCues} />

          <div className="page-panel-grid page-panel-grid-two proof-followup-grid">
            <article className="page-panel-card">
              <span className="small-label">Live engagement</span>
              <h3>Interactive filtering now mirrors the product story</h3>
              <p>The live product adds deeper dossiers, more rows, and broader export controls without changing the reading order shown here.</p>
            </article>
            <article className="page-panel-card page-panel-card-accent">
              <span className="small-label">Next preview</span>
              <h3>Review the report layout next</h3>
              <p>The report preview shows how the same signal leaves the dashboard and gets circulated as a deliverable.</p>
              <div className="button-row page-button-row">
                <LinkButton href="/reports" variant="secondary">
                  Reports Preview
                </LinkButton>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
