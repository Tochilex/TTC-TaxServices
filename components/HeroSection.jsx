import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1e]">
      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Tag pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/5 text-teal-400 text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          Tax Transformation Consulting
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Transform Your{" "}
          <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
            Tax Operations
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-4">
          Digital tax solutions to transform your business
        </p>
        <p className="text-base text-gray-500 max-w-2xl mx-auto mb-12">
          We help identify, design, implement, and maintain tax systems to bring accuracy,
          transparency, and control to your tax function.
        </p>

        {/* CTA */}
        <div className="flex items-center justify-center">
          <Link href="/services">
            <button className="flex items-center gap-2 px-7 py-3.5 bg-teal-500 hover:bg-teal-400 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/25">
              Explore Services
              <FiArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
