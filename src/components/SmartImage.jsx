import { useState } from 'react'

export default function SmartImage({ src, alt, className = '', eager = false }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return <div className={`${className} bg-emerald-800 islamic-pattern-light flex items-center justify-center text-emerald-100 text-sm px-4 text-center`} role="img" aria-label={alt}>{alt}</div>
  }
  return (
    <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} onError={() => setFailed(true)} className={className} />
  )
}
