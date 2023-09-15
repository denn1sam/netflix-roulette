import "./movie-details.css";
import { MovieDetailsProps } from "./movie-details.model";

export function MovieDetails({ movie }: MovieDetailsProps) {
  return (
    <div className="movie-details">
      <div className="movie-details-image-container">
        <img
          className="movie-details-image"
          src={movie.imageUrl}
          alt={movie.name}
        />
      </div>
      <div className="movie-details-description-container">
        <div className="movie-details-name-with-rate">
          <h2 className="movie-details-name">{movie.name}</h2>
          <div className="movie-details-rate">{movie.rate}</div>
        </div>
        <p className="movie-details-genres">{movie.genres.join(" & ")}</p>
        <div className="movie-details-year-with-duration">
          <span className="movie-details-year">{movie.year}</span>
          <span className="movie-details-duration">{movie.duration}</span>
        </div>
        <p className="movie-details-description">{movie.description}</p>
      </div>
    </div>
  );
}
