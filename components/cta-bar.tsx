import { contactMailto, PARTNERSHIP_REQUEST_URL } from "./cta";

export function CTABar() {
  return (
    <section className="bg-sage pb-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col flex-wrap items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            href={contactMailto()}
            className="inline-flex items-center justify-center rounded-full border border-dark-green bg-yellow px-8 py-3 font-sans text-base font-semibold text-dark-green transition-opacity hover:opacity-90"
          >
            Start a conversation
          </a>
          <a
            href="#components"
            className="inline-flex items-center justify-center rounded-full border border-dark-green bg-transparent px-8 py-3 font-sans text-base font-semibold text-dark-green transition-colors hover:bg-dark-green hover:text-cream"
          >
            Explore the components
          </a>
        </div>
        <p className="font-sans text-sm text-dark-green/80">
          Already know you want to partner?{" "}
          <a
            href={PARTNERSHIP_REQUEST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-link-dark underline-offset-2 hover:underline"
          >
            Submit a partnership request
            <span className="sr-only"> (opens in new tab)</span>
          </a>
          .
        </p>
      </div>
    </section>
  );
}
