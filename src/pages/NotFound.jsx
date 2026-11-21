import { Link } from 'react-router-dom'
import { SearchX, Home } from 'lucide-react'
import { usePageTitle } from '../App.jsx'

export default function NotFound() {
  usePageTitle('পাতা পাওয়া যায়নি')
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
      <SearchX className="w-16 h-16 mx-auto text-emerald-700" aria-hidden="true" />
      <h1 className="mt-6 text-4xl font-bold text-gray-900">৪০৪</h1>
      <h2 className="mt-2 text-2xl font-bold text-gray-900">পাতাটি পাওয়া যায়নি</h2>
      <p className="mt-3 text-gray-600 leading-relaxed">দুঃখিত, আপনি যে পাতাটি খুঁজছেন তা নেই অথবা সরিয়ে ফেলা হয়েছে। ঠিকানাটি যাচাই করুন অথবা হোম পাতায় ফিরে যান।</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link to="/" className="inline-flex items-center gap-2 min-h-[44px] px-5 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-emerald-700">
          <Home className="w-4 h-4" aria-hidden="true" /> হোমে ফিরুন
        </Link>
        <Link to="/notice" className="inline-flex items-center min-h-[44px] px-5 rounded-xl border border-emerald-700 text-emerald-700 text-sm font-semibold hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-emerald-700">নোটিশ বোর্ড</Link>
      </div>
    </section>
  )
}
