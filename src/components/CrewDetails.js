import TitlePage from './TitlePage'

function CrewDetails() {
  return (
    <div className="h-fit flex mobile:flex-col desktop:flex-row justify-between desktop:w-[1110px] mt-[62px]">
      <div className="h-full flex flex-col gap-y-[154px]">
        <TitlePage number="02" title="MEET YOUR CREW" />
        <div className="w-fit mobile:h-[170px] tablet:h-[182px] desktop:h-[271px] self-center">
          <h5 className="max-h-[37px] text-[#909197] font-bellefair mobile:text-[16px] tablet:text-[24px] desktop:text-[32px]">
            COMMANDER
          </h5>
          <h1 className="desktop:h-[64px] text-white font-bellefair mobile:text-[24px] tablet:text-[40px] desktop:text-[56px] mt-[15px] mb-[27px]">
            DOUGLAS HURLEY
          </h1>
          <p className="max-w-[444px] text-babyBlue font-barlow mobile:text-[15px] tablet:text-[16px] desktop:text-[18px] mobile:leading-[25px] tablet:leading-[28px] desktop:leading-[32px]">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
      </div>
      <img alt="" src="images/crew/image-douglas-hurley.png" />
    </div>
  )
}

export default CrewDetails
