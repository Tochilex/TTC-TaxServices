"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
]

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#0a0f1e]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-white font-bold text-3xl leading-none">
              TTC<span className="text-teal-400 text-4xl">.</span>
            </h1>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm uppercase tracking-wider transition-colors duration-200 ${
                    pathname === href
                      ? "text-teal-400 border-b border-teal-400 pb-0.5"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setNav(true)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            aria-label="Open menu"
          >
            <AiOutlineMenu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer — outside <nav> to avoid backdrop-blur inheritance */}
      {nav && (
        <div className="fixed inset-0 z-[200] md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setNav(false)}
          />
          {/* Drawer panel */}
          <div className="absolute left-0 top-0 h-full w-72 bg-[#0a0f1e] border-r border-white/10 p-6 flex flex-col" style={{ isolation: "isolate" }}>
            <div className="flex items-center justify-between mb-10">
              <h1 className="text-white font-bold text-2xl leading-none">
                TTC<span className="text-teal-400 text-3xl">.</span>
              </h1>
              <button
                onClick={() => setNav(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <AiOutlineClose size={22} />
              </button>
            </div>

            <ul className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setNav(false)}
                    className={`block py-3 px-4 rounded-lg text-sm uppercase tracking-wider transition-colors duration-200 ${
                      pathname === href
                        ? "bg-teal-500/10 text-teal-400"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
