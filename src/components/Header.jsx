import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, BookOpenCheck, MapPin, GraduationCap } from 'lucide-react'
import { NAV, SITE } from '../data/madrasa.js'

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 min-w-0 focus-visible:outline-2 focus-visible:outline-emerald-700 rounded-lg" aria-label="হোম — দারুল উলূম লোহাজুড়ি">
      <span className="shrink-0 w-12 h-12 rounded-2xl bg-emerald-800 text-gold-light flex items-center justify-center shadow-sm" aria-hidden="true">
        <BookOpenCheck className="w-6 h-6" />
      </span>
      <span className="min-w-0">
        <span className="block font-bold text-gray-900 leading-tight text-base sm:text-lg truncate">{SITE.name}</span>
        <span className="hidden sm:flex items-center gap-1 text-xs text-gray-500"><MapPin className="w-3.5 h-3.5" aria-hidden="true" />লোহাজুড়ি, কটিয়াদী, কিশোরগঞ্জ</span>
      </span>
    </Link>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDrop, setOpenDrop] = useState(null)
  const [mobileSection, setMobileSection] = useState(null)
  const location = useLocation()

  const closeMobile = () => { setMobileOpen(false); setMobileSection(null) }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      {/* top bar */}
      <div className="bg-emerald-900 text-emerald-50 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 flex items-center justify-between gap-3">
          <span className="truncate">{SITE.tagline}</span>
          <span className="hidden md:inline font-arabic text-sm text-gold-light" lang="ar" dir="rtl">{SITE.arabic}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3 py-3">
          <Logo />
          <div className="flex items-center gap-2">
            <Link to="/online-vorti" className="hidden sm:inline-flex items-center gap-2 min-h-[44px] px-4 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-emerald-700 transition-colors">
              <GraduationCap className="w-4 h-4" aria-hidden="true" /> ভর্তি আবেদন
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-emerald-700"
            >
              {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* desktop nav */}
      <nav className="hidden lg:block border-t border-gray-100" aria-label="প্রধান মেনু">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.label} className="relative" onMouseEnter={() => item.children && setOpenDrop(item.label)} onMouseLeave={() => setOpenDrop(null)}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={openDrop === item.label}
                      onClick={() => setOpenDrop(openDrop === item.label ? null : item.label)}
                      className="inline-flex items-center gap-1 min-h-[44px] px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-800 focus-visible:outline-2 focus-visible:outline-emerald-700 rounded-lg"
                    >
                      {item.label} <ChevronDown className={`w-4 h-4 transition-transform ${openDrop === item.label ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                    {openDrop === item.label && (
                      <ul className="absolute right-0 top-full w-56 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50">
                        {item.children.map((c) => (
                          <li key={c.to}>
                            <Link to={c.to} onClick={() => setOpenDrop(null)} className={`block px-4 py-2.5 text-sm hover:bg-emerald-50 hover:text-emerald-800 ${location.pathname === c.to ? 'text-emerald-800 font-semibold bg-emerald-50' : 'text-gray-700'}`}>
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink to={item.to} className={({ isActive }) => `inline-flex items-center min-h-[44px] px-3 py-2 text-sm font-medium rounded-lg focus-visible:outline-2 focus-visible:outline-emerald-700 ${isActive ? 'text-emerald-800 font-semibold' : 'text-gray-700 hover:text-emerald-800'}`}>
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-gray-100 bg-white max-h-[75vh] overflow-y-auto" aria-label="মোবাইল মেনু">
          <ul className="px-4 py-3 space-y-1">
            {NAV.map((item) => (
              <li key={item.label} className="border-b border-gray-50 last:border-0">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={mobileSection === item.label}
                      onClick={() => setMobileSection(mobileSection === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between min-h-[44px] py-2 text-sm font-medium text-gray-800"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === item.label ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                    {mobileSection === item.label && (
                      <ul className="ps-4 pb-2 space-y-1">
                        {item.children.map((c) => (
                          <li key={c.to}>
                            <Link to={c.to} onClick={closeMobile} className="block min-h-[44px] py-2.5 text-sm text-gray-600 hover:text-emerald-800">{c.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={item.to} onClick={closeMobile} className="block min-h-[44px] py-2.5 text-sm font-medium text-gray-800">{item.label}</Link>
                )}
              </li>
            ))}
            <li className="pt-2">
              <Link to="/online-vorti" onClick={closeMobile} className="flex items-center justify-center gap-2 min-h-[44px] rounded-xl bg-emerald-700 text-white text-sm font-semibold">
                <GraduationCap className="w-4 h-4" aria-hidden="true" /> ভর্তি আবেদন করুন
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
