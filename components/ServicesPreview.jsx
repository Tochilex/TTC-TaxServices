import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"
import { HiOutlineDocumentReport, HiOutlineUserGroup, HiOutlineCalculator } from "react-icons/hi"

const previewServices = [
  {
    icon: <HiOutlineDocumentReport />,
    title: "CBC Conversion Service",
    description:
      "Automates Country-by-Country Report conversion into OECD-compliant XML formats for automatic exchange with tax authorities.",
    features: ["OECD XML compliance", "Automated data mapping", "Error validation", "Multi-jurisdiction"],
    tag: "Compliance",
  },
  {
    icon: <HiOutlineUserGroup />,
    title: "Neptune Payroll",
    description:
      "Comprehensive HR payroll management covering statutory deductions, employee records, and precise payroll computations.",
    features: ["Statutory deductions", "Employee records", "Payslip generation", "Pension & tax"],
    tag: "Payroll",
  },
  {
    icon: <HiOutlineCalculator />,
    title: "WHT & VAT Automation",
    description:
      "Streamlines WHT and VAT computation, filing, and remittance to ensure full tax authority compliance.",
    features: ["WHT computation", "VAT returns", "Remittance schedules", "Audit-ready reports"],
    tag: "Tax Automation",
  },
]

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-[#0a0f1e]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-teal-400 text-sm font-medium uppercase tracking-wider mb-3">
            Our Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Powerful Tax Technology Tools
          </h2>
          <p className="text-gray-400">
            From payroll automation to compliance reporting — tools built for your tax function.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {previewServices.map((service, i) => (
            <div
              key={i}
              className="group relative flex flex-col rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6 hover:border-teal-500/30 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-3 right-5 text-[64px] font-black text-white/[0.03] select-none tabular-nums leading-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 text-xl">
                  {service.icon}
                </div>
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  {service.tag}
                </span>
              </div>

              <h3 className="text-white font-semibold text-base mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                {service.description}
              </p>

              <div className="space-y-1.5">
                {service.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1 h-1 rounded-full bg-teal-400/40 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Link href="/services">
          <button className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors duration-200">
            See all 7 services <FiArrowRight size={15} />
          </button>
        </Link>
      </div>
    </section>
  )
}

export default ServicesPreview
