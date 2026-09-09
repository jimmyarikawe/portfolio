import { ImageResponse } from "next/og";

/*
 * The previous card was the 200x201 monogram, which LinkedIn — where design
 * recruiters actually are — renders as a blank or badly cropped tile. This is
 * the 1200x630 it wants, generated at build time so there is no binary asset to
 * keep in sync with the positioning copy.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Jimmy Arikawe — Senior Product Designer";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFFFF",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#5F6472" }}>
          jimmyarikawe.com
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 600,
              color: "#000000",
              letterSpacing: "-2px",
              lineHeight: 1.1,
            }}
          >
            Jimmy Arikawe
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 38,
              color: "#2D2D2D",
              letterSpacing: "-1px",
            }}
          >
            Senior Product Designer
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 27,
              color: "#5F6472",
              lineHeight: 1.4,
            }}
          >
            Fintech, enterprise operations and AI products — designed and built.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            fontSize: 24,
            color: "#5F6472",
            borderTop: "1px solid #E0E0E0",
            paddingTop: 26,
          }}
        >
          <span>Omits</span>
          <span>·</span>
          <span>Pentagram</span>
          <span>·</span>
          <span>Radical Company</span>
          <span>·</span>
          <span>MSc AI, Distinction</span>
        </div>
      </div>
    ),
    size
  );
}
