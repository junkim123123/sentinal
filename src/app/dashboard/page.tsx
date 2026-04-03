import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ctaDirectory, dashboardPreviewCues } from "@/content/site";

export const metadata: Metadata = {
  title: "Dashboard Preview",
  description:
    "View the Sentinel Imports dashboard preview without authentication.",
};

const summaryCards = [
  { label: "Tracked molecules", value: "148", note: "Across agrochemical, pharma, and fertilizer watchlists" },
  { label: "Priority alerts", value: "12", note: "Signals ready for manager review this week" },
  { label: "Named importers", value: "63", note: "Company views grouped by recurring activity" },
  { label: "Avg CIF movement", value: "+5.8%", note: "Across the active watchlist month over month" },
] as const;

const watchlistRows = [
  {
    molecule: "Glyphosate",
    category: "Agrochemical",
    importer: "US crop input group",
    supplier: "East Asia cluster",
    signal: "Escalate",
  },
  {
    molecule: "Metformin HCl",
    category: "Pharma",
    importer: "Generic oral solids manufacturer",
    supplier: "Integrated API producer",
    signal: "Watch",
  },
  {
    molecule: "Urea",
    category: "Fertilizers",
    importer: "Midwest nutrient distributor",
    supplier: "MENA export house",
    signal: "Stable",
  },
  {
    molecule: "Imidacloprid",
    category: "Agrochemical",
    importer: "Insecticide distributor",
    supplier: "Named producer set",
    signal: "Watch",
  },
] as const;

const companyCards = [
  {
    name: "US crop input group",
    focus: "Herbicide and insecticide intake",
    note: "Repeated routing through Houston and Savannah with landed-value pressure rising ahead of the next sourcing cycle.",
  },
  {
    name: "Generic oral solids manufacturer",
    focus: "API replenishment and supplier stability",
    note: "Pharma inputs remain stable, but lead time and unit value moved higher this month.",
  },
  {
    name: "Midwest nutrient distributor",
    focus: "Seasonal fertilizer build",
    note: "Fertilizer inflows are heavy enough to merit executive review before the next buy window.",
  },
] as const;

const activityFeed = [
  "Agrochemical watchlist flagged 3 landed-value jumps above threshold.",
  "New pharma supplier surfaced for metformin-related imports.",
  "Fertilizer lane into New Orleans showed higher tonnage and faster turnaround.",
  "Report pack refreshed with top importer notes and category summary.",
] as const;

