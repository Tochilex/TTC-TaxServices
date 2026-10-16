import { LuZap, LuCheckCircle, LuShield } from "react-icons/lu"

const pillars = [
  {
    icon: LuZap,
    title: "Speed & efficiency",
    desc: "Automate repetitive tax workflows to free your team for high-value work and faster decision-making.",
  },
  {
    icon: LuCheckCircle,
    title: "Accuracy you can trust",
    desc: "Eliminate manual errors with precision-built computation engines that deliver consistent, reliable results.",
  },
  {
    icon: LuShield,
    title: "Compliance ready",
    desc: "Stay audit-ready with tools designed around regulatory standards and built to meet NRS and OECD requirements.",
  },
]

const WhyUsSection = () => {
  return (
    <section className="border-t border-line-section bg-surface-alt">
      <div className="container-page grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-16 py-28">
        <div className="flex flex-col gap-[18px] self-start md:sticky md:top-28">
          <span className="eyebrow">Why TTC</span>
          <h2 className="heading-2 [text-wrap:balance]">Deep tax expertise, built into technology that works.</h2>
          <p className="m-0 max-w-[440px] text-[17px] leading-[1.55] text-ink-body">
            We combine deep tax expertise with cutting-edge technology to deliver solutions that work.
          </p>
        </div>

        <div className="flex flex-col border-t border-line-card">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="grid grid-cols-[56px_1fr] gap-6 border-b border-line-card py-8">
              <span className="tile h-14 w-14 rounded-[14px]">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="m-0 text-[22px] font-semibold tracking-[-0.02em]">{title}</h3>
                <p className="m-0 [text-wrap:pretty]text-base leading-[1.6] text-ink-body">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection
