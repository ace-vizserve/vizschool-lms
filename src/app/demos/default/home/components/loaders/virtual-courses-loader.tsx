import { Skeleton } from '@/components/ui/skeleton'
import { Tabs, TabsList } from '@/components/ui/tabs'

function VirtualClassesLoader() {
  return (
    <Tabs className="tw:px-6 tw:md:px-8 tw:gap-6 tw:lg:gap-8 tw:w-full">
      <TabsList className="tw:bg-white tw:justify-start tw:flex-wrap tw:gap-2 tw:lg:gap-7 tw:w-full tw:lg:w-2/4">
        <Skeleton className="tw:w-full tw:lg:w-48 tw:h-10" />
        <Skeleton className="tw:hidden tw:md:block tw:lg:w-48 tw:h-10" />
        <Skeleton className="tw:hidden tw:md:block tw:lg:w-48 tw:h-10" />
      </TabsList>
      <div className="tw:flex tw:items-center tw:justify-center tw:w-full tw:h-80 tw:space-x-0 tw:md:space-x-5">
        <Skeleton className="tw:w-full tw:h-full tw:rounded-2xl" />
        <Skeleton className="tw:hidden tw:md:block tw:w-full tw:h-full tw:rounded-2xl" />
        <Skeleton className="tw:hidden tw:md:block tw:w-full tw:h-full tw:rounded-2xl" />
      </div>

      <div className="tw:w-full tw:flex tw:gap-8 tw:justify-between tw:items-center">
        <Skeleton className="tw:w-full tw:md:w-48 tw:h-10" />
        <svg width="857" height="6" viewBox="0 0 857 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2H855" stroke="#E7E7E7" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <div className="tw:flex tw:items-center tw:gap-4">
          <Skeleton className="tw:size-9" />
          <Skeleton className="tw:size-9" />
        </div>
      </div>
    </Tabs>
  )
}

export default VirtualClassesLoader
