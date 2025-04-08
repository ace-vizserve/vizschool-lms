import useScrollEvent from '@/hooks/useScrollEvent'
import { useRef } from 'react'

import { cn } from '@/lib/utils'
import type { ChildrenType } from '@/types/component-props'

type TopbarProps = {
  className?: string
} & ChildrenType

const TopNavbar = ({ children, className }: TopbarProps) => {
  const { scrollY } = useScrollEvent()
  const headerRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <div
        ref={headerRef}
        className={cn('tw:sticky tw:top-0 tw:bg-white tw:z-40', className, {
          'tw:border-b': scrollY >= 400,
        })}>
        <nav className="tw:py-4 tw:mx-auto tw:max-w-7xl">{children}</nav>
      </div>
    </>
  )
}

export default TopNavbar
