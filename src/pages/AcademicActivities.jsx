import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { usePageTitle } from '../App.jsx'
import { BookOpen, Library, HeartHandshake, Users, CalendarDays, Trophy } from 'lucide-react'
import { ACTIVITIES } from '../data/madrasa.js'

const ICONS = { BookOpen, Library, HeartHandshake, Users }
const EXTRA = [
  { icon: CalendarDays, title: 'দৈনিক রুটিন', text: 'ফজর নামাজের পর থেকে রাতের বিশ্রাম পর্যন্ত সুশৃঙ্খল দৈনিক রুটিন অনুসরণ করা হয়। বিস্তারিত রুটিন অফিস থেকে জানা যাবে।' },
  { icon: Trophy, title: 'প্রতিযোগিতা ও অনুষ্ঠান', text: 'কেরাত, বক্তৃতা ও হিফজ প্রতিযোগিতা, বার্ষিক মাহফিল এবং ইসলামি সাংস্কৃতিক অনুষ্ঠানের আয়োজন করা হয়।' },
]

export default function AcademicActivities() {
  usePageTitle('শিক্ষা কার্যক্রম')
  return (
    <div>
      <PageHeader title="শিক্ষা কার্যক্রম" subtitle="শ্রেণি, কুরআন শিক্ষা ও ছাত্রদের কর্মসূচি" crumbs={[{ label: 'শিক্ষা কার্যক্রম' }]} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <SectionHeading eyebrow="শিক্ষা কার্যক্রম" title="আমাদের শিক্ষা কার্যক্রম" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ACTIVITIES.map((a) => {
            const Icon = ICONS[a.icon] || BookOpen
            return (
              <article key={a.title} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
                <span className="w-11 h-11 rounded-xl bg-emerald-800 text-gold-light flex items-center justify-center" aria-hidden="true"><Icon className="w-5 h-5" /></span>
                <h3 className="mt-4 font-semibold text-gray-900">{a.title}</h3>
                <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{a.desc}</p>
              </article>
            )
          })}
        </div>
        <div className="mt-5 grid sm:grid-cols-2 gap-5">
          {EXTRA.map((e) => (
            <article key={e.title} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
              <span className="w-11 h-11 rounded-xl bg-emerald-800 text-gold-light flex items-center justify-center" aria-hidden="true"><e.icon className="w-5 h-5" /></span>
              <h3 className="mt-4 font-semibold text-gray-900">{e.title}</h3>
              <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{e.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-500">শ্রেণিভিত্তিক বিস্তারিত পাঠক্রম ও রুটিনের জন্য মাদরাসা অফিসে যোগাযোগ করুন।</p>
      </section>
    </div>
  )
}
