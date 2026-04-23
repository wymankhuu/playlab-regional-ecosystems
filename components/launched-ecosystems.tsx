import { FUNDERS, type Funder } from "./funders";
import { UsMap } from "./ui/us-map";
import type { StateRegionMap } from "./ui/us-map-interactive";
import { CompositionDonut } from "./ui/composition-donut";
import { RegionCard } from "./ui/region-card";
import { regions } from "./data/regions";

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
      id: region.id,
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
        <CompositionDonut />
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
              <span aria-hidden className="h-3 w-3 rounded-sm bg-cyan" />
              Full ecosystem
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden className="h-3 w-3 rounded-sm bg-yellow" />
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
          {regions.map((region) => (
            <RegionCard key={region.id} region={region} />
          ))}
        </div>
      </div>
    </div>
  );
}
