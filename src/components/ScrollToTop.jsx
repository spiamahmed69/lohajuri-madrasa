import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="উপরে যান"
      className={`no-print fixed bottom-5 left-5 z-50 w-11 h-11 rounded-full bg-emerald-700 text-white shadow-lg flex items-center justify-center hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-emerald-700 transition-opacity ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <ArrowUp className="w-5 h-5" aria-hidden="true" />
    </button>
  )
}
