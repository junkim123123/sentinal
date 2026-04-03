"use client";

import { useState } from "react";

type DashboardViewKey =
  | "overview"
  | "importers"
  | "watchlist"
  | "categories"
  | "exports";

type DashboardCategoryKey = "All" | "Agrochemical" | "Pharma" | "Fertilizers";

type DashboardRow = {
  id: string;
  molecule: string;
  category: Exclude<DashboardCategoryKey, "All">;
  importer: string;
  supplier: string;
  signal: "Escalate" | "Watch" | "Stable";
  focus: string;
  note: string;
  route: string;
  cadence: string;
  cifMovement: number;
  exportPack: string;
  nextStep: string;
};

const dashboardViews: Array<{
  key: DashboardViewKey;
  label: string;
  noteTitle: string;
  noteBody: string;
  panelLabel: string;
  panelTitle: string;
  panelDescription: string;
}> = [
  {
    key: "overview",
    label: "Executive overview",
    noteTitle: "What this mode prioritizes",
    noteBody: "Start with the signal hierarchy, then decide which lane or account needs a deeper read.",
    panelLabel: "Executive overview",
    panelTitle: "Start with the pressure map",
    panelDescription: "Use the chart to move from a category read into the molecule or importer that needs follow-up.",
  },
  {
    key: "importers",
    label: "Importer drill-down",
    noteTitle: "What this mode prioritizes",
    noteBody: "Keep the account context, route, supplier surface, and next commercial question in one place.",
    panelLabel: "Importer drill-down",
    panelTitle: "Open the account context first",
    panelDescription: "The selected importer drives the route note, supplier surface, and next action across the rest of the screen.",
  },
  {
    key: "watchlist",
    label: "Molecule watchlist",
    noteTitle: "What this mode prioritizes",
    noteBody: "Move through high-visibility rows quickly without losing the reason each row is flagged.",
    panelLabel: "Molecule watchlist",
    panelTitle: "Review the selected molecule in context",
    panelDescription: "Click any row to update the spotlight card, related importer note, and export expectation.",
  },
  {
    key: "categories",
    label: "Category summary",
    noteTitle: "What this mode prioritizes",
    noteBody: "Compare agrochemical, pharma, and fertilizer pressure before deciding where the next briefing should go.",
    panelLabel: "Category summary",
    panelTitle: "Compare lanes without leaving the dashboard",
    panelDescription: "Switch categories directly from the chart to filter the rows, account cards, and downstream notes.",
  },
  {
    key: "exports",
    label: "Report exports",
    noteTitle: "What this mode prioritizes",
    noteBody: "Show how the same signal becomes a pack that can move into analyst review, manager circulation, and leadership briefing.",
    panelLabel: "Report exports",
    panelTitle: "See the delivery path behind the dashboard",
    panelDescription: "The selected row updates the pack emphasis so buyers can understand what actually leaves the screen.",
  },
];

const categoryMetrics: Record<
  DashboardCategoryKey,
  {
    tracked: string;
    alerts: string;
    importers: string;
    movement: string;
    note: string;
  }
> = {
  All: {
    tracked: "148",
    alerts: "12",
    importers: "63",
    movement: "+5.8%",
    note: "All active watchlists stay in one reviewed operating surface.",
  },
  Agrochemical: {
    tracked: "82",
    alerts: "7",
    importers: "31",
    movement: "+8.4%",
    note: "Agrochemical pressure still drives the highest review cadence.",
  },
  Pharma: {
    tracked: "29",
    alerts: "2",
    importers: "14",
    movement: "+3.1%",
    note: "Pharma stays quieter, but supplier continuity and unit value matter more.",
  },
  Fertilizers: {
    tracked: "37",
    alerts: "3",
    importers: "18",
    movement: "+6.0%",
    note: "Fertilizer rows matter most when seasonal volume starts changing the buy window.",
  },
};

const categoryBands = [
  {
    category: "Agrochemical" as const,
    width: 82,
    pressure: "+8.4%",
    note: "Herbicide and insecticide watchlists still lead the review stack.",
  },
  {
    category: "Pharma" as const,
    width: 56,
    pressure: "+3.1%",
    note: "Supplier continuity and lead time matter more than raw volume.",
  },
  {
    category: "Fertilizers" as const,
    width: 74,
    pressure: "+6.0%",
    note: "Seasonal volume and routing shifts drive the next briefing.",
  },
] as const;

