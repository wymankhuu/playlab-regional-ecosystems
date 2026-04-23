import { type ReactNode } from "react";
import { ColorBar } from "./color-bar";

type Tone = "cream" | "sage" | "robin" | "playlab-blue" | "dark-green";

const sectionTone: Record<Tone, string> = {
  cream: "bg-cream text-playlab-blue",
  sage: "bg-sage text-dark-green",
  robin: "bg-robin text-playlab-blue",
  "playlab-blue": "bg-playlab-blue text-cream",
  "dark-green": "bg-dark-green text-cream",
};

const eyebrowTone: Record<Tone, string> = {
  cream: "text-playlab-blue",
  sage: "text-dark-green",
  robin: "text-playlab-blue",
  "playlab-blue": "text-robin",
  "dark-green": "text-light-green",
};

export function Section({
  tone = "cream",
  eyebrow,
  title,
  description,
  align = "left",
  showColorBar = false,
  children,
  id,
}: {
  tone?: Tone;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  showColorBar?: boolean;
  children?: ReactNode;
  id?: string;
}) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";
  const headerMaxW = align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl";

  return (
    <section id={id} className={`${sectionTone[tone]} py-16 sm:py-20 lg:py-28`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
        {(eyebrow || title || description || showColorBar) && (
          <div className={`flex flex-col gap-5 ${alignClass} ${headerMaxW} mb-12 sm:mb-16`}>
            {showColorBar && <ColorBar className={align === "center" ? "mx-auto" : ""} />}
            {eyebrow && (
              <p
                className={`font-sans text-xs font-semibold uppercase tracking-[0.25em] sm:text-sm ${eyebrowTone[tone]}`}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-heading text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg leading-relaxed sm:text-xl">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
