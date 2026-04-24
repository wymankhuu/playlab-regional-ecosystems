import Image from "next/image";
import type { Funder } from "@/components/funders";

type Props = {
  funder: Funder;
};

export function FunderBadge({ funder }: Props) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-dark-green/20 bg-cream px-2 py-0.5"
      aria-label={funder.name}
    >
      <Image
        src={funder.logo}
        alt={funder.alt}
        width={funder.width}
        height={funder.height}
        className="h-4 w-auto object-contain"
      />
    </span>
  );
}