const dashboardRows: DashboardRow[] = [
  {
    id: "glyphosate",
    molecule: "Glyphosate",
    category: "Agrochemical",
    importer: "US crop input group",
    supplier: "East Asia cluster",
    signal: "Escalate",
    focus: "Herbicide and insecticide intake",
    note: "Repeated routing through Houston and Savannah is pushing landed-value pressure ahead of the next sourcing cycle.",
    route: "Houston / Savannah",
    cadence: "Weekly buyer review",
    cifMovement: 8.4,
    exportPack: "Executive summary + workbook tab + supplier appendix",
    nextStep: "Escalate before the next sourcing cycle closes.",
  },
  {
    id: "metformin",
    molecule: "Metformin HCl",
    category: "Pharma",
    importer: "Generic oral solids manufacturer",
    supplier: "Integrated API producer",
    signal: "Watch",
    focus: "API replenishment and supplier stability",
    note: "The lane is stable, but unit value and lead time both moved enough to deserve analyst review.",
    route: "Newark / Savannah",
    cadence: "Biweekly analyst review",
    cifMovement: 3.1,
    exportPack: "Supplier watch tab + adjacent category note",
    nextStep: "Keep the row live and watch supplier continuity before expanding the lane.",
  },
  {
    id: "urea",
    molecule: "Urea",
    category: "Fertilizers",
    importer: "Midwest nutrient distributor",
    supplier: "MENA export house",
    signal: "Stable",
    focus: "Seasonal fertilizer build",
    note: "The current surface is stable, but volume is high enough to merit leadership context before the next buy window.",
    route: "New Orleans / Houston",
    cadence: "Seasonal leadership brief",
    cifMovement: 6.0,
    exportPack: "Seasonal build memo + row export for circulation",
    nextStep: "Brief leadership before the next seasonal buy window.",
  },
  {
    id: "imidacloprid",
    molecule: "Imidacloprid",
    category: "Agrochemical",
    importer: "Insecticide distributor",
    supplier: "Named producer set",
    signal: "Watch",
    focus: "Insecticide supplier comparison",
    note: "The lane remains active enough to justify a supplier comparison before volume shifts become harder to reverse.",
    route: "Savannah / Norfolk",
    cadence: "Weekly watchlist review",
    cifMovement: 4.7,
    exportPack: "Supplier comparison tab + exception note",
    nextStep: "Compare named producers before the next exception review.",
  },
];

function formatMovement(value: number) {
  return `${value > 0 ? "+" : ""}${value.toFixed(1)}%`;
}

function getFeedItems(view: DashboardViewKey, row: DashboardRow, category: DashboardCategoryKey) {
  if (view === "importers") {
    return [
      `${row.importer} remains the active account context for this view.`,
      `Route pressure is concentrated through ${row.route}.`,
      `Next follow-through: ${row.nextStep}`,
    ];
  }

  if (view === "watchlist") {
    return [
      `${row.molecule} is currently marked ${row.signal.toLowerCase()} for review.`,
      `${row.supplier} is the named supplier surface behind this row.`,
      `Expected review cadence: ${row.cadence}.`,
    ];
  }

  if (view === "categories") {
    return [
      `${category === "All" ? "Agrochemical" : category} remains the active comparison lane.`,
      categoryMetrics[category].note,
      `Selected row still points toward ${row.importer}.`,
    ];
  }

  if (view === "exports") {
    return [
      `Current pack emphasis: ${row.exportPack}.`,
      `The next commercial note would follow ${row.nextStep.toLowerCase()}`,
      `Delivery cadence stays aligned with ${row.cadence.toLowerCase()}.`,
    ];
  }

  return [
    `${row.category} pressure is currently anchored by ${row.molecule}.`,
    `${row.importer} is the account most likely to need follow-up next.`,
    `Export path stays ready through ${row.exportPack.toLowerCase()}.`,
  ];
}

