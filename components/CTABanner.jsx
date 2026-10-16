import Link from "next/link"
import { ContactTrigger } from "@/components/ContactModal"

// Shared green CTA panel. `secondary` is an optional { label, href } link button.
const CTABanner = ({ title, body, primaryLabel, secondary }) => {
  return (
    <section className="container-page py-28">
      <div className="relative flex flex-wrap items-center justify-between gap-8 overflow-hidden rounded-3xl border border-line-panel bg-surface-panel p-8 sm:p-14">
        <div className="bg-accent-glow pointer-events-none absolute -right-[120px] -top-[200px] h-[520px] w-[520px]" />

        <div className="relative flex max-w-[600px] flex-col gap-3">
          <h2 className="m-0 text-[clamp(28px,3vw,40px)] font-semibold leading-[1.1] tracking-[-0.03em]">{title}</h2>
          <p className="m-0 text-[17px] leading-[1.55] text-[#B4BCAD]">{body}</p>
        </div>

        <div className="relative flex flex-wrap gap-3">
          <ContactTrigger className="btn-primary">{primaryLabel}</ContactTrigger>
          {secondary && (
            <Link href={secondary.href} className="btn-secondary-panel">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default CTABanner
