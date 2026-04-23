import Image from "next/image";

const LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: "About", href: "https://www.playlab.ai/about" },
  { label: "Partnerships", href: "https://www.playlab.ai/partnerships" },
  { label: "AI Lab Schools", href: "https://www.playlab.ai/ai-lab-schools" },
  { label: "Blog", href: "https://www.playlab.ai/blog" },
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 bg-playlab-blue">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-8 sm:py-5 lg:px-12"
      >
        <a
          href="https://www.playlab.ai"
          className="flex items-center"
          aria-label="Playlab home"
        >
          <Image
            src="/playlab-logo.png"
            alt="Playlab"
            width={120}
            height={31}
            className="h-7 w-auto sm:h-8"
            priority
          />
        </a>

        <ul className="hidden items-center gap-6 sm:flex lg:gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-heading text-base font-semibold text-cream transition-opacity hover:opacity-75"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
