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

export default function DashboardPage() {
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
        description="This preview is no longer static. Click views, filters, rows, and company cards to move through the operating story."
        eyebrow="Dashboard preview"
        title="A dashboard preview you can move through"
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
