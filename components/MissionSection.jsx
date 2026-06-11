import Image from "next/image"

const MissionSection = () => {
  return (
    <section className="py-24 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/10 to-indigo-500/10 rounded-3xl blur-xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/AboutImg.jpg"
                alt="About TTC Services"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-teal-400 text-sm font-medium uppercase tracking-wider mb-3">
              Who We Are
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Pioneering Digital Tax Transformation
            </h2>

            <div className="space-y-7">
              <div className="border-l-2 border-teal-500/50 pl-6">
                {/* <h3 className="text-white font-semibold text-lg mb-2">Our Mission</h3> */}
                <p className="text-gray-400 leading-relaxed text-sm">
                  To empower businesses with intelligent tax technology that simplifies compliance,
                  improves accuracy, and enables smarter decision-making across every tax function.
                </p>
              </div>
              <div className="border-l-2 border-indigo-500/50 pl-6">
                {/* <h3 className="text-white font-semibold text-lg mb-2">Our Vision</h3> */}
                <p className="text-gray-400 leading-relaxed text-sm">
                  To be the leading provider of digital tax solutions in Africa, connecting
                  expertise with technology to build the future of compliant, efficient, and
                  transparent tax operations.
                </p>
              </div>
              <div className="border-l-2 border-teal-500/50 pl-6">
                {/* <h3 className="text-white font-semibold text-lg mb-2">Our Approach</h3> */}
                <p className="text-gray-400 leading-relaxed text-sm">
                  We combine deep tax expertise with modern technology to deliver solutions that
                  work — whether you need to evaluate strategy, integrate systems, or implement
                  digital tools at any stage of your transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection
