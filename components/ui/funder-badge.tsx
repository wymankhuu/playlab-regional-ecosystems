import type { Funder } from "@/components/funders";

type Props = {
  funder: Funder;
};

export function FunderBadge({ funder }: Props) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-dark-green/20 bg-cream px-2 py-0.5"
      title={funder.name}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={funder.logo}
        alt={funder.alt}
        className="h-4 w-auto object-contain"
      />
    </span>
  );
}
