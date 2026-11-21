import { useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import SmartImage from './SmartImage.jsx'

export default function GalleryLightbox({ items, index, onClose, onNavigate }) {
  const current = items[index]
  const prev = useCallback(() => onNavigate((index - 1 + items.length) % items.length), [index, items.length, onNavigate])
  const next = useCallback(() => onNavigate((index + 1) % items.length), [index, items.length, onNavigate])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', handler); document.body.style.overflow = '' }
  }, [onClose, prev, next])

  if (!current) return null
  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={current.title} onClick={onClose}>
      <div className="w-full max-w-4xl flex items-center justify-between text-white mb-3" onClick={(e) => e.stopPropagation()}>
        <span className="text-sm">{current.title} — {index + 1} / {items.length}</span>
        <button type="button" onClick={onClose} aria-label="বন্ধ করুন" className="w-11 h-11 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white">
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
      <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <SmartImage src={current.src} alt={current.title} className="w-full max-h-[70vh] object-contain rounded-2xl bg-emerald-950" eager />
        <button type="button" onClick={prev} aria-label="আগের ছবি" className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 inline-flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-white">
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
        <button type="button" onClick={next} aria-label="পরের ছবি" className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 inline-flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-white">
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
      <p className="mt-3 text-white/80 text-sm inline-flex items-center gap-1.5"><Maximize2 className="w-4 h-4" aria-hidden="true" />Esc চাপলে বন্ধ হবে, তীর চিহ্নে ছবি বদলাবে</p>
    </div>
  )
}
