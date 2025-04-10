import heroImg from '@/assets/images/hero-img.png'
import kidStudying from '@/assets/images/kid-studying.json'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Button } from '@/components/ui/button'
import Lottie from 'lottie-react'

const Hero = () => {
  return (
    <section className="tw:flex tw:flex-col tw:gap-24 tw:overflow-visible tw:!p-0">
      <MaxWidthWrapper className="container tw:pt-20 tw:lg:pt-0">
        <div className="tw:h-screen tw:md:max-h-[650px] tw:w-full tw:flex tw:flex-col-reverse tw:xl:flex-row tw:justify-center tw:items-center tw:gap-7 tw:md:gap-11">
          <div className="tw:size-full tw:relative tw:flex tw:items-center tw:justify-center">
            <svg
              className="tw:w-full tw:h-full tw:absolute tw:top-4 tw:size-full tw:sm:h-full tw:lg:w-3/4 tw:xl:w-full"
              viewBox="0 0 685 707"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1751_3435)">
                <path
                  d="M586.262 199.207C626.212 279.179 640.471 366.808 620.084 454.146C599.645 541.908 544.153 629.33 465.454 662.417C386.754 695.505 284.54 673.361 199.366 619.324C114.14 565.71 45.5968 479.731 47.5173 398.339C49.0308 316.898 121.364 240.518 194.615 170.262C267.458 99.9566 340.76 36.1504 410.817 40.6893C480.416 45.6029 546.363 118.813 586.262 199.207Z"
                  fill="#007AFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_1751_3435">
                  <rect width="612" height="646" fill="white" transform="translate(76.9531) rotate(6.84147)" />
                </clipPath>
              </defs>
            </svg>

            <div className="tw:absolute tw:lg:size-1/3 tw:xl:size-3/4">
              <img src={heroImg} alt="element-image" className="tw:object-cover tw:h-full tw:w-full tw:overflow-visible" />
            </div>
          </div>
          <div className="tw:flex tw:flex-col tw:items-center tw:justify-center tw:xl:items-start tw:xl:justify-start tw:!space-y-6 tw:w-full tw:md:w-md tw:lg:w-lg tw:xl:w-full">
            <h1 className="tw:sm:w-3/4 tw:md:w-full tw:text-center tw:xl:text-start tw:text-balance tw:text-4xl tw:md:text-5xl lg:tw:text-6xl">
              Limitless learning at your &nbsp;fingertips
            </h1>
            <p className="tw:text-sm tw:text-center tw:xl:text-start tw:-tracking-tighter tw:!text-muted-foreground md:tw:text-base md:tw:text-lg tw:text-balance">
              Enhance your knowledge with interactive courses, virtual classrooms, and exclusive learning experiences.
            </p>
            <div className="tw:grid tw:grid-cols-2 tw:w-max tw:gap-4">
              <Button className="tw:flex tw:md:hidden" variant={'secondary'}>
                Explore Courses
              </Button>
              <Button className="tw:flex tw:md:hidden">Enroll Now</Button>
              <Button className="tw:hidden tw:md:flex" variant={'secondary'} size={'lg'}>
                Explore Courses
              </Button>
              <Button className="tw:hidden tw:md:flex" size={'lg'}>
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div className="tw:h-screen tw:md:max-h-[650px] tw:w-full tw:flex tw:flex-col tw:xl:flex-row tw:justify-center tw:items-center tw:gap-0 tw:md:gap-11">
          <div className="tw:flex tw:flex-col tw:items-center tw:justify-center tw:xl:justify-start tw:xl:items-start tw:!space-y-6 tw:w-full tw:md:w-md tw:lg:w-lg tw:xl:w-full">
            <h1 className="tw:xl:text-start tw:text-center tw:text-balance tw:text-4xl tw:md:text-5xl lg:tw:text-6xl">
              Drive success with our smart&nbsp;solutions
            </h1>
            <p className="tw:text-sm tw:xl:text-start tw:text-center tw:-tracking-tighter tw:!text-muted-foreground md:tw:text-base md:tw:text-lg tw:text-balance">
              VizSchool enhances learning through virtual classrooms, interactive lessons, personalized courses, and completion certificates.
            </p>

            <Button className="tw:w-max tw:mx-auto tw:flex tw:md:hidden">Learn more</Button>
            <Button className="tw:w-max tw:hidden tw:md:flex" size={'lg'}>
              Learn more
            </Button>
          </div>

          <div className="tw:h-full tw:w-full tw:relative tw:flex tw:items-center tw:justify-center">
            <svg className="tw:absolute tw:w-3/4" viewBox="0 0 520 523" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.715957 309.947C2.79183 231.478 27.9493 157.715 79.8466 98.5206C131.958 39.0197 211.105 -5.70612 285.791 1.25346C360.477 8.21307 430.567 67.6782 474.269 144.788C518.185 221.59 535.794 316.55 500.67 378.784C465.842 441.225 378.202 470.427 292.381 494.507C206.856 518.794 123.661 537.858 71.2245 505.339C19.2979 472.719 -1.57432 388.723 0.715957 309.947Z"
                fill="#007AFF"
              />
            </svg>
            <div className="tw:absolute tw:size-3/4 tw:sm:size-3/5 tw:xl:size-3/4">
              <Lottie animationData={kidStudying} loop={true} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
