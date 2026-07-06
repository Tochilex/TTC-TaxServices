import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#86BC25]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#86BC25]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#86BC25]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Tag pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#86BC25]/30 bg-[#86BC25]/5 text-[#86BC25] text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#86BC25] animate-pulse" />
          Tax Transformation Consulting
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Transform Your{" "}
          <span className="text-[#86BC25]">Tax </span>
          <span className="text-white">Operations</span>
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
            <button className="flex items-center gap-2 px-7 py-3.5 bg-[#86BC25] hover:bg-[#86BC25] text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#86BC25]/25">
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
