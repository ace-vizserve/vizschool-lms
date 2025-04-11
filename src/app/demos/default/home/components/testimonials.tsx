import { ourStatsData, testimonialsData } from '@/assets/data/other'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { OurStatsType, TestimonialsType } from '@/types/other'
import Lottie from 'lottie-react'
import { ArrowLeftIcon, ArrowRightIcon, Loader2Icon } from 'lucide-react'
import { motion } from 'motion/react'
import { memo, useCallback, useState, useTransition } from 'react'

function Testimonials() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<[TestimonialsType][number]>(testimonialsData[0])

  const setCurrentSlide = useCallback((index: number) => {
    setCurrentSlideIndex(testimonialsData[index])
  }, [])

  return (
    <MaxWidthWrapper>
      <div className="tw:py-20 tw:md:py-36 tw:lg:py-48 tw:flex tw:flex-col tw:items-center tw:justify-center tw:gap-24">
        <div className="tw:w-full tw:flex tw:flex-col tw:items-center tw:justify-center tw:gap-14">
          <h1 className="tw:sm:w-3/4 tw:text-center tw:text-balance tw:text-3xl tw:md:text-4xl lg:tw:text-5xl">Students & Parents Love VizSchool!</h1>
          <div className="tw:w-full tw:flex tw:flex-col tw:sm:flex-row tw:sm:gap-6 tw:flex-wrap tw:justify-center">
            {ourStatsData.map((stat, index) => (
              <StatItem index={index} {...stat} key={index} />
            ))}
          </div>
        </div>
        <div className="tw:w-full tw:flex tw:flex-col tw:items-center tw:justify-center tw:gap-14">
          <Badge className="tw:text-[0.65rem] tw:md:text-xs tw:py-2 tw:px-4 tw:uppercase tw:font-bold">testimonials</Badge>
          <h1 className="tw:sm:w-3/4 tw:text-center tw:text-balance tw:text-2xl tw:md:text-4xl lg:tw:text-5xl">
            Real Stories, Real Success: What Parents & Students Say!
          </h1>

          <TestimonialSlide
            {...currentSlideIndex}
            currentSlideIndex={testimonialsData.indexOf(currentSlideIndex)}
            setCurrentSlide={setCurrentSlide}
          />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

type TestimonialSlideProps = TestimonialsType & {
  currentSlideIndex: number
  setCurrentSlide: (index: number) => void
}

const TestimonialSlide = memo(function ({ image, name, status, testimony, currentSlideIndex, setCurrentSlide }: TestimonialSlideProps) {
  const [isPending, startTransition] = useTransition()

  function setSlideIndex(index: number) {
    startTransition(() => {
      setCurrentSlide(index)
    })
  }

  if (isPending) {
    return (
      <div className="tw:w-full tw:h-screen tw:md:h-80 tw:flex tw:items-center tw:justify-center">
        <Loader2Icon className="tw:size-8 tw:stroke-3 tw:stroke-primary tw:animate-spin" />
      </div>
    )
  }

  return (
    <div className="tw:w-full tw:flex tw:flex-col tw:lg:flex-row tw:gap-8 tw:lg:gap-16">
      <motion.div
        transition={{
          delay: 0.25,
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        className="tw:w-full tw:h-full">
        <img loading="lazy" src={image} className="tw:aspect-video tw:h-80 tw:border-primary tw:border-4 tw:rounded-2xl tw:object-cover" />
      </motion.div>

      <div className="tw:w-full tw:h-full tw:flex tw:flex-col tw:justify-between tw:p-0 tw:lg:p-9 tw:gap-7 tw:md:gap-11">
        <motion.div
          className="space-y-11"
          transition={{
            delay: 0.25,
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}>
          <p className="tw:line-clamp-4 tw:md:line-clamp-5 tw:italic tw:max-w-prose tw:text-sm tw:md:text-base tw:lg:text-lg tw:text-muted-foreground tw:text-balance tw:-tracking-tighter">
            {testimony}
          </p>
          <div className="tw:!space-y-1 tw:md:!space-y-2">
            <p className="tw:text-base tw:md:text-lg tw:text-primary tw:font-bold tw:-tracking-tighter">{name}</p>
            <p className="tw:text-xs tw:md:text-sm tw:font-medium tw:-tracking-tighter">{status}</p>
          </div>
        </motion.div>
        <div className="tw:flex tw:items-center tw:gap-4">
          <div
            className={buttonVariants({
              size: 'icon',
              className: cn('tw:cursor-pointer tw:bg-primary tw:rounded-full', {
                'tw:bg-secondary tw:cursor-not-allowed': currentSlideIndex == 0,
              }),
            })}
            onClick={() => setSlideIndex(currentSlideIndex - 1)}>
            <ArrowLeftIcon className="tw:size-6 tw:stroke-3" />
          </div>
          <div
            className={buttonVariants({
              size: 'icon',
              className: cn('tw:cursor-pointer tw:bg-primary tw:rounded-full', {
                'tw:bg-secondary tw:cursor-not-allowed': currentSlideIndex == 5,
              }),
            })}
            onClick={() => setSlideIndex(currentSlideIndex + 1)}>
            <ArrowRightIcon className="tw:size-6 tw:stroke-3" />
          </div>
        </div>
      </div>
    </div>
  )
})

function StatItem({ description, icon, stats, index }: OurStatsType & { index: number }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: 20,
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        transition: {
          default: { type: 'spring' },
          opacity: { ease: 'linear' },
        },
      }}
      transition={{
        delay: 0.0 + index + 0.5,
      }}
      viewport={{ once: true, amount: 'all' }}
      className="tw:flex tw:flex-col tw:items-center tw:justify-center">
      <div className="tw:size-24 tw:md:size-32">
        <Lottie animationData={icon} loop={true} />
      </div>
      <div className="tw:!space-y-1 tw:flex tw:flex-col tw:items-center tw:justify-center">
        <p className="tw:text-primary tw:text-xl tw:md:text-3xl tw:font-bold">{stats}</p>
        <p className="tw:max-w-3/4 tw:text-xs tw:md:text-sm tw:text-muted-foreground tw:-tracking-tighter tw:font-medium tw:text-center">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default Testimonials
