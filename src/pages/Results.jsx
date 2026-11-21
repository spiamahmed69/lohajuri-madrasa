import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { usePageTitle } from '../App.jsx'
import { RESULT_YEARS, RESULT_CLASSES, DEMO_RESULTS } from '../data/results.js'
import { Search, AlertTriangle } from 'lucide-react'

export default function Results() {
  usePageTitle('পরীক্ষার ফলাফল')
  const [year, setYear] = useState('২০২৬')
  const [cls, setCls] = useState('কিতাব — ১ম বর্ষ')
  const [roll, setRoll] = useState('')
  const [searched, setSearched] = useState(false)
  const [result, setResult] = useState(null)

  const onSearch = (e) => {
    e.preventDefault()
    const found = DEMO_RESULTS.find((r) => r.roll === roll.trim() && r.year === year && r.cls === cls)
    setResult(found || null)
    setSearched(true)
  }

  const inputCls = 'w-full min-h-[44px] rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600'

  return (
    <div>
      <PageHeader title="পরীক্ষার ফলাফল" subtitle="শিক্ষাবর্ষ, শ্রেণি ও রোল নম্বর দিয়ে ফলাফল খুঁজুন" crumbs={[{ label: 'পরীক্ষার ফলাফল' }]} />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed flex gap-2 mb-6">
          <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
          <p><strong>প্রদর্শনী ফলাফল (নমুনা তথ্য):</strong> নিচে দেখানো ফলাফলগুলো শুধু প্রদর্শনীর জন্য নমুনা তথ্য — এগুলো প্রকৃত শিক্ষার্থীর ফলাফল নয়। নমুনা রোল: ১০১, ১০২, ১০৩ (শিক্ষাবর্ষ ২০২৬)। কর্তৃপক্ষের প্রকৃত ফলাফল পেলে এই অংশ হালনাগাদ করা হবে।</p>
        </div>

        <form onSubmit={onSearch} className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-8">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="year" className="block text-sm font-semibold text-gray-800 mb-1.5">শিক্ষাবর্ষ</label>
              <select id="year" value={year} onChange={(e) => setYear(e.target.value)} className={inputCls}>
                {RESULT_YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="cls" className="block text-sm font-semibold text-gray-800 mb-1.5">শ্রেণি / বিভাগ</label>
              <select id="cls" value={cls} onChange={(e) => setCls(e.target.value)} className={inputCls}>
                {RESULT_CLASSES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="roll" className="block text-sm font-semibold text-gray-800 mb-1.5">রোল নম্বর</label>
              <input id="roll" value={roll} onChange={(e) => setRoll(e.target.value)} className={inputCls} placeholder="যেমন: 101" inputMode="numeric" />
            </div>
          </div>
          <button type="submit" className="mt-5 inline-flex items-center gap-2 min-h-[44px] px-6 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-emerald-700">
            <Search className="w-4 h-4" aria-hidden="true" /> ফলাফল খুঁজুন
          </button>
        </form>

        {searched && !result && (
          <div className="mt-6 bg-white border border-gray-100 rounded-2xl shadow-sm p-6 text-center text-gray-600">
            কোনো ফলাফল পাওয়া যায়নি — এটি নমুনা তথ্য। নমুনা রোল ১০১, ১০২ অথবা ১০৩ দিয়ে চেষ্টা করুন (শিক্ষাবর্ষ ২০২৬)।
          </div>
        )}

        {result && (
          <div className="mt-6 bg-white border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-8">
            <div className="flex flex-wrap justify-between gap-3 border-b border-gray-100 pb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{result.name}</h2>
                <p className="text-sm text-gray-500 mt-1">রোল: {result.roll} • শ্রেণি: {result.cls} • শিক্ষাবর্ষ: {result.year}</p>
              </div>
              <span className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-full px-3 py-1.5 h-fit font-semibold">নমুনা তথ্য</span>
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-right border-b border-gray-100 text-gray-500">
                    <th scope="col" className="text-right py-2 pe-2 font-semibold">বিষয়</th>
                    <th scope="col" className="py-2 font-semibold">নম্বর</th>
                    <th scope="col" className="py-2 font-semibold">গ্রেড</th>
                  </tr>
                </thead>
                <tbody>
                  {result.subjects.map((s) => (
                    <tr key={s.name} className="border-b border-gray-50">
                      <td className="py-2.5 pe-2 text-gray-800">{s.name}</td>
                      <td className="py-2.5 text-center">{s.marks}</td>
                      <td className="py-2.5 text-center font-semibold text-emerald-800">{s.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex flex-wrap gap-6 text-sm">
              <p>মোট নম্বর: <strong className="text-gray-900">{result.total}</strong></p>
              <p>চূড়ান্ত ফলাফল: <strong className="text-emerald-800">{result.result}</strong></p>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
