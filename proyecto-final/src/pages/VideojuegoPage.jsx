import VidegameCard from "../components/VideogameCard";
import games from "../data/videogameData";
import { useState } from "react";

function VideojuegoPage() {
  const [gamesState, setGamesState] = useState(games);
  //let gamesState = games
  console.log(gamesState)

  function deleteOne () {
    const copy = [...gamesState]
    copy.pop()

    setGamesState(copy)
    
  }

  return (
    <>
      <h1>Página videojuego</h1>
      {gamesState.map((game) => {
        return <VidegameCard key={game.id} propsVideogame={game} />;
      })}
      <button onClick={() => deleteOne()}>Delete the last one</button>
    </>
  );
}
export default VideojuegoPage;
