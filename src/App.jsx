import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import History from './pages/History.jsx'
import Mission from './pages/Mission.jsx'
import Muhtamim from './pages/Muhtamim.jsx'
import GoverningBody from './pages/GoverningBody.jsx'
import Teachers from './pages/Teachers.jsx'
import AcademicActivities from './pages/AcademicActivities.jsx'
import Departments from './pages/Departments.jsx'
import Admission from './pages/Admission.jsx'
import AdmissionPolicy from './pages/AdmissionPolicy.jsx'
import OnlineAdmission from './pages/OnlineAdmission.jsx'
import Results from './pages/Results.jsx'
import Notices from './pages/Notices.jsx'
import NoticeDetail from './pages/NoticeDetail.jsx'
import News from './pages/News.jsx'
import NewsDetail from './pages/NewsDetail.jsx'
import PhotoGallery from './pages/PhotoGallery.jsx'
import VideoGallery from './pages/VideoGallery.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import NotFound from './pages/NotFound.jsx'
import { SITE } from './data/madrasa.js'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE.shortName}` : `${SITE.name} | লোহাজুড়ি, কটিয়াদী, কিশোরগঞ্জ`
  }, [title])
}

export default function App() {
  const location = useLocation()
  useEffect(() => {
    const el = document.querySelector('meta[name="description"]')
    if (el) el.setAttribute('content', `${SITE.name} — ${SITE.address}। কুরআন-হাদিসভিত্তিক ইসলামি শিক্ষা, ভর্তি তথ্য, নোটিশ, ফলাফল ও গ্যালারি।`)
  }, [location.pathname])

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/porichiti" element={<About />} />
        <Route path="/itihas" element={<History />} />
        <Route path="/lokkho" element={<Mission />} />
        <Route path="/muhtamim" element={<Muhtamim />} />
        <Route path="/porichalona" element={<GoverningBody />} />
        <Route path="/shikkhok" element={<Teachers />} />
        <Route path="/shikkha-karjokrom" element={<AcademicActivities />} />
        <Route path="/bibhag" element={<Departments />} />
        <Route path="/vorti" element={<Admission />} />
        <Route path="/vorti-nitimala" element={<AdmissionPolicy />} />
        <Route path="/online-vorti" element={<OnlineAdmission />} />
        <Route path="/folafol" element={<Results />} />
        <Route path="/notice" element={<Notices />} />
        <Route path="/notice/:id" element={<NoticeDetail />} />
        <Route path="/songbad" element={<News />} />
        <Route path="/songbad/:id" element={<NewsDetail />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/video-gallery" element={<VideoGallery />} />
        <Route path="/jogajog" element={<Contact />} />
        <Route path="/goponiyota" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
