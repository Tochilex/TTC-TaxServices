"use client"

import { useState } from "react"
import { LuSearch } from "react-icons/lu"
import ServiceCard from "@/components/ServiceCard"
import { ContactTrigger } from "@/components/ContactModal"
import { services, formatNum } from "@/data/services"

const ALL = "All"
const categories = [ALL, ...new Set(services.map((s) => s.tag))]
const countFor = (cat) => (cat === ALL ? services.length : services.filter((s) => s.tag === cat).length)

const matchesQuery = (s, q) => [s.name, s.desc, s.tag, ...s.features].join(" ").toLowerCase().includes(q)

const ServicesGrid = () => {
  const [category, setCategory] = useState(ALL)
  const [query, setQuery] = useState("")

  const q = query.trim().toLowerCase()
  const visible = services.filter((s) => (category === ALL || s.tag === category) && (!q || matchesQuery(s, q)))
  const showRequestCard = visible.length > 0 && category === ALL && !q

  const reset = () => {
    setCategory(ALL)
    setQuery("")
  }

  return (
    <section className="container-page pb-28 pt-10">
      {/* Filter bar — sticks directly below the 72px header */}
      <div className="sticky top-[72px] z-10 mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-line-section bg-[rgba(5,6,5,0.9)] py-4 backdrop-blur-[14px]">
        <div
          role="tablist"
          aria-label="Service categories"
          className="scrollbar-none flex max-w-full gap-0.5 overflow-x-auto rounded-xl border border-line-card bg-surface-control p-1"
        >
          {categories.map((cat) => {
            const active = cat === category
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setCategory(cat)}
                className={`flex h-[34px] flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-3 text-[13px] font-medium transition-colors ${
                  active ? "bg-[#151B10] text-ink shadow-[inset_0_0_0_1px_#2E3A22]" : "text-ink-muted hover:text-ink"
                }`}
              >
                {cat}
                <span
                  className={`inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-[5px] px-[5px] font-mono text-[11px] ${
                    active ? "bg-accent text-accent-on" : "bg-[#141811] text-ink-subtle"
                  }`}
                >
                  {countFor(cat)}
                </span>
              </button>
            )
          })}
        </div>

        <label className="flex h-10 min-w-[min(100%,280px)] items-center gap-2.5 rounded-[10px] border border-line-input bg-surface-control px-3.5">
          <LuSearch size={15} strokeWidth={2} className="flex-shrink-0 text-ink-subtle" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services or features"
            aria-label="Search services or features"
            className="min-w-0 flex-1 border-0 bg-transparent text-sm text-ink outline-none placeholder:text-ink-faint"
          />
        </label>
      </div>

      {visible.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,340px),1fr))] gap-5">
          {visible.map((s, i) => (
            <ServiceCard key={s.name} service={s} num={formatNum(i)} />
          ))}

          {showRequestCard && (
            <ContactTrigger className="flex min-h-[320px] flex-col justify-between gap-6 rounded-[18px] border border-dashed border-[#2E3A22] bg-transparent p-7 text-left text-ink transition-colors duration-200 hover:border-accent hover:bg-[#0A0D08]">
              <span className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-dashed border-line-hover text-xl text-accent">
                +
              </span>
              <span className="flex flex-col gap-2.5">
                <span className="text-[22px] font-semibold tracking-[-0.02em]">Need something else?</span>
                <span className="text-[15px] leading-[1.6] text-ink-body">Tell us about a process you&apos;d like automated.
                </span>
              </span>
              <span className="text-sm font-medium text-accent">Suggest a service →</span>
            </ContactTrigger>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 rounded-[18px] border border-line-card px-6 py-16 text-center">
          <span className="text-lg font-semibold">No services match “{query}”</span>
          <button
            type="button"
            onClick={reset}
            className="rounded-lg border border-[#2A3122] bg-[#0B0D09] px-4 py-2.5 text-sm text-ink transition-colors hover:border-[#4A5A38]"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  )
}

export default ServicesGrid
