// Single source of truth for TTC services. Home shows the first 3; Services shows all.
// Counts and category tabs are derived from this list. Add `url` once a destination is known.
export const services = [
  {
    name: "CBC Conversion Service",
    tag: "Compliance",
    desc: "Automates the conversion of Country-by-Country Reports (CbCR) into compliant XML formats required for OECD automatic exchange.",
    features: ["OECD XML format compliance", "Automated data mapping", "Error validation & flagging", "Multi-jurisdiction support"],
  },
  {
    name: "Neptune Payroll",
    tag: "Payroll",
    desc: "A comprehensive HR payroll management solution that handles statutory deductions, employee records, and payroll computations.",
    features: ["Statutory deductions", "Employee records", "Payslip generation", "Pension & tax integration"],
  },
  {
    name: "WHT & VAT Automation",
    tag: "Tax Automation",
    desc: "Streamlines the computation, filing, and remittance of Withholding Tax and Value Added Tax, ensuring full compliance with tax authorities.",
    features: ["WHT computation & filing", "VAT return preparation", "Remittance schedules", "Audit-ready reports"],
  },
  {
    name: "Silverfin",
    tag: "Reporting",
    desc: "A cloud-based financial reporting and workflow platform that connects accounting data to enable seamless tax reporting.",
    features: ["Cloud collaboration", "Financial templates", "Compliance checklists", "Real-time data sync"],
  },
  {
    name: "E-Invoicing Implementation",
    tag: "E-Invoicing",
    desc: "Guides businesses through the setup and integration of compliant e-invoicing systems, fully aligned with NRS requirements.",
    features: ["NRS-compliant integration", "Invoice validation", "ERP system integration", "End-to-end support"],
  },
  {
    name: "WHT Receipt Generator",
    tag: "WHT",
    desc: "Automatically generates accurate Withholding Tax receipts and documentation for remittances, providing a clear audit trail.",
    features: ["Automated receipts", "WHT schedule tracking", "Bulk processing", "Exportable formats"],
  },
  {
    name: "Interest Expense Analyser",
    tag: "Analytics",
    desc: "Cuts through the complexities of manual interest analysis by computing and evaluating deductible interest expenses.",
    features: ["Deductible interest computation", "Financial institution support"],
  },
]

export const formatNum = (i) => String(i + 1).padStart(2, "0")
