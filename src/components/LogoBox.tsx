import logo from '@/assets/images/vizschool-logo.png'
import { Link } from 'react-router-dom'

const LogoBox = () => {
  return (
    <Link to="/">
      <img className="tw:object-cover tw:size-16 tw:md:size-24" src={logo} alt="logo" />
    </Link>
  )
}

export default LogoBox
