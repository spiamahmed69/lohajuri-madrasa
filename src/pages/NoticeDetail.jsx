import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import NoticeCard from '../components/NoticeCard.jsx'
import SmartImage from '../components/SmartImage.jsx'
import { usePageTitle } from '../App.jsx'
import { NOTICES } from '../data/notices.js'
import { CalendarDays, FileText, Download, ArrowRight } from 'lucide-react'

export default function NoticeDetail() {
  const { id } = useParams()
  const notice = NOTICES.find((n) => n.id === id)
  usePageTitle(notice ? notice.title : 'নোটিশ পাওয়া যায়নি')

  if (!notice) {
    return (
      <div>
        <PageHeader title="নোটিশ পাওয়া যায়নি" subtitle="দুঃখিত, এই নোটিশটি খুঁজে পাওয়া যায়নি।" crumbs={[{ label: 'নোটিশ বোর্ড', to: '/notice' }, { label: 'পাওয়া যায়নি' }]} />
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <Link to="/notice" className="inline-flex items-center gap-1 min-h-[44px] px-5 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800"><ArrowRight className="w-4 h-4" aria-hidden="true" /> নোটিশ বোর্ডে ফিরুন</Link>
        </div>
      </div>
    )
  }

  const related = NOTICES.filter((n) => n.id !== notice.id).slice(0, 3)
  return (
    <div>
      <PageHeader title={notice.title} subtitle={`${notice.category} • ${notice.date}`} crumbs={[{ label: 'নোটিশ বোর্ড', to: '/notice' }, { label: notice.title }]} />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <article className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <SmartImage src={notice.image} alt={notice.title} className="w-full h-64 sm:h-80 object-cover" eager />
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-full px-2.5 py-1">{notice.category}</span>
              <span className="text-xs bg-amber-50 text-amber-800 border border-amber-100 rounded-full px-2.5 py-1">নমুনা</span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500"><CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />প্রকাশ: {notice.date}</span>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-gray-900 leading-snug">{notice.title}</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">{notice.body}</p>
            {notice.pdf ? (
              <div className="mt-6 flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
                <FileText className="w-5 h-5 text-emerald-700 shrink-0" aria-hidden="true" />
                <p className="text-sm text-gray-700 flex-1">নোটিশের পিডিএফ কপি কর্তৃপক্ষের প্রকৃত ফাইল পাওয়া গেলে এখানে যুক্ত হবে।</p>
                <button type="button" disabled title="পিডিএফ এখনো যুক্ত হয়নি" className="inline-flex items-center gap-1.5 min-h-[44px] px-4 rounded-xl bg-gray-200 text-gray-500 text-sm font-semibold cursor-not-allowed">
                  <Download className="w-4 h-4" aria-hidden="true" /> পিডিএফ (শীঘ্রই)
                </button>
              </div>
            ) : (
              <p className="mt-6 text-sm text-gray-500">এই নোটিশের সঙ্গে কোনো পিডিএফ সংযুক্ত নেই।</p>
            )}
          </div>
        </article>
        <div className="mt-10">
          <h3 className="text-xl font-bold text-gray-900 mb-5">অন্যান্য নোটিশ</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((n) => <NoticeCard key={n.id} notice={n} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
