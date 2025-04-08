import LogoBox from '@/components/LogoBox'
import TopNavbar from '@/components/TopNavbar'

import DesktopMenu from '@/components/TopNavbar/components/desktop-menu'

const TopNavbar1 = () => {
  return (
    <TopNavbar>
      <div className="tw:flex tw:justify-center tw:items-center tw:gap-8">
        <LogoBox />
        <DesktopMenu />
      </div>
    </TopNavbar>
  )
}

export default TopNavbar1
