const artifactRows = [
  {
    molecule: "Glyphosate",
    supplier: "East Asia cluster",
    movement: "Repeated consignee activity with CIF pressure",
    action: "Escalate to buyer review",
  },
  {
    molecule: "Metformin HCl",
    supplier: "Integrated API producer",
    movement: "Stable cadence, unit value higher",
    action: "Flag for adjacent category note",
  },
  {
    molecule: "Urea",
    supplier: "MENA export house",
    movement: "Seasonal tonnage build",
    action: "Include in executive summary",
  },
];

const artifactNotes = [
  "Executive summary with account-specific movement notes",
  "Supplier and route commentary shaped for analyst review",
  "Workbook tabs, export naming, and version-ready delivery cues",
];

export function BriefArtifactPreview() {
  return (
    <div className="brief-artifact">
      <div className="brief-artifact-top">
        <div>
          <span className="small-label">Representative delivery</span>
          <strong>Illustrative monthly reporting pack</strong>
        </div>
        <span className="brief-artifact-badge">Private client format</span>
      </div>

      <div className="brief-artifact-shell">
        <div className="brief-artifact-summary">
          <div className="brief-artifact-summary-card">
            <span className="small-label">Brief composition</span>
            <strong>Structured more like a deliverable pack than a teaser dashboard.</strong>
            <div className="brief-artifact-note-stack">
              {artifactNotes.map((item) => (
                <div className="brief-artifact-note-row" key={item}>
                  <span>{item}</span>
                  <i />
                </div>
              ))}
            </div>
          </div>

          <div className="brief-artifact-status-grid">
            <article>
              <span>Cadence</span>
              <strong>Monthly refresh</strong>
            </article>
            <article>
              <span>Files</span>
              <strong>Workbook + export tab</strong>
            </article>
            <article>
              <span>Format</span>
              <strong>Excel + Tableau + brief</strong>
            </article>
            <article>
              <span>Versioning</span>
              <strong>Client-ready naming</strong>
            </article>
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
            {artifactRows.slice(0, 3).map((row) => (
              <div className="brief-artifact-table-row" key={row.molecule}>
                <span>{row.molecule}</span>
                <span>{row.supplier}</span>
                <span>{row.movement}</span>
                <span>{row.action}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="brief-artifact-strip">
        <span>Workbook tabs</span>
        <span>Executive summary</span>
        <span>Export-ready rows</span>
        <span>Secure transfer</span>
      </div>
    </div>
  );
}
