import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, GraduationCap, HeartHandshake, Library, Users, MapPin, Phone, Mail, Quote, CheckCircle2 } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import NoticeCard from '../components/NoticeCard.jsx'
import NewsCard from '../components/NewsCard.jsx'
import DepartmentCard from '../components/DepartmentCard.jsx'
import SmartImage from '../components/SmartImage.jsx'
import { SITE, STATS, ACTIVITIES, IMG } from '../data/madrasa.js'
import { DEPARTMENTS } from '../data/departments.js'
import { NOTICES } from '../data/notices.js'
import { NEWS } from '../data/news.js'
import { GALLERY } from '../data/gallery.js'

const ACT_ICONS = { BookOpen, Library, HeartHandshake, Users }

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Welcome */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading align="left" eyebrow="স্বাগতম" title="দারুল উলূম লোহাজুড়িতে স্বাগতম" />
            <p className="text-gray-600 leading-relaxed">
              আল জামিয়াতুল ইসলামিয়া দারুল উলূম লোহাজুড়ি কিশোরগঞ্জ জেলার কটিয়াদী উপজেলার লোহাজুড়িতে অবস্থিত একটি দ্বীনি শিক্ষাপ্রতিষ্ঠান। এখানে কুরআন-হাদিসের বিশুদ্ধ শিক্ষার পাশাপাশি শিক্ষার্থীদের নৈতিক ও চারিত্রিক গঠনে বিশেষ গুরুত্ব দেওয়া হয়।
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              অভিজ্ঞ শিক্ষকমণ্ডলীর তত্ত্বাবধানে শিক্ষার্থীরা ইলম অর্জনের পাশাপাশি আদব-আখলাক, নামাজ ও ইসলামি জীবনযাপনের ব্যবহারিক প্রশিক্ষণ লাভ করে।
            </p>
            <Link to="/porichiti" className="mt-5 inline-flex items-center gap-1 min-h-[44px] px-5 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-emerald-700">
              আরও পড়ুন <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <SmartImage src={IMG.mosque2} alt="মাদরাসা মসজিদের অভ্যন্তর" className="w-full h-72 sm:h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <SectionHeading eyebrow="পরিসংখ্যান" title="এক নজরে মাদরাসা" desc="যাচাইকৃত পরিসংখ্যান পাওয়া গেলে এখানে প্রকাশ করা হবে।" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-cream border border-gray-100 rounded-2xl p-5 text-center">
                <p className="text-3xl font-bold text-emerald-800">{s.value}</p>
                <p className="mt-1 font-semibold text-gray-800 text-sm">{s.label}</p>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-gray-500">তথ্য হালনাগাদযোগ্য — কর্তৃপক্ষ যাচাইকৃত তথ্য দিলে এই অংশে সংখ্যাগুলো প্রকাশ করা হবে।</p>
        </div>
      </section>

      {/* About / vision / mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <SectionHeading eyebrow="আমাদের সম্পর্কে" title="ইতিহাস, লক্ষ্য ও শিক্ষাদর্শন" desc="দ্বীনি শিক্ষার আলো ছড়িয়ে দেওয়াই আমাদের মূল উদ্দেশ্য।" />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { title: 'আমাদের ইতিহাস', text: 'লোহাজুড়ির এই দ্বীনি প্রতিষ্ঠানটি এলাকার ধর্মপ্রাণ মানুষের সহযোগিতায় গড়ে উঠেছে। প্রতিষ্ঠার সঠিক সাল ও বিস্তারিত ইতিহাস যাচাই সাপেক্ষে প্রকাশ করা হবে।', to: '/itihas' },
            { title: 'লক্ষ্য ও উদ্দেশ্য', text: 'কুরআন-সুন্নাহভিত্তিক শিক্ষা, চরিত্র গঠন ও সমাজে আদর্শ মুসলিম প্রজন্ম গড়ে তোলা।', to: '/lokkho' },
            { title: 'শিক্ষাদর্শন', text: 'ইলম, আমল ও আখলাক — এই তিনের সমন্বয়ে শিক্ষার্থীকে পরিপূর্ণ মানুষ হিসেবে গড়ে তোলা।', to: '/shikkha-karjokrom' },
          ].map((c) => (
            <article key={c.title} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{c.text}</p>
              <Link to={c.to} className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-800">বিস্তারিত <ArrowLeft className="w-4 h-4" aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </section>

      {/* Departments */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <SectionHeading eyebrow="বিভাগসমূহ" title="শিক্ষা বিভাগসমূহ" desc="বিভাগের তালিকাটি সম্পাদনাযোগ্য — কর্তৃপক্ষের নিশ্চিত তথ্য দিয়ে প্রতিস্থাপন করা হবে।" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DEPARTMENTS.map((d) => <DepartmentCard key={d.id} dept={d} />)}
          </div>
          <div className="text-center mt-8">
            <Link to="/bibhag" className="inline-flex items-center gap-1 min-h-[44px] px-5 rounded-xl border border-emerald-700 text-emerald-700 font-semibold text-sm hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-emerald-700">সব বিভাগ দেখুন <ArrowLeft className="w-4 h-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* Muhtamim message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="bg-emerald-900 islamic-pattern-light text-white rounded-3xl p-6 sm:p-10 grid md:grid-cols-[auto_1fr] gap-8 items-center">
          <div className="mx-auto md:mx-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-emerald-800 border-4 border-gold/60 flex flex-col items-center justify-center text-center">
            <Quote className="w-8 h-8 text-gold-light" aria-hidden="true" />
            <span className="mt-1 text-xs text-emerald-100 px-3">মুহতামিমের ছবি (হালনাগাদযোগ্য)</span>
          </div>
          <div>
            <span className="text-xs font-semibold bg-white/10 border border-white/20 rounded-full px-3 py-1">মুহতামিমের বাণী</span>
            <h2 className="mt-3 text-2xl font-bold">মুহতামিমের নাম (হালনাগাদযোগ্য)</h2>
            <p className="text-gold-light text-sm">মুহতামিম, {SITE.name}</p>
            <p className="mt-3 text-emerald-50/90 leading-relaxed">
              "ইলম অর্জন প্রত্যেক মুসলিমের জন্য ফরজ। আমাদের এই প্রতিষ্ঠানে শিক্ষার্থীদেরকে কুরআন-সুন্নাহর সঠিক শিক্ষা দিয়ে আদর্শ মানুষ হিসেবে গড়ে তোলার চেষ্টা করা হয়। অভিভাবকদের সহযোগিতা ও দোয়া কামনা করছি।"
            </p>
            <p className="mt-2 text-xs text-emerald-100/70">উপরের বাণীটি নমুনা হিসেবে লেখা — কর্তৃপক্ষের প্রকৃত বাণী দিয়ে প্রতিস্থাপন করা হবে।</p>
            <Link to="/muhtamim" className="mt-4 inline-flex items-center gap-1 min-h-[44px] px-5 rounded-xl bg-white text-emerald-900 text-sm font-semibold hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-white">সম্পূর্ণ বাণী পড়ুন <ArrowLeft className="w-4 h-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
        <SectionHeading eyebrow="শিক্ষা কার্যক্রম" title="আমাদের শিক্ষা কার্যক্রম" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ACTIVITIES.map((a) => {
            const Icon = ACT_ICONS[a.icon] || BookOpen
            return (
              <article key={a.title} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
                <span className="w-11 h-11 rounded-xl bg-emerald-800 text-gold-light flex items-center justify-center" aria-hidden="true"><Icon className="w-5 h-5" /></span>
                <h3 className="mt-4 font-semibold text-gray-900">{a.title}</h3>
                <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{a.desc}</p>
              </article>
            )
          })}
        </div>
        <div className="text-center mt-8">
          <Link to="/shikkha-karjokrom" className="inline-flex items-center gap-1 min-h-[44px] px-5 rounded-xl border border-emerald-700 text-emerald-700 font-semibold text-sm hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-emerald-700">শিক্ষা কার্যক্রম দেখুন <ArrowLeft className="w-4 h-4" aria-hidden="true" /></Link>
        </div>
      </section>

      {/* Notices */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <SectionHeading align="left" eyebrow="নোটিশ বোর্ড" title="সাম্প্রতিক নোটিশ" />
            <Link to="/notice" className="inline-flex items-center gap-1 min-h-[44px] px-4 rounded-xl border border-emerald-700 text-emerald-700 font-semibold text-sm hover:bg-emerald-50">সব নোটিশ <ArrowLeft className="w-4 h-4" aria-hidden="true" /></Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {NOTICES.slice(0, 3).map((n) => <NoticeCard key={n.id} notice={n} />)}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <SectionHeading align="left" eyebrow="সংবাদ ও আপডেট" title="সাম্প্রতিক সংবাদ" />
          <Link to="/songbad" className="inline-flex items-center gap-1 min-h-[44px] px-4 rounded-xl border border-emerald-700 text-emerald-700 font-semibold text-sm hover:bg-emerald-50">সব সংবাদ <ArrowLeft className="w-4 h-4" aria-hidden="true" /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {NEWS.slice(0, 3).map((n) => <NewsCard key={n.id} item={n} />)}
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <SectionHeading align="left" eyebrow="ফটো গ্যালারি" title="মাদরাসার মুহূর্তগুলো" />
            <Link to="/photo-gallery" className="inline-flex items-center gap-1 min-h-[44px] px-4 rounded-xl border border-emerald-700 text-emerald-700 font-semibold text-sm hover:bg-emerald-50">গ্যালারি দেখুন <ArrowLeft className="w-4 h-4" aria-hidden="true" /></Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY.slice(0, 4).map((g) => (
              <Link key={g.id} to="/photo-gallery" className="group rounded-2xl overflow-hidden focus-visible:outline-2 focus-visible:outline-emerald-700 block">
                <SmartImage src={g.src} alt={g.title} className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
                <span className="block bg-emerald-900 text-white text-sm px-3 py-2">{g.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="relative overflow-hidden rounded-3xl bg-emerald-800 text-white p-8 sm:p-12 text-center">
          <div className="absolute inset-0 islamic-pattern-light" aria-hidden="true" />
          <div className="relative">
            <GraduationCap className="w-10 h-10 mx-auto text-gold-light" aria-hidden="true" />
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold">২০২৭ শিক্ষাবর্ষে ভর্তি চলছে</h2>
            <p className="mt-2 text-emerald-50/90 max-w-xl mx-auto leading-relaxed">আপনার সন্তানের দ্বীনি শিক্ষার জন্য আজই আবেদন করুন। ভর্তি সংক্রান্ত যেকোনো তথ্যের জন্য মাদরাসা অফিসে যোগাযোগ করুন।</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/online-vorti" className="inline-flex items-center gap-2 min-h-[44px] px-5 rounded-xl bg-gold text-emerald-950 font-semibold text-sm hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-white">অনলাইন আবেদন করুন</Link>
              <Link to="/vorti" className="inline-flex items-center gap-2 min-h-[44px] px-5 rounded-xl border border-white/40 font-semibold text-sm hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white">ভর্তি তথ্য দেখুন</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
        <SectionHeading eyebrow="যোগাযোগ" title="আমাদের সঙ্গে যোগাযোগ করুন" />
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex gap-3">
            <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
            <div><h3 className="font-semibold text-gray-900">ঠিকানা</h3><p className="text-sm text-gray-600 mt-1 leading-relaxed">{SITE.address}</p></div>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex gap-3">
            <Phone className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
            <div><h3 className="font-semibold text-gray-900">ফোন</h3><p className="text-sm text-gray-600 mt-1">{SITE.phone}</p></div>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex gap-3">
            <Mail className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
            <div><h3 className="font-semibold text-gray-900">ইমেইল</h3><p className="text-sm text-gray-600 mt-1">{SITE.email}</p></div>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link to="/jogajog" className="inline-flex items-center gap-1 min-h-[44px] px-5 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-emerald-700">যোগাযোগের পাতা <ArrowLeft className="w-4 h-4" aria-hidden="true" /></Link>
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
          {['বিশুদ্ধ কুরআন শিক্ষা', 'অভিজ্ঞ শিক্ষকমণ্ডলী', 'নৈতিক চরিত্র গঠন'].map((t) => (
            <li key={t} className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-700" aria-hidden="true" />{t}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
