import PageHeader from "@/components/PageHeader"
import MissionSection from "@/components/MissionSection"
import ValuesSection from "@/components/ValuesSection"

export default function About() {
  return (
    <div>
      <PageHeader
        title="About TTC Services"
        description="We build digital tax tools that simplify compliance, improve accuracy, and transform how businesses manage their tax function."
        breadcrumb="About"
      />
      <MissionSection />
      <ValuesSection />
    </div>
  )
}
