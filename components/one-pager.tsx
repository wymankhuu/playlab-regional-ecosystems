import { contactMailto, PARTNERSHIP_REQUEST_URL } from "@/components/cta";
import type { Region } from "@/components/data/regions";
import { FUNDERS, type Funder } from "@/components/funders";
import { FunderBadge } from "@/components/ui/funder-badge";
import { StatusPill } from "@/components/ui/status-pill";

const DISTRICT_DISPLAY_LIMIT = 8;

const PARTNERSHIP_COMPONENTS: {
  number: string;
  title: string;
  investment: string;
  tagline: string;
}[] = [
  {
    number: "01",
    title: "Regional Exploration Event",
    investment: "$50K+",
    tagline:
      "1–2 day AI Institute that builds regional alignment and hands-on skills.",
  },
  {
    number: "02",
    title: "Student AI Agency Initiative",
    investment: "$50K–$5M",
    tagline:
      "Hackathons and challenges where students build real AI tools for their communities.",
  },
  {
    number: "03",
    title: "Teacher AI Design Fellowship",
    investment: "$100K–$5M",
    tagline:
      "Year-long educator cohorts designing classroom-tested AI applications.",
  },
  {
    number: "04",
    title: "School & District AI Innovation Cohort",
    investment: "$500K+",
    tagline:
      "Year-long cohorts building custom AI implementation plans across instruction and operations.",
  },
  {
    number: "05",
    title: "AI Lab Schools",
    investment: "$250K / school · 2 years",
    tagline:
      "R&D incubator for future-ready school models; open-source playbooks and tools.",
  },
  {
    number: "06",
    title: "Full Regional Ecosystem",
    investment: "$750K+",
    tagline:
      "Embedded Playlab lead and local nonprofit partner for long-term regional ownership.",
  },
];

function resolveFunders(keys: string[]): Funder[] {
  return keys
    .map((k) => FUNDERS[k])
    .filter((f): f is Funder => Boolean(f));
}

