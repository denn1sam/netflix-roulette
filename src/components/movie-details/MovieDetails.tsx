import "./movie-details.css";
import { PageTitle } from "../page-title/PageTitle";
import { MovieDetailsProps } from "./movie-details.model";

export function MovieDetails({ movie }: MovieDetailsProps) {
  function getTime(totalMinutes: number = 0) {
    const hours =
      totalMinutes / 60 >= 1 ? `${Math.floor(totalMinutes / 60)}h` : "";
    const minutes = Math.floor(totalMinutes % 60)
      ? `${Math.floor(totalMinutes % 60)}min`
      : "";

    return [hours, minutes].join(" ");
  }

  return (
    <div className="movie-details">
      <PageTitle isDetailsView={true} />

      <div className="movie-details-wrapper">
        <div className="movie-details-image-container">
          <img
            className="movie-details-image"
            src={movie.poster_path}
            alt={movie.title}
          />
        </div>
        <div className="movie-details-description-container">
          <div className="movie-details-name-with-rate">
            <h2 className="movie-details-name">{movie.title}</h2>
            <div className="movie-details-rate">{movie.vote_average}</div>
          </div>
          <p className="movie-details-genres">
            {(movie.genres ?? []).join(" & ")}
          </p>
          <div className="movie-details-year-with-duration">
            <span className="movie-details-year">
              {new Date(movie.release_date as string).getFullYear()}
            </span>
            <span className="movie-details-duration">
              {getTime(movie.runtime)}
            </span>
          </div>
          <p className="movie-details-description">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
