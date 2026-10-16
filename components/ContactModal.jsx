"use client"

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import { LuMail } from "react-icons/lu"
import { siteConfig } from "@/config/site"

const ContactContext = createContext({ open: () => {}, close: () => {} })

export const useContact = () => useContext(ContactContext)

export function ContactProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <ContactContext.Provider value={{ open, close }}>
      {children}
      {isOpen && <ContactModal onClose={close} />}
    </ContactContext.Provider>
  )
}

// Any element that should open the modal ("Request support", "Talk to the team", ...)
export function ContactTrigger({ className, children, onClick }) {
  const { open } = useContact()
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.()
        open()
      }}
    >
      {children}
    </button>
  )
}

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

function ContactModal({ onClose }) {
  const panelRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const panel = panelRef.current
    panel.querySelector(FOCUSABLE)?.focus()

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose()
        return
      }
      if (e.key !== "Tab") return
      const items = panel.querySelectorAll(FOCUSABLE)
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener("keydown", onKeyDown)

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = prevOverflow
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(2,3,2,0.72)] p-6 backdrop-blur-[8px]"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-[520px] flex-col gap-5 overflow-hidden rounded-[20px] border border-line-panel bg-surface-panel p-10 shadow-[0_40px_120px_-20px_#000]"
      >
        <div className="bg-accent-glow pointer-events-none absolute -right-[140px] -top-[180px] h-[420px] w-[420px]" />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 h-9 w-9 rounded-lg border border-line-input bg-surface-control text-lg text-ink-body transition-colors hover:border-line-hover hover:text-ink"
        >
          ×
        </button>

        <span className="tile relative h-12 w-12 rounded-xl">
          <LuMail size={22} strokeWidth={1.8} />
        </span>

        <div className="relative flex flex-col gap-3">
          <span className="eyebrow">Consultation &amp; Support</span>
          <h2 id="contact-modal-title" className="m-0 text-[30px] font-semibold leading-[1.1] tracking-[-0.03em]">
            Talk to the TTC team
          </h2>
          <p className="m-0 text-base leading-[1.6] text-[#B4BCAD]">
            Contact or email the Tax Transformation Tech (TTC) team directly for consultations and support. We are
            always willing to assist.
          </p>
        </div>

        <div className="relative mt-1 flex flex-wrap gap-3">
          <a href={`mailto:${siteConfig.contactEmail}`} className="btn-primary px-5 py-[13px]">
            Email the TTC team →
          </a>
          {/* <button type="button" onClick={onClose} className="btn-secondary-panel px-5 py-[13px]">
            Maybe later
          </button> */}
        </div>
      </div>
    </div>
  )
}
