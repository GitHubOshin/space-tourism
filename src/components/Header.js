import MenuBar from './MenuBar'

function Header() {
  return (
    <header className="w-full flex justify-between items-center pl-[55px] mt-10 tablet:gap-[231px]">
      <img alt="Logo" src="images/shared/logo.svg" className="w-12 h-12" />
      <MenuBar />
    </header>
  )
}

export default Header
