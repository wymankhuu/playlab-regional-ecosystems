export function Footer() {
  return (
    <footer className="bg-playlab-blue py-10 text-cream">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-8 lg:px-12">
        <p className="text-sm text-cream/80">
          © {new Date().getFullYear()} Playlab. A nonprofit AI platform built for schools.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href="https://www.playlab.ai"
            className="text-cream/80 underline-offset-4 hover:text-cream hover:underline"
          >
            playlab.ai
          </a>
          <a
            href="https://www.playlab.ai/ai-lab-schools"
            className="text-cream/80 underline-offset-4 hover:text-cream hover:underline"
          >
            AI Lab Schools
          </a>
          <a
            href="mailto:partnerships@playlab.ai"
            className="text-cream/80 underline-offset-4 hover:text-cream hover:underline"
          >
            partnerships@playlab.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
