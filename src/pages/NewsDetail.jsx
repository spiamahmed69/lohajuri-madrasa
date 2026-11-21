import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import NewsCard from '../components/NewsCard.jsx'
import SmartImage from '../components/SmartImage.jsx'
import { usePageTitle } from '../App.jsx'
import { NEWS } from '../data/news.js'
import { CalendarDays, ArrowRight } from 'lucide-react'

export default function NewsDetail() {
  const { id } = useParams()
  const item = NEWS.find((n) => n.id === id)
  usePageTitle(item ? item.title : 'সংবাদ পাওয়া যায়নি')

  if (!item) {
    return (
      <div>
        <PageHeader title="সংবাদ পাওয়া যায়নি" subtitle="দুঃখিত, এই সংবাদটি খুঁজে পাওয়া যায়নি।" crumbs={[{ label: 'সংবাদ', to: '/songbad' }, { label: 'পাওয়া যায়নি' }]} />
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <Link to="/songbad" className="inline-flex items-center gap-1 min-h-[44px] px-5 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800"><ArrowRight className="w-4 h-4" aria-hidden="true" /> সংবাদের পাতায় ফিরুন</Link>
        </div>
      </div>
    )
  }

  const related = NEWS.filter((n) => n.id !== item.id && n.category === item.category).concat(NEWS.filter((n) => n.id !== item.id && n.category !== item.category)).slice(0, 3)
  return (
    <div>
      <PageHeader title={item.title} subtitle={`${item.category} • ${item.date}`} crumbs={[{ label: 'সংবাদ', to: '/songbad' }, { label: item.title }]} />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <article className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <SmartImage src={item.image} alt={item.title} className="w-full h-64 sm:h-80 object-cover" eager />
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-full px-2.5 py-1">{item.category}</span>
              <span className="text-xs bg-amber-50 text-amber-800 border border-amber-100 rounded-full px-2.5 py-1">নমুনা</span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500"><CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />প্রকাশ: {item.date}</span>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-gray-900 leading-snug">{item.title}</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">{item.body}</p>
          </div>
        </article>
        <div className="mt-10">
          <h3 className="text-xl font-bold text-gray-900 mb-5">সম্পর্কিত সংবাদ</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((n) => <NewsCard key={n.id} item={n} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
