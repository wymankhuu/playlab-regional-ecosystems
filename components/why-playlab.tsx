import { Section } from "./ui/section";

const reasons = [
  {
    title: "The only nonprofit AI platform built to scale student agency.",
    body: "Playlab is the only nonprofit AI organization with its own purpose-built platform designed explicitly for education. Students build AI systems in a secure, moderated environment connected to school infrastructure, while educators retain visibility, analytics, and control.",
  },
  {
    title: "Committed to nonprofit infrastructure and an open ecosystem.",
    body: "Playlab was deliberately structured as a nonprofit to serve schools first. We prioritize trust, safety, educator agency, and long-term capacity over commercialization. Our learning foundation, quality indicators, research, and curriculum assets are shared back with the field.",
  },
  {
    title: "Deep, cross-disciplinary expertise.",
    body: "Our team includes contributors to MIT's Scratch, founders of AI startups, researchers from CalTech and leading AI labs, and alumni of Amazon, Google, Meta, IDEO, and Stripe, alongside recognized leaders in computational thinking and education. Nearly half our staff have served as educators, and our work spans four continents.",
  },
  {
    title: "Proven results at scale.",
    body: "In 2025, Playlab partnered with 104 school systems serving 7.3M students. Educators reported a 4.88/5 training rating and 88 NPS. Partners reported 94 NPS. Over 14,100 students built original AI applications. Active ecosystems in Tennessee, Idaho, Indiana, Central Texas, and DC/MD/VA are demonstrating measurable growth in district AI capacity.",
  },
];

export function WhyPlaylab() {
  return (
    <Section
      id="why-playlab"
      tone="playlab-blue"
      eyebrow="Why Playlab"
      title="Built for schools. Shared with the field."
      align="left"
      showColorBar
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="rounded-3xl border border-cream/15 bg-playlab-blue p-8 sm:p-10"
          >
            <h3 className="font-heading text-xl font-bold leading-snug text-yellow sm:text-2xl">
              {reason.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-cream/90 sm:text-lg">
              {reason.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
