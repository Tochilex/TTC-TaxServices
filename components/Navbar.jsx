"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { LuMenu, LuX } from "react-icons/lu"
import { ContactTrigger } from "@/components/ContactModal"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
]

const NavLink = ({ href, label, active, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    aria-current={active ? "page" : undefined}
    className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
      active ? "bg-[#12160F] text-ink" : "text-ink-body hover:bg-[#0E110C] hover:text-ink"
    }`}
  >
    {active && <span className="h-[5px] w-[5px] rounded-full bg-accent" />}
    {label}
  </Link>
)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-20 border-b border-line-section bg-[rgba(5,6,5,0.82)] backdrop-blur-[14px]">
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <Link href="/" onClick={closeMenu} className="flex items-baseline gap-2.5 text-ink">
          <span className="text-2xl font-bold tracking-[-0.02em]">
            TTC<span className="text-accent">.</span>
          </span>
          <span className="hidden whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.08em] text-ink-subtle sm:inline">
            Tax Transformation
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1.5 sm:flex">
          {navLinks.map(({ href, label }) => (
            <NavLink key={href} href={href} label={label} active={pathname === href} />
          ))}
          <ContactTrigger className="ml-3 whitespace-nowrap rounded-lg bg-accent px-4 py-[9px] text-sm font-semibold text-accent-on transition-colors hover:bg-accent-hover">
            Request support
          </ContactTrigger>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-line-input bg-surface-control text-ink-body hover:text-ink sm:hidden"
        >
          {menuOpen ? <LuX size={18} /> : <LuMenu size={18} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="container-page flex flex-col gap-1 border-t border-line-section pb-5 pt-3 sm:hidden">
          {navLinks.map(({ href, label }) => (
            <NavLink key={href} href={href} label={label} active={pathname === href} onClick={closeMenu} />
          ))}
          <ContactTrigger
            onClick={closeMenu}
            className="mt-2 rounded-lg bg-accent px-4 py-[9px] text-sm font-semibold text-accent-on transition-colors hover:bg-accent-hover"
          >
            Request support
          </ContactTrigger>
        </nav>
      )}
    </header>
  )
}

export default Navbar
