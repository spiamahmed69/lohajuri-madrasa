export default function SectionHeading({ eyebrow, title, desc, align = 'center' }) {
  const alignCls = align === 'left' ? 'text-left items-start' : 'text-center items-center'
  return (
    <div className={`flex flex-col gap-2 ${alignCls} mb-8`}>
      {eyebrow && <span className="text-xs font-semibold tracking-wide uppercase text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">{eyebrow}</span>}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
      <div className="gold-divider justify-center" aria-hidden="true"><span className="w-2 h-2 rotate-45 bg-gold inline-block" /></div>
      {desc && <p className="text-gray-600 max-w-2xl leading-relaxed">{desc}</p>}
    </div>
  )
}
