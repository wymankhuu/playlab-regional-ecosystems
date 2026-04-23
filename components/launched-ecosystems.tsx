import { FUNDERS, type Funder } from "./funders";
import { FunderBadge } from "./ui/funder-badge";
import { UsMap } from "./ui/us-map";
import type { StateRegionMap } from "./ui/us-map-interactive";

import { regions, type Region } from "./data/regions";

function resolveFunders(keys: string[]): Funder[] {
  return keys
    .map((k) => FUNDERS[k])
    .filter((f): f is Funder => Boolean(f));
}

const fullStates = regions
  .filter((r) => r.status === "full")
  .map((r) => r.id.toUpperCase());

const emergingStates = ["NY", "DC", "MD", "VA"];

const stateRegionMap: StateRegionMap = (() => {
  const map: StateRegionMap = {};
  for (const region of regions) {
    const card = {
      name: region.name,
      status: region.status,
      funders: resolveFunders(region.funders),
      systems: region.systems,
    };
    if (region.id === "dmv") {
      for (const code of ["DC", "MD", "VA"]) map[code] = card;
    } else if (region.id === "nyc") {
      map["NY"] = card;
    } else {
      map[region.id.toUpperCase()] = card;
    }
  }
  return map;
})();

const statusStyles: Record<Region["status"], { pill: string; label: string }> = {
  full: {
    pill: "bg-cyan text-playlab-blue",
    label: "Full ecosystem",
  },
  emerging: {
    pill: "bg-yellow text-dark-green",
    label: "Emerging ecosystem",
  },
};

