import { FiTarget, FiCpu, FiShield, FiHeart } from "react-icons/fi"

const values = [
  {
    icon: <FiTarget />,
    title: "Accuracy",
    description:
      "Every computation, every report — built for precision. We take pride in delivering results your team can rely on.",
  },
  {
    icon: <FiCpu />,
    title: "Innovation",
    description:
      "We continuously evolve our tools to meet the changing demands of the tax landscape and regulatory environment.",
  },
  {
    icon: <FiShield />,
    title: "Compliance",
    description:
      "Our solutions are designed from the ground up to align with FIRS, OECD, and international compliance standards.",
  },
  {
    icon: <FiHeart />,
    title: "Client Focus",
    description:
      "Your success drives everything we do. We work closely with your team to ensure our tools deliver real value.",
  },
]

const ValuesSection = () => {
  return (
    <section className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          {/* <p className="text-teal-400 text-sm font-medium uppercase tracking-wider mb-3">
            Our Values
          </p> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What We Stand For</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Our values guide every solution we build and every client relationship we nurture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon, title, description }, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-teal-500/30 transition-colors duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 text-xl mx-auto mb-4">
                {icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
