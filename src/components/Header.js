import NavBar from './NavBar'
import Sidebar from './Sidebar'

function Header() {
  return (
    <header className="w-full flex justify-between items-center tablet:pl-[55px] desktop:mt-10 tablet:gap-[231px]">
      <img
        alt="Logo"
        src="/images/shared/logo.svg"
        className="mobile:w-10 mobile:h-10 tablet:w-[48px] tablet:h-[48px]"
      />
      <NavBar />
      <Sidebar />
    </header>
  )
}

export default Header
