import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import GalleryLightbox from '../components/GalleryLightbox.jsx'
import SmartImage from '../components/SmartImage.jsx'
import { usePageTitle } from '../App.jsx'
import { GALLERY, GALLERY_CATEGORIES } from '../data/gallery.js'
import { Maximize2 } from 'lucide-react'

export default function PhotoGallery() {
  usePageTitle('ফটো গ্যালারি')
  const [cat, setCat] = useState('সকল')
  const [lightbox, setLightbox] = useState(null)

  const filtered = useMemo(() => cat === 'সকল' ? GALLERY : GALLERY.filter((g) => g.category === cat), [cat])

  return (
    <div>
      <PageHeader title="ফটো গ্যালারি" subtitle="ক্যাম্পাস, শিক্ষা কার্যক্রম ও অনুষ্ঠানের ছবি" crumbs={[{ label: 'ফটো গ্যালারি' }]} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-sm text-gray-600 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 max-w-3xl mb-6">গ্যালারির ছবিগুলো নমুনা হিসেবে দেওয়া হয়েছে — কর্তৃপক্ষের প্রকৃত ছবি দিয়ে প্রতিস্থাপন করা হবে।</p>
        <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="বিভাগ অনুযায়ী ফিল্টার">
          {GALLERY_CATEGORIES.map((c) => (
            <button key={c} type="button" onClick={() => setCat(c)} aria-pressed={cat === c} className={`min-h-[40px] px-4 rounded-full text-sm font-medium border focus-visible:outline-2 focus-visible:outline-emerald-700 ${cat === c ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-600'}`}>{c}</button>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((g, i) => (
            <button key={g.id} type="button" onClick={() => setLightbox(i)} className="group relative rounded-2xl overflow-hidden text-right focus-visible:outline-2 focus-visible:outline-emerald-700" aria-label={`${g.title} — বড় করে দেখুন`}>
              <SmartImage src={g.src} alt={g.title} className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              <span className="absolute inset-x-0 bottom-0 bg-emerald-950/70 text-white text-sm px-3 py-2 flex items-center justify-between">
                {g.title}
                <Maximize2 className="w-4 h-4 shrink-0" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
        {lightbox !== null && (
          <GalleryLightbox items={filtered} index={lightbox} onClose={() => setLightbox(null)} onNavigate={setLightbox} />
        )}
      </section>
    </div>
  )
}
