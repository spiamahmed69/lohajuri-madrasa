import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { usePageTitle } from '../App.jsx'
import { SITE } from '../data/madrasa.js'
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertTriangle } from 'lucide-react'

export default function Contact() {
  usePageTitle('যোগাযোগ')
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.name.trim()) errs.name = 'আপনার নাম লিখুন।'
    if (!/^01[3-9]\d{8}$/.test(form.phone.trim())) errs.phone = 'সঠিক ১১ সংখ্যার মোবাইল নম্বর দিন (01XXXXXXXXX)।'
    if (!form.message.trim()) errs.message = 'আপনার বার্তা লিখুন।'
    setErrors(errs)
    if (Object.keys(errs).length === 0) setSent(true)
  }

  const inputCls = (hasErr) => `w-full min-h-[44px] rounded-xl border px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 ${hasErr ? 'border-red-500' : 'border-gray-300 focus:border-emerald-600'}`

  return (
    <div>
      <PageHeader title="যোগাযোগ" subtitle="যেকোনো তথ্যের জন্য আমাদের সঙ্গে যোগাযোগ করুন" crumbs={[{ label: 'যোগাযোগ' }]} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex gap-3">
              <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
              <div><h3 className="font-semibold text-gray-900">ঠিকানা</h3><p className="text-sm text-gray-600 mt-1 leading-relaxed">{SITE.address}</p></div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex gap-3">
              <Phone className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
              <div><h3 className="font-semibold text-gray-900">ফোন</h3><p className="text-sm text-gray-600 mt-1">{SITE.phone}</p></div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex gap-3">
              <Mail className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
              <div><h3 className="font-semibold text-gray-900">ইমেইল</h3><p className="text-sm text-gray-600 mt-1">{SITE.email}</p></div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex gap-3">
              <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
              <div><h3 className="font-semibold text-gray-900">অফিস সময়</h3><p className="text-sm text-gray-600 mt-1">শনি–বৃহস্পতিবার, সকাল ৯টা – বিকেল ৪টা (হালনাগাদযোগ্য)</p></div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <iframe
                title="কটিয়াদী, কিশোরগঞ্জের মানচিত্র"
                src="https://www.google.com/maps?q=Katiadi,+Kishoreganj,+Bangladesh&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <p className="bg-white text-xs text-gray-500 px-4 py-2">সাধারণ অবস্থান: কটিয়াদী, কিশোরগঞ্জ — সঠিক অবস্থান যাচাই সাপেক্ষে হালনাগাদ করা হবে।</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-8">
                <span className="inline-flex items-center gap-2 text-emerald-800 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1.5 text-sm font-semibold"><CheckCircle2 className="w-4 h-4" aria-hidden="true" />বার্তা লেখা সম্পন্ন</span>
                <h2 className="mt-4 text-xl font-bold text-gray-900">ধন্যবাদ, {form.name}!</h2>
                <p className="mt-2 text-gray-600 leading-relaxed text-sm sm:text-base">আপনার বার্তাটি ফরমে লেখা হয়েছে।</p>
                <div className="mt-4 bg-amber-50 border border-amber-300 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed flex gap-2">
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                  <p>এই বার্তাটি সার্ভারে পাঠানো হয়নি — এই ওয়েবসাইটে কোনো ব্যাকএন্ড নেই। অনুগ্রহ করে সরাসরি মাদরাসা অফিসে যোগাযোগ করুন।</p>
                </div>
                <button type="button" onClick={() => { setSent(false); setForm({ name: '', phone: '', message: '' }) }} className="mt-5 inline-flex items-center min-h-[44px] px-5 rounded-xl border border-emerald-700 text-emerald-700 text-sm font-semibold hover:bg-emerald-50">আরেকটি বার্তা লিখুন</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-8 space-y-5">
                <h2 className="text-xl font-bold text-gray-900">বার্তা পাঠান</h2>
                <div>
                  <label htmlFor="cname" className="block text-sm font-semibold text-gray-800 mb-1.5">আপনার নাম <span className="text-red-600">*</span></label>
                  <input id="cname" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls(errors.name)} placeholder="আপনার পূর্ণ নাম" />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="cphone" className="block text-sm font-semibold text-gray-800 mb-1.5">মোবাইল নম্বর <span className="text-red-600">*</span></label>
                  <input id="cphone" type="tel" dir="ltr" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls(errors.phone)} placeholder="01XXXXXXXXX" />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="cmsg" className="block text-sm font-semibold text-gray-800 mb-1.5">বার্তা <span className="text-red-600">*</span></label>
                  <textarea id="cmsg" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputCls(errors.message)} placeholder="আপনার বার্তা লিখুন…" />
                  {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center min-h-[48px] rounded-xl bg-emerald-700 text-white font-semibold hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-emerald-700">বার্তা জমা দিন</button>
                <p className="text-xs text-gray-500">এই ফরমটি সার্ভারে পাঠানো হয় না — কোনো ব্যাকএন্ড নেই। জরুরি প্রয়োজনে সরাসরি মাদরাসা অফিসে যোগাযোগ করুন।</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
