import Header from '../components/Header'

function HomePage() {
  return (
    <section className="relative w-screen h-screen min-w-[375px]">
      <img
        alt="background"
        src="images/home/bg-desktop.png"
        className="w-full h-full mobile:hidden desktop:block"
      />
      <img
        alt="background"
        src="images/home/bg-home-tablet.png"
        className="w-full h-full mobile:hidden tablet:block desktop:hidden  min-w-[375px]"
      />
      <img
        alt="background"
        src="images/home/bg-home-mobile.png"
        className="w-full h-full tablet:hidden min-w-[375px]"
      />
      <div className="absolute top-0 w-full h-full flex flex-col items-center mobile:gap-y-[48px] tablet:gap-y-[106px] desktop:gap-y-[251px] mobile:pt-6 tablet:pt-0 mobile:px-6 tablet:px-0">
        <Header />
        <div className="grid desktop:grid-cols-2 w-full max-w-[1110px] mobile:justify-center mobile:gap-y-[81px] tablet:gap-y-[156px] desktop:gap-y-0">
          <div className="w-full max-w-[450px] text-white mobile:text-center desktop:text-left flex flex-col gap-y-4">
            <span className="text-babyBlue mobile:text-[16px] tablet:text-[20px] desktop:text-[28px] mobile:tracking-[2.7px] tablet:tracking-[3.38px] desktop:tracking-[4.72px] font-barlowCondensed">
              SO, YOU WANT TO TRAVEL TO
            </span>
            <h1 className="mobile:text-[80px] tablet:text-[150px] mobile:leading-[100px] tablet:leading-[150px] font-bellefair">
              SPACE
            </h1>
            <p className="text-babyBlue font-barlow mobile:text-[15px] tablet:text-[16px] desktop:text-[18px] mobile:leading-[25px] tablet:leading-[28px] desktop:leading-[32px]">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className=" flex items-end desktop:justify-end mobile:justify-center">
            <button className="bg-white mobile:w-[150px] mobile:h-[150px] tablet:w-[242px] tablet:h-[242px] desktop:w-[274px] desktop:h-[274px] rounded-full mobile:text-[20px] tablet:text-[32px] mobile:tracking-[1.25px] tablet:tracking-[2px] font-bellefair">
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