export default function DashboardPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <LinkButton href="/reports">Open reports preview</LinkButton>
            <LinkButton href={ctaDirectory.demo.href} variant="secondary">
              {ctaDirectory.demo.label}
            </LinkButton>
          </>
        }
        description="This preview is intentionally open and presentation-first. The goal is to let buyers understand the dashboard structure, signal hierarchy, and drill-down logic immediately, even before live interactivity is added."
        eyebrow="Dashboard preview"
        theme="light"
        visual={
          <div className="page-hero-brief page-hero-brief-dark page-hero-brief-hero">
            <div className="page-hero-brief-head">
              <div>
                <span className="small-label">Preview mode</span>
                <strong>Open structure that shows how the working dashboard would behave</strong>
              </div>
              <p>
                The preview focuses on signal hierarchy, category balance, and the
                next click a buyer would expect after the first scan.
              </p>
            </div>
            <div className="page-hero-brief-grid">
              {summaryCards.slice(0, 3).map((item) => (
                <article className="page-hero-stat" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        }
        title="A dashboard preview that already explains the operating story"
      />

      <section className="section section-evidence home-proof-section">
        <div className="section-inner">
          <div className="page-signal-band">
            {summaryCards.map((item) => (
              <article className="page-signal-card" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section-tight sentinel-subpage-emphasis">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Preview logic"
            title="A dashboard a buyer can open and understand in one pass"
            description="The layout below is structured like a real operating dashboard, with drill-down cues and export paths visible even while the preview remains static."
          />
          <div className="dashboard-preview-cues">
            {dashboardPreviewCues.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="dashboard-preview-shell">
            <aside className="dashboard-sidebar">
              <span className="small-label">Preview navigation</span>
              <div className="dashboard-nav-list">
                <div className="dashboard-nav-item is-active">Executive overview</div>
                <div className="dashboard-nav-item">Importer drill-down</div>
                <div className="dashboard-nav-item">Molecule watchlist</div>
                <div className="dashboard-nav-item">Category summary</div>
                <div className="dashboard-nav-item">Report exports</div>
              </div>
              <div className="dashboard-mode-note">
                <strong>What the live product adds next</strong>
                <p>Interactive filters, deeper company dossiers, and export controls sit behind this preview structure.</p>
              </div>
            </aside>

            <div className="dashboard-main">
              <div className="dashboard-card-grid">
                {summaryCards.map((item) => (
                  <article className="dashboard-metric-card" key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                    <p>{item.note}</p>
                  </article>
                ))}
              </div>

              <div className="dashboard-content-grid">
                <article className="dashboard-panel dashboard-chart-panel">
                  <div className="dashboard-panel-top">
                    <div>
                      <span className="small-label">Category movement</span>
                      <h3>Month-over-month pressure by portfolio</h3>
                    </div>
                    <p>Preview chart showing how the top-level signal would be briefed.</p>
                  </div>
                  <div className="dashboard-chart">
                    <div className="dashboard-chart-row">
                      <span>Agrochemical</span>
                      <div className="dashboard-chart-bar">
                        <i style={{ width: "82%" }} />
                      </div>
                      <strong>+8.4%</strong>
                    </div>
                    <div className="dashboard-chart-row">
                      <span>Pharma</span>
                      <div className="dashboard-chart-bar">
                        <i style={{ width: "56%" }} />
                      </div>
                      <strong>+3.1%</strong>
                    </div>
                    <div className="dashboard-chart-row">
                      <span>Fertilizers</span>
                      <div className="dashboard-chart-bar">
                        <i style={{ width: "74%" }} />
                      </div>
                      <strong>+6.0%</strong>
                    </div>
                  </div>
                </article>

                <article className="dashboard-panel dashboard-feed-panel">
                  <div className="dashboard-panel-top">
                    <div>
                      <span className="small-label">Activity feed</span>
                      <h3>What changed in the latest refresh</h3>
                    </div>
                  </div>
                  <div className="dashboard-feed-list">
                    {activityFeed.map((item) => (
                      <div className="dashboard-feed-item" key={item}>
                        {item}
                      </div>
                    ))}
                  </div>
                </article>
              </div>

              <div className="dashboard-content-grid">
                <article className="dashboard-panel">
                  <div className="dashboard-panel-top">
                    <div>
                      <span className="small-label">Molecule watchlist</span>
                      <h3>High-visibility rows for review</h3>
                    </div>
                    <p>Rows are structured to remain readable on desktop and mobile.</p>
                  </div>
                  <div className="dashboard-table">
                    <div className="dashboard-table-head">
                      <span>Molecule</span>
                      <span>Category</span>
                      <span>Importer</span>
                      <span>Supplier</span>
                      <span>Signal</span>
                    </div>
                    {watchlistRows.map((row) => (
                      <div className="dashboard-table-row" key={`${row.molecule}-${row.importer}`}>
                        <span data-label="Molecule">{row.molecule}</span>
                        <span data-label="Category">{row.category}</span>
                        <span data-label="Importer">{row.importer}</span>
                        <span data-label="Supplier">{row.supplier}</span>
                        <span className={`dashboard-signal is-${row.signal.toLowerCase()}`} data-label="Signal">
                          {row.signal}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="dashboard-panel">
                  <div className="dashboard-panel-top">
                    <div>
                      <span className="small-label">Importer drill-down</span>
                      <h3>Company views that explain what each account is dealing with</h3>
                    </div>
                    <p>Each card points toward the next dossier a buyer would expect to open.</p>
                  </div>
                  <div className="dashboard-company-list">
                    {companyCards.map((item) => (
                      <div className="dashboard-company-card" key={item.name}>
                        <strong>{item.name}</strong>
                        <span>{item.focus}</span>
                        <p>{item.note}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
