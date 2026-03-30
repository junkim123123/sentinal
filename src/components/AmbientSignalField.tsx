import type { CSSProperties, ReactNode } from "react";

type AmbientSignalItem = {
  label: string;
  title: string;
  text: string;
};

type AmbientSignalFieldProps = {
  label: string;
  title: string;
  description: string;
  items: AmbientSignalItem[];
  footer?: ReactNode;
};

const lanes = [
  { left: "8%", top: "16%", width: "42%", rotate: "-12deg" },
  { left: "34%", top: "22%", width: "30%", rotate: "9deg" },
  { left: "52%", top: "40%", width: "26%", rotate: "-18deg" },
  { left: "16%", top: "58%", width: "46%", rotate: "8deg" },
  { left: "58%", top: "68%", width: "22%", rotate: "-10deg" },
];

const nodes = [
  { left: "10%", top: "18%", delay: "0s" },
  { left: "22%", top: "30%", delay: "0.4s" },
  { left: "39%", top: "24%", delay: "0.8s" },
  { left: "57%", top: "44%", delay: "1.2s" },
  { left: "70%", top: "36%", delay: "1.6s" },
  { left: "26%", top: "58%", delay: "2s" },
  { left: "48%", top: "64%", delay: "2.4s" },
  { left: "74%", top: "70%", delay: "2.8s" },
];

export function AmbientSignalField({
  label,
  title,
  description,
  items,
  footer,
}: AmbientSignalFieldProps) {
  return (
    <div className="ambient-signal-field">
      <div aria-hidden="true" className="ambient-signal-canvas">
        {lanes.map((lane, index) => (
          <span
            className="ambient-signal-lane"
            key={`${lane.left}-${lane.top}`}
            style={
              {
                "--lane-left": lane.left,
                "--lane-top": lane.top,
                "--lane-width": lane.width,
                "--lane-rotate": lane.rotate,
                "--lane-delay": `${index * 0.6}s`,
              } as CSSProperties
            }
          />
        ))}
        {nodes.map((node) => (
          <span
            className="ambient-signal-node"
            key={`${node.left}-${node.top}`}
            style={
              {
                "--node-left": node.left,
                "--node-top": node.top,
                "--node-delay": node.delay,
              } as CSSProperties
            }
          />
        ))}
        <span className="ambient-signal-sweep" />
      </div>

      <div className="ambient-signal-copy">
        <span className="small-label">{label}</span>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>

      <div className="ambient-signal-grid">
        {items.map((item) => (
          <article className="ambient-signal-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      {footer ? <div className="ambient-signal-footer">{footer}</div> : null}
    </div>
  );
}
