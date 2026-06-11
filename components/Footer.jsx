import Link from "next/link"
import { FiLinkedin, FiTwitter, FiMail } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="bg-[#0a0f1e] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
            
          <div>
            <h1 className="text-white font-bold text-2xl leading-none mb-3">
              TTC<span className="text-teal-400 text-3xl">.</span>
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Digital tax solutions that transform how businesses manage compliance, reporting, and tax operations.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-200"
                aria-label="Twitter"
              >
                <FiTwitter size={16} />
              </a>
              <a
                href="mailto:info@ttcservices.com"
                className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-200"
                aria-label="Email"
              >
                <FiMail size={16} />
              </a>
            </div>
          </div>

         
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h3>
            <ul className="space-y-3">
              {[
                "CBC Conversion",
                "Neptune Payroll",
                "WHT & VAT Automation",
                "Silverfin",
                "E-Invoicing",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 text-sm hover:text-teal-400 transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 text-sm hover:text-teal-400 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@ttcservices.com"
                  className="text-gray-400 text-sm hover:text-teal-400 transition-colors duration-200"
                >
                  info@ttcservices.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2340000000000"
                  className="text-gray-400 text-sm hover:text-teal-400 transition-colors duration-200"
                >
                  +234 (0) 000 0000
                </a>
              </li>
              <li className="text-gray-400 text-sm">Lagos, Nigeria</li>
            </ul>
          </div>
        </div> */}

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">© 2026 TTC Services. </p>
          <p className="text-gray-600 text-xs">Built by TTC unit</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
