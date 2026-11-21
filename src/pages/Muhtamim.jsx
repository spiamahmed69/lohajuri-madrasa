import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { usePageTitle } from '../App.jsx'
import { Quote } from 'lucide-react'
import { SITE } from '../data/madrasa.js'

export default function Muhtamim() {
  usePageTitle('মুহতামিমের বাণী')
  return (
    <div>
      <PageHeader title="মুহতামিমের বাণী" subtitle="প্রতিষ্ঠানের মুহতামিমের শুভেচ্ছা বাণী" crumbs={[{ label: 'পরিচিতি', to: '/porichiti' }, { label: 'মুহতামিমের বাণী' }]} />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-10 text-center">
          <div className="mx-auto w-32 h-32 rounded-full bg-emerald-800 border-4 border-gold/60 flex flex-col items-center justify-center text-white">
            <Quote className="w-8 h-8 text-gold-light" aria-hidden="true" />
            <span className="mt-1 text-xs px-3">ছবি (হালনাগাদযোগ্য)</span>
          </div>
          <h2 className="mt-5 text-2xl font-bold text-gray-900">মুহতামিমের নাম (হালনাগাদযোগ্য)</h2>
          <p className="text-emerald-700 font-semibold text-sm mt-1">মুহতামিম, {SITE.name}</p>
          <div className="mt-6 text-right sm:text-left">
            <p className="text-gray-600 leading-relaxed">আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ। আল জামিয়াতুল ইসলামিয়া দারুল উলূম লোহাজুড়ির ওয়েবসাইটে আপনাদের স্বাগতম।</p>
            <p className="mt-3 text-gray-600 leading-relaxed">ইলম অর্জন প্রত্যেক মুসলিম নর-নারীর জন্য ফরজ। আমাদের এই প্রতিষ্ঠানে শিক্ষার্থীদেরকে কুরআন-সুন্নাহর সঠিক শিক্ষা দিয়ে আদর্শ মানুষ হিসেবে গড়ে তোলার আন্তরিক চেষ্টা করা হয়। শিক্ষকমণ্ডলী, অভিভাবক ও শুভানুধ্যায়ীদের সহযোগিতা ও দোয়া আমাদের একান্ত কাম্য।</p>
            <p className="mt-3 text-gray-600 leading-relaxed">আল্লাহ তাআলা আমাদের এই প্রতিষ্ঠানকে কবুল করুন এবং শিক্ষার্থীদের দ্বীন ও দুনিয়ার কল্যাণে কাজ করার তাওফিক দান করুন। আমিন।</p>
          </div>
          <p className="mt-6 text-xs text-gray-500 bg-amber-50 border border-amber-200 rounded-xl p-3">উপরের বাণীটি নমুনা হিসেবে লেখা — মুহতামিমের প্রকৃত নাম, ছবি ও বাণী পাওয়া গেলে এই পাতাটি হালনাগাদ করা হবে।</p>
          <Link to="/vorti" className="mt-6 inline-flex items-center min-h-[44px] px-5 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800">ভর্তি তথ্য দেখুন</Link>
        </div>
      </section>
    </div>
  )
}
