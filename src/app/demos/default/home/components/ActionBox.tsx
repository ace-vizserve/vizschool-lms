import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const ActionBox = () => {
  return (
    <MaxWidthWrapper>
      <div className="tw:py-16 tw:md:py-24">
        <Card className="tw:bg-gradient-to-tr tw:to-[#007AFF] tw:from-red-300 tw:w-full">
          <CardContent className="tw:flex tw:flex-col tw:md:flex-row tw:justify-between tw:items-center tw:p-6 tw:lg:py-8 tw:lg:px-16 tw:gap-4">
            <div className="tw:w-full tw:!space-y-2">
              <p className="tw:text-white tw:font-bold tw:text-xl tw:md:text-2xl tw:lg:text-3xl">Become an Instructor!</p>
              <p className="tw:text-sm tw:md:text-base tw:-tracking-tighter tw:text-white tw:font-medium tw:text-balance">
                Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten
                who diminution astonished.
              </p>
            </div>

            <Button className="tw:w-full tw:md:w-max" size={'lg'}>
              Start Teaching Today
            </Button>
          </CardContent>
        </Card>
      </div>
    </MaxWidthWrapper>
  )
}

export default ActionBox
