// বিভাগসমূহ: নমুনা/সম্পাদনাযোগ্য তালিকা — কর্তৃপক্ষের প্রকৃত তথ্য দিয়ে প্রতিস্থাপন করুন।
// এই তালিকাকে যাচাইকৃত তথ্য হিসেবে উপস্থাপন করা হয়নি; প্রতিটি কার্ডে "সম্পাদনাযোগ্য" চিহ্ন রয়েছে।
import { IMG } from './madrasa.js'

export const DEPARTMENTS = [
  { id: 'nurani', name: 'নূরানী ও নাজেরা বিভাগ', desc: 'শিশুদের জন্য কায়দা, আমপারা ও নাজেরা — বিশুদ্ধ তিলাওয়াতের ভিত্তি গড়ে তোলা হয়।', image: IMG.quran2, icon: 'BookOpen', duration: 'শ্রেণি অনুযায়ী', editable: true },
  { id: 'hifz', name: 'হিফজুল কুরআন বিভাগ', desc: 'তাজউইদ ও মাখরাজের সঠিক অনুশীলনের মাধ্যমে পূর্ণ কুরআন হিফজের ব্যবস্থা।', image: IMG.quran1, icon: 'Bookmark', duration: 'শ্রেণি অনুযায়ী', editable: true },
  { id: 'kitab', name: 'কিতাব বিভাগ', desc: 'আরবি ভাষা ও সাহিত্য, ফিকহ, হাদিস ও ইসলামি শাস্ত্রের ধারাবাহিক পাঠদান।', image: IMG.mosque2, icon: 'Library', duration: 'শ্রেণি অনুযায়ী', editable: true },
  { id: 'ifta', name: 'ইফতা বিভাগ', desc: 'ফিকহ ও ফতোয়া বিষয়ে উচ্চতর অধ্যয়ন ও গবেষণার ব্যবস্থা (কর্তৃপক্ষের অনুমোদন সাপেক্ষে)।', image: IMG.mosque1, icon: 'Scale', duration: 'শ্রেণি অনুযায়ী', editable: true },
  { id: 'tafsir', name: 'তাফসির বিভাগ', desc: 'কুরআনের তাফসির ও উলূমুল কুরআনের গভীর অধ্যয়ন।', image: IMG.mosque3, icon: 'ScrollText', duration: 'শ্রেণি অনুযায়ী', editable: true },
  { id: 'adab', name: 'আদব বিভাগ', desc: 'আরবি আদব ও সাহিত্য, বক্তৃতা ও লেখালেখির চর্চা।', image: IMG.mosque4, icon: 'PenLine', duration: 'শ্রেণি অনুযায়ী', editable: true },
]
