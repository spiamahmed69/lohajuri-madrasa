import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import SmartImage from '../components/SmartImage.jsx'
import { usePageTitle } from '../App.jsx'
import { SITE, IMG } from '../data/madrasa.js'

export default function About() {
  usePageTitle('মাদরাসা পরিচিতি')
  return (
    <div>
      <PageHeader title="মাদরাসা পরিচিতি" subtitle={`${SITE.name} — ${SITE.address}`} crumbs={[{ label: 'মাদরাসা পরিচিতি' }]} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeading align="left" eyebrow="পরিচিতি" title="আমাদের প্রতিষ্ঠান" />
            <p className="text-gray-600 leading-relaxed">আল জামিয়াতুল ইসলামিয়া দারুল উলূম লোহাজুড়ি কিশোরগঞ্জ জেলার কটিয়াদী উপজেলার লোহাজুড়িতে অবস্থিত একটি দ্বীনি শিক্ষাপ্রতিষ্ঠান। এখানে কুরআন ও সুন্নাহর আলোকে শিক্ষার্থীদের দ্বীনি শিক্ষা প্রদান করা হয়।</p>
            <p className="mt-3 text-gray-600 leading-relaxed">প্রতিষ্ঠানটির মূল লক্ষ্য হলো — ইলম, আমল ও আখলাকের সমন্বয়ে আদর্শ, চরিত্রবান ও জ্ঞানী প্রজন্ম গড়ে তোলা, যারা দ্বীন ও দুনিয়ার কল্যাণে কাজ করবে।</p>
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed">
              <strong>তথ্য হালনাগাদযোগ্য:</strong> প্রতিষ্ঠার সাল, প্রতিষ্ঠাতা ও বিস্তারিত ইতিহাস এখনো যাচাই করা হয়নি। কর্তৃপক্ষের নিশ্চিত তথ্য পাওয়া গেলে এই পাতাটি হালনাগাদ করা হবে।
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-white border border-gray-100 rounded-2xl p-4"><p className="text-gray-500">প্রতিষ্ঠানের নাম</p><p className="font-semibold text-gray-900 mt-1">{SITE.name}</p></div>
              <div className="bg-white border border-gray-100 rounded-2xl p-4"><p className="text-gray-500">ঠিকানা</p><p className="font-semibold text-gray-900 mt-1">{SITE.address}</p></div>
              <div className="bg-white border border-gray-100 rounded-2xl p-4"><p className="text-gray-500">ফোন</p><p className="font-semibold text-gray-900 mt-1">{SITE.phone}</p></div>
              <div className="bg-white border border-gray-100 rounded-2xl p-4"><p className="text-gray-500">ইমেইল</p><p className="font-semibold text-gray-900 mt-1">{SITE.email}</p></div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <SmartImage src={IMG.mosque1} alt="মাদরাসা মসজিদ" className="w-full h-72 object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <SmartImage src={IMG.quran1} alt="কুরআন অধ্যয়ন" className="w-full h-56 object-cover" />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/itihas" className="inline-flex items-center min-h-[44px] px-5 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800">ইতিহাস ও ঐতিহ্য</Link>
          <Link to="/lokkho" className="inline-flex items-center min-h-[44px] px-5 rounded-xl border border-emerald-700 text-emerald-700 text-sm font-semibold hover:bg-emerald-50">লক্ষ্য ও উদ্দেশ্য</Link>
          <Link to="/vorti" className="inline-flex items-center min-h-[44px] px-5 rounded-xl border border-emerald-700 text-emerald-700 text-sm font-semibold hover:bg-emerald-50">ভর্তি তথ্য</Link>
        </div>
      </section>
    </div>
  )
}
