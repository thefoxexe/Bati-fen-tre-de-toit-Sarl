import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#fffefd",
          color: "#3d3d3b",
          fontFamily: "sans-serif",
        }}
      >
        <svg width="200" height="90" viewBox="0 0 200 90" style={{ marginBottom: 36 }}>
          <circle cx="30" cy="78" r="5" fill="#3d3d3b" />
          <path
            d="M30 78 L55 20 L85 62 L112 32 L138 62 L165 45"
            fill="none"
            stroke="#3d3d3b"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M68 55 L86 40" stroke="#cc322e" strokeWidth="6" strokeLinecap="round" />
          <path d="M118 50 L132 42" stroke="#cc322e" strokeWidth="6" strokeLinecap="round" />
          <path d="M144 56 L156 50" stroke="#cc322e" strokeWidth="6" strokeLinecap="round" />
        </svg>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, color: "#cc322e", letterSpacing: -1 }}>
          BATI
        </div>
        <div style={{ display: "flex", fontSize: 34, fontWeight: 600, marginTop: 8, color: "#3d3d3b" }}>
          {site.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 24, marginTop: 28, color: "#767370" }}>
          Partenaire agréé Velux Expert, canton de Vaud
        </div>
      </div>
    ),
    { ...size }
  );
}
