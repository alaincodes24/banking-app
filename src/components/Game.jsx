import { useState } from "react";

function Game() {
  const [footballClub, setFootballClub] = useState("Real Madrid");
  

  const handleClick = () => {
    setFootballClub("Manchester City");
  }

  return (
    <div>
      <h1>Component</h1>
      <p>My favorite club is { footballClub }</p>
      <button
        onClick={handleClick} 
        className="bg-white border border-gray-400 rounded-md p-1.5"
      >Change Club</button>
    </div>
  )
}

export default Game;
