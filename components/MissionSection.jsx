const MissionSection = () => {
  return (
    <section className="py-20 bg-[#0a0f1e]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-teal-400 text-sm font-medium uppercase tracking-wider mb-3">
            About the Team
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Who We Are
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            The right technology can make your tax department more efficient and effective.
            Streamlining and automating processes frees tax professionals to focus on high-value work,
            while bringing accuracy, transparency, and control to your tax function.
            Whether you need to evaluate tax policy, integrate systems, or implement digital tools,
            TTC has the expertise to help at every stage.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.07] border-t-2 border-t-teal-500/60">
            <h3 className="text-white font-semibold text-base mb-3">What We Do</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We design, build, and maintain digital tax tools that automate complex tax processes,
              reduce manual effort, and improve the accuracy of compliance outputs across the organisation.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.07] border-t-2 border-t-indigo-500/60">
            <h3 className="text-white font-semibold text-base mb-3">How We Help</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              From payroll and VAT automation to CBC reporting and e-invoicing, our solutions are built
              to solve real tax challenges, giving teams more time to focus on insights and decisions.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.07] border-t-2 border-t-teal-500/60">
            <h3 className="text-white font-semibold text-base mb-3">Our Focus</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are committed to staying ahead of evolving regulatory requirements, ensuring every
              tool we deliver is aligned with FIRS, OECD, and applicable international tax standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection
