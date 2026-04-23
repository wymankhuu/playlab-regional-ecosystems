import { FUNDERS, type Funder } from "@/components/funders";
import { FunderBadge } from "@/components/ui/funder-badge";
import type { Region } from "@/components/data/regions";

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

function resolveFunders(keys: string[]): Funder[] {
  return keys
    .map((k) => FUNDERS[k])
    .filter((f): f is Funder => Boolean(f));
}

export function RegionCard({ region }: { region: Region }) {
  const status = statusStyles[region.status];
  return (
    <details
      id={`region-${region.id}`}
      className="group scroll-mt-24 rounded-2xl border border-dark-green/10 bg-cream open:border-dark-green/20 open:md:col-span-2 open:lg:col-span-3"
    >
      <summary
        aria-label={`Toggle details for ${region.name}`}
        className="flex cursor-pointer list-none items-start justify-between gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden"
      >
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
          <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
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
}
