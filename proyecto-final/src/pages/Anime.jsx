import { useState } from "react";
import animes from "../data/animeData";
import AnimeCard from "../components/AnimeCard";
function Anime() {
    const [animesState, setAnimesState] = useState(animes);
    //let gamesState = games

    function deleteOne() {
        const copy = [...animesState]
        copy.pop()

        setAnimesState(copy)

    }

    return (
        <>
            <h1>Página Anime</h1>
            {animesState.map((animes) => {
                return <AnimeCard key={animes.id} propsAnimes={animes} />;
            })}
            <button onClick={() => deleteOne()}>Delete the last one</button>
        </>
    );
}
export default Anime;
