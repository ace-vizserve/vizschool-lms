import logo from '@/assets/images/vizschool-logo.png'
import TopNavbar from '@/components/TopNavbar'
import Menu from '@/components/TopNavbar/components/menu'
import { Link } from 'react-router-dom'

const TopNavbar1 = () => {
  return (
    <TopNavbar>
      <div className="tw:flex tw:justify-between tw:lg:justify-center tw:items-center tw:gap-8">
        <Link to="/">
          <img className="tw:object-cover tw:size-16 tw:md:size-24" src={logo} alt="logo" />
        </Link>
        <Menu />
      </div>
    </TopNavbar>
  )
}

export default TopNavbar1
