import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import DepartmentCard from '../components/DepartmentCard.jsx'
import { usePageTitle } from '../App.jsx'
import { DEPARTMENTS } from '../data/departments.js'
import { FileText, ClipboardList, Users, CheckCircle2, HelpCircle } from 'lucide-react'

const STEPS = [
  { icon: FileText, title: '১. আবেদন', text: 'অনলাইন আবেদন ফরম পূরণ করুন অথবা অফিস থেকে ভর্তি ফরম সংগ্রহ করুন।' },
  { icon: ClipboardList, title: '২. কাগজপত্র জমা', text: 'প্রয়োজনীয় কাগজপত্রসহ আবেদনপত্র মাদরাসা অফিসে জমা দিন।' },
  { icon: Users, title: '৩. পরীক্ষা ও সাক্ষাৎকার', text: 'নির্ধারিত তারিখে ভর্তি পরীক্ষা ও সাক্ষাৎকারে অংশগ্রহণ করুন।' },
  { icon: CheckCircle2, title: '৪. ভর্তি নিশ্চিতকরণ', text: 'ফলাফল প্রকাশের পর নির্ধারিত সময়ের মধ্যে ভর্তি সম্পন্ন করুন।' },
]

const DOCS = ['শিক্ষার্থীর জন্ম নিবন্ধন সনদের ফটোকপি', 'পিতা-মাতার জাতীয় পরিচয়পত্রের ফটোকপি', 'পূর্ববর্তী শিক্ষাপ্রতিষ্ঠানের ছাড়পত্র (যদি থাকে)', 'পাসপোর্ট সাইজের ছবি (২ কপি)', 'পূর্ববর্তী পরীক্ষার নম্বরপত্র/সনদ (যদি থাকে)']

const FAQS = [
  { q: 'ভর্তির আবেদন কীভাবে করব?', a: 'এই ওয়েবসাইটের অনলাইন ভর্তি আবেদন ফরম পূরণ করুন অথবা মাদরাসা অফিস থেকে ফরম সংগ্রহ করে জমা দিন।' },
  { q: 'ভর্তি পরীক্ষা কি দিতে হয়?', a: 'বিভাগ ও শ্রেণি অনুযায়ী ভর্তি পরীক্ষা ও সাক্ষাৎকার নেওয়া হতে পারে। বিস্তারিত অফিস থেকে জানানো হবে।' },
  { q: 'ভর্তির ফি কত?', a: 'ভর্তি ফি ও মাসিক ফি বিভাগ অনুযায়ী নির্ধারিত হয়। সঠিক তথ্যের জন্য মাদরাসা অফিসে যোগাযোগ করুন।' },
  { q: 'অনলাইন আবেদন কি চূড়ান্ত ভর্তি?', a: 'না। অনলাইন আবেদন শুধু প্রাথমিক আবেদন। কাগজপত্র জমা ও পরীক্ষা/সাক্ষাৎকারের পর ভর্তি নিশ্চিত হয়।' },
]

export default function Admission() {
  usePageTitle('ভর্তি তথ্য')
  return (
    <div>
      <PageHeader title="ভর্তি তথ্য" subtitle="২০২৭ শিক্ষাবর্ষে ভর্তি সংক্রান্ত সকল তথ্য" crumbs={[{ label: 'ভর্তি তথ্য' }]} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-emerald-800 islamic-pattern-light text-white rounded-3xl p-6 sm:p-8 text-center">
          <h2 className="text-2xl font-bold">২০২৭ শিক্ষাবর্ষে ভর্তি চলছে</h2>
          <p className="mt-2 text-emerald-50/90 max-w-2xl mx-auto leading-relaxed">নূরানী, নাজেরা, হিফজ ও কিতাব বিভাগে ভর্তির আবেদন চলছে। আবেদনের শেষ তারিখ ও ভর্তি পরীক্ষার তারিখ অফিস থেকে জানানো হবে।</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link to="/online-vorti" className="inline-flex items-center min-h-[44px] px-5 rounded-xl bg-gold text-emerald-950 font-semibold text-sm hover:bg-gold-light">অনলাইন আবেদন করুন</Link>
            <Link to="/vorti-nitimala" className="inline-flex items-center min-h-[44px] px-5 rounded-xl border border-white/40 font-semibold text-sm hover:bg-white/10">ভর্তি নীতিমালা পড়ুন</Link>
          </div>
        </div>

        <div className="mt-12">
          <SectionHeading eyebrow="ভর্তি প্রক্রিয়া" title="ভর্তির ধাপসমূহ" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s) => (
              <article key={s.title} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
                <span className="w-11 h-11 rounded-xl bg-emerald-800 text-gold-light flex items-center justify-center" aria-hidden="true"><s.icon className="w-5 h-5" /></span>
                <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{s.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900">প্রয়োজনীয় কাগজপত্র</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-600">
              {DOCS.map((d) => (
                <li key={d} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />{d}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-gray-500">কাগজপত্রের তালিকাটি নমুনা হিসেবে দেওয়া হয়েছে — চূড়ান্ত তালিকা অফিস থেকে নিশ্চিত করুন।</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-emerald-700" aria-hidden="true" />সাধারণ জিজ্ঞাসা</h3>
            <div className="mt-4 space-y-4">
              {FAQS.map((f) => (
                <div key={f.q}>
                  <p className="font-semibold text-gray-900 text-sm">{f.q}</p>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <SectionHeading eyebrow="বিভাগসমূহ" title="যেসব বিভাগে ভর্তি চলছে" desc="বিভাগের তালিকাটি সম্পাদনাযোগ্য — কর্তৃপক্ষের নিশ্চিত তথ্য দিয়ে প্রতিস্থাপন করা হবে।" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DEPARTMENTS.map((d) => <DepartmentCard key={d.id} dept={d} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
