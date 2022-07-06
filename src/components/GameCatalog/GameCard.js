 import React from 'react'
 
 export default function GameCard({game}) {
   return (
    <div className="allGames">
    <div className="allGames-info">
      <img src={game.imageUrl} />
      <h6>{game.category}</h6>
      <h2>{game.title}</h2>
      <a href="#" className="details-button" value="placeHolderValue">Details</a>
    </div>
  </div>
   )
 }
 