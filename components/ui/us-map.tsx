import fs from "node:fs";
import path from "node:path";

import {
  StateRegionMap,
  UsMapInteractive,
} from "./us-map-interactive";

const SVG_SOURCE = fs.readFileSync(
  path.join(process.cwd(), "public", "us-map.svg"),
  "utf-8",
);

type Props = {
  highlightedStates?: string[];
  emergingStates?: string[];
  regions?: StateRegionMap;
  title?: string;
  description?: string;
};

function buildSvg({
  highlightedStates,
  emergingStates,
  title,
  description,
}: Required<Pick<Props, "highlightedStates" | "emergingStates">> & {
  title: string;
  description: string;
}): string {
  const fullSelectors = highlightedStates
    .map((s) => `.${s.toLowerCase()}`)
    .join(",");
  const emergingSelectors = emergingStates
    .map((s) => `.${s.toLowerCase()}`)
    .join(",");

  const interactiveCodes = [...highlightedStates, ...emergingStates].map((s) =>
    s.toLowerCase(),
  );
  const allInteractive = interactiveCodes.map((s) => `.${s}`).join(",");
  const allInteractiveHover = interactiveCodes
    .map((s) => `.${s}:hover`)
    .join(",");

  const injectedCss = `
.state { fill: var(--color-playlab-blue); }
.borders { stroke: var(--color-cream); stroke-width: 1.25; }
.separator1 { display: none; }
${fullSelectors ? `${fullSelectors} { fill: var(--color-cyan); }` : ""}
${emergingSelectors ? `${emergingSelectors} { fill: var(--color-yellow); }` : ""}
${allInteractive ? `${allInteractive} { cursor: pointer; transition: filter 150ms ease; }` : ""}
${allInteractiveHover ? `${allInteractiveHover} { filter: brightness(1.1); }` : ""}
`.trim();

  const a11y = `<title>${escapeXml(title)}</title><desc>${escapeXml(description)}</desc>`;

  return SVG_SOURCE.replace(/<\?xml[^>]*\?>\s*/, "")
    .replace(
      /<title>[^<]*<\/title>/,
      a11y,
    )
    .replace(/<\/style>/, `\n${injectedCss}\n</style>`)
    .replace(
      /<svg([^>]*)width="\d+"([^>]*)height="\d+"([^>]*)>/,
      '<svg$1$2$3 viewBox="0 0 959 593" preserveAspectRatio="xMidYMid meet" width="100%">',
    );
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function UsMap({
  highlightedStates = [],
  emergingStates = [],
  regions = {},
  title = "United States",
  description = "A map of the United States of America.",
}: Props) {
  const svg = buildSvg({
    highlightedStates,
    emergingStates,
    title,
    description,
  });
  return <UsMapInteractive svg={svg} regions={regions} title={title} />;
}
