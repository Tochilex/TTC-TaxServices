const ServiceCard = ({ icon, title, description, tag, features = [] }) => {
  return (
    <div className="group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-teal-500/40 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 h-full">
      {/* Teal left accent on hover */}
      <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 text-2xl mb-5">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

      {/* Features list */}
      {features.length > 0 && (
        <ul className="space-y-2 mb-5">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-1 h-1 rounded-full bg-teal-400 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* Tag */}
      {tag && (
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
          {tag}
        </span>
      )}
    </div>
  )
}

export default ServiceCard
