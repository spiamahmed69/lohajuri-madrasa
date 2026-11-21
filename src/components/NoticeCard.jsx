import { Link } from 'react-router-dom'
import { CalendarDays, FileText, ArrowLeft } from 'lucide-react'

export default function NoticeCard({ notice }) {
  return (
    <article className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-full px-2.5 py-1">{notice.category}</span>
        <span className="text-xs bg-amber-50 text-amber-800 border border-amber-100 rounded-full px-2.5 py-1">নমুনা</span>
        <span className="inline-flex items-center gap-1 text-xs text-gray-500"><CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />{notice.date}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 leading-snug">
        <Link to={`/notice/${notice.id}`} className="hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-emerald-700 rounded">{notice.title}</Link>
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-1">{notice.summary}</p>
      <div className="flex items-center gap-4 pt-1">
        <Link to={`/notice/${notice.id}`} className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-800">
          বিস্তারিত <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        </Link>
        {notice.pdf && (
          <span className="inline-flex items-center gap-1 text-sm text-gray-500"><FileText className="w-4 h-4" aria-hidden="true" />পিডিএফ উপলব্ধ</span>
        )}
      </div>
    </article>
  )
}
