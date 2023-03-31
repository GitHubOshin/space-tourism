import CrewDetails from '../components/CrewDetails'
import Header from '../components/Header'

function CrewPage() {
  return (
    <section>
      <img
        alt="background"
        src="images/crew/background-crew-desktop.jpg"
        className="w-full h-full mobile:hidden desktop:block"
      />
      <img
        alt="background"
        src="images/crew/background-crew-tablet.jpg"
        className="w-full h-full mobile:hidden tablet:block desktop:hidden min-w-[375px]"
      />
      <img
        alt="background"
        src="images/crew/background-crew-mobile.jpg"
        className="w-full h-full tablet:hidden min-w-[375px]"
      />
      <div className="absolute top-0 w-full h-full">
        <Header />
        <CrewDetails />
      </div>
    </section>
  )
}

export default CrewPage
