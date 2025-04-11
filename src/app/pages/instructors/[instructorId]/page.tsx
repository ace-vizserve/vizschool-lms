import Footer from '@/components/Footer'
import PageMetaData from '@/components/PageMetaData'
import { getInstructorById } from '@/helpers/data'
import { InstructorType } from '@/types/other'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import InstructorDetails from './components/InstructorDetails'
import TopNavigationBar from './components/TopNavigationBar'

const InstructorDetail = () => {
  const [instructor, setInstructor] = useState<InstructorType>()
  const { instructorId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    ;(async () => {
      if (instructorId) {
        const data = await getInstructorById(instructorId)
        if (data) setInstructor(data)
        else navigate('/error-404')
      }
    })()
  }, [instructorId, navigate])

  return (
    <>
      <PageMetaData title={instructor?.id ?? 'Instructors Details'} />
      <TopNavigationBar />
      <main>
        <InstructorDetails />
      </main>
      <Footer />
    </>
  )
}
export default InstructorDetail
