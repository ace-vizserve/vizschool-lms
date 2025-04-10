import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

function MaxWidthWrapper({ children, className }: Props) {
  return <div className={cn('tw:max-w-7xl tw:mx-auto tw:px-6 tw:md:px-8', className)}>{children}</div>
}

export default MaxWidthWrapper
