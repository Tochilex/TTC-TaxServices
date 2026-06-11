const stats = [
  { value: "5+", label: "Digital Solutions" },
  { value: "100+", label: "Clients Served" },
  { value: "10+", label: "Years Experience" },
]

const StatsBar = () => {
  return (
    <section>
      {/* <section className="bg-[#0f172a] border-y border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map(({ value, label }, i) => (
            <div
              key={i}
              className={`${
                i < stats.length - 1 ? "sm:border-r border-white/10" : ""
              }`}
            >
              <p className="text-4xl font-bold text-teal-400 mb-1">{value}</p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section> */}
    </section>
    
  )
}

export default StatsBar
