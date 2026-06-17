const ServiceCard = ({ icon, title, description, tag, features = [] }) => {
  return (
    <div className="group relative bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 hover:border-teal-500/30 hover:bg-white/[0.05] transition-all duration-300 h-full">
      <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon + Tag row */}
      <div className="flex items-center justify-between mb-3">
        <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 text-lg">
          {icon}
        </div>
        {tag && (
          <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
            {tag}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-white text-base font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-3">{description}</p>

      {/* Features list */}
      {features.length > 0 && (
        <ul className="space-y-1.5">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-1 h-1 rounded-full bg-teal-500/60 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ServiceCard
