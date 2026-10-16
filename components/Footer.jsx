import Link from "next/link"

// Uses the Home copy set from the handoff on every page (pending owner confirmation).
const Footer = () => {
  return (
    <footer className="border-t border-line-section">
      <div className="container-page flex flex-wrap justify-between gap-4 py-7 text-[13px] text-ink-subtle">
        <span>
          <span className="font-bold text-ink">
            TTC<span className="text-accent">.</span>
          </span>{" "}
          Tax Transformation Consulting · Internal use
        </span>
        <div className="flex gap-6">
          <Link href="/" className="text-ink-muted hover:text-ink">
            Home
          </Link>
          <Link href="/services" className="text-ink-muted hover:text-ink">
            Services
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
