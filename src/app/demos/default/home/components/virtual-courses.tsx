import { freeCoursesData, ourProgramsData, specialCoursesData } from '@/assets/data/other'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'

function VirtualCourses() {
  const [course, setCourse] = useState<string>('our-programs')

  return (
    <MaxWidthWrapper>
      <div className="tw:flex tw:flex-col tw:items-center tw:gap-12">
        <Badge className="tw:py-2 tw:px-4 tw:uppercase tw:font-bold">our virtual courses</Badge>
        <div className="tw:text-center tw:!space-y-4">
          <h1 className="tw:!text-5xl">Everything you need to learn, all in one place!</h1>
          <p className="tw:text-lg tw:text-balance">
            From essential skills to engaging subjects, our LMS supports young learners in their educational journey.
          </p>
        </div>

        <Tabs onValueChange={(value) => setCourse(value)} value={course} className="tw:gap-8 tw:w-full">
          <TabsList className="tw:bg-white tw:flex tw:gap-7 tw:w-2/4">
            <TabsTrigger
              className={buttonVariants({
                size: 'lg',
                variant: course == 'our-programs' ? 'default' : 'secondary',
              })}
              value="our-programs">
              Our programs
            </TabsTrigger>
            <TabsTrigger
              className={buttonVariants({
                size: 'lg',
                variant: course == 'special-courses' ? 'default' : 'secondary',
              })}
              value="special-courses">
              Special courses
            </TabsTrigger>
            <TabsTrigger
              className={buttonVariants({
                size: 'lg',
                variant: course == 'free-courses' ? 'default' : 'secondary',
              })}
              value="free-courses">
              Free courses
            </TabsTrigger>
          </TabsList>

          <TabsContent className="tw:w-full" value="our-programs">
            <OurPrograms />
          </TabsContent>
          <TabsContent className="tw:w-full" value="special-courses">
            <SpecialCourses />
          </TabsContent>
          <TabsContent className="tw:w-full" value="free-courses">
            <FreeCourses />
          </TabsContent>
        </Tabs>
      </div>
    </MaxWidthWrapper>
  )
}

