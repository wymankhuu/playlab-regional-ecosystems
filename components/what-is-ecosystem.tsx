import { Section } from "./ui/section";

export function WhatIsEcosystem() {
  return (
    <Section
      tone="sage"
      eyebrow="What it is"
      title="A Regional AI Innovation Ecosystem"
      align="left"
      showColorBar
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-3">
          <p className="text-lg leading-relaxed text-dark-green sm:text-xl">
            A network of local K through 12 school systems, educators, students,
            and community partners that collaborate to explore, build, and share
            AI solutions grounded in their own priorities. Playlab provides the
            platform, curriculum, and training infrastructure. Local partners
            provide the relationships, context, and long-term ownership.
          </p>
        </div>
        <div className="rounded-3xl bg-cream p-8 lg:col-span-2 lg:p-10">
          <p className="font-heading text-xl font-bold text-dark-green sm:text-2xl">
            Modular by design.
          </p>
          <p className="mt-4 text-base leading-relaxed text-dark-green sm:text-lg">
            A funder can invest in one component or combine several to create a
            comprehensive initiative. The six components below are starting
            places, proven models that show what is possible. In practice, we
            customize and tailor every partnership to your goals, your
            community, and your context.
          </p>
        </div>
      </div>
    </Section>
  );
}
