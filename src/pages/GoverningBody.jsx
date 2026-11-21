import PageHeader from '../components/PageHeader.jsx'
import { usePageTitle } from '../App.jsx'
import { Users } from 'lucide-react'

const ROLES = ['সভাপতি', 'সহ-সভাপতি', 'সাধারণ সম্পাদক', 'কোষাধ্যক্ষ', 'সদস্য', 'সদস্য']

export default function GoverningBody() {
  usePageTitle('পরিচালনা পরিষদ')
  return (
    <div>
      <PageHeader title="পরিচালনা পরিষদ" subtitle="মাদরাসা পরিচালনায় নিয়োজিত পরিষদ" crumbs={[{ label: 'প্রশাসন', to: '/porichalona' }, { label: 'পরিচালনা পরিষদ' }]} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-center text-sm text-gray-600 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 max-w-3xl mx-auto">
          পরিচালনা পরিষদের সদস্যদের নাম ও পদবি এখনো যাচাই করা হয়নি। নিচের তালিকাটি কাঠামো হিসেবে দেওয়া হয়েছে — কর্তৃপক্ষের নিশ্চিত তথ্য পেলে নামগুলো প্রকাশ করা হবে।
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ROLES.map((role, i) => (
            <article key={i} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 text-center">
              <span className="mx-auto w-16 h-16 rounded-full bg-emerald-800 text-gold-light flex items-center justify-center" aria-hidden="true"><Users className="w-7 h-7" /></span>
              <h3 className="mt-4 font-semibold text-gray-900">নাম (হালনাগাদযোগ্য)</h3>
              <p className="text-sm text-emerald-700 font-medium mt-1">{role}</p>
              <span className="mt-3 inline-block text-xs bg-amber-50 text-amber-800 border border-amber-100 rounded-full px-2.5 py-1">তথ্য হালনাগাদযোগ্য</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
