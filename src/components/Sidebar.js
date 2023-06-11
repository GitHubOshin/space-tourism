import { useState } from 'react'
import pages from '../data/pages'
import { Link } from 'react-router-dom'

function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <>
      {openSidebar === true ? null : (
        <button
          className="text-white tablet:hidden"
          onClick={() => setOpenSidebar(true)}
        >
          <img alt="Sidebar" src="/images/shared/icon-hamburger.svg" />
        </button>
      )}
      {openSidebar === true ? (
        <nav className="absolute top-0 right-0 tablet:hidden max-w-[254px] w-full h-full bg-[hsl(0,0%,100%,0.1)] backdrop-blur-xl flex flex-col pt-8 pl-8">
          <button
            className="mr-8 self-end"
            onClick={() => setOpenSidebar(false)}
          >
            <img alt="Close sidebar" src="/images/shared/icon-close.svg" />
          </button>
          <div className="flex flex-col justify-between h-[184px] mt-[60px]">
            {pages.map(({ number, name, url }) => {
              return (
                <Link
                  key={[number, name].join('-')}
                  to={url}
                  className="flex items-center gap-[14px] desktop:text-base tablet:text-sm h-full text-white font-barlowCondensed tracking-[2.7px] hover:border-r-4"
                >
                  <b className="tablet:hidden desktop:block font-bold">
                    {number}
                  </b>
                  <span>{name}</span>
                </Link>
              )
            })}
          </div>
        </nav>
      ) : null}
    </>
  )
}

export default Sidebar
