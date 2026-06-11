import Link from "next/link"

const PageHeader = ({ title, description, breadcrumb }) => {
  return (
    <section className="relative pt-36 pb-16 bg-[#0a0f1e] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {breadcrumb && (
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-gray-300 transition-colors duration-200">
              Home
            </Link>
            <span>/</span>
            <span className="text-teal-400">{breadcrumb}</span>
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{title}</h1>

        {description && (
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  )
}

export default PageHeader
