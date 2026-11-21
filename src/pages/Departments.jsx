import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import DepartmentCard from '../components/DepartmentCard.jsx'
import { usePageTitle } from '../App.jsx'
import { DEPARTMENTS } from '../data/departments.js'

export default function Departments() {
  usePageTitle('বিভাগসমূহ')
  return (
    <div>
      <PageHeader title="বিভাগসমূহ" subtitle="মাদরাসার শিক্ষা বিভাগসমূহ" crumbs={[{ label: 'শিক্ষা কার্যক্রম', to: '/shikkha-karjokrom' }, { label: 'বিভাগসমূহ' }]} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-center text-sm text-gray-600 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 max-w-3xl mx-auto mb-8">
          বিভাগের তালিকাটি সম্পাদনাযোগ্য নমুনা হিসেবে দেওয়া হয়েছে — কর্তৃপক্ষের নিশ্চিত তথ্য দিয়ে প্রতিস্থাপন করা হবে। কোনো বিভাগকে যাচাইকৃত তথ্য হিসেবে উপস্থাপন করা হয়নি।
        </p>
        <SectionHeading eyebrow="বিভাগসমূহ" title="আমাদের বিভাগগুলো" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEPARTMENTS.map((d) => <DepartmentCard key={d.id} dept={d} />)}
        </div>
      </section>
    </div>
  )
}
