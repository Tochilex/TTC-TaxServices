import { FiZap, FiCheckCircle, FiShield } from "react-icons/fi"

const features = [
  {
    icon: <FiZap />,
    title: "Speed & Efficiency",
    description:
      "Automate repetitive tax workflows to free your team for high-value work and faster decision-making.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Accuracy You Can Trust",
    description:
      "Eliminate manual errors with precision-built computation engines that deliver consistent, reliable results.",
  },
  {
    icon: <FiShield />,
    title: "Compliance Ready",
    description:
      "Stay audit-ready with tools designed around regulatory standards and built to meet FIRS and OECD requirements.",
  },
]

const WhyUsSection = () => {
  return (
    <section className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          {/* <p className="text-teal-400 text-sm font-medium uppercase tracking-wider mb-3">
            Why Choose Us
          </p> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why TTC
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            We combine deep tax expertise with cutting-edge technology to deliver solutions that work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ icon, title, description }, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-teal-500/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 text-2xl mx-auto mb-5">
                {icon}
              </div>
              <h3 className="text-white text-lg font-semibold mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection
