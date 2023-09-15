import "./movie-card.css";
import { MovieCardProps } from "./movie-card.model";

export function MovieCard({
  movie,
  onMenuClick,
  onDetailsClick,
}: MovieCardProps) {
  function handleMenuClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (onMenuClick) {
      event.stopPropagation();
      onMenuClick();
    }
  }

  return (
    <div className="movie-card" onClick={onDetailsClick}>
      <div className="image-container">
        <img className="image" src={movie.imageUrl} alt={movie.name} />
        {onMenuClick && (
          <div
            className="more-menu-button"
            role="button"
            onClick={(event) => handleMenuClick(event)}
          >
            <div className="dots-menu"></div>
          </div>
        )}
      </div>
      <div className="description-container">
        <div>
          <h4 className="movie-name">{movie.name}</h4>
          <span className="movie-genre">{movie.genres.join(", ")}</span>
        </div>
        <div className="movie-year">{movie.year}</div>
      </div>
    </div>
  );
}
