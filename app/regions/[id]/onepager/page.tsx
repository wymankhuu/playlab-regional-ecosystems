import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { regions } from "@/components/data/regions";
import { OnePager } from "@/components/one-pager";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return regions.map((r) => ({ id: r.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const region = regions.find((r) => r.id === id);
  if (!region) return { title: "Region not found | Playlab" };
  return {
    title: `${region.name} — Regional AI Innovation Ecosystem | Playlab`,
    description: region.blurb.slice(0, 200),
    robots: { index: false },
  };
}

export default async function OnePagerPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const region = regions.find((r) => r.id === id);
  if (!region) notFound();
  return <OnePager region={region} />;
}
