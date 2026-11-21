// যাচাইকৃত তথ্য: প্রতিষ্ঠানের নাম ও ঠিকানা মাত্র। অন্য সব তথ্য হালনাগাদযোগ্য/নমুনা হিসেবে চিহ্নিত।
export const SITE = {
  name: 'আল জামিয়াতুল ইসলামিয়া দারুল উলূম লোহাজুড়ি',
  shortName: 'দারুল উলূম লোহাজুড়ি',
  address: 'লোহাজুড়ি, কটিয়াদী, কিশোরগঞ্জ, বাংলাদেশ',
  phone: 'ফোন নম্বর (হালনাগাদযোগ্য)',
  email: 'ইমেইল (হালনাগাদযোগ্য)',
  arabic: 'الجامعة الإسلامية دار العلوم لوهاجوري',
  tagline: 'কুরআন ও সুন্নাহর আলোকে দ্বীনি শিক্ষা',
}

export const IMG = {
  hero: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1600&q=80',
  mosque1: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80',
  mosque2: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1200&q=80',
  quran1: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1200&q=80',
  mosque3: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
  quran2: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1200&q=80',
  mosque4: 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?auto=format&fit=crop&w=1200&q=80',
  mosque5: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=80',
}

// পরিসংখ্যান: যাচাইকৃত সংখ্যা পাওয়া যায়নি — তাই "—" দেখানো হয়।
export const STATS = [
  { label: 'মোট শিক্ষার্থী', value: '—', note: 'যাচাইকৃত পরিসংখ্যান পাওয়া গেলে এখানে প্রকাশ করা হবে' },
  { label: 'শিক্ষকমণ্ডলী', value: '—', note: 'যাচাইকৃত পরিসংখ্যান পাওয়া গেলে এখানে প্রকাশ করা হবে' },
  { label: 'শিক্ষা বিভাগ', value: '—', note: 'যাচাইকৃত পরিসংখ্যান পাওয়া গেলে এখানে প্রকাশ করা হবে' },
  { label: 'প্রতিষ্ঠার সাল', value: '—', note: 'প্রতিষ্ঠার সাল যাচাই সাপেক্ষে প্রকাশ করা হবে' },
]

export const ACTIVITIES = [
  { title: 'কুরআন শিক্ষা', desc: 'নূরানী, নাজেরা ও হিফজ — তাজউইদসহ বিশুদ্ধ কুরআন তিলাওয়াতের প্রশিক্ষণ।', icon: 'BookOpen' },
  { title: 'কিতাব অধ্যয়ন', desc: 'আরবি ভাষা, ফিকহ, হাদিস ও তাফসিরের ধারাবাহিক পাঠদান।', icon: 'Library' },
  { title: 'নৈতিক ও চারিত্রিক শিক্ষা', desc: 'আদব-আখলাক, নামাজ ও ইসলামি জীবনযাপনের ব্যবহারিক প্রশিক্ষণ।', icon: 'HeartHandshake' },
  { title: 'সহশিক্ষা কার্যক্রম', desc: 'বক্তৃতা, কেরাত প্রতিযোগিতা, ইসলামি সাংস্কৃতিক অনুষ্ঠান ও মজলিস।', icon: 'Users' },
]

export const NAV = [
  { label: 'হোম', to: '/' },
  {
    label: 'পরিচিতি', to: '/porichiti', children: [
      { label: 'মাদরাসা পরিচিতি', to: '/porichiti' },
      { label: 'ইতিহাস ও ঐতিহ্য', to: '/itihas' },
      { label: 'লক্ষ্য ও উদ্দেশ্য', to: '/lokkho' },
      { label: 'মুহতামিমের বাণী', to: '/muhtamim' },
    ],
  },
  {
    label: 'প্রশাসন', to: '/porichalona', children: [
      { label: 'পরিচালনা পরিষদ', to: '/porichalona' },
      { label: 'শিক্ষক পরিচিতি', to: '/shikkhok' },
    ],
  },
  {
    label: 'শিক্ষা কার্যক্রম', to: '/shikkha-karjokrom', children: [
      { label: 'শিক্ষা কার্যক্রম', to: '/shikkha-karjokrom' },
      { label: 'বিভাগসমূহ', to: '/bibhag' },
      { label: 'পরীক্ষার ফলাফল', to: '/folafol' },
    ],
  },
  {
    label: 'ভর্তি', to: '/vorti', children: [
      { label: 'ভর্তি তথ্য', to: '/vorti' },
      { label: 'ভর্তি নীতিমালা', to: '/vorti-nitimala' },
      { label: 'অনলাইন ভর্তি আবেদন', to: '/online-vorti' },
    ],
  },
  { label: 'নোটিশ', to: '/notice' },
  { label: 'ফলাফল', to: '/folafol' },
  { label: 'গ্যালারি', to: '/photo-gallery', children: [
    { label: 'ফটো গ্যালারি', to: '/photo-gallery' },
    { label: 'ভিডিও গ্যালারি', to: '/video-gallery' },
  ]},
  { label: 'সংবাদ', to: '/songbad' },
  { label: 'যোগাযোগ', to: '/jogajog' },
]
