import {
  HiOutlineDocumentReport,
  HiOutlineUserGroup,
  HiOutlineCalculator,
  HiOutlineChartBar,
  HiOutlineDocumentText,
  HiOutlineClipboardList,
  HiOutlineChartPie,
} from "react-icons/hi"
import ServiceCard from "./ServiceCard"

const services = [
  {
    icon: <HiOutlineDocumentReport />,
    title: "CBC Conversion Service",
    description:
      "Automates the conversion of Country-by-Country Reports (CbCR) into compliant XML formats required for OECD automatic exchange, reducing manual effort and ensuring regulatory accuracy.",
    features: [
      "OECD XML format compliance",
      "Automated data mapping",
      "Error validation & flagging",
      "Multi-jurisdiction support",
    ],
    tag: "Compliance",
  },
  {
    icon: <HiOutlineUserGroup />,
    title: "Neptune Payroll",
    description:
      "A comprehensive HR payroll management solution that handles statutory deductions, employee records, and payroll computations with precision and ease.",
    features: [
      "Statutory deduction calculations",
      "Employee records management",
      "Payslip generation",
      "Pension & tax integration",
    ],
    tag: "Payroll",
  },
  {
    icon: <HiOutlineCalculator />,
    title: "WHT & VAT Automation",
    description:
      "Streamlines the computation, filing, and remittance of Withholding Tax (WHT) and Value Added Tax (VAT), ensuring full compliance with tax authority requirements.",
    features: [
      "WHT computation & filing",
      "VAT return preparation",
      "Automated remittance schedules",
      "Audit-ready reports",
    ],
    tag: "Tax Automation",
  },
  {
    icon: <HiOutlineChartBar />,
    title: "Silverfin",
    description:
      "A cloud-based financial reporting and workflow platform that connects your accounting data to enable seamless tax compliance and financial close processes.",
    features: [
      "Cloud-based collaboration",
      "Automated financial templates",
      "Compliance checklists",
      "Real-time data sync",
    ],
    tag: "Reporting",
  },
  {
    icon: <HiOutlineDocumentText />,
    title: "E-Invoicing Implementation",
    description:
      "Guides businesses through the setup and integration of compliant e-invoicing systems, fully aligned with FIRS requirements and international e-invoicing standards.",
    features: [
      "FIRS-compliant integration",
      "Invoice validation & submission",
      "ERP system integration",
      "End-to-end implementation support",
    ],
    tag: "E-Invoicing",
  },
  {
    icon: <HiOutlineClipboardList />,
    title: "WHT Receipt Generator",
    description:
      "Automatically generates accurate Withholding Tax receipts and documentation for remittances, providing a seamless audit trail and eliminating manual paperwork for tax professionals.",
    features: [
      "Automated receipt generation",
      "WHT schedule tracking",
      "Bulk processing support",
      "Printable & exportable formats",
    ],
    tag: "WHT",
  },
  {
    icon: <HiOutlineChartPie />,
    title: "Interest Expense Analyser",
    description:
      "Cuts through the complexities of manual interest analysis by computing and evaluating deductible interest expenses against tax authority thin capitalisation rules — recommended for financial institutions.",
    features: [
      "Thin capitalisation analysis",
      "Deductible interest computation",
      "Financial institution support",
      "Regulatory compliance checks",
    ],
    tag: "Analytics",
  },
]

const ServicesGrid = () => {
  return (
    <section className="py-16 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={
                i === services.length - 1 && services.length % 2 !== 0
                  ? "sm:col-span-2 sm:max-w-lg sm:mx-auto w-full"
                  : ""
              }
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
