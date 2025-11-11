import MangaCard from "../components/MangaCard"
import mangas from "../data/mangData"
function MangaPage() {
    return (
        <>
        <h1>Página Manga</h1>
        <MangaCard propsManga={mangas[0]}/>
        </>
    )
}
export default MangaPage

// En vez de utilizar un solo compnente tengo que hacer un mapeo de mangas y ya esta