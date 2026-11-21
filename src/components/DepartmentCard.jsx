import { Link } from 'react-router-dom'
import { BookOpen, Bookmark, Library, Scale, ScrollText, PenLine, ArrowLeft } from 'lucide-react'
import SmartImage from './SmartImage.jsx'

const ICONS = { BookOpen, Bookmark, Library, Scale, ScrollText, PenLine }

export default function DepartmentCard({ dept }) {
  const Icon = ICONS[dept.icon] || BookOpen
  return (
    <article className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      <div className="relative">
        <SmartImage src={dept.image} alt={dept.name} className="w-full h-44 object-cover" />
        <span className="absolute top-3 right-3 text-xs font-semibold bg-white/95 text-emerald-800 border border-emerald-100 rounded-full px-2.5 py-1">সম্পাদনাযোগ্য</span>
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="w-11 h-11 rounded-xl bg-emerald-800 text-gold-light flex items-center justify-center" aria-hidden="true">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{dept.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-1">{dept.desc}</p>
        <p className="text-xs text-gray-500">মেয়াদ: {dept.duration}</p>
        <Link to="/vorti" className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-800 pt-1">
          ভর্তি তথ্য দেখুন <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
