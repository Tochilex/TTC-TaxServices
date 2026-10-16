import Link from "next/link"
import { services } from "@/data/services"

const pad = (n) => String(n).padStart(2, "0")

const ServicesHeader = () => {
  const categoryCount = new Set(services.map((s) => s.tag)).size
  const stats = [
    { value: pad(services.length), label: "SERVICES" },
    { value: pad(categoryCount), label: "CATEGORIES" },
  ]

  return (
    <section className="relative border-b border-line-section">
      <div className="bg-hero-grid bg-hero-grid-alt absolute inset-0" />
      <div className="pointer-events-none absolute -left-[160px] -top-[320px] h-[640px] w-[640px] bg-[radial-gradient(circle,rgba(140,198,63,0.15),transparent_62%)]" />

      <div className="container-page relative flex flex-col gap-7 pb-16 pt-14">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-ink-subtle">
          <Link href="/" className="text-ink-muted hover:text-ink">
            Home
          </Link>
          <span>/</span>
          <span className="text-accent-soft" aria-current="page">
            Services
          </span>
        </nav>

        <div className="flex flex-wrap items-end justify-between gap-10">
          <div className="flex max-w-[720px] flex-col gap-5">
            <h1 className="m-0 text-[clamp(44px,5.6vw,72px)] font-semibold leading-[1.02] tracking-[-0.035em]">
              Our services
            </h1>
            <p className="m-0 text-[19px] leading-[1.55] text-ink-strong [text-wrap:pretty]">
              End-to-end digital tax solutions designed to simplify compliance, automate workflows, and empower tax
              functions.
            </p>
          </div>

          <div className="flex gap-10">
            {stats.map((s, i) => (
              <div key={s.label} className="flex gap-10">
                {i > 0 && <div className="w-px bg-[#1E241A]" />}
                <div className="flex flex-col gap-1">
                  <span className="text-[40px] font-semibold tracking-[-0.03em]">{s.value}</span>
                  <span className="font-mono text-[11px] tracking-[0.1em] text-ink-subtle">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHeader
