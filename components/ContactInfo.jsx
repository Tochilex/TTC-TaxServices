import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter } from "react-icons/fi"

const infoItems = [
  {
    icon: <FiMail />,
    label: "Email",
    value: "info@ttcservices.com",
    href: "mailto:info@ttcservices.com",
  },
  {
    icon: <FiPhone />,
    label: "Phone",
    value: "+234 (0) 000 0000",
    href: "tel:+2340000000000",
  },
  {
    icon: <FiMapPin />,
    label: "Location",
    value: "Lagos, Nigeria",
    href: null,
  },
]

const ContactInfo = () => {
  return (
    <div className="space-y-5">
      <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8">
        <h3 className="text-white font-semibold text-xl mb-6">Contact Information</h3>
        <div className="space-y-6">
          {infoItems.map(({ icon, label, value, href }, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0">
                {icon}
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{label}</p>
                {href ? (
                  <a
                    href={href}
                    className="text-gray-200 hover:text-teal-400 transition-colors duration-200 text-sm font-medium"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-gray-200 text-sm font-medium">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
        <p className="text-gray-400 text-sm mb-4">Follow us</p>
        <div className="flex gap-3">
          <a
            href="#"
            className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-200"
            aria-label="Twitter"
          >
            <FiTwitter size={18} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
