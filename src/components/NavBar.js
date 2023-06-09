import pages from '../data/pages'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="relative w-full max-w-[830px] h-[96px] backdrop-blur bg-[hsl(0,0%,100%,0.1)] tablet:flex mobile:hidden justify-center items-center">
      <hr className="absolute right-[800px] border-[#979797] opacity-40 w-[437px] desktop:block tablet:hidden" />
      <div className="w-full h-full max-w-[542px] flex justify-between desktop:px-0 tablet:px-12">
        {pages.map(({ number, name, url }) => {
          return (
            <Link
              key={[number, name].join('-')}
              to={url}
              className="flex items-center gap-[14px] desktop:text-base tablet:text-sm h-full text-white font-barlowCondensed tracking-[2.7px] hover:border-b-[3px]"
            >
              <b className="tablet:hidden desktop:block font-bold">{number}</b>
              <span>{name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default NavBar
