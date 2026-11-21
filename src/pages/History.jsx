import PageHeader from '../components/PageHeader.jsx'
import { usePageTitle } from '../App.jsx'
import { Clock } from 'lucide-react'

export default function History() {
  usePageTitle('ইতিহাস ও ঐতিহ্য')
  return (
    <div>
      <PageHeader title="ইতিহাস ও ঐতিহ্য" subtitle="প্রতিষ্ঠানের পথচলা ও ঐতিহ্য" crumbs={[{ label: 'পরিচিতি', to: '/porichiti' }, { label: 'ইতিহাস ও ঐতিহ্য' }]} />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-10">
          <span className="inline-flex items-center gap-2 text-emerald-800 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1.5 text-sm font-semibold"><Clock className="w-4 h-4" aria-hidden="true" />তথ্য হালনাগাদযোগ্য</span>
          <h2 className="mt-5 text-2xl font-bold text-gray-900">প্রতিষ্ঠানের ইতিহাস</h2>
          <p className="mt-3 text-gray-600 leading-relaxed">লোহাজুড়ির এই দ্বীনি প্রতিষ্ঠানটি এলাকার ধর্মপ্রাণ মানুষের আন্তরিক সহযোগিতা ও দোয়ার বরকতে গড়ে উঠেছে। প্রতিষ্ঠার সঠিক সাল, প্রতিষ্ঠাতা এবং প্রতিষ্ঠাকালীন ইতিহাস এখনো যাচাই করা হয়নি।</p>
          <p className="mt-3 text-gray-600 leading-relaxed">কর্তৃপক্ষের কাছ থেকে নিশ্চিত তথ্য পাওয়া গেলে এই পাতায় প্রতিষ্ঠার সাল, প্রতিষ্ঠাতাদের নাম, গুরুত্বপূর্ণ মাইলফলক ও ঐতিহ্যের বিস্তারিত বিবরণ প্রকাশ করা হবে।</p>
          <h3 className="mt-8 text-xl font-bold text-gray-900">আমাদের ঐতিহ্য</h3>
          <ul className="mt-3 space-y-2 text-gray-600 leading-relaxed list-disc ps-5">
            <li>কুরআন-সুন্নাহভিত্তিক বিশুদ্ধ দ্বীনি শিক্ষা।</li>
            <li>শিক্ষার্থীদের নৈতিক ও চারিত্রিক গঠনে বিশেষ যত্ন।</li>
            <li>এলাকার মানুষের সঙ্গে ঘনিষ্ঠ সম্পর্ক ও সেবা।</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
