import NavBar from './NavBar'

function Header() {
  return (
    <header className="w-full flex justify-between items-center tablet:pl-[55px] desktop:mt-10 tablet:gap-[231px]">
      <img alt="Logo" src="images/shared/logo.svg" className="w-12 h-12" />
      <NavBar />
    </header>
  )
}

export default Header
