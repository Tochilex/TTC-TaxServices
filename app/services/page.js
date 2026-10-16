import ServicesHeader from "@/components/ServicesHeader"
import ServicesGrid from "@/components/ServicesGrid"
import HowItWorks from "@/components/HowItWorks"
import CTABanner from "@/components/CTABanner"

export const metadata = {
  title: 'Services | TTC Services',
}

export default function Services() {
  return (
    <div>
      <ServicesHeader />
      <ServicesGrid />
      <HowItWorks />
      <CTABanner
        title="Not sure which service fits?"
        body="Book a consultation and we'll recommend the right solution for your team."
        primaryLabel="Book a consultation →"
      />
    </div>
  )
}
