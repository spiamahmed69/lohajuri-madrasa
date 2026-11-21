import PageHeader from '../components/PageHeader.jsx'
import { usePageTitle } from '../App.jsx'

const RULES = [
  { title: '১. যোগ্যতা', text: 'ভর্তিচ্ছু শিক্ষার্থীকে সংশ্লিষ্ট বিভাগ ও শ্রেণির জন্য নির্ধারিত ন্যূনতম যোগ্যতা পূরণ করতে হবে। বয়স ও পূর্বশিক্ষা সংক্রান্ত শর্ত অফিস থেকে জানানো হবে।' },
  { title: '২. আবেদন', text: 'নির্ধারিত ফরমে সঠিক তথ্য দিয়ে আবেদন করতে হবে। ভুল বা অসম্পূর্ণ তথ্য দিলে আবেদন বাতিল হতে পারে।' },
  { title: '৩. পরীক্ষা ও সাক্ষাৎকার', text: 'প্রয়োজন অনুযায়ী ভর্তি পরীক্ষা ও সাক্ষাৎকার নেওয়া হবে। পরীক্ষার তারিখ ও স্থান অফিস থেকে জানিয়ে দেওয়া হবে।' },
  { title: '৪. কাগজপত্র', text: 'জন্ম নিবন্ধন, পূর্ববর্তী শিক্ষার সনদ/ছাড়পত্র ও ছবিসহ প্রয়োজনীয় কাগজপত্র জমা দিতে হবে।' },
  { title: '৫. ফি', text: 'ভর্তি ফি ও অন্যান্য ফি বিভাগ অনুযায়ী নির্ধারিত হয়। ফি সংক্রান্ত সঠিক তথ্য মাদরাসা অফিস থেকে জানা যাবে।' },
  { title: '৬. আচরণবিধি', text: 'ভর্তির পর শিক্ষার্থীকে মাদরাসার নিয়ম-শৃঙ্খলা, পোশাকবিধি ও দৈনিক রুটিন মেনে চলতে হবে।' },
  { title: '৭. সিদ্ধান্ত', text: 'ভর্তি সংক্রান্ত সকল বিষয়ে মাদরাসা কর্তৃপক্ষের সিদ্ধান্তই চূড়ান্ত বলে গণ্য হবে।' },
]

export default function AdmissionPolicy() {
  usePageTitle('ভর্তি নীতিমালা')
  return (
    <div>
      <PageHeader title="ভর্তি নীতিমালা" subtitle="ভর্তি সংক্রান্ত নিয়মাবলি ও শর্তাবলি" crumbs={[{ label: 'ভর্তি', to: '/vorti' }, { label: 'ভর্তি নীতিমালা' }]} />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-10 space-y-6">
          {RULES.map((r) => (
            <div key={r.title}>
              <h2 className="text-lg font-bold text-gray-900">{r.title}</h2>
              <p className="mt-1.5 text-gray-600 leading-relaxed text-sm sm:text-base">{r.text}</p>
            </div>
          ))}
          <p className="text-xs text-gray-500 bg-amber-50 border border-amber-200 rounded-xl p-3">এই নীতিমালাটি সাধারণ কাঠামো হিসেবে দেওয়া হয়েছে — কর্তৃপক্ষের অনুমোদিত চূড়ান্ত নীতিমালা দিয়ে প্রতিস্থাপন করা হবে।</p>
        </div>
      </section>
    </div>
  )
}
