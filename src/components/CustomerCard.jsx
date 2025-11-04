function CustomerCard({ imageUrl, tag, title, description, btnLabel  }) {

  let bgColor = "";

  switch(tag) {
    case "News": 
      bgColor = "bg-indigo-400";
      break;
    case "Case Studies":
      bgColor = "bg-green-600";
      break;
    case "Stories":
      bgColor = "bg-pink-700";
      break;
    default:
      bgColor = "bg-yellow-500";
  }

  return (
    <div>
      <div>
        <img src={imageUrl} alt="image" />
      </div>
      <p className={`inline-flex ${bgColor}`}>{tag}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>{btnLabel}</button>
    </div>
  )
}

export default CustomerCard;