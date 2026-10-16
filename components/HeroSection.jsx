import Link from "next/link"
import { ContactTrigger } from "@/components/ContactModal"
import { services, formatNum } from "@/data/services"

const FEATURED_COUNT = 3

const HeroSection = () => {
  const featured = services.slice(0, FEATURED_COUNT)
  const remaining = services.length - featured.length

  return (
    <section className="relative border-b border-line-section">
      <div className="bg-hero-grid absolute inset-0" />
      <div className="pointer-events-none absolute -left-[120px] -top-[260px] h-[720px] w-[720px] bg-[radial-gradient(circle,rgba(140,198,63,0.16),transparent_62%)]" />

      <div className="container-page relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-center gap-16 pb-24 pt-[104px]">
        {/* Left */}
        <div className="flex flex-col items-start gap-7">
          <div className="flex items-center gap-2.5 rounded-full border border-[#24301A] bg-[#0B0F08] py-1.5 pl-2 pr-3.5">
            <span className="rounded-full bg-accent px-2 py-[3px] font-mono text-[11px] font-medium text-accent-on">
              INTERNAL
            </span>
            <span className="whitespace-nowrap text-[13px] font-medium text-accent-soft">
              Tax Transformation Consulting
            </span>
          </div>

          <h1 className="m-0 [text-wrap:balance]text-[clamp(44px,6.2vw,80px)] font-semibold leading-[1.02] tracking-[-0.035em]">
            Transform your <span className="text-accent">tax</span> operations.
          </h1>

          <p className="m-0 max-w-[540px] text-[19px] leading-[1.55] text-ink-strong">
            Digital tax solutions to transform your business. We help identify, design, implement, and maintain tax
            systems that bring accuracy, transparency, and control to your tax function.
          </p>

          <div className="mt-1 flex flex-wrap gap-3">
            <Link href="/services" className="btn-primary btn-hero-glow">
              Explore services <span>→</span>
            </Link>
            <ContactTrigger className="btn-secondary">Talk to the team</ContactTrigger>
          </div>
        </div>

        {/* Right: tool directory */}
        <div className="overflow-hidden rounded-[18px] border border-[#1E241A] bg-[linear-gradient(180deg,#0D110B,#080A07)] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
          <div className="flex items-center justify-between border-b border-[#1A1F16] px-5 py-4">
            <span className="font-mono text-xs uppercase tracking-[0.06em] text-ink-muted">Tool directory</span>
            <span className="flex items-center gap-2 text-xs text-accent-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_#8CC63F]" />
              {services.length} services available
            </span>
          </div>

          {featured.map((s, i) => (
            <Link
              key={s.name}
              href={s.url ?? "/services"}
              className="grid grid-cols-[40px_1fr_auto] items-center gap-4 border-b border-[#161A13] px-5 py-[18px] text-ink transition-colors hover:bg-[#10150D]"
            >
              <span className="tile h-10 w-10 font-mono text-xs">{formatNum(i)}</span>
              <span className="flex min-w-0 flex-col gap-[3px]">
                <span className="text-[15px] font-semibold">{s.name}</span>
                <span className="text-[13px] text-[#7E8777]">{s.tag}</span>
              </span>
              <span className="text-base text-ink-faint">→</span>
            </Link>
          ))}

          <Link
            href="/services"
            className="flex justify-between px-5 py-4 text-[13px] font-medium text-accent transition-colors hover:bg-[#10150D]"
          >
            + {remaining} more services
            <span>View all →</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
