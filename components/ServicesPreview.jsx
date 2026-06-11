import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"
import { HiOutlineDocumentReport, HiOutlineUserGroup, HiOutlineCalculator } from "react-icons/hi"
import ServiceCard from "./ServiceCard"

const previewServices = [
  {
    icon: <HiOutlineDocumentReport />,
    title: "CBC Conversion Service",
    description:
      "Automates Country-by-Country Report conversion into OECD-compliant XML formats for automatic exchange with tax authorities.",
    tag: "Compliance",
  },
  {
    icon: <HiOutlineUserGroup />,
    title: "Neptune Payroll",
    description:
      "Comprehensive HR payroll management covering statutory deductions, employee records, and precise payroll computations.",
    tag: "Payroll",
  },
  {
    icon: <HiOutlineCalculator />,
    title: "WHT & VAT Automation",
    description:
      "Streamlines WHT and VAT computation, filing, and remittance to ensure full tax authority compliance.",
    tag: "Tax Automation",
  },
]

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-teal-400 text-sm font-medium uppercase tracking-wider mb-3">
            Our Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Powerful Tax Technology Tools
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From payroll automation to compliance reporting — we have the tools your tax function needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {previewServices.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <button className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium transition-colors duration-200">
              See all services <FiArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview
