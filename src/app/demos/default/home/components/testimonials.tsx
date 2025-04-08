import MaxWidthWrapper from '@/components/max-width-wrapper'

function Testimonials() {
  return (
    <MaxWidthWrapper>
      <div className="tw:flex tw:flex-col tw:gap-12">
        <div className="tw:flex tw:flex-col tw:gap-7">
          <h1 className="tw:!text-6xl">Students & Parents Love VizSchool!</h1>
          <div className="tw:grid-cols-5 tw:gap-11">
            <div className="tw:flex tw:flex-col">
              <div className="tw:flex tw:flex-col tw:gap-4">
                <h2></h2>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Testimonials
