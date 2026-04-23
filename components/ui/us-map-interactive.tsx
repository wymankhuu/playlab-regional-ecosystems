"use client";

import { useRef, useState } from "react";

export type MapRegionCard = {
  name: string;
  status: "full" | "emerging";
  funders: string[];
  systems: number;
};

export type StateRegionMap = Record<string, MapRegionCard>;

type Props = {
  svg: string;
  regions: StateRegionMap;
  title: string;
};

const statusPill: Record<MapRegionCard["status"], { className: string; label: string }> = {
  full: { className: "bg-cyan text-playlab-blue", label: "Full ecosystem" },
  emerging: { className: "bg-yellow text-dark-green", label: "Emerging ecosystem" },
};

export function UsMapInteractive({ svg, regions, title }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  function resolveState(target: EventTarget | null): string | null {
    if (!(target instanceof Element)) return null;
    const path = target.closest("path");
    if (!path) return null;
    const cls = path.getAttribute("class");
    if (!cls) return null;
    return cls.toUpperCase();
  }

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });

    const code = resolveState(e.target);
    if (code && regions[code]) {
      if (code !== hovered) setHovered(code);
    } else if (hovered !== null) {
      setHovered(null);
    }
  }

  function handleLeave() {
    setHovered(null);
  }

  const activeRegion = hovered ? regions[hovered] : null;
  const pill = activeRegion ? statusPill[activeRegion.status] : null;

  return (
    <div
      ref={containerRef}
      className="relative"
      role="img"
      aria-label={title}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div dangerouslySetInnerHTML={{ __html: svg }} />
      {activeRegion && pill && (
        <div
          className="pointer-events-none absolute z-10 min-w-[180px] max-w-[260px] -translate-x-1/2 -translate-y-full rounded-2xl border border-dark-green/15 bg-cream px-4 py-3 shadow-lg"
          style={{
            left: `${cursor.x}px`,
            top: `${cursor.y - 12}px`,
          }}
        >
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider ${pill.className}`}
          >
            {pill.label}
          </span>
          <p className="mt-2 font-heading text-lg font-bold leading-tight text-dark-green">
            {activeRegion.name}
          </p>
          {activeRegion.funders.length > 0 && (
            <p className="mt-1 font-sans text-xs text-playlab-blue/80">
              Supported by {activeRegion.funders.join(", ")}
            </p>
          )}
          {activeRegion.systems > 0 && (
            <p className="mt-1 font-sans text-xs font-semibold text-playlab-blue/80">
              {activeRegion.systems} school systems
            </p>
          )}
        </div>
      )}
    </div>
  );
}
