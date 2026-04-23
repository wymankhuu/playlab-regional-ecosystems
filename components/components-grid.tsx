import { Section } from "./ui/section";
import { ComponentCard } from "./ui/component-card";
import { components } from "./data/components";

export function ComponentsGrid() {
  return (
    <Section
      id="components"
      tone="cream"
      eyebrow="The components"
      title="Six modular ways to invest."
      description="Mix and match components to design an initiative tailored to your region. Investment ranges below are starting points. We'll brainstorm together to design an approach that fits your goals, community, and context."
      align="left"
      showColorBar
    >
      <div className="flex flex-col gap-8">
        {components.map((c) => (
          <ComponentCard key={c.number} component={c} />
        ))}
      </div>
    </Section>
  );
}