export function LaunchedEcosystems() {
  return (
    <div id="launched" className="scroll-mt-24">
      <h3 className="font-heading text-3xl font-bold leading-tight text-dark-green sm:text-4xl">
        Where we&apos;ve launched so far.
      </h3>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-playlab-blue sm:text-lg">
        Full ecosystems are multi-year regional initiatives backed by a
        philanthropic partner and coordinated by a local nonprofit. Emerging
        ecosystems are partnerships already delivering AI agency at scale and on
        the path to full regional infrastructure.
      </p>
      <div className="mt-8">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-dark-green/70">
          Partner system composition · 59 systems across all regions as of April 2026
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
                <circle
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke="var(--color-dark-green)"
                  strokeWidth="4.5"
                  strokeDasharray="22 78"
                  strokeDashoffset="0"
                  transform="rotate(-90 21 21)"
                />
                <circle
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke="var(--color-green)"
                  strokeWidth="4.5"
                  strokeDasharray="20 80"
                  strokeDashoffset="-22"
                  transform="rotate(-90 21 21)"
                />
                <circle
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke="var(--color-cyan)"
                  strokeWidth="4.5"
                  strokeDasharray="58 42"
                  strokeDashoffset="-42"
                  transform="rotate(-90 21 21)"
                />
              </svg>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-heading text-3xl font-bold leading-none text-dark-green">
                  59
                </span>
                <span className="mt-1 font-sans text-[10px] font-semibold uppercase tracking-wider text-dark-green/70">
                  systems
                </span>
              </div>
            </div>
            <ul className="flex-1 space-y-3 self-stretch sm:self-auto">
              <li className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="h-3 w-3 shrink-0 rounded-sm bg-dark-green"
                />
                <span className="flex-1 font-sans text-sm text-playlab-blue">
                  Rural districts
                </span>
                <span className="font-heading text-lg font-bold text-dark-green">
                  13
                </span>
                <span className="w-10 text-right font-sans text-xs font-semibold text-playlab-blue/80">
                  22%
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="h-3 w-3 shrink-0 rounded-sm bg-green"
                />
                <span className="flex-1 font-sans text-sm text-playlab-blue">
                  Suburban districts
                </span>
                <span className="font-heading text-lg font-bold text-dark-green">
                  12
                </span>
                <span className="w-10 text-right font-sans text-xs font-semibold text-playlab-blue/80">
                  20%
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="h-3 w-3 shrink-0 rounded-sm bg-cyan"
                />
                <span className="flex-1 font-sans text-sm text-playlab-blue">
                  Urban districts &amp; charter networks
                </span>
                <span className="font-heading text-lg font-bold text-dark-green">
                  34
                </span>
                <span className="w-10 text-right font-sans text-xs font-semibold text-playlab-blue/80">
                  58%
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="overflow-hidden rounded-3xl bg-playlab-blue/5 p-4 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl">
            <UsMap
              highlightedStates={fullStates}
              emergingStates={emergingStates}
              regions={stateRegionMap}
              title="Regions where Playlab ecosystems are live"
              description="Tennessee, Idaho, Indiana, and Texas are shaded as full ecosystems. New York, DC, Maryland, and Virginia are shaded as emerging ecosystems. Hover over a shaded state to see its region card."
            />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-playlab-blue">
            <span className="inline-flex items-center gap-2">
              <span
                aria-hidden
                className="h-3 w-3 rounded-sm bg-cyan"
              />
              Full ecosystem
            </span>
            <span className="inline-flex items-center gap-2">
              <span
                aria-hidden
                className="h-3 w-3 rounded-sm bg-yellow"
              />
              Emerging ecosystem
            </span>
          </div>
        </div>

        <p className="mt-10 max-w-2xl font-sans text-sm leading-relaxed text-playlab-blue/80 sm:text-base">
          The cards below are snapshots of publicly visible work. More is
          always underway in each region, in the day-to-day of partners,
          educators, and students.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => {
            const status = statusStyles[region.status];
            return (
              <details
                key={region.id}
                className="group rounded-2xl border border-dark-green/10 bg-cream open:border-dark-green/20 open:md:col-span-2 open:lg:col-span-3"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden">
                  <div className="flex flex-col gap-2">
                    <span
                      className={`inline-flex w-fit items-center rounded-full px-2.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider ${status.pill}`}
                    >
                      {status.label}
                    </span>
                    <h4 className="font-heading text-xl font-bold leading-tight text-dark-green sm:text-2xl">
                      {region.name}
                    </h4>
                    {region.systems > 0 && (
                      <p className="font-sans text-xs font-semibold text-playlab-blue/80">
                        {region.systems} school systems
                      </p>
                    )}
                    {region.funders.length > 0 && (
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        {resolveFunders(region.funders).map((funder) => (
                          <FunderBadge key={funder.key} funder={funder} />
                        ))}
                      </div>
                    )}
                  </div>
                  <span
                    aria-hidden
                    className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-dark-green text-cream transition-transform group-open:rotate-45"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-3.5 w-3.5"
                    >
                      <path
                        d="M10 4v12M4 10h12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-dark-green/10 px-5 py-4">
                  <div className="space-y-3 text-sm leading-relaxed text-playlab-blue sm:text-base">
                    {region.blurb.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  {region.orgs.length > 0 && (
                    <>
                      <p className="mt-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-dark-green/70">
                        Partners
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {region.orgs.map((org) => (
                          <li
                            key={org.name}
                            className="flex gap-2 text-sm text-playlab-blue"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-dark-green"
                            />
                            {org.url ? (
                              <a
                                href={org.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-playlab-blue underline-offset-2 hover:text-link hover:underline"
                              >
                                {org.name}
                                <span aria-hidden className="ml-1">
                                  ↗
                                </span>
                              </a>
                            ) : (
                              <span>{org.name}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {region.stats && region.stats.length > 0 && (
                    <>
                      <p className="mt-6 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-dark-green/70">
                        Reach
                      </p>
                      <dl
                        className={`mt-2 grid grid-cols-1 gap-3 ${
                          region.stats.length >= 3
                            ? "sm:grid-cols-3"
                            : region.stats.length === 2
                              ? "sm:grid-cols-2"
                              : ""
                        }`}
                      >
                        {region.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="rounded-xl bg-playlab-blue/5 p-3"
                          >
                            <dt className="font-sans text-[10px] font-semibold uppercase tracking-wider text-dark-green/70">
                              {stat.label}
                            </dt>
                            <dd className="mt-1 font-heading text-xl font-bold text-dark-green">
                              {stat.value}
                            </dd>
                            {stat.sub && (
                              <p className="mt-0.5 font-sans text-xs font-semibold text-playlab-blue/80">
                                {stat.sub}
                              </p>
                            )}
                          </div>
                        ))}
                      </dl>
                    </>
                  )}
                  {region.districts && region.districts.length > 0 && (
                    <>
                      <p className="mt-6 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-dark-green/70">
                        {region.districtsHeading ?? "Participating districts"}
                      </p>
                      <ul className="mt-3 divide-y divide-dark-green/5 rounded-xl border border-dark-green/10 bg-cream">
                        {region.districts.map((d) => (
                          <li
                            key={d.name}
                            className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                          >
                            <div className="min-w-0 flex-1">
                              <p className="font-sans text-sm font-semibold text-dark-green">
                                {d.name}
                              </p>
                              <p className="mt-0.5 font-sans text-xs text-playlab-blue/80">
                                {d.community}
                              </p>
                            </div>
                            <span className="shrink-0 font-sans text-xs font-semibold text-playlab-blue">
                              {d.students} students
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </div>
  );
}

