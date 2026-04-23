import { contactMailto, PARTNERSHIP_REQUEST_URL } from "./cta";
import { ColorBar } from "./ui/color-bar";

export function FinalCTA() {
  return (
    <section id="contact" className="scroll-mt-20 bg-sage py-20 sm:py-28">
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
              href={contactMailto()}
              className="inline-flex items-center justify-center rounded-full bg-dark-green px-8 py-3 font-sans text-base font-semibold text-cream transition-opacity hover:opacity-90"
            >
              Contact Us
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
        </div>
      </div>
    </section>
  );
}
