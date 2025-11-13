import Card from "./Card";

function Cards() {
  return (
    <div className="grid grid-cols-3 gap-x-4">
      <Card title="Our focus" description="Alight works for and with communities displaced by conflict, natural disasters, and social and economic crises, with special attention on women and girls." background="yellow" />
      <Card title="Our work" description="Taking a collaborative, human-centered approach, we address essential needs such as healthcare, clean water, shelter, and protection, and provide livelihood programming and education." background="pink" />
      <Card title="Our reach" description="Our 2,300 humanitarians serve more than 4 million people in over 20 countries every year." background="blue" />
    </div>
  )
}

export default Cards;