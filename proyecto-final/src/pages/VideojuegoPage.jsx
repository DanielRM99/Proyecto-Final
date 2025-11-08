import VidegameCard from "../components/VideogameCard";
import VideogameFormulario from "../components/VideogameFormulario";
import games from "../data/videogameData";
import { useState } from "react";

function VideojuegoPage() {
  const [gamesState, setGamesState] = useState(games);
  const [show, setShow] = useState(false)
  //let gamesState = games
  console.log(gamesState)

  function deleteOne () {
    const copy = [...gamesState]
    copy.pop()

    setGamesState(copy)
    
  }

  /**
   * función que recupera el juego a agregar
   * se crea una copia del gameState
   * se saca la id mayor
   * a gameAdd se agrega la id
   * en la copi de agrega el objeto al copy y se cambia el estado.
   * 
   */
  function addGame(gameAdd){
    const copy = [...gamesState]
    const maxId = gamesState.length > 0 ? Math.max(...gamesState.map(g => g.id)) : 0;
    console.log(maxId)
    gameAdd.id = maxId + 1
    copy.push(gameAdd)

    setGamesState(copy)
  }

  // agregar
  function agregar(){
    setShow(!show); 
      
  }

  return (
    <>
      <h1>Página videojuego</h1>
    {/*   {gamesState.map((game) => {
        return <VidegameCard key={game.id} propsVideogame={game} />;
      })} */}
      <button onClick={() => deleteOne()}>Delete the last one</button>
      <button onClick={() => agregar()}>Agregar</button>

      {/* muestra el formulario solo si show = true */}
      {show && <VideogameFormulario onAddGame={addGame} />}
    </>
  );
}
export default VideojuegoPage;
