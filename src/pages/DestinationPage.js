import DestinationContent from '../components/contents/DestinationContent'
import Header from '../components/Header'

function DestinationPage() {
  return (
    <div className="bg-cyan-500">
      <img
        alt="background"
        src="/images/destination/background-destination-desktop.jpg"
        className="w-full h-full mobile:hidden desktop:block"
      />
      <img
        alt="background"
        src="/images/destination/background-destination-tablet.jpg"
        className="w-full h-full mobile:hidden tablet:block desktop:hidden min-w-[375px]"
      />
      <img
        alt="background"
        src="/images/destination/background-destination-mobile.jpg"
        className="w-full h-full tablet:hidden min-w-[375px]"
      />
      <div className="absolute top-0 w-full h-full flex flex-col items-center gap-y-[76px] pt-[24px] tablet:pt-0 px-[24px] tablet:px-0">
        <Header />
        <DestinationContent />
      </div>
    </div>
  )
}

export default DestinationPage
