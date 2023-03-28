import Header from '../components/Header'

function SectionHome() {
  return (
    <section className="relative w-screen h-screen min-w-[375px]">
      <img
        alt="background"
        src="images/home/bg-desktop.png"
        className="w-full h-full mobile:hidden desktop:block"
      />
      <img
        alt="background"
        src="images/home/background-home-tablet.jpg"
        className="w-full h-full mobile:hidden tablet:block desktop:hidden  min-w-[375px]"
      />
      <img
        alt="background"
        src="images/home/background-home-mobile.jpg"
        className="w-full h-full tablet:hidden  min-w-[375px]"
      />
      <div className="absolute top-0 w-full h-full flex flex-col items-center justify-between">
        <Header />
        <div className="grid desktop:grid-cols-2 w-full max-w-[1110px] mb-[131px] mobile:justify-center gap-y-[81px] desktop:gap-y-0">
          <div className="w-full max-w-[450px] text-white mobile:text-center desktop:text-left">
            <span className="text-babyBlue text-[28px] tracking-[4.72px] font-barlowCondensed">
              SO, YOU WANT TO TRAVEL TO
            </span>
            <h1 className="text-[150px] font-bellefair">SPACE</h1>
            <p className="text-babyBlue font-barlow text-[18px] leading-[32px]">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className=" flex items-end desktop:justify-end mobile:justify-center">
            <button className="bg-white w-[274px] h-[274px] rounded-full text-[32px] font-bellefair tracking-[2px]">
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionHome
