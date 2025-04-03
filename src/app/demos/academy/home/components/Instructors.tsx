import TinySlider from '@/components/TinySlider'
import { getAllInstructors } from '@/helpers/data'
import { useFetchData } from '@/hooks/useFetchData'
import { InstructorType } from '@/types/other'
import { Col, Container, Row } from 'react-bootstrap'
import InstructorCard from './InstructorCard'
import type { TinySliderSettings } from 'tiny-slider'
import { renderToString } from 'react-dom/server'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Instructors = () => {
  const allInstructors = useFetchData<InstructorType[]>(getAllInstructors)

  const instructorSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    gutter: 30,
    touch: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    nested: 'inner',
    controlsText: [renderToString(<FaArrowLeft size={16} />), renderToString(<FaArrowRight size={16} />)],
    autoplay: true,
    controls: true,
    edgePadding: 2,
    items: 4,
    nav: false,
    responsive: {
      1: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  }
  return (
    <section>
      <Container>
        <Row className="mb-4">
          <Col xs={12}>
            <h2 className="fs-1 fw-bold">
              <span className="position-relative z-index-9">Our Best</span>&nbsp;
              <span className="position-relative z-index-1">
                Instructors
                <span className="position-absolute top-50 start-50 translate-middle z-index-n1">
                  <svg width="205.3px" height="63.3px">
                    <path
                      className="fill-warning"
                      d="M204,26.9c-0.1-0.5-0.2-1.1-0.4-1.6c-0.1-0.3-0.3-0.6-0.5-0.9c-0.3-0.5-0.8-0.9-1.6-1.2l0.1-0.1l-0.1,0.1 c0.1-0.5-0.2-0.6-0.6-0.7c-0.1,0-0.1,0-0.2,0c-0.1-0.1-0.3-0.2-0.4-0.4c0-0.4,0-0.7-0.3-0.9c-0.1-0.1-0.4-0.2-0.7-0.2 c0-0.3-0.1-0.6-0.3-0.7c-0.2-0.1-0.4-0.2-0.6-0.2c-0.1,0-0.2,0-0.3,0c-0.6-0.5-1.2-1-1.8-1.4c0-0.1,0-0.1,0-0.1 c-0.1-0.1-0.2-0.2-0.4-0.2c-1.1-0.6-2.2-1.2-3.3-1.9c-7.6-4.5-16.6-5.5-25-7.9c-5.1-1.5-10.6-1.8-15.9-2.5 c-7.1-0.9-14.3-0.8-21.4-1.3c-2.9-0.2-5.8-0.4-8.6-0.4c-1.5,0-3-0.3-4.5-0.1c-3.1,0.5-6.2,0.8-9.3,0.9c-1,0.1-2.1,0.1-3.1,0.1 c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0c-1.1,0-2.3,0.1-3.4,0.1c-1.1,0-2.3,0-3.4,0c-6.9-0.4-13.6,0.9-20.2,1.9 c-3.2,0.5-6.4,1.2-9.6,1.9c-3.5,0.8-7.1,0.9-10.6,1.7c-5.1,1.2-10.3,2.3-15.6,3.2c-5.1,0.9-10.1,2.1-15.1,3.4 c-4.6,1.2-8.7,3.2-12.7,5.2c-2.4,1.2-4.8,2.2-6.6,4.1c-2.2,2.3-3.5,5-5.4,7.5c-1.2,1.7-0.9,3.2,0.2,4.9c2.5,3.9,6.9,5.5,11.4,7.2 c2.2,0.8,4.6,1.3,6.7,2.3c2.9,1.4,5.8,2.9,8.9,4.1c6.6,2.5,13.4,4.3,20.4,5.6c3.8,0.7,7.8,1.1,11.7,1.4c6,0.4,12,1.3,18.1,1 c0.4,0.4,0.8,0.4,1.1-0.1c0.9-0.4,1.8,0.1,2.7-0.1c4.7-0.8,9.5-0.4,14.3-0.3c2.7,0,5.4,0.4,8.1,0.3c5-0.2,10.1-0.6,15.1-1 c6.9-0.6,13.8-1.3,20.4-2.8c0.2,0.2,0.3,0.1,0.3-0.1c0.6-0.1,1.2-0.2,1.8-0.3c0.1,0.2,0.3,0.1,0.3,0c0.7-0.1,1.3-0.3,2-0.4 c4.2-0.4,8.4-0.7,12.6-1.3c2.6-0.3,5.2-1,7.8-1.5c0.2,0.1,0.4,0.2,0.6,0.1c0.1,0,0.2-0.1,0.2-0.1c0,0,0.1-0.1,0.1-0.1 c0,0,0.1-0.1,0.1-0.1c0.3-0.1,0.5-0.2,0.8-0.2c0.1,0,0.1,0,0.2,0c0.2,0,0.3-0.1,0.3-0.2c0,0,0,0,0,0l0,0c0,0,0,0,0,0 c0.2,0,0.5-0.1,0.7-0.1c0,0,0,0,0,0c0.1,0,0.2,0,0.3,0c0.2,0,0.4-0.1,0.4-0.4c0.6-0.2,1.2-0.4,1.7-0.7c0.1,0,0.2,0,0.3,0 c0,0,0.1,0,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1,0c0.3,0.1,0.6,0.1,0.7,0c0.1,0,0.2-0.1,0.2-0.2 c0.1-0.1,0.1-0.2,0.2-0.3c0.7-0.3,1.3-0.6,2-0.8c2-0.9,3.9-1.7,6-2.4c6-1.8,11.5-4.2,16.1-8c1-0.2,1.6-0.7,2-1.3 c0.3-0.4,0.4-0.8,0.6-1.2c0.6-0.1,0.9-0.3,1.1-0.6c0.2-0.3,0.3-0.7,0.4-1.1c0-0.1,0-0.1,0.1-0.2c0.6,0,0.7-0.4,1-0.7 C203.7,32.1,204.6,29.6,204,26.9z M4.4,38.1C4.2,37.6,4,37,4.3,36.5c2.3-3.7,4.3-7.6,8.5-10.2c3.5-2.1,7.4-3.7,11.3-5.3 c5.4-2.3,11.3-3.2,17.1-4.4c0,0.1,0,0.2,0,0.3l0,0c-1.4,0.5-2.7,0.9-4.1,1.4c-4.1,1.4-8.2,2.7-12.2,4.2c-5.4,2.1-9.7,5.3-12.8,9.5 c-0.6,0.8-1.3,1.7-2,2.5c-2.7,3.4-1.2,5.9,1.5,8.8c0.2,0.2,0.4,0.4,0.5,0.6C8.7,42.8,5.7,41.2,4.4,38.1z M198.5,31.8 c-2.1,3.5-5.2,6.4-8.9,8.6c-2.6,1.6-5.6,2.7-8.7,3.7c-4.1,1.3-8.1,3-12,4.6c-5,2-10.2,3.2-15.7,3.6c-7.5,0.6-14.9,1.9-22.2,3.2 c-6.1,1.1-12.4,1.3-18.6,1.9c-7,0.7-14.1,0.2-21.2,0.1c-4-0.1-7.9,0.4-11.8,0.6c-3.3,0.2-6.5,0.2-9.8-0.1c-4.9-0.4-9.9-0.7-14.8-1.2 c-3.5-0.3-7-0.9-10.4-1.8c-4-1.1-8-2.1-12-3.2c-0.6-0.2-1.2-0.3-1.7-0.7c-0.2-0.1-0.5-0.2-0.8-0.3c0.1,0,0.1,0,0.2-0.1 c0.3-0.1,0.6,0,0.9,0.1c0,0,0,0,0,0c4.3,0.6,8.7,1.5,13.1,1.7c0.6,0,1.3,0,1.9,0c0.6,0,1.6,0.3,1.6-0.3c0-0.7-0.9-1.1-1.8-1.1 c-2.7,0-5.3-0.3-7.9-0.7c-5.8-0.9-11.5-1.8-16.9-3.8c-3.7-1.4-6.8-3.4-8.7-6.6c-0.6-1-0.6-2-0.1-3c4-7.8,11.4-12.4,20.6-15.4 c8.4-2.7,16.7-5.6,25.5-7.6c6.3-1.4,12.7-2.3,18.9-3.7C88,8.1,99,7.5,110.1,7.1c4.5-0.2,9-1.1,13.6-0.7c10.5,0.8,21.1,1.5,31.6,3 c5.7,0.8,11.4,1.5,17.2,2.1c4.5,0.5,9,1.8,13.2,3.5c4,1.6,7.5,3.6,10.7,6.3C199.7,24.1,200.6,28.4,198.5,31.8z"
                    />
                  </svg>
                </span>
              </span>
            </h2>
            <p className="mb-0">Boost up your knowledge with industries experts</p>
          </Col>
        </Row>
        <Row>
          <div className="tiny-slider arrow-round arrow-creative arrow-blur">
            {allInstructors && (
              <TinySlider settings={instructorSliderSettings}>
                {allInstructors?.slice(0, 5).map((instructor, idx) => <InstructorCard instructor={instructor} key={idx} />)}
              </TinySlider>
            )}
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Instructors
