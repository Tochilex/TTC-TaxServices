import PageHeader from "@/components/PageHeader"
import ContactForm from "@/components/ContactForm"
import ContactInfo from "@/components/ContactInfo"

export default function Contact() {
  return (
    <div>
      <PageHeader
        title="Get In Touch"
        description="Have questions or want to discuss a solution? We'd love to hear from you."
        breadcrumb="Contact"
      />
      <section className="py-16 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
