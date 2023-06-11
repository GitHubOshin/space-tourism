import CrewContent from '../components/contents/CrewContent'
import BgAndHeader from '../components/BgAndHeader'

function CrewPage() {
  return (
    <BgAndHeader
      bgDesktop="/images/crew/background-crew-desktop.jpg"
      bgTablate="/images/crew/background-crew-tablet.jpg"
      bgMobile="/images/crew/background-crew-mobile.jpg"
    >
      <CrewContent />
    </BgAndHeader>
  )
}

export default CrewPage
