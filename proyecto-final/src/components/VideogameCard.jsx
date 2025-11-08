export default function VidegameCard( {propsVideogame} ) {
  const { id, name, price, image, platform, year } = propsVideogame;
  // Estos es lo mimso que el
  // const id = propsVideogame.id
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <img src={image} alt="" />
      <p>{price}</p>
      <p>{platform}</p>
      <p>{year}</p>
      <div>
        <button>Eliminar</button>
        <button>Editar</button>
      </div>
    </div>
  );
}
