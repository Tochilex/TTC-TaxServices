import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"

const CTABanner = () => {
  return (
    <section className="py-20 bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-teal-500/10 to-indigo-500/10 border border-teal-500/20 px-8 sm:px-14 py-16 overflow-hidden text-center">
          {/* Top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-teal-500/10 blur-3xl pointer-events-none" />

          <h2 className="relative text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Tax Workflow?
          </h2>
          <p className="relative text-gray-400 mb-8 max-w-xl mx-auto">
            Let&apos;s talk about how TTC&apos;s digital solutions can streamline your tax operations
            and reduce compliance risk.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-500 hover:bg-teal-400 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/25">
              Get Started Today
              <FiArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTABanner
