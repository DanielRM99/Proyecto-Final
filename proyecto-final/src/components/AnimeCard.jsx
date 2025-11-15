export default function AnimeCard({ propsAnimes }) {
  const { id, title, description, youtubeId, genre, year } = propsAnimes;
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;

  return (
    <div className="anime-card" style={{ marginBottom: "2rem" }}>
      <p><strong>ID:</strong> {id}</p>
      <h2>{title}</h2>

      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "10px" }}>
        <iframe
          src={embedUrl}
          title={title}
          width="100%"
          height="315"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
            borderRadius: "10px"
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <p>{description}</p>
      <p><strong>Géneros:</strong> {genre.join(", ")}</p>
      <p><strong>Año:</strong> {year}</p>
    </div>
  );
}
