export function SignalCanvas() {
  return (
    <div className="signal-canvas" aria-hidden="true">
      <div className="signal-orbit signal-orbit-one" />
      <div className="signal-orbit signal-orbit-two" />
      <div className="signal-panel signal-panel-main">
        <span className="panel-label">Core View</span>
        <strong>U.S. ag-chemical imports</strong>
        <p>Supplier, consignee, shipment movement, landed value.</p>
      </div>
      <div className="signal-panel signal-panel-top">
        <span className="panel-label">Delivery</span>
        <strong>Excel + Tableau</strong>
      </div>
      <div className="signal-panel signal-panel-left">
        <span className="panel-label">Coverage</span>
        <strong>140+ molecules</strong>
      </div>
      <div className="signal-node node-a" />
      <div className="signal-node node-b" />
      <div className="signal-node node-c" />
      <div className="signal-axis axis-horizontal" />
      <div className="signal-axis axis-vertical" />
      <div className="signal-chip chip-a">Procurement</div>
      <div className="signal-chip chip-b">Compliance</div>
      <div className="signal-chip chip-c">Custom analysis</div>
    </div>
  );
}
