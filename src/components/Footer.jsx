import { Link } from 'react-router-dom'
import { BookOpenCheck, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { SITE } from '../data/madrasa.js'

export default function Footer() {
  const quickLinks = [
    { label: 'মাদরাসা পরিচিতি', to: '/porichiti' },
    { label: 'ইতিহাস ও ঐতিহ্য', to: '/itihas' },
    { label: 'লক্ষ্য ও উদ্দেশ্য', to: '/lokkho' },
    { label: 'মুহতামিমের বাণী', to: '/muhtamim' },
    { label: 'শিক্ষক পরিচিতি', to: '/shikkhok' },
  ]
  const important = [
    { label: 'ভর্তি তথ্য', to: '/vorti' },
    { label: 'ভর্তি নীতিমালা', to: '/vorti-nitimala' },
    { label: 'অনলাইন ভর্তি আবেদন', to: '/online-vorti' },
    { label: 'পরীক্ষার ফলাফল', to: '/folafol' },
    { label: 'নোটিশ বোর্ড', to: '/notice' },
    { label: 'ফটো গ্যালারি', to: '/photo-gallery' },
    { label: 'গোপনীয়তা নীতি', to: '/goponiyota' },
  ]
  return (
    <footer className="bg-emerald-950 text-emerald-50 islamic-pattern-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-2xl bg-emerald-800 border border-gold/50 text-gold-light flex items-center justify-center" aria-hidden="true">
              <BookOpenCheck className="w-6 h-6" />
            </span>
            <span className="font-bold leading-tight">{SITE.name}</span>
          </div>
          <p className="mt-4 text-sm text-emerald-100/80 leading-relaxed">
            কুরআন ও সুন্নাহর আলোকে দ্বীনি শিক্ষা প্রদানের মাধ্যমে আদর্শ, চরিত্রবান ও জ্ঞানী প্রজন্ম গড়ে তোলাই আমাদের অঙ্গীকার।
          </p>
          <p className="mt-3 text-sm text-emerald-100/70">সামাজিক মাধ্যম: শীঘ্রই আসছে (যাচাইকৃত লিংক পাওয়া গেলে এখানে যুক্ত হবে)।</p>
        </div>
        <nav aria-label="দ্রুত লিংক">
          <h3 className="font-semibold text-white mb-4">দ্রুত লিংক</h3>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="text-emerald-100/80 hover:text-white focus-visible:outline-2 focus-visible:outline-gold rounded">{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="গুরুত্বপূর্ণ পাতা">
          <h3 className="font-semibold text-white mb-4">গুরুত্বপূর্ণ পাতা</h3>
          <ul className="space-y-2.5 text-sm">
            {important.map((l) => (
              <li key={l.to}><Link to={l.to} className="text-emerald-100/80 hover:text-white focus-visible:outline-2 focus-visible:outline-gold rounded">{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="font-semibold text-white mb-4">যোগাযোগ</h3>
          <ul className="space-y-3 text-sm text-emerald-100/80">
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold-light" aria-hidden="true" />{SITE.address}</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0 text-gold-light" aria-hidden="true" />{SITE.phone}</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0 text-gold-light" aria-hidden="true" />{SITE.email}</li>
            <li className="flex gap-2"><Clock className="w-4 h-4 mt-0.5 shrink-0 text-gold-light" aria-hidden="true" />অফিস সময়: শনি–বৃহস্পতিবার, সকাল ৯টা – বিকেল ৪টা (হালনাগাদযোগ্য)</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-emerald-100/70">
          <p>© ২০২৬ {SITE.name} — সর্বস্বত্ব সংরক্ষিত।</p>
          <Link to="/goponiyota" className="hover:text-white focus-visible:outline-2 focus-visible:outline-gold rounded">গোপনীয়তা নীতি</Link>
        </div>
      </div>
    </footer>
  )
}
