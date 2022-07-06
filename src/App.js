import { useState } from "react";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./Register";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import GameDetails from "./components/GameDetails";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import ErrorPage from "./components/ErrorPage";
function App() {
  const [page,setPage]=useState('/home')
  const routers={
    '/home':<WelcomeWorld/>,
    '/games':<GameCatalog/>,
    '/create-game':<CreateGame/>,
    '/login':<Login/>,
    '/register':<Register/>,


  }

  const navigationChangeHandler=(path)=>{
   setPage(path)
  }
  return (
    <div >
      <div id="box" />

      <Header navigationChangeHandler={navigationChangeHandler} />


      <main id="main-content">
       { routers[page] || <ErrorPage/> }
      </main>

    

    </div>

  );
}

export default App;