export function OurPrograms() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [isSliderStart, setIsSliderStart] = useState<boolean>(true)
  const [isSliderEnd, setIsSliderEnd] = useState<boolean>(false)

  return (
    <div className="tw:!space-y-8">
      <Swiper
        className=" tw:!h-96"
        modules={[A11y]}
        onSlideChange={(swiper) => {
          if (swiper.isEnd) {
            setIsSliderStart(false)
            setIsSliderEnd(true)
          } else if (swiper.isBeginning) {
            setIsSliderStart(true)
          } else {
            setIsSliderStart(false)
            setIsSliderEnd(false)
          }
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={3}
        grabCursor>
        {ourProgramsData.map(({ courseTitle, image, instructor }) => (
          <SwiperSlide key={courseTitle}>
            <Card className="tw:!rounded-2xl tw:relative tw:!h-80 tw:!p-0 tw:overflow-hidden">
              <img loading="lazy" src={image} className="tw:!object-cover tw:!h-full tw:!w-full" />
              <div className="tw:flex tw:flex-col tw:gap-2 tw:p-4 tw:absolute tw:bottom-0 tw:w-full tw:bg-linear-to-b tw:from-0% tw:to-black">
                <p className="tw:font-bold tw:text-lg tw:!m-0 tw:text-white">{courseTitle}</p>
                <p className="tw:font-medium tw:text-sm tw:!m-0 tw:text-white">{instructor}</p>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="tw:w-full tw:flex tw:gap-8 tw:justify-between tw:items-center">
        <Button variant={'secondary'} size={'lg'}>
          View more
        </Button>
        <svg width="857" height="4" viewBox="0 0 857 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2H855" stroke="#E7E7E7" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <div className="tw:flex tw:items-center tw:gap-4">
          <div
            className={buttonVariants({
              size: 'icon',
              className: cn('tw:cursor-pointer tw:bg-primary tw:!rounded-full', {
                'tw:bg-secondary tw:cursor-not-allowed': isSliderStart,
              }),
            })}
            onClick={() => swiperRef.current?.slidePrev()}>
            <ArrowLeftIcon className="tw:size-6 tw:stroke-3" />
          </div>
          <div
            className={buttonVariants({
              size: 'icon',
              className: cn('tw:cursor-pointer tw:bg-primary tw:!rounded-full', {
                'tw:bg-secondary tw:cursor-not-allowed': isSliderEnd,
              }),
            })}
            onClick={() => swiperRef.current?.slideNext()}>
            <ArrowRightIcon className="tw:size-6 tw:stroke-3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function SpecialCourses() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [isSliderStart, setIsSliderStart] = useState<boolean>(true)
  const [isSliderEnd, setIsSliderEnd] = useState<boolean>(false)

  return (
    <div className="tw:!space-y-8">
      <Swiper
        className=" tw:!h-96"
        modules={[A11y]}
        onSlideChange={(swiper) => {
          if (swiper.isEnd) {
            setIsSliderStart(false)
            setIsSliderEnd(true)
          } else if (swiper.isBeginning) {
            setIsSliderStart(true)
          } else {
            setIsSliderStart(false)
            setIsSliderEnd(false)
          }
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={3}
        grabCursor>
        {specialCoursesData.map(({ courseTitle, image, instructor }) => (
          <SwiperSlide key={courseTitle}>
            <Card className="tw:!rounded-2xl tw:relative tw:!h-80 tw:!p-0 tw:overflow-hidden">
              <img loading="lazy" src={image} className="tw:!object-cover tw:!h-full tw:!w-full" />
              <div className="tw:flex tw:flex-col tw:gap-2 tw:p-4 tw:absolute tw:bottom-0 tw:w-full tw:bg-linear-to-b tw:from-0% tw:to-black">
                <p className="tw:font-bold tw:text-lg tw:!m-0 tw:text-white">{courseTitle}</p>
                <p className="tw:font-medium tw:text-sm tw:!m-0 tw:text-white">{instructor}</p>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="tw:w-full tw:flex tw:gap-8 tw:justify-between tw:items-center">
        <Button variant={'secondary'} size={'lg'}>
          View more
        </Button>
        <svg width="857" height="4" viewBox="0 0 857 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2H855" stroke="#E7E7E7" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <div className="tw:flex tw:items-center tw:gap-4">
          <div
            className={buttonVariants({
              size: 'icon',
              className: cn('tw:cursor-pointer tw:bg-primary tw:!rounded-full', {
                'tw:bg-secondary tw:cursor-not-allowed': isSliderStart,
              }),
            })}
            onClick={() => swiperRef.current?.slidePrev()}>
            <ArrowLeftIcon className="tw:size-6 tw:stroke-3" />
          </div>
          <div
            className={buttonVariants({
              size: 'icon',
              className: cn('tw:cursor-pointer tw:bg-primary tw:!rounded-full', {
                'tw:bg-secondary tw:cursor-not-allowed': isSliderEnd,
              }),
            })}
            onClick={() => swiperRef.current?.slideNext()}>
            <ArrowRightIcon className="tw:size-6 tw:stroke-3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function FreeCourses() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [isSliderStart, setIsSliderStart] = useState<boolean>(true)
  const [isSliderEnd, setIsSliderEnd] = useState<boolean>(false)

  return (
    <div className="tw:!space-y-8">
      <Swiper
        className=" tw:!h-96"
        modules={[A11y]}
        onSlideChange={(swiper) => {
          if (swiper.isEnd) {
            setIsSliderStart(false)
            setIsSliderEnd(true)
          } else if (swiper.isBeginning) {
            setIsSliderStart(true)
          } else {
            setIsSliderStart(false)
            setIsSliderEnd(false)
          }
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={3}
        grabCursor>
        {freeCoursesData.map(({ courseTitle, image, instructor }) => (
          <SwiperSlide key={courseTitle}>
            <Card className="tw:!rounded-2xl tw:relative tw:!h-80 tw:!p-0 tw:overflow-hidden">
              <img loading="lazy" src={image} className="tw:!object-cover tw:!h-full tw:!w-full" />
              <div className="tw:flex tw:flex-col tw:gap-2 tw:p-4 tw:absolute tw:bottom-0 tw:w-full tw:bg-linear-to-b tw:from-0% tw:to-black">
                <p className="tw:font-bold tw:text-lg tw:!m-0 tw:text-white tw:line-clamp-2">{courseTitle}</p>
                <p className="tw:font-medium tw:text-sm tw:!m-0 tw:text-white">{instructor}</p>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="tw:w-full tw:flex tw:gap-8 tw:justify-between tw:items-center">
        <Button variant={'secondary'} size={'lg'}>
          View more
        </Button>
        <svg width="857" height="4" viewBox="0 0 857 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2H855" stroke="#E7E7E7" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <div className="tw:flex tw:items-center tw:gap-4">
          <div
            className={buttonVariants({
              size: 'icon',
              className: cn('tw:cursor-pointer tw:bg-primary tw:!rounded-full', {
                'tw:bg-secondary tw:cursor-not-allowed': isSliderStart,
              }),
            })}
            onClick={() => swiperRef.current?.slidePrev()}>
            <ArrowLeftIcon className="tw:size-6 tw:stroke-3" />
          </div>
          <div
            className={buttonVariants({
              size: 'icon',
              className: cn('tw:cursor-pointer tw:bg-primary tw:!rounded-full', {
                'tw:bg-secondary tw:cursor-not-allowed': isSliderEnd,
              }),
            })}
            onClick={() => swiperRef.current?.slideNext()}>
            <ArrowRightIcon className="tw:size-6 tw:stroke-3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VirtualCourses
