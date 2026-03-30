type SignalChartProps = {
  title: string;
  label: string;
  variant?: "line" | "bar";
};

export function SignalChart({
  title,
  label,
  variant = "line",
}: SignalChartProps) {
  const linePoints = [
    { x: 12, y: 146 },
    { x: 66, y: 124 },
    { x: 120, y: 134 },
    { x: 174, y: 94 },
    { x: 228, y: 100 },
    { x: 308, y: 38 },
  ];

  const barHeights = [42, 80, 110, 145, 118, 160];
  const axisLabels =
    variant === "line"
      ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
      : ["CN", "IN", "MX", "EU", "BR", "Other"];

  return (
    <div className="signal-chart-card">
      <div className="signal-chart-head signal-chart-head-rich">
        <div>
          <span className="small-label">{label}</span>
          <strong>{title}</strong>
        </div>
        <div className="signal-chart-metric">
          <span>{variant === "line" ? "Latest movement" : "Coverage mix"}</span>
          <strong>{variant === "line" ? "+18%" : "72%"}</strong>
        </div>
      </div>
      {variant === "line" ? (
        <svg
          aria-hidden="true"
          className="signal-chart-svg"
          viewBox="0 0 320 180"
        >
          {[24, 64, 104, 144].map((y) => (
            <line
              key={y}
              stroke="rgba(18, 36, 52, 0.08)"
              strokeDasharray="4 6"
              strokeWidth="1"
              x1="8"
              x2="312"
              y1={y}
              y2={y}
            />
          ))}
          <path
            d="M12 150 L66 122 L120 132 L174 88 L228 95 L308 32 L308 168 L12 168 Z"
            fill="rgba(105, 186, 198, 0.18)"
          />
          <path
            d="M12 150 L66 122 L120 132 L174 88 L228 95 L308 32"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="4"
          />
          {linePoints.map((point) => (
            <circle
              cx={point.x}
              cy={point.y}
              fill="#c98e2f"
              key={`${point.x}-${point.y}`}
              r="5"
            />
          ))}
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          className="signal-chart-svg"
          viewBox="0 0 320 180"
        >
          {[24, 64, 104, 144].map((y) => (
            <line
              key={y}
              stroke="rgba(18, 36, 52, 0.08)"
              strokeDasharray="4 6"
              strokeWidth="1"
              x1="8"
              x2="312"
              y1={y}
              y2={y}
            />
          ))}
          {barHeights.map((height, index) => (
            <rect
              fill={index % 2 === 0 ? "#c98e2f" : "#82c8d7"}
              height={height}
              key={height}
              opacity={0.9}
              rx="10"
              width="30"
              x={28 + index * 46}
              y={168 - height}
            />
          ))}
        </svg>
      )}
      <div className="signal-axis-labels">
        {axisLabels.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
