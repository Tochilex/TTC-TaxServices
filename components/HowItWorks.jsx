const steps = [
  {
    number: "01",
    title: "Consult",
    description:
      "Tell us about your tax challenges and goals. We assess your current processes and recommend the right solution.",
  },
  {
    number: "02",
    title: "Onboard",
    description:
      "We configure and customise the solution for your business, ensuring seamless integration with your existing systems.",
  },
  {
    number: "03",
    title: "Go Live",
    description:
      "Your team starts using the tools with full support from our team. We monitor and refine as you scale.",
  },
]

const HowItWorks = () => {
  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-teal-400 text-sm font-medium uppercase tracking-wider mb-3">
            Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Getting Started is Simple
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Our structured onboarding process ensures you&apos;re up and running quickly with
            minimal disruption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] h-px bg-gradient-to-r from-teal-500/40 via-indigo-500/40 to-teal-500/40" />

          {steps.map(({ number, title, description }, i) => (
            <div key={i} className="relative text-center">
              <div className="w-20 h-20 rounded-full bg-[#0a0f1e] border-2 border-teal-500/40 flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-teal-400 font-bold text-xl">{number}</span>
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
