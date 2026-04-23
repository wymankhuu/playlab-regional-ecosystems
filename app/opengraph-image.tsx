import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Regional AI Innovation Ecosystems: Playlab";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const livvicBlack = await readFile(
    join(process.cwd(), "app/fonts/Livvic-Black.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#e1e7d9",
          fontFamily: "Livvic",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 110,
            fontWeight: 900,
            lineHeight: 0.95,
            color: "#1a311d",
          }}
        >
          <span>REGIONAL AI</span>
          <span>INNOVATION</span>
          <span>ECOSYSTEMS</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 900,
            color: "#122134",
            letterSpacing: "0.02em",
          }}
        >
          POWERED BY PLAYLAB
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Livvic",
          data: livvicBlack,
          style: "normal",
          weight: 900,
        },
      ],
    }
  );
}
