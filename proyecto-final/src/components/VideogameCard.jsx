/*
se pasa al padre el onDelete*/
export default function VidegameCard({ propsVideogame, onDelete, onUpdate }) {
  const { id, name, price, image, platform, year } = propsVideogame;
  // Estos es lo mimso que el
  // const id = propsVideogame.id

  
/* if(image == ""){
  image = "https://static.vecteezy.com/system/resources/previews/022/059/000/non_2x/no-image-available-icon-vector.jpg"
}else{
  image
} */
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
      {/*  Se pasa con el evento la id del item donde el botón. */}
          <button onClick={() => onDelete(id)}>Eliminar</button>
          <button onClick={() => onUpdate(id)}>Editar</button>
        </div>
      </div>
  );
}
