type Segment = {
  label: string;
  count: number;
  percent: number;
  swatch: string;
  dashArray: string;
  dashOffset: string;
  stroke: string;
};

const segments: Segment[] = [
  {
    label: "Rural districts",
    count: 13,
    percent: 22,
    swatch: "bg-dark-green",
    dashArray: "22 78",
    dashOffset: "0",
    stroke: "var(--color-dark-green)",
  },
  {
    label: "Suburban districts",
    count: 12,
    percent: 20,
    swatch: "bg-green",
    dashArray: "20 80",
    dashOffset: "-22",
    stroke: "var(--color-green)",
  },
  {
    label: "Urban districts & charter networks",
    count: 35,
    percent: 58,
    swatch: "bg-cyan",
    dashArray: "58 42",
    dashOffset: "-42",
    stroke: "var(--color-cyan)",
  },
];

const TOTAL = 60;

export function CompositionDonut() {
  return (
    <div>
      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-dark-green/70">
        Partner system composition · {TOTAL} systems across all regions as of April 2026
      </p>
      <div className="mt-3 rounded-2xl border border-dark-green/10 bg-cream p-5 sm:p-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
          <div className="relative w-40 shrink-0 sm:w-44">
            <svg viewBox="0 0 42 42" className="w-full">
              <circle
                cx="21"
                cy="21"
                r="15.915"
                fill="transparent"
                stroke="var(--color-robin)"
                strokeWidth="4.5"
              />
              {segments.map((seg) => (
                <circle
                  key={seg.label}
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke={seg.stroke}
                  strokeWidth="4.5"
                  strokeDasharray={seg.dashArray}
                  strokeDashoffset={seg.dashOffset}
                  transform="rotate(-90 21 21)"
                />
              ))}
            </svg>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-heading text-3xl font-bold leading-none text-dark-green">
                {TOTAL}
              </span>
              <span className="mt-1 font-sans text-[10px] font-semibold uppercase tracking-wider text-dark-green/70">
                systems
              </span>
            </div>
          </div>
          <ul className="flex-1 space-y-3 self-stretch sm:self-auto">
            {segments.map((seg) => (
              <li key={seg.label} className="flex items-center gap-3">
                <span
                  aria-hidden
                  className={`h-3 w-3 shrink-0 rounded-sm ${seg.swatch}`}
                />
                <span className="flex-1 font-sans text-sm text-playlab-blue">
                  {seg.label}
                </span>
                <span className="font-heading text-lg font-bold text-dark-green">
                  {seg.count}
                </span>
                <span className="w-10 text-right font-sans text-xs font-semibold text-playlab-blue/80">
                  {seg.percent}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
