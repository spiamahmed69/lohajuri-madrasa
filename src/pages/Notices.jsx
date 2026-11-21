import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import NoticeCard from '../components/NoticeCard.jsx'
import { usePageTitle } from '../App.jsx'
import { NOTICES, NOTICE_CATEGORIES } from '../data/notices.js'
import { Search } from 'lucide-react'

export default function Notices() {
  usePageTitle('নোটিশ বোর্ড')
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('সকল')

  const filtered = useMemo(() => NOTICES.filter((n) => {
    const okCat = cat === 'সকল' || n.category === cat
    const okQ = !query.trim() || n.title.includes(query.trim()) || n.summary.includes(query.trim())
    return okCat && okQ
  }), [query, cat])

  return (
    <div>
      <PageHeader title="নোটিশ বোর্ড" subtitle="ভর্তি, পরীক্ষা, ছুটি ও সাধারণ নোটিশ" crumbs={[{ label: 'নোটিশ বোর্ড' }]} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-sm text-gray-600 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 max-w-3xl mb-6">এই পাতার নোটিশগুলো নমুনা তথ্য — কর্তৃপক্ষের প্রকৃত নোটিশ দিয়ে প্রতিস্থাপন করা হবে।</p>
        <div className="flex flex-col md:flex-row gap-4 md:items-center mb-6">
          <label className="relative flex-1 max-w-md">
            <span className="sr-only">নোটিশ খুঁজুন</span>
            <Search className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="নোটিশ খুঁজুন…" className="w-full min-h-[44px] rounded-xl border border-gray-300 pe-10 ps-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" />
          </label>
          <div className="flex flex-wrap gap-2" role="group" aria-label="বিভাগ অনুযায়ী ফিল্টার">
            {NOTICE_CATEGORIES.map((c) => (
              <button key={c} type="button" onClick={() => setCat(c)} aria-pressed={cat === c} className={`min-h-[40px] px-4 rounded-full text-sm font-medium border focus-visible:outline-2 focus-visible:outline-emerald-700 ${cat === c ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-600'}`}>{c}</button>
            ))}
          </div>
        </div>
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-12">কোনো নোটিশ পাওয়া যায়নি। অন্য শব্দ বা বিভাগ দিয়ে চেষ্টা করুন।</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((n) => <NoticeCard key={n.id} notice={n} />)}
          </div>
        )}
      </section>
    </div>
  )
}
