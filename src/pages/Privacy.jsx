import PageHeader from '../components/PageHeader.jsx'
import { usePageTitle } from '../App.jsx'
import { SITE } from '../data/madrasa.js'

export default function Privacy() {
  usePageTitle('গোপনীয়তা নীতি')
  return (
    <div>
      <PageHeader title="গোপনীয়তা নীতি" subtitle="আপনার তথ্যের ব্যবহার সম্পর্কে" crumbs={[{ label: 'গোপনীয়তা নীতি' }]} />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-10 space-y-5 text-gray-600 leading-relaxed">
          <p>{SITE.name}-এর এই ওয়েবসাইটটি একটি তথ্যমূলক ওয়েবসাইট। এই ওয়েবসাইটে কোনো অ্যাডমিন প্যানেল, লগইন ব্যবস্থা, ডাটাবেস বা পেমেন্ট ব্যবস্থা নেই।</p>
          <h2 className="text-lg font-bold text-gray-900">যে তথ্য সংগ্রহ করা হয় না</h2>
          <p>ভর্তি আবেদন ফরম ও যোগাযোগ ফরমে আপনি যে তথ্য লেখেন, তা এই ওয়েবসাইটের কোনো সার্ভারে সংরক্ষিত হয় না — কারণ এই ওয়েবসাইটে কোনো ব্যাকএন্ড নেই।</p>
          <h2 className="text-lg font-bold text-gray-900">তৃতীয় পক্ষের সেবা</h2>
          <p>এই ওয়েবসাইটে Google Fonts (ফন্ট) ও Google Maps (মানচিত্র) ব্যবহার করা হয়েছে। এসব সেবা ব্যবহারের সময় সংশ্লিষ্ট প্রতিষ্ঠানের গোপনীয়তা নীতি প্রযোজ্য হতে পারে।</p>
          <h2 className="text-lg font-bold text-gray-900">যোগাযোগ</h2>
          <p>গোপনীয়তা সংক্রান্ত যেকোনো প্রশ্নের জন্য মাদরাসা অফিসে যোগাযোগ করুন — {SITE.address}।</p>
        </div>
      </section>
    </div>
  )
}
