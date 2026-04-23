import Image from "next/image";
import type { Component } from "@/components/data/components";

const accentBg: Record<Component["accent"], string> = {
  yellow: "bg-yellow text-dark-green",
  green: "bg-green text-playlab-blue",
  cyan: "bg-cyan text-playlab-blue",
  "light-green": "bg-light-green text-dark-green",
  sage: "bg-sage text-dark-green",
  cream: "bg-cream text-dark-green",
};

export function ComponentCard({ component: c }: { component: Component }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-dark-green/10 bg-cream">
      <header
        className={`flex flex-col gap-4 px-8 py-7 sm:flex-row sm:items-end sm:justify-between sm:px-10 sm:py-8 ${accentBg[c.accent]}`}
      >
        <div className="flex items-baseline gap-5">
          <span className="font-heading text-5xl font-bold leading-none sm:text-6xl">
            {c.number}
          </span>
          <h3 className="font-heading text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            {c.title}
          </h3>
        </div>
        <span className="inline-flex shrink-0 items-center self-start rounded-full bg-dark-green px-5 py-2 font-sans text-sm font-semibold text-cream sm:self-auto">
          {c.investment}
        </span>
      </header>

      <div className="grid grid-cols-1 gap-10 px-8 py-10 sm:px-10 lg:grid-cols-12">
        <div className="lg:col-span-12">
          <p className="font-heading text-lg font-semibold leading-snug text-dark-green sm:text-xl">
            {c.keyOutcome}
          </p>
        </div>

        <div className="lg:col-span-6">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-dark-green/70">
            What it looks like
          </p>
          <ul className="mt-4 space-y-3">
            {c.whatItLooksLike.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base leading-relaxed text-playlab-blue"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dark-green"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-dark-green/70">
            Outcomes
          </p>
          <ul className="mt-4 space-y-3">
            {c.outcomes.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base leading-relaxed text-playlab-blue"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dark-green"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-sage p-6 lg:col-span-12 lg:p-8">
          {c.example.image && (
            <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src={c.example.image.src}
                alt={c.example.image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 960px, 100vw"
              />
            </div>
          )}
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-dark-green/70">
            Example in the field
          </p>
          <p className="mt-3 font-heading text-lg font-bold text-dark-green sm:text-xl">
            {c.example.name}
          </p>
          <p className="mt-3 text-base leading-relaxed text-dark-green sm:text-[1.0625rem]">
            {c.example.body}
          </p>
          {c.example.links && (
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {c.example.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-sans text-sm font-semibold text-link underline-offset-4 hover:underline"
                >
                  {link.label} <span aria-hidden>→</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
