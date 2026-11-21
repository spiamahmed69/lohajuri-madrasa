import { Link } from 'react-router-dom'
import { ChevronLeft, Home } from 'lucide-react'

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="ব্রেডক্রাম্ব" className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
      <Link to="/" className="inline-flex items-center gap-1 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-emerald-700 rounded">
        <Home className="w-4 h-4" aria-hidden="true" /> হোম
      </Link>
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-1">
          <ChevronLeft className="w-4 h-4 text-gray-400" aria-hidden="true" />
          {item.to ? (
            <Link to={item.to} className="hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-emerald-700 rounded">{item.label}</Link>
          ) : (
            <span className="text-emerald-800 font-semibold" aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
