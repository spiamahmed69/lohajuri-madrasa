import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { usePageTitle } from '../App.jsx'
import { DEPARTMENTS } from '../data/departments.js'
import { AlertTriangle, CheckCircle2, Printer, Upload } from 'lucide-react'

const initial = {
  studentName: '', fatherName: '', motherName: '', dob: '', address: '', phone: '',
  previousEducation: '', department: '', photoName: '',
}

export default function OnlineAdmission() {
  usePageTitle('অনলাইন ভর্তি আবেদন')
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(null)
  const [photoError, setPhotoError] = useState('')

  const set = (key, value) => { setForm((f) => ({ ...f, [key]: value })); setErrors((e) => ({ ...e, [key]: '' })) }

  const onPhoto = (e) => {
    const file = e.target.files?.[0]
    setPhotoError('')
    if (!file) { set('photoName', ''); return }
    if (file.size > 2 * 1024 * 1024) { setPhotoError('ছবির আকার ২ মেগাবাইটের বেশি হতে পারবে না।'); set('photoName', ''); e.target.value = ''; return }
    if (!file.type.startsWith('image/')) { setPhotoError('শুধু ছবির ফাইল (JPG/PNG) দিন।'); set('photoName', ''); e.target.value = ''; return }
    set('photoName', file.name)
  }

  const validate = () => {
    const errs = {}
    if (!form.studentName.trim()) errs.studentName = 'শিক্ষার্থীর নাম লিখুন।'
    if (!form.fatherName.trim()) errs.fatherName = 'পিতার নাম লিখুন।'
    if (!form.motherName.trim()) errs.motherName = 'মাতার নাম লিখুন।'
    if (!form.dob) errs.dob = 'জন্ম তারিখ দিন।'
    if (!form.address.trim()) errs.address = 'ঠিকানা লিখুন।'
    if (!/^01[3-9]\d{8}$/.test(form.phone.trim())) errs.phone = 'সঠিক ১১ সংখ্যার মোবাইল নম্বর দিন (01XXXXXXXXX)।'
    if (!form.department) errs.department = 'বিভাগ নির্বাচন করুন।'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    const ref = `LOH-2026-${Math.floor(1000 + Math.random() * 9000)}`
    setSubmitted({ ...form, ref })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const inputCls = (hasErr) => `w-full min-h-[44px] rounded-xl border px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 ${hasErr ? 'border-red-500' : 'border-gray-300 focus:border-emerald-600'}`
  const labelCls = 'block text-sm font-semibold text-gray-800 mb-1.5'
  const errCls = 'text-xs text-red-600 mt-1'

  if (submitted) {
    return (
      <div>
        <PageHeader title="অনলাইন ভর্তি আবেদন" subtitle="আবেদন সম্পন্ন হয়েছে" crumbs={[{ label: 'ভর্তি', to: '/vorti' }, { label: 'অনলাইন ভর্তি আবেদন' }]} />
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-10">
            <span className="inline-flex items-center gap-2 text-emerald-800 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1.5 text-sm font-semibold"><CheckCircle2 className="w-4 h-4" aria-hidden="true" />আবেদন ফরম পূরণ সম্পন্ন</span>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">আবেদনের সারাংশ</h2>
            <p className="mt-1 text-sm text-gray-500">আবেদন নম্বর: <strong className="text-gray-900">{submitted.ref}</strong></p>
            <dl className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {[
                ['শিক্ষার্থীর নাম', submitted.studentName], ['পিতার নাম', submitted.fatherName],
                ['মাতার নাম', submitted.motherName], ['জন্ম তারিখ', submitted.dob],
                ['ঠিকানা', submitted.address], ['যোগাযোগ নম্বর', submitted.phone],
                ['পূর্ববর্তী শিক্ষা', submitted.previousEducation || '—'], ['বিভাগ', DEPARTMENTS.find((d) => d.id === submitted.department)?.name || submitted.department],
                ['ছবি', submitted.photoName || 'সংযুক্ত করা হয়নি'],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-gray-100 pb-2"><dt className="text-gray-500">{k}</dt><dd className="font-semibold text-gray-900 mt-0.5">{v}</dd></div>
              ))}
            </dl>
            <div className="mt-6 bg-amber-50 border border-amber-300 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed flex gap-2">
              <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
              <p><strong>গুরুত্বপূর্ণ:</strong> এই আবেদনটি অনলাইনে স্থায়ীভাবে সংরক্ষিত হয়নি — এই ওয়েবসাইটে কোনো ব্যাকএন্ড বা ডাটাবেস নেই। অনুগ্রহ করে আবেদনের সারাংশ প্রিন্ট করে অথবা সংরক্ষণ করে মাদরাসা অফিসে জমা দিন, অথবা সরাসরি অফিসে যোগাযোগ করুন।</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 min-h-[44px] px-5 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-emerald-700">
                <Printer className="w-4 h-4" aria-hidden="true" /> প্রিন্ট করুন
              </button>
              <button type="button" onClick={() => { setSubmitted(null); setForm(initial) }} className="inline-flex items-center min-h-[44px] px-5 rounded-xl border border-emerald-700 text-emerald-700 text-sm font-semibold hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-emerald-700">
                নতুন আবেদন করুন
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      <PageHeader title="অনলাইন ভর্তি আবেদন" subtitle="২০২৭ শিক্ষাবর্ষের ভর্তির জন্য আবেদন ফরম" crumbs={[{ label: 'ভর্তি', to: '/vorti' }, { label: 'অনলাইন ভর্তি আবেদন' }]} />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed flex gap-2 mb-6">
          <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
          <p>এই ফরমটি পূরণ করলে আবেদনের সারাংশ আপনার সামনে দেখানো হবে, কিন্তু তা অনলাইনে সংরক্ষিত হবে না — এই ওয়েবসাইটে কোনো ব্যাকএন্ড নেই। চূড়ান্ত ভর্তির জন্য সারাংশ প্রিন্ট করে মাদরাসা অফিসে জমা দিতে হবে।</p>
        </div>
        <form onSubmit={onSubmit} noValidate className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="studentName" className={labelCls}>শিক্ষার্থীর নাম <span className="text-red-600">*</span></label>
              <input id="studentName" value={form.studentName} onChange={(e) => set('studentName', e.target.value)} className={inputCls(errors.studentName)} placeholder="শিক্ষার্থীর পূর্ণ নাম" />
              {errors.studentName && <p className={errCls}>{errors.studentName}</p>}
            </div>
            <div>
              <label htmlFor="dob" className={labelCls}>জন্ম তারিখ <span className="text-red-600">*</span></label>
              <input id="dob" type="date" value={form.dob} onChange={(e) => set('dob', e.target.value)} className={inputCls(errors.dob)} />
              {errors.dob && <p className={errCls}>{errors.dob}</p>}
            </div>
            <div>
              <label htmlFor="fatherName" className={labelCls}>পিতার নাম <span className="text-red-600">*</span></label>
              <input id="fatherName" value={form.fatherName} onChange={(e) => set('fatherName', e.target.value)} className={inputCls(errors.fatherName)} placeholder="পিতার পূর্ণ নাম" />
              {errors.fatherName && <p className={errCls}>{errors.fatherName}</p>}
            </div>
            <div>
              <label htmlFor="motherName" className={labelCls}>মাতার নাম <span className="text-red-600">*</span></label>
              <input id="motherName" value={form.motherName} onChange={(e) => set('motherName', e.target.value)} className={inputCls(errors.motherName)} placeholder="মাতার পূর্ণ নাম" />
              {errors.motherName && <p className={errCls}>{errors.motherName}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="address" className={labelCls}>ঠিকানা <span className="text-red-600">*</span></label>
            <textarea id="address" rows={3} value={form.address} onChange={(e) => set('address', e.target.value)} className={inputCls(errors.address)} placeholder="গ্রাম/মহল্লা, ইউনিয়ন, উপজেলা, জেলা" />
            {errors.address && <p className={errCls}>{errors.address}</p>}
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className={labelCls}>যোগাযোগ নম্বর <span className="text-red-600">*</span></label>
              <input id="phone" type="tel" dir="ltr" value={form.phone} onChange={(e) => set('phone', e.target.value)} className={inputCls(errors.phone)} placeholder="01XXXXXXXXX" />
              {errors.phone && <p className={errCls}>{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="department" className={labelCls}>বিভাগ নির্বাচন <span className="text-red-600">*</span></label>
              <select id="department" value={form.department} onChange={(e) => set('department', e.target.value)} className={inputCls(errors.department)}>
                <option value="">— বিভাগ নির্বাচন করুন —</option>
                {DEPARTMENTS.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
              </select>
              {errors.department && <p className={errCls}>{errors.department}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="previousEducation" className={labelCls}>পূর্ববর্তী শিক্ষা</label>
            <input id="previousEducation" value={form.previousEducation} onChange={(e) => set('previousEducation', e.target.value)} className={inputCls(false)} placeholder="যেমন: নূরানী সম্পন্ন / ৫ম শ্রেণি পাস (যদি থাকে)" />
          </div>
          <div>
            <label htmlFor="photo" className={labelCls}>শিক্ষার্থীর ছবি (ঐচ্ছিক, সর্বোচ্চ ২ মেগাবাইট)</label>
            <label htmlFor="photo" className="flex items-center gap-3 min-h-[44px] rounded-xl border border-dashed border-gray-300 px-4 py-3 cursor-pointer hover:border-emerald-600 text-sm text-gray-600">
              <Upload className="w-4 h-4 text-emerald-700 shrink-0" aria-hidden="true" />
              {form.photoName ? form.photoName : 'ছবি নির্বাচন করুন (JPG/PNG)'}
            </label>
            <input id="photo" type="file" accept="image/*" onChange={onPhoto} className="sr-only" />
            {photoError && <p className={errCls}>{photoError}</p>}
            <p className="text-xs text-gray-500 mt-1">ছবিটি কোথাও আপলোড করা হয় না — শুধু ফাইলের নাম দেখানো হয়।</p>
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center min-h-[48px] rounded-xl bg-emerald-700 text-white font-semibold hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-emerald-700">
            আবেদন জমা দিন
          </button>
        </form>
      </section>
    </div>
  )
}
