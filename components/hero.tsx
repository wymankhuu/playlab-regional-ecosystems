import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-sage py-10 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
          <div className="@container relative flex min-h-[300px] flex-col justify-between rounded-3xl bg-cream px-8 py-8 sm:px-10 sm:py-10 lg:col-span-3 lg:min-h-[380px]">
            <div className="flex-1">
              <h1 className="font-heading text-[clamp(2.5rem,12cqw,5.75rem)] font-bold leading-[0.95] text-dark-green">
                REGIONAL AI
                <br />
                INNOVATION
                <br />
                ECOSYSTEMS
              </h1>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <p className="font-heading text-base font-bold tracking-wide text-playlab-blue">
                Powered by
              </p>
              <Image
                src="/playlab-logo.png"
                alt="Playlab"
                width={120}
                height={31}
                className="h-[28px] w-auto"
                priority
              />
            </div>
          </div>

          <div className="@container flex min-h-[300px] flex-col justify-end rounded-3xl bg-yellow p-8 sm:p-10 lg:col-span-2 lg:min-h-[380px]">
            <p className="font-heading text-[clamp(1.75rem,9cqw,3.25rem)] font-bold leading-[1.05] text-dark-green">
              Build the future of education with us.
            </p>
          </div>

          <div className="flex min-h-[260px] flex-col justify-center rounded-3xl bg-green p-8 sm:p-10 lg:col-span-2">
            <p className="font-heading text-2xl font-semibold leading-snug text-playlab-blue sm:text-3xl lg:text-[2rem]">
              For funders &amp; regional partners ready to invest in AI agency at scale.
            </p>
          </div>

          <div className="flex min-h-[260px] flex-col justify-center rounded-3xl bg-cyan p-8 sm:p-10 lg:col-span-3">
            <p className="text-lg leading-relaxed text-playlab-blue sm:text-xl lg:text-[1.375rem]">
              To thrive in the age of AI, schools must develop the agency to
              understand, evaluate, and shape the AI systems influencing their
              work, not simply adapt to systems designed elsewhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
