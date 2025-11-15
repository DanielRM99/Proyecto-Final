import VidegameCard from "../components/VideogameCard";
import VideogameFormulario from "../components/VideogameFormulario";
import VideogameUpdateFormulario from "../components/VideogameUpdateFormulario";
import games from "../data/videogameData";
import { useState } from "react";

function VideojuegoPage() {
  const [gamesState, setGamesState] = useState(games);
  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  
  //console.log(gamesState);

  /**
   * Función que elimina el último item.
   * Primero se crea una copia del estado del array de objetos de juegos.
   * y a la copia se le hace la función pop()
   */
  function deleteOne() {
    const copy = [...gamesState];
    copy.pop();
    setGamesState(copy);
  }

  /**
   * función que recupera el juego a agregar
   * se crea una copia del gameState
   * se saca la id mayor
   * a gameAdd se agrega la id
   * en la copy de agrega el objeto al copy y se cambia el estado.
   *
   */
  function addGame(gameAdd) {
    const copy = [...gamesState];
    const maxId =
      gamesState.length > 0 ? Math.max(...gamesState.map((g) => g.id)) : 0;
    console.log(maxId);
    gameAdd.id = maxId + 1;
    copy.push(gameAdd);
    setGamesState(copy);
  }

  /**
   *
   * Función que recibe una id y se filtra para se eliminada ese item.
   */
  function onDelete(id) {
    //  console.log("funcion onDelete");
    //   console.log(id);

    let copy = gamesState.filter((game) => game.id !== id);
    console.log(copy);
    console.log("despues de filtar ondelete");
    setGamesState(copy);
  }

   function mostrarUpdate(){
      setShowUpdate(!showUpdate)
    }

  /** funcion para actualizar un item */

  function onUpdate(id) {
    console.log(id);
   mostrarUpdate()
  }

  /**
   * La función hace que aparezca un formulario para agregar un nuevo juego.
   * El botón tiene un evento "onClick" que llama a está función
   * Esta función cambia el valor de estado a verdadero o falso (si se pulsa más
   * de una vez)
   */
  function agregar() {
    setShow(!show);
  }

  return (
    <>
      <h1 className="videojuego-h1">Página videojuego</h1>
      <div className="videogame-list">
        {/*     se lista los video juegos usando para ello la función map. 
        recibe el valor de cada item y recibe la función para eliminar un item.*/}
        {gamesState.map((game) => {
          return (
            <VidegameCard
              key={game.id}
              propsVideogame={game}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          );
        })}
      </div>
        {/* muestra el formulario solo si show = true */}
        {showUpdate && <VideogameUpdateFormulario onUpdateGame={onUpdate} />}
      <div className="botonesVG">
        <button onClick={() => deleteOne()}>Delete the last one</button>
        <button onClick={() => agregar()}>
          {show ? "Cerrar formulario" : "Agregar nuevo"}
        </button>
      </div>

      {/* muestra el formulario solo si show = true */}
      {show && <VideogameFormulario onAddGame={addGame} />}
    </>
  );
}
export default VideojuegoPage;
