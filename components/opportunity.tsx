import { Section } from "./ui/section";
import { Card } from "./ui/card";
import { LaunchedEcosystems } from "./launched-ecosystems";

const capacities = [
  {
    label: "AI knowledge",
    body: "Understanding how AI works, its capabilities, limitations, and societal impact.",
  },
  {
    label: "Computational fluency",
    body: "The ability to design and improve AI systems through testing and iteration.",
  },
  {
    label: "Discernment",
    body: "The judgment to evaluate whether and how AI should be used.",
  },
];

const stats = [
  { value: "104", label: "school systems partnered in 2025" },
  { value: "7.3M", label: "students reached through partner systems" },
  { value: "19K+", label: "US educators trained" },
  { value: "14,100", label: "students built original AI applications" },
];

export function Opportunity() {
  return (
    <Section
      id="opportunity"
      tone="cream"
      eyebrow="The Opportunity"
      title="Build local AI agency. Unlock long-term innovation in learning."
      description="Playlab defines AI agency as the intersection of three capacities. With Playlab, students and educators develop AI agency by building custom AI applications grounded in their values, curriculum, and local context."
      align="left"
      showColorBar
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {capacities.map((c) => (
          <Card key={c.label} tone="sage">
            <h3 className="font-heading text-2xl font-bold text-dark-green sm:text-3xl">
              {c.label}
            </h3>
            <p className="mt-3 text-base leading-relaxed sm:text-lg">{c.body}</p>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-3xl bg-playlab-blue p-8 text-cream sm:p-12">
        <p className="font-heading text-xl font-semibold leading-snug sm:text-2xl">
          In 2025, Playlab demonstrated that AI agency can be built at scale.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-heading text-4xl font-bold text-yellow sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-cream/85 sm:text-base">
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-cream/90 sm:text-lg">
          We are expanding this work globally, aiming for 100K educators and
          100K students to build on Playlab in 2026, and 1 million annually by
          2028 to 2029. To do this, we are building Regional AI Innovation
          Ecosystems: networks of schools, districts, and local partners that
          collaborate to build AI capacity together.
        </p>
      </div>

      <div className="mt-16 sm:mt-20">
        <LaunchedEcosystems />
      </div>
    </Section>
  );
}
