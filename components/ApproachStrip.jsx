const steps = [
  { num: "01", title: "Identify", desc: "Map gaps and manual effort across the tax function." },
  { num: "02", title: "Design", desc: "Shape solutions around real workflows and rules." },
  { num: "03", title: "Implement", desc: "Build, test and roll out with the teams who use it." },
  { num: "04", title: "Maintain", desc: "Keep tools current as regulations change." },
]

const ApproachStrip = () => {
  return (
    <section className="border-b border-line-section">
      <div className="container-page grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))]">
        {steps.map((s) => (
          <div key={s.num} className="flex flex-col gap-2.5 border-r border-line-section px-6 py-8">
            <span className="font-mono text-xs text-accent">{s.num}</span>
            <span className="text-lg font-semibold tracking-[-0.01em]">{s.title}</span>
            <span className="text-sm leading-normal text-ink-muted">{s.desc}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ApproachStrip
