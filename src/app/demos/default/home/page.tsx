import Footer from '@/components/Footer'
import PageMetaData from '@/components/PageMetaData'
import ActionBox from './components/ActionBox'
import Hero from './components/Hero'
import TopNavbar1 from './components/TopNavbar1'
import ClassesTutors from './components/classes-tutors'
import PopularArticles from './components/popular-articles'
import Testimonials from './components/testimonials'
import VirtualCourses from './components/virtual-courses'

const HomePage = () => {
  return (
    <>
      <PageMetaData title="Home" />
      <TopNavbar1 />
      <main>
        <Hero />
        <ClassesTutors />
        <VirtualCourses />
        <Testimonials />
        <PopularArticles />
        <ActionBox />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
