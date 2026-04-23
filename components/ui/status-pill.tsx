import type { Region } from "@/components/data/regions";

const statusStyles: Record<
  Region["status"],
  { pill: string; dot: string; label: string }
> = {
  full: {
    pill: "bg-cyan text-playlab-blue ring-1 ring-inset ring-playlab-blue/20",
    dot: "bg-playlab-blue",
    label: "Full ecosystem",
  },
  emerging: {
    pill: "bg-yellow text-dark-green ring-1 ring-inset ring-dark-green/25",
    dot: "bg-dark-green",
    label: "Emerging ecosystem",
  },
};

export function StatusPill({ status }: { status: Region["status"] }) {
  const s = statusStyles[status];
  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-[0.12em] ${s.pill}`}
    >
      <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}
