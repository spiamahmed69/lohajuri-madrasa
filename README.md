# আল জামিয়াতুল ইসলামিয়া দারুল উলূম লোহাজুড়ি — অফিসিয়াল ওয়েবসাইট

লোহাজুড়ি, কটিয়াদী, কিশোরগঞ্জ, বাংলাদেশ — একটি দ্বীনি শিক্ষাপ্রতিষ্ঠানের তথ্যমূলক ওয়েবসাইট।
১০০% বাংলা, React + Vite + Tailwind CSS, React Router।

## প্রযুক্তি

- React 18 + Vite 5
- Tailwind CSS 3.4
- react-router-dom 6
- lucide-react (আইকন)

## স্থানীয়ভাবে চালানো

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # প্রোডাকশন বিল্ড -> dist/
npm run preview    # বিল্ড যাচাই
```

## Vercel-এ ডিপ্লয়

- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`
- `vercel.json`-এ SPA fallback (`/(.*)` -> `/index.html`) দেওয়া আছে, তাই সব রুট সরাসরি খোলা/রিফ্রেশ করা যায়।
- কোনো ব্যাকএন্ড, ডাটাবেস বা এনভায়রনমেন্ট ভেরিয়েবল লাগে না।

## তথ্য হালনাগাদ করা

সব কনটেন্ট `src/data/` ফোল্ডারে কেন্দ্রীভূত:

| ফাইল | বিষয় |
|---|---|
| `madrasa.js` | প্রতিষ্ঠানের নাম, ঠিকানা, মেনু, পরিসংখ্যান |
| `departments.js` | বিভাগসমূহ |
| `notices.js` | নোটিশ |
| `news.js` | সংবাদ |
| `results.js` | প্রদর্শনী ফলাফল (নমুনা) |
| `gallery.js` | গ্যালারির ছবি |

## গুরুত্বপূর্ণ নোট

- যাচাইকৃত তথ্য শুধু প্রতিষ্ঠানের নাম ও ঠিকানা। প্রতিষ্ঠার সাল, মুহতামিম/শিক্ষকদের নাম, ফোন, ইমেইল, পরিসংখ্যান — এসবের জায়গায় "হালনাগাদযোগ্য" চিহ্ন দেওয়া আছে।
- নোটিশ/সংবাদ/ফলাফল নমুনা তথ্য হিসেবে চিহ্নিত — কর্তৃপক্ষের প্রকৃত তথ্য দিয়ে প্রতিস্থাপন করুন।
- ভর্তি আবেদন ও যোগাযোগ ফরম কোনো সার্ভারে সংরক্ষিত হয় না (কোনো ব্যাকএন্ড নেই)। জমা দেওয়ার পর সারাংশ প্রিন্ট করে অফিসে জমা দিতে বলা হয়।
- কোনো অ্যাডমিন প্যানেল, লগইন বা পেমেন্ট ব্যবস্থা নেই।

## রুটসমূহ

`/`, `/porichiti`, `/itihas`, `/lokkho`, `/muhtamim`, `/porichalona`, `/shikkhok`,
`/shikkha-karjokrom`, `/bibhag`, `/vorti`, `/vorti-nitimala`, `/online-vorti`,
`/folafol`, `/notice`, `/notice/:id`, `/songbad`, `/songbad/:id`,
`/photo-gallery`, `/video-gallery`, `/jogajog`, `/goponiyota`
