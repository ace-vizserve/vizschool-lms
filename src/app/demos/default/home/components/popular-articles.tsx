import { popularArticlesData } from '@/assets/data/other'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ArrowLeftIcon, ArrowRightIcon, ChevronRight, Clock3Icon } from 'lucide-react'
import { useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { A11y, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'

function PopularArticles() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [isSliderStart, setIsSliderStart] = useState<boolean>(true)
  const [isSliderEnd, setIsSliderEnd] = useState<boolean>(false)

  return (
    <MaxWidthWrapper>
      <div className="tw:flex tw:flex-col tw:items-center tw:gap-12">
        <div className="tw:text-center">
          <h1 className="tw:text-center tw:text-balance tw:text-3xl tw:md:text-4xl lg:tw:text-5xl">Popular Articles</h1>
        </div>
        <div className="tw:relative tw:flex tw:justify-center tw:items-center tw:container">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
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
            grabCursor
            modules={[A11y, Navigation]}
            draggable="false">
            {popularArticlesData.map(({ description, duration, image, title }, i) => (
              <SwiperSlide key={i}>
                <Card key={i} className="tw:shadow-none tw:overflow-hidden tw:rounded-2xl tw:pt-0 tw:px-0">
                  <CardHeader className="tw:p-0">
                    <img src={image} className="tw:rounded-tr-2xl tw:rounded-tl-2xl tw:aspect-video tw:object-cover tw:w-full" />
                  </CardHeader>
                  <CardContent className="tw:!space-y-8">
                    <div className="tw:!space-y-4">
                      <h3 className="tw:text-primary tw:line-clamp-2 text-xl tw:md:text-2xl tw:font-bold">{title}</h3>
                      <p className="tw:mt-2 tw:text-sm tw:md:text-base tw:text-muted-foreground tw:line-clamp-2 tw:text-balance tw:-tracking-tighter">
                        {description}
                      </p>
                    </div>
                    <div className="tw:flex tw:justify-between tw:items-center">
                      <Button size={'sm'} className="tw:w-max">
                        Read more <ChevronRight className="size-2" />
                      </Button>
                      <div className="tw:flex tw:items-center gap-1">
                        <Clock3Icon className="tw:size-4 tw:stroke-muted-foreground" />
                        <span className="tw:font-medium tw:text-xs tw:text-muted-foreground">{duration} min read</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="tw:-left-4 tw:absolute tw:z-20">
            <div
              onClick={() => swiperRef.current?.slidePrev()}
              className={cn('tw:cursor-pointer tw:bg-primary tw:p-2 tw:rounded-full', {
                'tw:bg-secondary tw:cursor-not-allowed': isSliderStart,
              })}>
              <ArrowLeftIcon className="tw:size-8 tw:md:size-10 tw:stroke-white tw:stroke-3" />
            </div>
          </div>
          <div className="tw:-right-4 tw:absolute tw:z-20">
            <div
              onClick={() => swiperRef.current?.slideNext()}
              className={cn('tw:cursor-pointer tw:bg-primary tw:p-2 tw:rounded-full', {
                'tw:bg-secondary tw:cursor-not-allowed': isSliderEnd,
              })}>
              <ArrowRightIcon className="tw:size-8 tw:md:size-10 tw:stroke-white tw:stroke-3" />
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default PopularArticles
