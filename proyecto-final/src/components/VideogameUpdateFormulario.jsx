export default function VideogameUpdateFormulario({
  onUpdateGame,
  game,
  onClose,
}) {
  /**
   *
   * Función agregar un juego, se recupera los datos del formulario
   * y se guarda en gameAdd, que es un objeto.
   */

  // tarea como hacer para traer el valor del del item para poder luego modificarlo....
  function actualizarJuego(event) {
    event.preventDefault();
    let gameUpdate = {};

    gameUpdate.name = event.target.name.value;
    gameUpdate.price = event.target.price.value;
    gameUpdate.plataform = event.target.plataform.value;
    gameUpdate.year = event.target.year.value;
    gameUpdate.image = event.target.image.value;

    console.log(gameUpdate);
    onUpdateGame(gameUpdate);
  }
  return (
    <div>
      <h2>Vamos a editar... </h2>
      <form onSubmit={actualizarJuego} action="" method="post">
        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" id="name" required />

        <label htmlFor="price">Precio:</label>
        <input
          type="number"
          name="price"
          id="price"
          required
          placeholder="Precio..."
        />

        <label htmlFor="plataform">Plataforma:</label>
        <select name="plataform" id="plataform" required>
          <option value="switch">Switch</option>
          <option value="switch2">Switch 2</option>
          <option value="ps4">Playstation 4</option>
          <option value="ps5">Playstation 5</option>
          <option value="pc">PC</option>
          <option value="xboxSerie">Xbox Series X</option>
        </select>

        <label htmlFor="year">Año:</label>
        <input
          type="date"
          name="year"
          id="year"
          required
          placeholder="Año..."
        />

        <label htmlFor="image">Url img:</label>
        <input
          type="text"
          name="image"
          id="image"
          placeholder="url imagen..."
        />
        <input onClick={onClose} type="submit" value="Modificar" />
      </form>
    </div>
  );
}
