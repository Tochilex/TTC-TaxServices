"use client"

import { useState } from "react"

const ContactForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const inputClass =
    "w-full bg-white/[0.03] border border-white/10 text-gray-100 text-sm rounded-xl px-4 py-3 placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-white/[0.05] transition-all duration-200"
  const labelClass = "block text-sm font-medium text-gray-300 mb-2"

  return (
    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8">
      <h3 className="text-white font-semibold text-xl mb-6">Send a Message</h3>
      <form className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>
              Full Name <span className="text-teal-400">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className={inputClass}
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className={labelClass}>
              Email <span className="text-teal-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="johndoe@company.com"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Company</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className={inputClass}
              placeholder="Your company"
            />
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
              placeholder="+234 000 0000"
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>
            Message <span className="text-teal-400">*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            className={`${inputClass} resize-none`}
            placeholder="Tell us how we can help..."
            required
          />
        </div>

        <button
          type="button"
          disabled
          className="w-full py-3.5 bg-teal-500/40 text-white/50 font-medium rounded-xl cursor-not-allowed"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm
