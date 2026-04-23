import { type ReactNode } from "react";

type Tone =
  | "cream"
  | "sage"
  | "yellow"
  | "green"
  | "light-green"
  | "cyan"
  | "dark-green"
  | "playlab-blue";

const toneClasses: Record<Tone, string> = {
  cream: "bg-cream text-dark-green",
  sage: "bg-sage text-dark-green",
  yellow: "bg-yellow text-dark-green",
  green: "bg-green text-playlab-blue",
  "light-green": "bg-light-green text-dark-green",
  cyan: "bg-cyan text-playlab-blue",
  "dark-green": "bg-dark-green text-cream",
  "playlab-blue": "bg-playlab-blue text-cream",
};

export function Card({
  tone = "cream",
  className = "",
  children,
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-3xl p-6 sm:p-8 lg:p-10 ${toneClasses[tone]} ${className}`}
    >
      {children}
    </div>
  );
}
