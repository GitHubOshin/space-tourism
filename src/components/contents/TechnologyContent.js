import TitlePage from '../TitlePage'

function TechnologyContent() {
  return (
    <div className="w-full max-w-[1275px] mt-[76px] self-end">
      <TitlePage number="03" title="SPACE LAUNCH 101" />
      <div className="flex  justify-between ">
        <div className="w-full flex max-w-[630px] pt-[110px] gap-x-[80px]">
          <div className="flex flex-col h-full max-h-[304px] justify-between">
            <button className="w-[80px] h-[80px] text-white hover:text-black text-[32px] font-bellefair rounded-full hover:bg-white border border-[#4c4d56]">
              1
            </button>

            <button className="w-[80px] h-[80px] text-white hover:text-black text-[32px] font-bellefair rounded-full hover:bg-white border border-[#4c4d56]">
              2
            </button>

            <button className="w-[80px] h-[80px] text-white hover:text-black text-[32px] font-bellefair rounded-full hover:bg-white border border-[#4c4d56]">
              3
            </button>
          </div>
          <div className="">
            <h6 className="text-babyBlue mobile:text-[14px] tablet:text-[16px] tablet:tracking-[2.7px] mobile:tracking-[2.36px] font-barlowCondensed ">
              THE TERMINOLOGY…
            </h6>
            <h1 className="desktop:h-[64px] text-white font-bellefair mobile:text-[24px] tablet:text-[40px] desktop:text-[56px] mt-[11px] mb-[17px]">
              LAUNCH VEHICLE
            </h1>
            <p className="max-w-[444px] text-babyBlue font-barlow mobile:text-[15px] tablet:text-[16px] desktop:text-[18px] mobile:leading-[25px] tablet:leading-[28px] desktop:leading-[32px]">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
        <img alt="" src="images/technology/image-launch-vehicle-portrait.jpg" />
      </div>
    </div>
  )
}

export default TechnologyContent
