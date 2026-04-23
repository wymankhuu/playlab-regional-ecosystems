import Image from "next/image";
import { ColorBar } from "./ui/color-bar";

const PARTNERSHIP_REQUEST_URL =
  "https://u694o.share.hsforms.com/2WT-4aa2lTtW5aSd12wymYg";
const CONTACT_EMAIL = "partnerships@playlab.ai";

export function FinalCTA() {
  return (
    <section className="bg-yellow py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-4 text-center sm:px-8">
        <div className="flex flex-col items-center gap-6">
          <ColorBar />
          <h2 className="font-heading text-4xl font-bold leading-tight text-dark-green sm:text-5xl lg:text-6xl">
            Let&apos;s build together.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-dark-green sm:text-xl">
            We would love to explore how these components might fit your region
            and goals. Reach out and we will set up a working session to design
            a partnership that meets your community where it is.
          </p>
          <div className="mt-4 flex flex-col flex-wrap items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Regional%20AI%20Innovation%20Ecosystem%20Partnership`}
              className="inline-flex items-center justify-center rounded-full bg-dark-green px-8 py-3 font-sans text-base font-semibold text-cream transition-opacity hover:opacity-90"
            >
              Email partnerships@playlab.ai
            </a>
            <a
              href={PARTNERSHIP_REQUEST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-dark-green bg-cream px-8 py-3 font-sans text-base font-semibold text-dark-green transition-opacity hover:opacity-90"
            >
              Submit a partnership request
            </a>
          </div>
          <div className="mt-12 flex items-center gap-3 opacity-90">
            <p className="font-heading text-sm font-bold tracking-wide text-dark-green">
              Powered by
            </p>
            <Image
              src="/playlab-logo.png"
              alt="Playlab"
              width={120}
              height={31}
              className="h-[26px] w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
