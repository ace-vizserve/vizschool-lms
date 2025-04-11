import Footer from '@/components/Footer'
import PageMetaData from '@/components/PageMetaData'
import Banner from './components/Banner'
import EventDetailsContent from './components/EventDetailsContent'
import TopNavigationBar from './components/TopNavigationBar'

const EventDetailPage = () => {
  return (
    <>
      <PageMetaData title="Event Detail" />
      <TopNavigationBar />
      <main>
        <Banner />
        <EventDetailsContent />
      </main>
      <Footer />
    </>
  )
}

export default EventDetailPage
