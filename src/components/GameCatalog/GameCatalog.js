import React from 'react'
import { useEffect ,useState} from 'react'
import GameCard from './GameCard'

export default function GameCatalog() {
   
  const [games,setGames]=useState([])
   
      useEffect(()=>{
        fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
        .then(res=>res.json())
        .then(result=>{
          setGames(result)
        })
      },[])
  return (
    <section id="catalog-page">
    <h1>All Games</h1>
   
      {games.map(x=><GameCard game={x}/>)}

    <h3 className="no-articles">No Games yet</h3>
  </section>
  )
}