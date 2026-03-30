const artifactRows = [
  {
    molecule: "Glyphosate",
    supplier: "East Asia cluster",
    movement: "Repeated consignee activity",
    action: "Review now",
  },
  {
    molecule: "Dicamba",
    supplier: "Supplier group B",
    movement: "Watchlist pressure",
    action: "Follow closely",
  },
  {
    molecule: "Imidacloprid",
    supplier: "Named producer set",
    movement: "Stable monthly read",
    action: "No escalation",
  },
];

const artifactNotes = [
  "Executive summary and movement notes",
  "Supplier context with route commentary",
  "Watchlist rows shaped for Excel and Tableau",
];

export function BriefArtifactPreview() {
  return (
    <div className="brief-artifact">
      <div className="brief-artifact-top">
        <div>
          <span className="small-label">Representative delivery</span>
          <strong>Illustrative monthly briefing structure</strong>
        </div>
        <span className="brief-artifact-badge">Private client format</span>
      </div>

      <div className="brief-artifact-shell">
        <div className="brief-artifact-summary">
          <div className="brief-artifact-summary-card">
            <span className="small-label">Brief composition</span>
            <strong>Structured more like a client dossier than a dashboard.</strong>
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
              <span>Delivery</span>
              <strong>Monthly brief</strong>
            </article>
            <article>
              <span>Format</span>
              <strong>Excel + Tableau</strong>
            </article>
            <article>
              <span>Follow-through</span>
              <strong>Quiet escalation</strong>
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
            {artifactRows.map((row) => (
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
        <span>Illustrative structure</span>
        <span>Working-file delivery</span>
        <span>Secure transfer</span>
      </div>
    </div>
  );
}
