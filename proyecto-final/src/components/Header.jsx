import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Cabecera</h1>
      <ul>
        <li>
        <Link to="/manga">Manga</Link>
        </li>
        <li>
         <Link to="/videojuego">Videojuego</Link>
        </li>
        <li>
         <Link to="/anime"> Anime</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header
