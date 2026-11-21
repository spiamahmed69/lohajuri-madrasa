import PageHeader from '../components/PageHeader.jsx'
import { usePageTitle } from '../App.jsx'
import { GraduationCap } from 'lucide-react'

const TEACHERS = [
  { role: 'প্রধান শিক্ষক', subject: 'কিতাব বিভাগ' },
  { role: 'শিক্ষক', subject: 'হিফজ বিভাগ' },
  { role: 'শিক্ষক', subject: 'নূরানী ও নাজেরা বিভাগ' },
  { role: 'শিক্ষক', subject: 'আরবি ভাষা ও সাহিত্য' },
  { role: 'শিক্ষক', subject: 'ফিকহ ও হাদিস' },
  { role: 'শিক্ষক', subject: 'বাংলা ও সাধারণ শিক্ষা' },
]

export default function Teachers() {
  usePageTitle('শিক্ষক পরিচিতি')
  return (
    <div>
      <PageHeader title="শিক্ষক পরিচিতি" subtitle="আমাদের সম্মানিত শিক্ষকমণ্ডলী" crumbs={[{ label: 'প্রশাসন', to: '/porichalona' }, { label: 'শিক্ষক পরিচিতি' }]} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-center text-sm text-gray-600 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 max-w-3xl mx-auto">
          শিক্ষকদের নাম, পদবি ও ছবি এখনো যাচাই করা হয়নি। নিচের কার্ডগুলো কাঠামো হিসেবে দেওয়া হয়েছে — কর্তৃপক্ষের নিশ্চিত তথ্য পেলে প্রকৃত পরিচিতি প্রকাশ করা হবে।
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEACHERS.map((t, i) => (
            <article key={i} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 text-center">
              <span className="mx-auto w-16 h-16 rounded-full bg-emerald-800 text-gold-light flex items-center justify-center text-xl font-bold" aria-hidden="true">
                <GraduationCap className="w-7 h-7" />
              </span>
              <h3 className="mt-4 font-semibold text-gray-900">শিক্ষকের নাম (হালনাগাদযোগ্য)</h3>
              <p className="text-sm text-emerald-700 font-medium mt-1">{t.role}</p>
              <p className="text-sm text-gray-500 mt-0.5">{t.subject}</p>
              <span className="mt-3 inline-block text-xs bg-amber-50 text-amber-800 border border-amber-100 rounded-full px-2.5 py-1">তথ্য হালনাগাদযোগ্য</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
