import image1 from '@/assets/images/classes-tutors-1.jpg'
import image2 from '@/assets/images/classes-tutors-2.jpg'
import image3 from '@/assets/images/classes-tutors-3.jpg'
import { motion } from 'motion/react'
import { memo, useEffect, useRef } from 'react'
import { ResponsiveContainer, StackedCarousel } from 'react-stacked-center-carousel'

const intervalTime = 3000

function ClassesTutors() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const ref = useRef<StackedCarousel | undefined>(undefined)

  useEffect(() => {
    const interval = setInterval(() => {
      ref.current?.goNext()
    }, intervalTime)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="px-4 md:px-8 tw:container tw:mx-auto tw:pb-20 tw:md:py-20 tw:xl:py-0">
      <div ref={containerRef} className="tw:flex tw:flex-col-reverse tw:xl:flex-row tw:items-center tw:justify-center tw:h-screen tw:max:h-[650px]">
        <div className="tw:h-full tw:w-full tw:flex tw:items-center tw:justify-center tw:relative">
          <motion.svg
            initial={{
              opacity: 0,
              scale: 0.1,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                scale: { type: 'spring' },
                opacity: { ease: 'linear' },
              },
            }}
            viewport={{ once: true }}
            className="tw:w-3/4 tw:h-3/4 tw:absolute tw:aspect-square"
            viewBox="0 0 391 377"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M270.439 365.502C216.823 381.965 161.652 381.305 110.861 358.728C59.8171 336.071 13.2317 291.245 2.59782 237.727C-8.03609 184.209 17.8648 121.904 61.1498 73.9216C104.183 25.8602 164.931 -8.0523 214.335 2.16803C263.819 12.1359 301.628 66.4101 335.59 120.588C369.632 174.513 399.655 228.009 388.39 271.89C376.953 315.439 324.307 349.119 270.439 365.502Z"
              fill="#007AFF"
            />
          </motion.svg>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                opacity: { ease: 'linear' },
              },
            }}
            viewport={{ once: true, margin: '-80% 0px' }}
            className="tw:w-full tw:h-full tw:flex tw:items-center">
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
                    slideWidth={parentWidth < 600 ? parentWidth - 60 : 340}
                    carouselWidth={parentWidth}
                    data={[image1, image2, image3]}
                    currentVisibleSlide={currentVisibleSlide}
                    maxVisibleSlide={5}
                    disableSwipe
                  />
                )
              }}
            />
          </motion.div>
        </div>
        <div className="tw:w-full tw:h-full tw:!space-y-6 tw:flex tw:flex-col tw:lg:items-start tw:items-center tw:lg:justify-center tw:justify-end">
          <h1 className="tw:w-full tw:text-center tw:xl:text-start tw:text-balance tw:text-3xl tw:md:text-5xl lg:tw:text-6xl">
            Classes & tutors for every age
          </h1>
          <p className="tw:max-w-prose tw:mx-auto tw:xl:mx-0 tw:text-sm tw:text-center tw:xl:text-start tw:-tracking-tighter tw:!text-muted-foreground md:tw:text-base md:tw:text-lg tw:text-balance">
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
