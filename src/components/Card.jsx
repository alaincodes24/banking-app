function Card(props) {
  console.log(props);
  return (
    <div className={`text-white bg-${props.background}-700`}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default Card;