export function OnePager({ region }: { region: Region }) {
  const funders = resolveFunders(region.funders);
  const allDistricts = region.districts ?? [];
  const shownDistricts = allDistricts.slice(0, DISTRICT_DISPLAY_LIMIT);
  const hiddenCount = allDistricts.length - shownDistricts.length;

  return (
    <main
      className="mx-auto max-w-[7.5in] bg-cream px-10 py-8 text-playlab-blue print:max-w-none print:px-0 print:py-0"
      style={{
        colorAdjust: "exact",
        WebkitPrintColorAdjust: "exact",
      }}
    >
      <header className="flex items-start justify-between gap-6 border-b border-dark-green/15 pb-6">
        <div className="flex flex-col gap-3">
          <StatusPill status={region.status} />
          <h1 className="font-heading text-4xl font-bold leading-tight text-dark-green">
            {region.name}
          </h1>
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-playlab-blue/70">
            Regional AI Innovation Ecosystem
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/playlab-logo.png"
            alt="Playlab"
            className="h-8 w-auto"
          />
          {funders.length > 0 && (
            <div className="flex flex-wrap items-center justify-end gap-1.5">
              {funders.map((f) => (
                <FunderBadge key={f.key} funder={f} />
              ))}
            </div>
          )}
        </div>
      </header>

      <section className="mt-6">
        {region.blurb.split("\n\n").map((para, i) => (
          <p
            key={i}
            className="mt-2 font-sans text-[13px] leading-relaxed text-playlab-blue first:mt-0"
          >
            {para}
          </p>
        ))}
      </section>

      {region.stats && region.stats.length > 0 && (
        <section className="mt-6">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-dark-green/70">
            Reach
          </p>
          <dl
            className={`mt-2 grid gap-3 ${
              region.stats.length >= 3 ? "grid-cols-3" : "grid-cols-2"
            }`}
          >
            {region.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg bg-playlab-blue/5 p-3"
              >
                <dt className="font-sans text-[9px] font-semibold uppercase tracking-wider text-dark-green/70">
                  {s.label}
                </dt>
                <dd className="mt-1 font-heading text-lg font-bold leading-tight text-dark-green">
                  {s.value}
                </dd>
                {s.sub && (
                  <p className="mt-0.5 font-sans text-[10px] font-semibold text-playlab-blue/80">
                    {s.sub}
                  </p>
                )}
              </div>
            ))}
          </dl>
        </section>
      )}

      {region.orgs.length > 0 && (
        <section className="mt-5">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-dark-green/70">
            Partners
          </p>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 font-sans text-[12px] text-playlab-blue">
            {region.orgs.map((o) => (
              <li key={o.name} className="flex gap-2">
                <span
                  aria-hidden
                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-dark-green"
                />
                <span>{o.name}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {shownDistricts.length > 0 && (
        <section className="mt-5 print:break-inside-avoid">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-dark-green/70">
            {region.districtsHeading ?? "Participating districts"}
          </p>
          <ul className="mt-2 divide-y divide-dark-green/10 rounded-lg border border-dark-green/15">
            {shownDistricts.map((d) => (
              <li
                key={d.name}
                className="flex items-baseline justify-between gap-4 px-3 py-2"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-sans text-[12px] font-semibold text-dark-green">
                    {d.name}
                  </p>
                  <p className="mt-0.5 font-sans text-[11px] leading-snug text-playlab-blue/80">
                    {d.community}
                  </p>
                </div>
                <span className="shrink-0 font-sans text-[11px] font-semibold text-playlab-blue">
                  {d.students} students
                </span>
              </li>
            ))}
          </ul>
          {hiddenCount > 0 && (
            <p className="mt-1.5 font-sans text-[11px] italic text-playlab-blue/70">
              …and {hiddenCount} more. See the full list at{" "}
              <a
                href={`/#region-${region.id}`}
                className="text-link underline-offset-2 hover:underline"
              >
                playlab-regional-ecosystems
              </a>
              .
            </p>
          )}
        </section>
      )}

      <section className="mt-5 print:break-inside-avoid">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-dark-green/70">
          Ways to partner in {region.name}
        </p>
        <p className="mt-1 font-sans text-[11px] leading-snug text-playlab-blue/80">
          Mix and match components to design an initiative tailored to the
          region. Investment ranges are starting points.
        </p>
        <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2">
          {PARTNERSHIP_COMPONENTS.map((c) => (
            <li
              key={c.number}
              className="rounded-md border border-dark-green/15 bg-cream px-3 py-2"
            >
              <div className="flex items-baseline justify-between gap-2">
                <p className="font-sans text-[11px] font-bold text-dark-green">
                  <span className="text-dark-green/60">{c.number}</span>{" "}
                  {c.title}
                </p>
                <span className="shrink-0 font-sans text-[10px] font-semibold text-playlab-blue/70">
                  {c.investment}
                </span>
              </div>
              <p className="mt-0.5 font-sans text-[10.5px] leading-snug text-playlab-blue">
                {c.tagline}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-5 rounded-lg border border-dark-green/15 bg-sage/60 px-5 py-4 print:break-inside-avoid">
        <h2 className="font-heading text-xl font-bold leading-tight text-dark-green">
          Let&apos;s build together.
        </h2>
        <p className="mt-1 font-sans text-[12px] leading-relaxed text-dark-green">
          Reach out to explore how Playlab&apos;s regional ecosystem components
          might fit your goals.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <a
            href={contactMailto(region.name)}
            className="inline-flex items-center rounded-full bg-dark-green px-4 py-1.5 font-sans text-[12px] font-semibold text-cream"
          >
            Contact Playlab
          </a>
          <a
            href={PARTNERSHIP_REQUEST_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-dark-green bg-cream px-4 py-1.5 font-sans text-[12px] font-semibold text-dark-green"
          >
            Submit a partnership request
          </a>
        </div>
      </section>

      <footer className="mt-6 flex items-center justify-between gap-4 border-t border-dark-green/15 pt-3 font-sans text-[10px] text-playlab-blue/70">
        <span>Powered by Playlab Education Inc., a 501(c)3 nonprofit.</span>
        <span>As of April 2026</span>
      </footer>
    </main>
  );
}
