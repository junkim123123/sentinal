import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Reports Preview",
  description:
    "View the Sentinel Imports report MVP in preview mode without authentication.",
};

const reportHighlights = [
  {
    title: "Executive summary",
    text: "Agrochemical CIF pressure increased, pharma stayed orderly, and fertilizer inflows accelerated ahead of the next buying window.",
  },
  {
    title: "Top escalation",
    text: "Glyphosate and DAP deserve immediate review because cost movement and importer concentration both rose this cycle.",
  },
  {
    title: "Manager takeaway",
    text: "The current report structure makes it easy to move from a headline read into row-level company and supplier detail.",
  },
] as const;

const reportRows = [
  {
    molecule: "Glyphosate",
    importer: "US crop input group",
    route: "China -> Houston",
    cif: "$541.2K",
    note: "Repeated consignee activity with higher landed value",
  },
  {
    molecule: "Metformin HCl",
    importer: "Generic oral solids manufacturer",
    route: "India -> Charleston",
    cif: "$270.4K",
    note: "Steady cadence but unit economics moved up",
  },
  {
    molecule: "DAP",
    importer: "Wholesale crop input network",
    route: "Morocco -> Tampa",
    cif: "$447.2K",
    note: "Heavy seasonal build with stronger volume",
  },
  {
    molecule: "Imidacloprid",
    importer: "Insecticide distributor",
    route: "China -> Los Angeles",
    cif: "$342.0K",
    note: "Stable importer base, watch supplier mix",
  },
] as const;

const reportSections = [
  "Executive summary page for Dean and leadership review",
  "Importer-by-molecule table with route and landed-value context",
  "Category summary blocks for agrochemical, pharma, and fertilizers",
  "Action notes section for escalation and follow-up",
] as const;

export default function ReportsPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <LinkButton href="/dashboard">Open dashboard preview</LinkButton>
            <LinkButton href="/demo" variant="ghost">
              Request walkthrough
            </LinkButton>
          </>
        }
        description="This report MVP is designed to be readable on its own. Even without export logic or auth, stakeholders can open the page and understand the deliverable immediately."
        eyebrow="Reports preview"
        theme="dark"
        visual={
          <div className="page-hero-brief page-hero-brief-dark page-hero-brief-hero">
            <div className="page-hero-brief-head">
              <div>
                <span className="small-label">Dean review pack</span>
                <strong>Readable without login, export flow, or backend setup</strong>
              </div>
              <p>
                The MVP emphasizes report clarity first so the team can present a
                complete product story even before automation is connected.
              </p>
            </div>
            <div className="page-hero-brief-grid">
              {reportHighlights.map((item) => (
                <article className="page-hero-stat" key={item.title}>
                  <span>{item.title}</span>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        }
        title="Report preview that already feels presentation-ready"
      />

      <section className="section section-tint page-section-tight">
        <div className="section-inner page-story-grid">
          <div>
            <SectionHeading
              eyebrow="Report structure"
              title="What this MVP report already communicates well"
              description="The preview is static, but the sections are arranged like a deliverable the client can actually consume."
            />
            <article className="page-panel-card page-panel-card-accent">
              <span className="small-label">Included sections</span>
              <h3>Dean-facing report anatomy</h3>
              <ul className="detail-list page-checklist">
                {reportSections.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <article className="report-preview-panel">
            <div className="report-preview-header">
              <div>
                <span className="small-label">Sentinel Imports</span>
                <h3>Monthly import intelligence summary</h3>
              </div>
              <span className="report-preview-badge">Preview mode</span>
            </div>

            <div className="report-preview-summary">
              {reportHighlights.map((item) => (
                <div className="report-preview-summary-card" key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="report-preview-table">
              <div className="report-preview-table-head">
                <span>Molecule</span>
                <span>Importer</span>
                <span>Route</span>
                <span>CIF</span>
                <span>Note</span>
              </div>
              {reportRows.map((row) => (
                <div className="report-preview-table-row" key={`${row.molecule}-${row.importer}`}>
                  <span>{row.molecule}</span>
                  <span>{row.importer}</span>
                  <span>{row.route}</span>
                  <span>{row.cif}</span>
                  <span>{row.note}</span>
                </div>
              ))}
            </div>

            <div className="report-preview-footer">
              <span>Agrochemical</span>
              <span>Pharma</span>
              <span>Fertilizers</span>
              <span>Executive-ready summary</span>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
