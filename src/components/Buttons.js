export function DestinationMenu(props) {
  return (
    <button className="text-babyBlue hover:text-white font-barlowCondensed text-[16px] tracking-[2.7px] hover:border-b-[3px]">
      {props.name}
    </button>
  )
}

export function TechnologyNumberButton(props) {
  return (
    <button className="mobile:w-10 mobile:h-10 tablet:w-[60px] tablet:h-[60px] desktop:w-[80px] desktop:h-[80px] text-white hover:text-black desktop:text-[32px] font-bellefair rounded-full hover:bg-white border border-[#4c4d56]">
      {props.number}
    </button>
  )
}
