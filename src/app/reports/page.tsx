import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ctaDirectory, reportDeliveryCards } from "@/content/site";

export const metadata: Metadata = {
  title: "Reports Preview",
  description:
    "View the Sentinel Imports report preview without authentication.",
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
    text: "The current report structure makes it easy to move from headline read into row-level company and supplier detail.",
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
  "Executive summary page for manager and leadership review",
  "Importer-by-molecule table with route and landed-value context",
  "Category summary blocks for agrochemical, pharma, and fertilizers",
  "Action notes section for escalation and follow-up",
] as const;

export default function ReportsPage() {
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
        description="This report preview is arranged like a real deliverable. Even in preview mode it shows how a reviewed monthly pack moves from executive summary into row-level detail and circulation."
        eyebrow="Reports preview"
        title="A report preview that already reads like a deliverable"
      />

      <section className="section section-evidence home-proof-section">
        <div className="section-inner">
          <div className="page-panel-grid page-panel-grid-three">
            {reportDeliveryCards.map((item) => (
              <article className="page-panel-card" key={item.title}>
                <span className="small-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint page-section-tight">
        <div className="section-inner page-story-grid">
          <div>
            <SectionHeading
              eyebrow="Report structure"
              title="What this report communicates in one pass"
              description="The preview is static, but the sections are arranged like a deliverable buyers can actually contract for and circulate."
            />
            <article className="page-panel-card page-panel-card-accent">
              <span className="small-label">Included sections</span>
              <h3>Monthly report anatomy</h3>
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
                  <span data-label="Molecule">{row.molecule}</span>
                  <span data-label="Importer">{row.importer}</span>
                  <span data-label="Route">{row.route}</span>
                  <span data-label="CIF">{row.cif}</span>
                  <span data-label="Note">{row.note}</span>
                </div>
              ))}
            </div>

            <div className="report-preview-footer">
              <span>Monitoring package</span>
              <span>Investigation add-on</span>
              <span>Versioned export</span>
              <span>Executive-ready summary</span>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
