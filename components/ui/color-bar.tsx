import Image from "next/image";

export function ColorBar({ className }: { className?: string }) {
  return (
    <Image
      src="/color-bar.svg"
      alt=""
      role="presentation"
      width={120}
      height={12}
      className={className}
      priority={false}
    />
  );
}
