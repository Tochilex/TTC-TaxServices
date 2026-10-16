const steps = [
  { num: "01", title: "Request", desc: "Reach out to the TTC team with your tax challenge or the service you need." },
  { num: "02", title: "Assess", desc: "We review your current processes and recommend the right solution." },
  { num: "03", title: "Implement", desc: "We configure the solution and integrate it with your existing systems." },
  { num: "04", title: "Support", desc: "Your team goes live with ongoing support. We monitor and refine as needs change." },
]

const HowItWorks = () => {
  return (
    <section className="border-t border-line-section bg-surface-alt">
      <div className="container-page flex flex-col gap-14 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-[620px] flex-col gap-4">
            <span className="eyebrow">Process</span>
            <h2 className="heading-2">Getting started is simple</h2>
          </div>
          <p className="m-0 max-w-[420px] text-[17px] leading-[1.55] text-ink-body">
            Our structured onboarding process ensures you&apos;re up and running quickly with minimal disruption.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-5">
          {steps.map((s) => (
            <div
              key={s.num}
              className="flex flex-col gap-4 rounded-[18px] border border-line-card bg-surface-card px-7 py-8"
            >
              <div className="flex items-center gap-3.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-mono text-[13px] font-medium text-accent-on">
                  {s.num}
                </span>
                <span className="h-px flex-1 bg-[linear-gradient(90deg,#3E5226,transparent)]" />
              </div>
              <h3 className="m-0 mt-2 text-[22px] font-semibold tracking-[-0.02em]">{s.title}</h3>
              <p className="m-0 text-[15px] leading-[1.6] text-ink-body [text-wrap:pretty]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
