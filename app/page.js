import HeroSection from "@/components/HeroSection"
import StatsBar from "@/components/StatsBar"
import ServicesPreview from "@/components/ServicesPreview"
import WhyUsSection from "@/components/WhyUsSection"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsBar />
      <ServicesPreview />
      <WhyUsSection />
    </div>
  )
}
