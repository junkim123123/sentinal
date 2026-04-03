const artifactRows = [
  {
    molecule: "Glyphosate",
    supplier: "East Asia cluster",
    movement: "Repeated consignee activity with CIF pressure",
    action: "Escalate",
  },
  {
    molecule: "Metformin HCl",
    supplier: "Integrated API producer",
    movement: "Stable cadence, unit value higher",
    action: "Flag",
  },
];

const artifactNotes = [
  "Executive summary with account-specific movement notes",
  "Workbook tabs and export cues ready for circulation",
];

const artifactStats = [
  {
    label: "Cadence",
    value: "Monthly refresh",
  },
  {
    label: "Files",
    value: "Workbook + export tab",
  },
  {
    label: "Format",
    value: "Excel + Tableau + brief",
  },
] as const;

const artifactSections = [
  "Workbook tabs",
  "Executive summary",
  "Export-ready rows",
] as const;

export function BriefArtifactPreview() {
  return (
    <div className="brief-artifact">
      <div className="brief-artifact-top">
        <div className="brief-artifact-top-copy">
          <span className="small-label">Representative delivery</span>
          <strong>Illustrative monthly reporting pack</strong>
          <p className="brief-artifact-top-note">Built like a working monthly pack, not a teaser.</p>
        </div>
        <span className="brief-artifact-badge">Private client format</span>
      </div>

      <div className="brief-artifact-shell">
        <div className="brief-artifact-summary">
          <div className="brief-artifact-summary-card">
            <span className="small-label">Brief composition</span>
            <ul className="brief-artifact-note-list">
              {artifactNotes.map((item) => (
                <li className="brief-artifact-note-item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="brief-artifact-status-grid">
            {artifactStats.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </div>

        <div className="brief-artifact-table-card">
          <div className="brief-artifact-table-head">
            <span>Molecule</span>
            <span>Supplier surface</span>
            <span>Movement note</span>
            <span>Action</span>
          </div>
          <div className="brief-artifact-table-body">
            {artifactRows.slice(0, 2).map((row) => (
              <div className="brief-artifact-table-row" key={row.molecule}>
                <span data-label="Molecule">{row.molecule}</span>
                <span data-label="Supplier surface">{row.supplier}</span>
                <span data-label="Movement note">{row.movement}</span>
                <span className="brief-artifact-action" data-label="Action">
                  {row.action}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="brief-artifact-strip">
        {artifactSections.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
