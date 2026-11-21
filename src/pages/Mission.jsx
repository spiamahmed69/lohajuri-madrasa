import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { usePageTitle } from '../App.jsx'
import { Target, Eye, Compass, HeartHandshake } from 'lucide-react'

export default function Mission() {
  usePageTitle('লক্ষ্য ও উদ্দেশ্য')
  const cards = [
    { icon: Target, title: 'লক্ষ্য', text: 'কুরআন ও সুন্নাহর আলোকে দ্বীনি শিক্ষা প্রদানের মাধ্যমে আদর্শ, চরিত্রবান ও জ্ঞানী প্রজন্ম গড়ে তোলা।' },
    { icon: Eye, title: 'দৃষ্টিভঙ্গি (ভিশন)', text: 'এমন একটি শিক্ষাপ্রতিষ্ঠান গড়ে তোলা যেখানে শিক্ষার্থীরা ইলম, আমল ও আখলাকে পরিপূর্ণ মানুষ হিসেবে গড়ে উঠবে।' },
    { icon: Compass, title: 'উদ্দেশ্য', text: 'বিশুদ্ধ কুরআন তিলাওয়াত, আরবি ভাষা ও ইসলামি শাস্ত্রের গভীর জ্ঞান এবং ইসলামি জীবনযাপনের ব্যবহারিক প্রশিক্ষণ দেওয়া।' },
    { icon: HeartHandshake, title: 'মূল্যবোধ', text: 'সততা, বিনয়, পরোপকার, শিক্ষকের প্রতি সম্মান এবং সমাজসেবার চেতনা — এই মূল্যবোধগুলো শিক্ষার্থীদের জীবনে গড়ে তোলা।' },
  ]
  return (
    <div>
      <PageHeader title="লক্ষ্য ও উদ্দেশ্য" subtitle="আমাদের দৃষ্টিভঙ্গি, লক্ষ্য ও মূল্যবোধ" crumbs={[{ label: 'পরিচিতি', to: '/porichiti' }, { label: 'লক্ষ্য ও উদ্দেশ্য' }]} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <SectionHeading eyebrow="লক্ষ্য ও উদ্দেশ্য" title="আমরা যা বিশ্বাস করি" />
        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((c) => (
            <article key={c.title} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
              <span className="w-11 h-11 rounded-xl bg-emerald-800 text-gold-light flex items-center justify-center" aria-hidden="true"><c.icon className="w-5 h-5" /></span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{c.title}</h3>
              <p className="mt-1.5 text-gray-600 text-sm leading-relaxed">{c.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-500">এই পাতার বিষয়বস্তু কর্তৃপক্ষের অনুমোদন সাপেক্ষে হালনাগাদ করা যেতে পারে।</p>
      </section>
    </div>
  )
}
