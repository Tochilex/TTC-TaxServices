import Link from "next/link"
import ServiceCard from "@/components/ServiceCard"
import { services, formatNum } from "@/data/services"

const ServicesPreview = () => {
  return (
    <section id="services" className="container-page pb-28 pt-[120px]">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div className="flex max-w-[640px] flex-col gap-4">
          <span className="eyebrow">Our solutions</span>
          <h2 className="heading-2">Powerful tax technology tools</h2>
          <p className="m-0 text-[17px] leading-[1.55] text-ink-body">
            From payroll automation to compliance reporting — tools built for your tax function.
          </p>
        </div>
        <Link
          href="/services"
          className="flex items-center gap-2 rounded-[10px] border border-[#2A3122] px-[18px] py-3 text-sm font-medium text-ink transition-colors hover:border-accent"
        >
          See all {services.length} services <span className="text-accent">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
        {services.slice(0, 3).map((s, i) => (
          <ServiceCard key={s.name} service={s} num={formatNum(i)} ctaLabel="Open tool →" />
        ))}
      </div>
    </section>
  )
}

export default ServicesPreview
