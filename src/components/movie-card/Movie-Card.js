import "./movie-card.css";

export function MovieCard() {
  return (
    <div className="movie-card">
      <div className="image-container">
        <img
          className="image"
          src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
          alt="movie"
        />
        <div className="more-menu-button" role="button">
          <div className="dots-menu"></div>
        </div>
      </div>
      <div className="description-container">
        <div>
          <h4 className="movie-name">Movie Name</h4>
          <span className="movie-genre">Movie genre</span>
        </div>
        <div className="movie-year">1999</div>
      </div>
    </div>
  );
}
