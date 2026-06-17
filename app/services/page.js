import PageHeader from "@/components/PageHeader"
import ServicesGrid from "@/components/ServicesGrid"
import HowItWorks from "@/components/HowItWorks"

export default function Services() {
  return (
    <div>
      <PageHeader
        title="Our Services"
        description="End-to-end digital tax solutions designed to simplify compliance, automate workflows, and empower your tax function."
        breadcrumb="Services"
      />
      <ServicesGrid />
      <HowItWorks />
    </div>
  )
}
