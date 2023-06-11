import axios from 'axios'
import TitlePage from '../TitlePage'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const destinationLinks = [
  {
    name: 'Moon',
    url: '/moon'
  },
  {
    name: 'Mars',
    url: '/mars'
  },
  {
    name: 'Europa',
    url: '/europa'
  },
  {
    name: 'Titan',
    url: '/titan'
  }
]

function DestinationContent() {
  const [destinations, setDestinations] = useState([])

  const location = useLocation()

  useEffect(() => {
    fetchDestinations()
  }, [])

  async function fetchDestinations() {
    try {
      const { data } = await axios.get('/data.json')
      setDestinations(data.destinations)
    } catch (error) {
      console.error('❌ Error:', error.response)
    }
  }

  function mapDestByDestID(destinations = []) {
    const dictionary = {}

    destinations.forEach((dest) => {
      const destName = (dest?.name || '').toLowerCase()
      dictionary[destName] = dest
    })

    return dictionary
  }

  const dictDest = mapDestByDestID(destinations)

  function findDestinationByName(destName) {
    // return destinations.find((dest) => {
    //   return (dest?.name || '').toLowerCase() === destName
    // })

    return dictDest[destName]
  }

  function getLastPath(url = '') {
    const subPaths = url.split('/')
    const lastPathStr = subPaths[subPaths.length - 1]
    return lastPathStr
  }
  const destName = getLastPath(location.pathname)

  console.log('lastPath:', destName)

  const foundDestination = findDestinationByName(destName)
  console.log('', foundDestination)

  return (
    <div className="desktop:w-[1110px] h-[576px] mobile:text-center desktop:text-start flex flex-col mobile:gap-[31px] tablet:gap-[59px]">
      <TitlePage number="01" title="PICK YOUR DESTINATION" />
      <div className="self-end w-full desktop:w-[1047px] h-[478px] grid desktop:grid-cols-2 desktop:gap-[166px]">
        <img
          alt={foundDestination?.name || ''}
          src={foundDestination?.images?.png || ''}
          className="desktop:self-end m-auto mobile:w-[170px] mobile:h-[170px] tablet:w-[300px] tablet:h-[300px] desktop:w-[445px] desktop:h-[445px]"
        />
        <div className="max-w-[445px] mobile:mt-7 tablet:mt-[53px] desktop:mt-0">
          <div className="mobile:h-[28px] tablet:h-[34px] flex mobile:justify-center desktop:justify-start gap-x-[35px]">
            {destinationLinks.map(({ name, url }) => {
              return (
                <Link
                  key={name}
                  to={`/destinations${url}`}
                  className="text-babyBlue hover:text-white uppercase font-barlowCondensed text-[16px] tracking-[2.7px] hover:border-b-[3px]"
                >
                  {name}
                </Link>
              )
            })}
          </div>
          <h1 className="text-white uppercase font-bellefair mobile:text-[56px] tablet:text-[80px] desktop:text-[100px] mt-[10px] mb-[10px]">
            {foundDestination?.name}
          </h1>
          <p className="text-babyBlue mobile:text-[15px] tablet:text-[16px] desktop:text-[18px] font-barlow mobile:leading-[25px] tablet:leading-[28px] desktop:leading-[32px]">
            {foundDestination?.description || ''}
          </p>
          <hr className="border-[#383B4B] mt-[54px] mb-[28px]" />
          <div className="grid grid-cols-2">
            <div className="">
              <h3 className="text-babyBlue text-[14px] tracking-[2.36px] font-barlowCondensed">
                AVG. DISTANCE
              </h3>
              <p className="text-white text-[28px] font-bellefair">
                {foundDestination?.distance || ''}
              </p>
            </div>
            <div className="">
              <h3 className="text-babyBlue text-[14px] tracking-[2.36px] font-barlowCondensed">
                AVG. DISTANCE
              </h3>
              <p className="text-white text-[28px] font-bellefair">
                {foundDestination?.travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationContent
