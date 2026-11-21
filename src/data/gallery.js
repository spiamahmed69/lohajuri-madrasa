// নমুনা গ্যালারি — কর্তৃপক্ষের প্রকৃত ছবি দিয়ে প্রতিস্থাপন করুন।
import { IMG } from './madrasa.js'

export const GALLERY_CATEGORIES = ['সকল', 'ক্যাম্পাস', 'শিক্ষা কার্যক্রম', 'অনুষ্ঠান']

export const GALLERY = [
  { id: '1', src: IMG.mosque1, title: 'মাদরাসা মসজিদ', category: 'ক্যাম্পাস' },
  { id: '2', src: IMG.quran1, title: 'কুরআন অধ্যয়ন', category: 'শিক্ষা কার্যক্রম' },
  { id: '3', src: IMG.mosque3, title: 'মাদরাসা ভবন', category: 'ক্যাম্পাস' },
  { id: '4', src: IMG.quran2, title: 'তিলাওয়াতের ক্লাস', category: 'শিক্ষা কার্যক্রম' },
  { id: '5', src: IMG.mosque4, title: 'বার্ষিক মাহফিল', category: 'অনুষ্ঠান' },
  { id: '6', src: IMG.mosque2, title: 'মসজিদের অভ্যন্তর', category: 'ক্যাম্পাস' },
  { id: '7', src: IMG.mosque5, title: 'ইসলামি স্থাপত্য', category: 'অনুষ্ঠান' },
  { id: '8', src: IMG.hero, title: 'মাদরাসা প্রাঙ্গণ', category: 'ক্যাম্পাস' },
]
