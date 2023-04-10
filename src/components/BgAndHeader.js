import Header from './Header'

function BgAndHeader(props) {
  const { bgDesktop, bgTablate, bgMobile } = props
  return (
    <div>
      <img
        alt="Background Desktop"
        src={bgDesktop}
        className="w-full h-full mobile:hidden desktop:block"
      />
      <img
        alt="background"
        src={bgTablate}
        className="w-full h-full mobile:hidden tablet:block desktop:hidden min-w-[375px]"
      />
      <img
        alt="background"
        src={bgMobile}
        className="w-full h-full tablet:hidden min-w-[375px]"
      />
      <div className="absolute min-w-[375px] top-0 w-full h-full flex flex-col items-center ">
        <Header />
        {props.children}
      </div>
    </div>
  )
}

export default BgAndHeader
