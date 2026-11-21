import { Link } from 'react-router-dom'
import { CalendarDays, ArrowLeft } from 'lucide-react'
import SmartImage from './SmartImage.jsx'

export default function NewsCard({ item }) {
  return (
    <article className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      <Link to={`/songbad/${item.id}`} className="block focus-visible:outline-2 focus-visible:outline-emerald-700" aria-label={item.title}>
        <SmartImage src={item.image} alt={item.title} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-full px-2.5 py-1">{item.category}</span>
          <span className="text-xs bg-amber-50 text-amber-800 border border-amber-100 rounded-full px-2.5 py-1">নমুনা</span>
          <span className="inline-flex items-center gap-1 text-xs text-gray-500"><CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />{item.date}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          <Link to={`/songbad/${item.id}`} className="hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-emerald-700 rounded">{item.title}</Link>
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-1">{item.excerpt}</p>
        <Link to={`/songbad/${item.id}`} className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-800 pt-1">
          আরও পড়ুন <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