export function InteractiveDashboardPreview({ cues }: { cues: readonly string[] }) {
  const [activeView, setActiveView] = useState<DashboardViewKey>("overview");
  const [activeCategory, setActiveCategory] = useState<DashboardCategoryKey>("All");
  const [selectedRowId, setSelectedRowId] = useState(dashboardRows[0].id);

  const filteredRows =
    activeCategory === "All"
      ? dashboardRows
      : dashboardRows.filter((row) => row.category === activeCategory);
  const activeRow =
    filteredRows.find((row) => row.id === selectedRowId) ?? filteredRows[0] ?? dashboardRows[0];
  const activeMetrics = categoryMetrics[activeCategory];
  const activeViewMeta =
    dashboardViews.find((view) => view.key === activeView) ?? dashboardViews[0];
  const highlightedCategory =
    activeCategory === "All" ? activeRow.category : activeCategory;

  function handleCategoryChange(category: DashboardCategoryKey) {
    const nextRows =
      category === "All"
        ? dashboardRows
        : dashboardRows.filter((row) => row.category === category);

    setActiveCategory(category);
    setSelectedRowId((current) =>
      nextRows.some((row) => row.id === current) ? current : nextRows[0].id,
    );
  }

  function renderFocusPanel() {
    if (activeView === "importers") {
      return (
        <div className="dashboard-focus-stack">
          <article className="dashboard-spotlight-card">
            <span className="small-label">Selected importer</span>
            <strong>{activeRow.importer}</strong>
            <p>{activeRow.note}</p>
            <div className="dashboard-kpi-list">
              <div className="dashboard-kpi">
                <span>Route</span>
                <strong>{activeRow.route}</strong>
              </div>
              <div className="dashboard-kpi">
                <span>Cadence</span>
                <strong>{activeRow.cadence}</strong>
              </div>
              <div className="dashboard-kpi">
                <span>Active supplier</span>
                <strong>{activeRow.supplier}</strong>
              </div>
              <div className="dashboard-kpi">
                <span>Next commercial move</span>
                <strong>{activeRow.nextStep}</strong>
              </div>
            </div>
          </article>
        </div>
      );
    }

    if (activeView === "watchlist") {
      return (
        <div className="dashboard-focus-stack">
          <article className="dashboard-spotlight-card">
            <div className="dashboard-spotlight-topline">
              <span className="small-label">Selected row</span>
              <span className={`dashboard-signal is-${activeRow.signal.toLowerCase()}`}>
                {activeRow.signal}
              </span>
            </div>
            <strong>{activeRow.molecule}</strong>
            <p>{activeRow.note}</p>
            <div className="dashboard-detail-grid">
              <article className="dashboard-detail-card">
                <span>Category</span>
                <strong>{activeRow.category}</strong>
                <p>{activeRow.focus}</p>
              </article>
              <article className="dashboard-detail-card">
                <span>Supplier surface</span>
                <strong>{activeRow.supplier}</strong>
                <p>{activeRow.exportPack}</p>
              </article>
            </div>
          </article>
        </div>
      );
    }

    if (activeView === "exports") {
      return (
        <div className="dashboard-focus-stack">
          <div className="dashboard-export-list">
            <article className="dashboard-export-card">
              <span>Pack owner</span>
              <strong>{activeRow.importer}</strong>
              <p>The current export emphasis follows the selected account and molecule.</p>
            </article>
            <article className="dashboard-export-card">
              <span>Included files</span>
              <strong>{activeRow.exportPack}</strong>
              <p>Workbook structure, summary note, and row-level exports stay aligned in one path.</p>
            </article>
            <article className="dashboard-export-card">
              <span>Why it leaves the dashboard</span>
              <strong>{activeRow.nextStep}</strong>
              <p>The output stays tied to the next commercial conversation instead of becoming a detached report.</p>
            </article>
          </div>
        </div>
      );
    }

    return (
      <div className="dashboard-focus-stack">
        <div className="dashboard-chart">
          {categoryBands.map((item) => {
            const active = highlightedCategory === item.category;

            return (
              <button
                className={`dashboard-chart-row dashboard-chart-row-button${active ? " is-active" : ""}`}
                key={item.category}
                onClick={() => handleCategoryChange(item.category)}
                type="button"
              >
                <span>{item.category}</span>
                <div className="dashboard-chart-bar">
                  <i style={{ width: `${item.width}%` }} />
                </div>
                <strong>{item.pressure}</strong>
              </button>
            );
          })}
        </div>
        <div className="dashboard-detail-grid">
          <article className="dashboard-detail-card">
            <span>Active lane</span>
            <strong>{highlightedCategory}</strong>
            <p>{categoryMetrics[highlightedCategory].note}</p>
          </article>
          <article className="dashboard-detail-card">
            <span>Selected row</span>
            <strong>{activeRow.molecule}</strong>
            <p>{activeRow.nextStep}</p>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-preview-shell dashboard-preview-shell-interactive">
      <aside className="dashboard-sidebar dashboard-sidebar-interactive">
        <span className="small-label">Interactive preview</span>
        <div className="dashboard-nav-list">
          {dashboardViews.map((item) => (
            <button
              className={`dashboard-nav-item${activeView === item.key ? " is-active" : ""}`}
              key={item.key}
              onClick={() => setActiveView(item.key)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="dashboard-filter-block">
          <span className="small-label">Category filter</span>
          <div className="dashboard-filter-row">
            {(["All", "Agrochemical", "Pharma", "Fertilizers"] as const).map((item) => (
              <button
                className={`dashboard-filter-chip${activeCategory === item ? " is-active" : ""}`}
                key={item}
                onClick={() => handleCategoryChange(item)}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="dashboard-preview-cues dashboard-preview-cues-sidebar">
          {cues.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="dashboard-mode-note">
          <strong>{activeViewMeta.noteTitle}</strong>
          <p>{activeViewMeta.noteBody}</p>
        </div>
      </aside>

      <div className="dashboard-main">
        <div className="dashboard-card-grid">
          <article className="dashboard-metric-card">
            <span>Tracked molecules</span>
            <strong>{activeMetrics.tracked}</strong>
            <p>Active inside the current review surface.</p>
          </article>
          <article className="dashboard-metric-card">
            <span>Priority alerts</span>
            <strong>{activeMetrics.alerts}</strong>
            <p>Signals currently ready for the next stakeholder handoff.</p>
          </article>
          <article className="dashboard-metric-card">
            <span>Named importers</span>
            <strong>{activeMetrics.importers}</strong>
            <p>Accounts visible after the current category filter is applied.</p>
          </article>
          <article className="dashboard-metric-card">
            <span>Avg CIF movement</span>
            <strong>{activeMetrics.movement}</strong>
            <p>{activeMetrics.note}</p>
          </article>
        </div>

        <div className="dashboard-content-grid">
          <article className="dashboard-panel dashboard-panel-focus">
            <div className="dashboard-panel-top">
              <div>
                <span className="small-label">{activeViewMeta.panelLabel}</span>
                <h3>{activeViewMeta.panelTitle}</h3>
              </div>
              <p>{activeViewMeta.panelDescription}</p>
            </div>
            {renderFocusPanel()}
          </article>

          <article className="dashboard-panel dashboard-feed-panel">
            <div className="dashboard-panel-top">
              <div>
                <span className="small-label">Live context</span>
                <h3>What changes when the selection changes</h3>
              </div>
            </div>
            <div className="dashboard-feed-list">
              {getFeedItems(activeView, activeRow, activeCategory).map((item) => (
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
                <h3>Click any row to update the drill-down</h3>
              </div>
              <p>The table, spotlight card, and importer panel stay linked.</p>
            </div>
            <div className="dashboard-table">
              <div className="dashboard-table-head">
                <span>Molecule</span>
                <span>Category</span>
                <span>Importer</span>
                <span>Supplier</span>
                <span>Signal</span>
              </div>
              {filteredRows.map((row) => (
                <button
                  className={`dashboard-table-row${activeRow.id === row.id ? " is-active" : ""}`}
                  key={row.id}
                  onClick={() => setSelectedRowId(row.id)}
                  type="button"
                >
                  <span data-label="Molecule">{row.molecule}</span>
                  <span data-label="Category">{row.category}</span>
                  <span data-label="Importer">{row.importer}</span>
                  <span data-label="Supplier">{row.supplier}</span>
                  <span className={`dashboard-signal is-${row.signal.toLowerCase()}`} data-label="Signal">
                    {row.signal}
                  </span>
                </button>
              ))}
            </div>
          </article>

          <article className="dashboard-panel">
            <div className="dashboard-panel-top">
              <div>
                <span className="small-label">Importer drill-down</span>
                <h3>The selected account stays in focus across the preview</h3>
              </div>
              <p>Use the company cards or the table to move the dashboard story.</p>
            </div>
            <div className="dashboard-detail-grid dashboard-detail-grid-compact">
              <article className="dashboard-detail-card">
                <span>Account focus</span>
                <strong>{activeRow.focus}</strong>
                <p>{activeRow.note}</p>
              </article>
              <article className="dashboard-detail-card">
                <span>CIF movement</span>
                <strong>{formatMovement(activeRow.cifMovement)}</strong>
                <p>{activeRow.exportPack}</p>
              </article>
            </div>
            <div className="dashboard-company-list">
              {filteredRows.map((row) => (
                <button
                  className={`dashboard-company-card${activeRow.id === row.id ? " is-active" : ""}`}
                  key={row.id}
                  onClick={() => setSelectedRowId(row.id)}
                  type="button"
                >
                  <strong>{row.importer}</strong>
                  <span>{row.focus}</span>
                  <p>{row.nextStep}</p>
                </button>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
