import Breadcrumb from './Breadcrumb.jsx'

export default function PageHeader({ title, subtitle, crumbs = [] }) {
  return (
    <div className="bg-emerald-900 islamic-pattern-light text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <Breadcrumb items={crumbs} />
        <h1 className="mt-4 text-2xl sm:text-4xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-emerald-100 max-w-2xl leading-relaxed">{subtitle}</p>}
        <div className="mt-4 h-0.5 w-16 bg-gold" aria-hidden="true" />
      </div>
    </div>
  )
}
