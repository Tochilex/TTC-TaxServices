import Link from "next/link"

const ServiceCard = ({ service, num, ctaLabel = "View service →" }) => {
  const { name, tag, desc, features = [], url } = service

  return (
    <Link
      href={url ?? "/services"}
      className="flex flex-col gap-5 rounded-[18px] border border-line-card bg-surface-card p-7 text-ink transition-[border-color,transform,background-color] duration-200 hover:-translate-y-[3px] hover:border-line-hover hover:bg-[#0C1009]"
    >
      <div className="flex items-center justify-between">
        <span className="tile h-10 w-10 font-mono text-xs">{num}</span>
        <span className="rounded-full border border-line-tile bg-[#131B0C] px-2.5 py-[5px] text-xs font-medium text-accent-text">
          {tag}
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        <h3 className="m-0 text-[22px] font-semibold tracking-[-0.02em]">{name}</h3>
        <p className="m-0 [text-wrap:pretty]text-[15px] leading-[1.6] text-ink-body">{desc}</p>
      </div>

      <div className="h-px bg-[#1A1F16]" />

      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
        {features.map((f) => (
          <span key={f} className="flex items-start gap-2 text-[13px] leading-[1.4] text-ink-strong">
            <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
            {f}
          </span>
        ))}
      </div>

      <span className="mt-auto pt-2 text-sm font-medium text-accent">{ctaLabel}</span>
    </Link>
  )
}

export default ServiceCard
