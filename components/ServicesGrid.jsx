import {
  HiOutlineDocumentReport,
  HiOutlineUserGroup,
  HiOutlineCalculator,
  HiOutlineChartBar,
  HiOutlineDocumentText,
  HiOutlineClipboardList,
  HiOutlineChartPie,
} from "react-icons/hi"

const services = [
  {
    icon: <HiOutlineDocumentReport />,
    title: "CBC Conversion Service",
    description:
      "Automates the conversion of Country-by-Country Reports (CbCR) into compliant XML formats required for OECD automatic exchange, reducing manual effort and ensuring regulatory accuracy.",
    features: ["OECD XML format compliance", "Automated data mapping", "Error validation & flagging", "Multi-jurisdiction support"],
    tag: "Compliance",
  },
  {
    icon: <HiOutlineUserGroup />,
    title: "Neptune Payroll",
    description:
      "A comprehensive HR payroll management solution that handles statutory deductions, employee records, and payroll computations with precision and ease.",
    features: ["Statutory deductions", "Employee records", "Payslip generation", "Pension & tax integration"],
    tag: "Payroll",
  },
  {
    icon: <HiOutlineCalculator />,
    title: "WHT & VAT Automation",
    description:
      "Streamlines the computation, filing, and remittance of Withholding Tax and Value Added Tax, ensuring full compliance with tax authority requirements.",
    features: ["WHT computation & filing", "VAT return preparation", "Remittance schedules", "Audit-ready reports"],
    tag: "Tax Automation",
  },
  {
    icon: <HiOutlineChartBar />,
    title: "Silverfin",
    description:
      "A cloud-based financial reporting and workflow platform that connects accounting data to enable seamless tax compliance and financial close processes.",
    features: ["Cloud collaboration", "Financial templates", "Compliance checklists", "Real-time data sync"],
    tag: "Reporting",
  },
  {
    icon: <HiOutlineDocumentText />,
    title: "E-Invoicing Implementation",
    description:
      "Guides businesses through the setup and integration of compliant e-invoicing systems, fully aligned with FIRS requirements and international standards.",
    features: ["FIRS-compliant integration", "Invoice validation", "ERP system integration", "End-to-end support"],
    tag: "E-Invoicing",
  },
  {
    icon: <HiOutlineClipboardList />,
    title: "WHT Receipt Generator",
    description:
      "Automatically generates accurate Withholding Tax receipts and documentation for remittances, providing a seamless audit trail and eliminating manual paperwork.",
    features: ["Automated receipts", "WHT schedule tracking", "Bulk processing", "Exportable formats"],
    tag: "WHT",
  },
  {
    icon: <HiOutlineChartPie />,
    title: "Interest Expense Analyser",
    description:
      "Cuts through the complexities of manual interest analysis by computing and evaluating deductible interest expenses against thin capitalisation rules. Recommended for financial institutions.",
    features: ["Thin capitalisation analysis", "Deductible interest computation", "Financial institution support", "Regulatory compliance checks"],
    tag: "Analytics",
  },
]

const ServicesGrid = () => {
  return (
    <section className="py-12 bg-[#0a0f1e]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative flex flex-col rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6 hover:border-teal-500/30 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
            >
              {/* Top glow line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Watermark number */}
              <span className="absolute bottom-3 right-5 text-[64px] font-black text-white/[0.03] select-none tabular-nums leading-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Header row */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 text-xl">
                  {service.icon}
                </div>
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  {service.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-base mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                {service.description}
              </p>

              {/* Features */}
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
      </div>
    </section>
  )
}

export default ServicesGrid
