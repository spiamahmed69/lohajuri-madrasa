import PageHeader from '../components/PageHeader.jsx'
import { usePageTitle } from '../App.jsx'
import { Video, Clock } from 'lucide-react'

const PLACEHOLDERS = [
  { title: 'বার্ষিক মাহফিলের ভিডিও', desc: 'মাদরাসার বার্ষিক মাহফিলের ভিডিও এখানে যুক্ত হবে।' },
  { title: 'কেরাত ও তিলাওয়াত', desc: 'শিক্ষার্থীদের কেরাত ও তিলাওয়াতের ভিডিও এখানে যুক্ত হবে।' },
  { title: 'শিক্ষামূলক বক্তব্য', desc: 'উলামায়ে কেরামের শিক্ষামূলক বক্তব্যের ভিডিও এখানে যুক্ত হবে।' },
  { title: 'মাদরাসা পরিচিতি ভিডিও', desc: 'মাদরাসার পরিচিতি ও ক্যাম্পাসের ভিডিও এখানে যুক্ত হবে।' },
]

export default function VideoGallery() {
  usePageTitle('ভিডিও গ্যালারি')
  return (
    <div>
      <PageHeader title="ভিডিও গ্যালারি" subtitle="মাদরাসার ভিডিও সংগ্রহ" crumbs={[{ label: 'গ্যালারি', to: '/photo-gallery' }, { label: 'ভিডিও গ্যালারি' }]} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-sm text-gray-600 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 max-w-3xl mb-8 flex gap-2">
          <Clock className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
          ভিডিও শীঘ্রই আসছে — মাদরাসার যাচাইকৃত ভিডিও লিংক পাওয়া গেলে এখানে যুক্ত করা হবে। কোনো অনুমোদনহীন ভিডিও এমবেড করা হয়নি।
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {PLACEHOLDERS.map((v) => (
            <article key={v.title} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="h-44 bg-emerald-900 islamic-pattern-light flex flex-col items-center justify-center text-white gap-2">
                <Video className="w-10 h-10 text-gold-light" aria-hidden="true" />
                <span className="text-sm text-emerald-100">ভিডিও শীঘ্রই আসছে</span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{v.title}</h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{v.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
