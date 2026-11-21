import { Link } from 'react-router-dom'
import { GraduationCap, BookOpen, MapPin } from 'lucide-react'
import { SITE, IMG } from '../data/madrasa.js'
import SmartImage from './SmartImage.jsx'

export default function Hero() {
  return (
    <section className="relative bg-emerald-900 text-white overflow-hidden">
      <div className="absolute inset-0 islamic-pattern-light opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 bg-emerald-950/30" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="animate-fade-up">
          <p className="font-arabic text-xl sm:text-2xl text-gold-light" lang="ar" dir="rtl">{SITE.arabic}</p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-snug">{SITE.name}</h1>
          <p className="mt-3 flex items-center gap-1.5 text-emerald-100 text-sm sm:text-base">
            <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />{SITE.address}
          </p>
          <p className="mt-4 text-emerald-50/90 leading-relaxed max-w-xl">
            কুরআন ও সুন্নাহর আলোকে দ্বীনি শিক্ষা, নৈতিক চরিত্র গঠন এবং আদর্শ মানুষ হিসেবে গড়ে ওঠার একটি বিশ্বস্ত প্রতিষ্ঠান। নতুন শিক্ষাবর্ষে ভর্তি চলছে — আজই আবেদন করুন।
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/online-vorti" className="inline-flex items-center gap-2 min-h-[44px] px-5 rounded-xl bg-gold text-emerald-950 font-semibold text-sm sm:text-base hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-white transition-colors">
              <GraduationCap className="w-5 h-5" aria-hidden="true" /> ভর্তি আবেদন করুন
            </Link>
            <Link to="/porichiti" className="inline-flex items-center gap-2 min-h-[44px] px-5 rounded-xl border border-white/40 text-white font-semibold text-sm sm:text-base hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white transition-colors">
              <BookOpen className="w-5 h-5" aria-hidden="true" /> আরও জানুন
            </Link>
          </div>
          <p className="mt-4 text-xs text-emerald-100/70">ভর্তি সংক্রান্ত তথ্যের জন্য মাদরাসা অফিসে যোগাযোগ করুন।</p>
        </div>
        <div className="relative">
          <div className="rounded-3xl overflow-hidden border-4 border-gold/40 shadow-2xl">
            <SmartImage src={IMG.hero} alt="মাদরাসার মসজিদ ও ইসলামি স্থাপত্য" className="w-full h-64 sm:h-80 lg:h-96 object-cover" eager />
          </div>
          <div className="absolute -bottom-4 right-4 sm:right-6 bg-white text-gray-900 rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-emerald-800 text-gold-light flex items-center justify-center" aria-hidden="true"><BookOpen className="w-5 h-5" /></span>
            <span>
              <span className="block text-sm font-bold">কুরআন ও সুন্নাহভিত্তিক শিক্ষা</span>
              <span className="block text-xs text-gray-500">নূরানী থেকে কিতাব বিভাগ পর্যন্ত</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
