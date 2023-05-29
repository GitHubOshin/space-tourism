import { useState } from 'react'
import pages from '../data/pages'
import { Link } from 'react-router-dom'

function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <>
      {openSidebar === true ? null : (
        <button className="text-white" onClick={() => setOpenSidebar(true)}>
          HAM
        </button>
      )}
      {openSidebar === true ? (
        <nav className="tablet:hidden max-w-[254px] w-full h-screen bg-[hsl(0,0%,100%,0.1)] flex-col p-8">
          <div className="flex flex-col">
            <button
              className="bg-white items-end"
              onClick={() => setOpenSidebar(false)}
            >
              x
            </button>
            {pages.map(({ number, name, url }) => {
              return (
                <Link
                  key={[number, name].join('-')}
                  to={url}
                  className="flex gap-[14px] desktop:text-base tablet:text-sm h-full text-white font-barlowCondensed tracking-[2.7px] hover:border-b-[3px]"
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
