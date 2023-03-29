function TitlePage(props) {
  return (
    <div className="flex gap-[26px] text-[28px] tracking-[4.72px] font-barlowCondensed">
      <b className="text-slate-500">{props.number}</b>
      <h1 className="text-white">{props.title}</h1>
    </div>
  )
}

export default TitlePage
