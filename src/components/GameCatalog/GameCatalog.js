import React from 'react'
import { useEffect ,useState} from 'react'
import GameCard from './GameCard'
import {GetAll} from '../../services/gameService'
export default function GameCatalog({navigationChangeHandler}) {
   
  const [games,setGames]=useState([])
   
      useEffect(()=>{
        GetAll()
        .then(result=>{
          setGames(result)
        })
      },[])
  return (
    <section id="catalog-page">
    <h1>All Games</h1>
   
      {games.length>0
      ?games.map(x=><GameCard key={x._id} game={x} navigationChangeHandler={navigationChangeHandler}/>)
      : <h3 className="no-articles">No Games yet</h3>
      }

   
  </section>
  )
}
