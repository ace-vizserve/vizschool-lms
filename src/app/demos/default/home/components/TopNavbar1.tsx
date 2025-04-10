import LogoBox from '@/components/LogoBox'
import TopNavbar from '@/components/TopNavbar'
import Menu from '@/components/TopNavbar/components/Menu'

const TopNavbar1 = () => {
  return (
    <TopNavbar>
      <div className="tw:flex tw:justify-between tw:lg:justify-center tw:items-center tw:gap-8">
        <LogoBox />
        <Menu />
      </div>
    </TopNavbar>
  )
}

export default TopNavbar1
