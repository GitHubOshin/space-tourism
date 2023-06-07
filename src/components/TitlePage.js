function TitlePage(props) {
  return (
    <div className="flex gap-[26px] mobile:tracking-[2.7px] mobile:self-center desktop:self-start tablet:text-[20px] tablet:tracking-[3.38px] desktop:text-[28px] desktop:tracking-[4.72px] font-barlowCondensed">
      <b className="text-slate-500">{props.number}</b>
      <h1 className="text-white">{props.title}</h1>
    </div>
  )
}

export default TitlePage
