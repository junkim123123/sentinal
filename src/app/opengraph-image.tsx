import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #0e2235 0%, #0f2d46 40%, #f4efe6 40%, #f4efe6 100%)",
          color: "#09131d",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "56%",
            padding: "72px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "#f4efe6",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            Sentinel Imports
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <div style={{ fontSize: 70, fontWeight: 700, lineHeight: 1.05 }}>
              Molecule-level import intelligence
            </div>
            <div
              style={{
                fontSize: 30,
                lineHeight: 1.35,
                opacity: 0.88,
              }}
            >
              Agricultural chemical reporting built for procurement,
              compliance, and strategy teams.
            </div>
          </div>
        </div>
        <div
          style={{
            width: "44%",
            padding: "72px 68px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 18,
          }}
        >
          {[
            "140+ tracked molecules",
            "Monthly reporting cadence",
            "Excel + Tableau delivery",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                padding: "22px 24px",
                borderRadius: 22,
                background: "#ffffff",
                boxShadow: "0 18px 40px rgba(9, 19, 29, 0.1)",
                fontSize: 28,
                fontWeight: 600,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
