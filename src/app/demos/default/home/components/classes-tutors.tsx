import image1 from '@/assets/images/classes-tutors-1.jpg'
import image2 from '@/assets/images/classes-tutors-2.jpg'
import image3 from '@/assets/images/classes-tutors-3.jpg'
import { memo, useEffect, useRef } from 'react'
import { ResponsiveContainer, StackedCarousel } from 'react-stacked-center-carousel'

const intervalTime = 3000

function ClassesTutors() {
  const ref = useRef<StackedCarousel | undefined>(undefined)

  useEffect(() => {
    const interval = setInterval(() => {
      ref.current?.goNext()
    }, intervalTime)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="px-4 md:px-8 tw:container tw:mx-auto">
      <div className="tw:flex tw:flex-col-reverse tw:xl:flex-row tw:items-center tw:justify-center tw:h-screen tw:max-h-[795px] gap-0 tw:xl:gap-11 tw:w-full">
        <div className="tw:h-1/2 tw:md:h-3/4  tw:w-full tw:flex tw:items-center tw:justify-center tw:relative">
          <svg className="tw:absolute tw:size-3/4" viewBox="0 0 391 377" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M270.439 365.502C216.823 381.965 161.652 381.305 110.861 358.728C59.8171 336.071 13.2317 291.245 2.59782 237.727C-8.03609 184.209 17.8648 121.904 61.1498 73.9216C104.183 25.8602 164.931 -8.0523 214.335 2.16803C263.819 12.1359 301.628 66.4101 335.59 120.588C369.632 174.513 399.655 228.009 388.39 271.89C376.953 315.439 324.307 349.119 270.439 365.502Z"
              fill="#007AFF"
            />
          </svg>

          <ResponsiveContainer
            carouselRef={ref}
            render={(parentWidth, carouselRef) => {
              let currentVisibleSlide = 3
              if (parentWidth <= 1440) currentVisibleSlide = 3
              if (parentWidth <= 640) currentVisibleSlide = 1
              return (
                <StackedCarousel
                  className="tw:flex tw:items-center tw:h-3/4 tw:!overflow-visible"
                  swipeSpeed={0.5}
                  ref={carouselRef}
                  slideComponent={CarouselItem}
                  slideWidth={parentWidth < 600 ? parentWidth - 60 : 400}
                  carouselWidth={parentWidth}
                  data={[image1, image2, image3]}
                  currentVisibleSlide={currentVisibleSlide}
                  maxVisibleSlide={5}
                  disableSwipe
                />
              )
            }}
          />
        </div>
        <div className="tw:!space-y-6 tw:h-max tw:md:h-1/2 tw:flex tw:flex-col tw:lg:items-start tw:items-center tw:justify-center">
          <h1 className="tw:sm:w-3/4 tw:text-center tw:xl:text-start tw:text-balance tw:text-4xl tw:md:text-5xl lg:tw:text-6xl">
            Classes & tutors for every age
          </h1>
          <p className="tw:text-sm tw:text-center tw:xl:text-start tw:-tracking-tighter tw:!text-muted-foreground md:tw:text-base md:tw:text-lg tw:text-balance">
            VizSchool LMS offers fun, expert-led courses for all ages. Live classes and 1-on-1 support help students learn and grow their way.
          </p>
        </div>
      </div>
    </div>
  )
}

type Props = {
  data: string[]
  dataIndex: number
}

const CarouselItem = memo(function ({ data, dataIndex }: Props) {
  const cover = data[dataIndex]

  return (
    <div className="tw:rounded-2xl tw:border-primary tw:border-4 tw:overflow-hidden">
      <img src={cover} className="tw:object-cover tw:h-full tw:w-full" />
    </div>
  )
})

export default ClassesTutors
