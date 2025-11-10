
/*
se pasa al padre el onDelete*/
export default function VidegameCard({ propsVideogame, onDelete }) {
  const { id, name, price, image, platform, year } = propsVideogame;
  // Estos es lo mimso que el
  // const id = propsVideogame.id
  return (
  
      <div className="cardVideoGame">
        <div>
          <p>ID: {id}</p>
          <p>Nombre: {name}</p>
          <p>Precio: {price} €</p>
        </div>
        <div>
          <p>Plataforma: {platform}</p>
          <p>Años: {year}</p>
        </div>
        <img src={image} alt={name} />
        <div>
      {/*     Se pasa con el evento la id del item donde el botón. */}
          <button onClick={() => onDelete(id)}>Eliminar</button>
          <button>Editar</button>
        </div>
      </div>
  );
}
