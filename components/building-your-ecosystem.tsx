import { Section } from "./ui/section";

const configurations = [
  {
    title: "Exploration + Student Showcase",
    range: "$150K to $300K",
    body: "Regional event to build awareness, followed by a student hackathon to generate proof points and community excitement.",
    accent: "bg-yellow",
  },
  {
    title: "Teacher Fellowship + School Cohort",
    range: "$600K to $5M+",
    body: "Build educator-leaders as AI Innovation Fellows and deploy them within Innovation Schools. Both contribute to a regional AI Application Collection.",
    accent: "bg-cyan",
  },
  {
    title: "District Cohort + Student Initiative",
    range: "$550K to $6M+",
    body: "Move districts from exploration to system-wide implementation while student challenges generate visibility and real tools.",
    accent: "bg-light-green",
  },
  {
    title: "Full Regional Ecosystem",
    range: "$750K+",
    body: "All components working together: exploration events, students, teachers, schools, districts, and embedded Playlab + local nonprofit leadership. Builds toward long-term sustainability and a shared regional AI Application Collection.",
    accent: "bg-green",
  },
];

export function BuildingYourEcosystem() {
  return (
    <Section
      tone="sage"
      eyebrow="How to combine"
      title="Building your ecosystem."
      description="These components are designed to work together. Start with a single exploration event to build regional awareness, then layer in additional components as momentum grows. Or launch multiple components simultaneously for comprehensive impact from day one."
      align="left"
      showColorBar
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {configurations.map((config) => (
          <div
            key={config.title}
            className="overflow-hidden rounded-3xl bg-cream"
          >
            <div className={`${config.accent} h-3 w-full`} aria-hidden />
            <div className="flex flex-col gap-3 p-7 sm:p-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-dark-green/70">
                {config.range}
              </p>
              <h3 className="font-heading text-2xl font-bold text-dark-green sm:text-3xl">
                {config.title}
              </h3>
              <p className="text-base leading-relaxed text-playlab-blue sm:text-lg">
                {config.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
