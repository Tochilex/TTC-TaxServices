import HeroSection from "@/components/HeroSection"
import ApproachStrip from "@/components/ApproachStrip"
import ServicesPreview from "@/components/ServicesPreview"
import WhyUsSection from "@/components/WhyUsSection"
import CTABanner from "@/components/CTABanner"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ApproachStrip />
      <ServicesPreview />
      <WhyUsSection />
      <CTABanner
        title="Have a tax process that needs fixing?"
        body="Tell us what you're working on - we'll help scope the right tool or build a new one."
        primaryLabel="Request support →"
        secondary={{ label: "Browse services", href: "/services" }}
      />
    </div>
  )
}
