export default function MangaCard({ propsManga }) {
const { id, name, author, description, price, year, image} = propsManga;
    return (
        <div>
            <p>id: {id} </p>
            <p>name: {name}</p>
            <p>author: {author}</p>
            <p>description: {description}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <img src={image} alt={description} />
            
        </div>
    )


}