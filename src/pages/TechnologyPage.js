import BgAndHeader from '../components/BgAndHeader'
import TechnologyContent from '../components/contents/TechnologyContent'

function TechnologyPage() {
  return (
    <BgAndHeader
      bgDesktop="images/technology/background-technology-desktop.jpg"
      bgTablate="images/technology/background-technology-tablet.jpg"
      bgMobile="images/technology/background-technology-mobile.jpg"
    >
      <TechnologyContent />
    </BgAndHeader>
  )
}

export default TechnologyPage
