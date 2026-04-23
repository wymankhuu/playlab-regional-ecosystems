import { UsMap } from "./ui/us-map";
import type { StateRegionMap } from "./ui/us-map-interactive";

type Region = {
  id: string;
  name: string;
  status: "full" | "emerging";
  funders: string[];
  systems: number;
  blurb: string;
  orgs: string[];
};

const regions: Region[] = [
  {
    id: "tn",
    name: "Tennessee",
    status: "full",
    funders: ["Google.org"],
    systems: 9,
    blurb:
      "Nine Tennessee school systems in the Google.org AI Ecosystems regional cohort, with SCORE co-leading local coordination and recruitment.",
    orgs: ["SCORE", "Participating Tennessee districts"],
  },
  {
    id: "id",
    name: "Idaho",
    status: "full",
    funders: ["Google.org"],
    systems: 8,
    blurb:
      "Eight Idaho school systems in the Google.org AI Ecosystems regional cohort, with the Idaho Department of Education co-leading statewide coordination.",
    orgs: ["Idaho Department of Education", "Participating Idaho districts"],
  },
  {
    id: "in",
    name: "Indiana",
    status: "full",
    funders: ["Google.org"],
    systems: 9,
    blurb:
      "Nine Indiana school systems in the Google.org AI Ecosystems regional cohort, with ICCI and IASP co-leading district engagement.",
    orgs: [
      "Indiana Chamber of Commerce Foundation (ICCI)",
      "Indiana Association of School Principals (IASP)",
      "Participating Indiana districts",
    ],
  },
  {
    id: "tx",
    name: "Central Texas",
    status: "full",
    funders: ["KLE Foundation"],
    systems: 0,
    blurb:
      "Central Texas regional ecosystem focused on building AI capacity across partner districts.",
    orgs: ["Central Texas partner districts"],
  },
  {
    id: "dmv",
    name: "DC · MD · VA",
    status: "emerging",
    funders: ["Amazon"],
    systems: 0,
    blurb:
      "DC, Maryland, and Virginia districts advancing AI agency together, including the Fairfax County \"Seize the Moment\" student challenge with Playlab and Amazon.",
    orgs: ["Fairfax County Public Schools", "DMV partner districts"],
  },
  {
    id: "nyc",
    name: "New York City",
    status: "emerging",
    funders: [],
    systems: 0,
    blurb:
      "New York City Public Schools partnership anchored by the NYCPS AI Innovation Fellows and the Summer AI Design Institute with the Consortium International Outward Bound District.",
    orgs: [
      "NYC Public Schools",
      "Consortium International Outward Bound District",
      "Leading Educators",
      "New Visions",
    ],
  },
];

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
      funders: region.funders,
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
      <div className="mt-10">
        <div className="overflow-hidden rounded-3xl bg-playlab-blue/5 p-4 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl">
            <UsMap
              highlightedStates={fullStates}
              emergingStates={emergingStates}
              regions={stateRegionMap}
              title="Regions where Playlab ecosystems are live"
              description="Tennessee, Idaho, Indiana, and Central Texas are shaded as full ecosystems. New York, DC, Maryland, and Virginia are shaded as emerging ecosystems. Hover over a shaded state to see its region card."
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

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => {
            const status = statusStyles[region.status];
            return (
              <details
                key={region.id}
                className="group rounded-2xl border border-dark-green/10 bg-cream open:border-dark-green/20 open:md:col-span-2 open:lg:col-span-3"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider ${status.pill}`}
                      >
                        {status.label}
                      </span>
                      {region.funders.map((funder) => (
                        <span
                          key={funder}
                          className="inline-flex items-center rounded-full border border-dark-green/20 bg-sage px-2.5 py-0.5 font-sans text-[10px] font-semibold text-dark-green"
                        >
                          {funder}
                        </span>
                      ))}
                    </div>
                    <h4 className="font-heading text-xl font-bold leading-tight text-dark-green sm:text-2xl">
                      {region.name}
                    </h4>
                    {region.systems > 0 && (
                      <p className="font-sans text-xs font-semibold text-playlab-blue/80">
                        {region.systems} school systems
                      </p>
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
                  <p className="text-sm leading-relaxed text-playlab-blue sm:text-base">
                    {region.blurb}
                  </p>
                  {region.orgs.length > 0 && (
                    <>
                      <p className="mt-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-dark-green/70">
                        Partners
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {region.orgs.map((org) => (
                          <li
                            key={org}
                            className="flex gap-2 text-sm text-playlab-blue"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-dark-green"
                            />
                            <span>{org}</span>
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
