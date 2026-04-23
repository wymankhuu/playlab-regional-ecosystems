import Image from "next/image";

const SECTION_LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Opportunity", href: "#opportunity" },
  { label: "Regions", href: "#launched" },
  { label: "Components", href: "#components" },
  { label: "Why Playlab", href: "#why-playlab" },
  { label: "Contact", href: "#contact" },
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
            width={167}
            height={57}
            className="h-7 w-auto sm:h-8"
            priority
          />
        </a>

        <ul className="hidden items-center gap-5 md:flex lg:gap-7">
          {SECTION_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-heading text-sm font-semibold text-cream transition-opacity hover:opacity-75 lg:text-base"
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
