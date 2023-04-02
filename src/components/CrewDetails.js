import TitlePage from './TitlePage'

function CrewDetails() {
  return (
    <div className="bg-cyan-500 desktop:w-[1110px]">
      <TitlePage number="02" title="MEET YOUR CREW" />
      <div className="bg-teal-900 flex mobile:flex-col desktop:flex-row">
        <div className="w-full max-w-[488.5px] desktop:h-[406px] bg-purple-300"></div>
        <img alt="" src="images/crew/image-douglas-hurley.png" />
      </div>
    </div>
  )
}

export default CrewDetails
