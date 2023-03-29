import Header from '../components/Header'
import TitlePage from '../components/TitlePage'

function DestinationPage() {
  return (
    <div className="bg-cyan-500">
      <img
        alt="background"
        src="images/destination/background-destination-desktop.jpg"
        className="w-full h-full mobile:hidden desktop:block"
      />
      <img
        alt="background"
        src="images/destination/background-destination-tablet.jpg"
        className="w-full h-full mobile:hidden tablet:block desktop:hidden min-w-[375px]"
      />
      <img
        alt="background"
        src="images/destination/background-destination-mobile.jpg"
        className="w-full h-full tablet:hidden min-w-[375px]"
      />
      <div className="absolute top-0 w-full h-full flex flex-col items-center gap-y-[76px] pt-[24px] tablet:pt-0 px-[24px] tablet:px-0">
        <Header />
        <div className="desktop:w-[1110px] h-[576px] flex flex-col justify-between">
          <TitlePage number="01" title="PICK YOUR DESTINATION" />
          <div className="self-end w-full desktop:w-[1047px] h-[478px] grid desktop:grid-cols-2 desktop:gap-[166px]">
            <img
              alt=""
              src="images/destination/image-moon.png"
              className="self-end mobile:w-[170px] mobile:h-[170px] tablet:w-[300px] tablet:h-[300px] desktop:w-[445px] desktop:h-[445px]"
            />
            <div className="max-w-[445px]">
              <div className="text-white mobile:h-[28px] tablet:h-[34px] font-barlowCondensed text-[16px] tracking-[2.7px]">
                Buttons
              </div>
              <h1 className="text-white font-bellefair mobile:text-[56px] tablet:text-[80px] desktop:text-[100px] mt-[10px] mb-[10px]">
                MOON
              </h1>
              <p className="text-babyBlue mobile:text-[15px] tablet:text-[16px] desktop:text-[18px] font-barlow mobile:leading-[25px] tablet:leading-[28px] desktop:leading-[32px]">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
              <hr className="border-[#383B4B] mt-[54px] mb-[28px]" />
              <div className="grid grid-cols-2">
                <div className="">
                  <h3 className="text-babyBlue text-[14px] tracking-[2.36px] font-barlowCondensed">
                    AVG. DISTANCE
                  </h3>
                  <p className="text-white text-[28px] font-bellefair">
                    384,400 KM
                  </p>
                </div>
                <div className="">
                  <h3 className="text-babyBlue text-[14px] tracking-[2.36px] font-barlowCondensed">
                    AVG. DISTANCE
                  </h3>
                  <p className="text-white text-[28px] font-bellefair">
                    384,400 KM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationPage
