import axios from 'axios'
import { useState, useEffect } from 'react'
import TitlePage from '../TitlePage'
import { TechnologyNumberButton } from '../Buttons'

function TechnologyContent() {
  const [technology, setTechnology] = useState([])

  useEffect(() => {
    fetchTechnology()
  }, [])

  async function fetchTechnology() {
    try {
      const respond = await axios('data.json')
      setTechnology(respond.data.technology)
    } catch (error) {
      console.log(error.response)
    }
  }
  console.log(technology)
  const [spaceport] = technology
  return (
    <div className="w-full max-w-[1275px] mt-[76px] desktop:self-end">
      <TitlePage number="03" title="SPACE LAUNCH 101" />

      <div className="flex justify-between mobile:flex-col-reverse desktop:flex-row mobile:items-center desktop:items-stretch">
        <div className="w-full flex max-w-[630px] pt-[110px] gap-x-[80px] mobile:flex-col desktop:flex-row">
          <div className="flex mobile:flex-row desktop:flex-col h-full max-h-[304px] mobile:w-[152px] tablet:w-[210px] desktop:w-fit justify-between mobile:self-center desktop:self-start">
            <TechnologyNumberButton number="1" />
            <TechnologyNumberButton number="2" />
            <TechnologyNumberButton number="3" />
          </div>
          <div className="flex flex-col mobile:items-center desktop:items-start mobile:text-center desktop:text-start">
            <h6 className="text-babyBlue mobile:text-[14px] tablet:text-[16px] tablet:tracking-[2.7px] mobile:tracking-[2.36px] font-barlowCondensed ">
              THE TERMINOLOGY…
            </h6>
            <h1 className="desktop:h-[64px] uppercase text-white font-bellefair mobile:text-[24px] tablet:text-[40px] desktop:text-[56px] mt-[11px] mb-[17px]">
              {spaceport?.name}
            </h1>
            <p className="max-w-[444px] text-babyBlue font-barlow mobile:text-[15px] tablet:text-[16px] desktop:text-[18px] mobile:leading-[25px] tablet:leading-[28px] desktop:leading-[32px]">
              {spaceport?.description}
            </p>
          </div>
        </div>
        <img
          alt=""
          src={spaceport?.images?.portrait}
          className="mobile:hidden desktop:block"
        />
        <img
          alt=""
          src={spaceport?.images?.landscape}
          className="desktop:hidden"
        />
      </div>
    </div>
  )
}

export default TechnologyContent
