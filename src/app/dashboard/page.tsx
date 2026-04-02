import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Dashboard Preview",
  description:
    "View the Sentinel Imports dashboard MVP in preview mode without authentication.",
};

const summaryCards = [
  { label: "Tracked molecules", value: "148", note: "Across agrochemical, pharma, and fertilizers" },
  { label: "Priority alerts", value: "12", note: "Signals ready for manager review this week" },
  { label: "Named importers", value: "63", note: "Company views grouped by recurring activity" },
  { label: "Avg CIF movement", value: "+5.8%", note: "Across the active watchlist month over month" },
] as const;

const watchlistRows = [
  { molecule: "Glyphosate", category: "Agrochemical", importer: "US crop input group", supplier: "East Asia cluster", signal: "Escalate" },
  { molecule: "Metformin HCl", category: "Pharma", importer: "Generic oral solids manufacturer", supplier: "Integrated API producer", signal: "Watch" },
  { molecule: "Urea", category: "Fertilizers", importer: "Midwest nutrient distributor", supplier: "MENA export house", signal: "Stable" },
  { molecule: "Imidacloprid", category: "Agrochemical", importer: "Insecticide distributor", supplier: "Named producer set", signal: "Watch" },
] as const;

const companyCards = [
  {
    name: "US crop input group",
    focus: "Herbicide and insecticide intake",
    note: "Repeated routing through Houston and Savannah with landed-value pressure rising.",
  },
  {
    name: "Generic oral solids manufacturer",
    focus: "API replenishment and supplier stability",
    note: "Pharma inputs remain stable, but lead time and unit value moved higher this month.",
  },
  {
    name: "Midwest nutrient distributor",
    focus: "Seasonal fertilizer build",
    note: "Fertilizer inflows are heavy enough to merit executive review before the next buy cycle.",
  },
] as const;

const activityFeed = [
  "Agrochemical watchlist flagged 3 landed-value jumps above threshold.",
  "New pharma supplier surfaced for metformin-related imports.",
  "Fertilizer lane into New Orleans showed higher tonnage and faster turnaround.",
  "Dean-ready report pack updated with top importer notes and category summary.",
] as const;

export default function DashboardPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <LinkButton href="/reports">Open reports preview</LinkButton>
            <LinkButton href="/contact" variant="ghost">
              Contact Sentinel
            </LinkButton>
          </>
        }
        description="This dashboard MVP is intentionally view-only: no login, no backend dependency, and no blocked states. It exists so stakeholders can open the workflow and understand the product immediately."
        eyebrow="Dashboard preview"
        theme="dark"
        visual={
          <div className="page-hero-brief page-hero-brief-dark page-hero-brief-hero">
            <div className="page-hero-brief-head">
              <div>
                <span className="small-label">Demo mode</span>
                <strong>Viewable without authentication for Friday review</strong>
              </div>
              <p>
                The MVP focuses on clarity, structure, and presentation rather than
                live interactivity or account setup.
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
        title="Dashboard MVP that opens immediately and shows the product story"
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
            eyebrow="View-only MVP"
            title="A dashboard Dean can open and understand in one pass"
            description="The layout below is structured like a real operating dashboard even though the current MVP stays static and presentation-first."
          />
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
                <strong>Preview only</strong>
                <p>No login, no auth flow, and no blocked screens in this MVP.</p>
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
                    <p>Static chart preview for the stakeholder walkthrough.</p>
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
                    <p>Built to feel usable even before interactivity is added.</p>
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
                        <span>{row.molecule}</span>
                        <span>{row.category}</span>
                        <span>{row.importer}</span>
                        <span>{row.supplier}</span>
                        <span className={`dashboard-signal is-${row.signal.toLowerCase()}`}>
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
