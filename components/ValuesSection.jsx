import { FiTarget, FiCpu, FiShield, FiHeart } from "react-icons/fi"

const principles = [
  {
    icon: <FiTarget />,
    title: "Accuracy",
    description:
      "Every computation and report is built for precision. We deliver results your team can rely on without second-guessing.",
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
    title: "Collaboration",
    description:
      "We work closely with internal teams to understand needs and ensure our tools deliver real, measurable value.",
  },
]

const ValuesSection = () => {
  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-teal-400 text-sm font-medium uppercase tracking-wider mb-3">
            How We Operate
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Core Principles</h2>
          <p className="text-gray-400 max-w-xl">
            The principles that guide how we build, deliver, and support every solution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map(({ icon, title, description }, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-teal-500/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 text-lg mb-4">
                {icon}
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
