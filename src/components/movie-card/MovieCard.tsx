import "./movie-card.css";
import { useState } from "react";
import { MovieCardProps } from "./movie-card.model";
import { useNavigate } from "react-router-dom";

export function MovieCard({ movie, onMenuClick }: MovieCardProps) {
  const navigate = useNavigate();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const fallbackPosterSrc = 'http://via.placeholder.com/294x441';

  function handleDetailsClick(): void {
    navigate(`/${movie.id!}`);
  }

  function handleMenuClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    event.stopPropagation();
    if (onMenuClick) {
      setIsMenuOpened(true);
      onMenuClick();
    }
  }

  return (
    <>
      <div
        className="movie-card"
        onClick={handleDetailsClick}
        onMouseLeave={() => setIsMenuOpened(false)}
      >
        <div className="image-container">
          <img
            className="image"
            alt={movie.title}
            src={movie.poster_path || fallbackPosterSrc}
            onError={errorProps => (errorProps.target as HTMLImageElement).src = 'http://via.placeholder.com/294x441'}
          />
          {onMenuClick && (
            <div
              className="more-menu-button"
              role="button"
              onClick={(event) => handleMenuClick(event)}
            >
              <div className="dots-menu">
                {isMenuOpened && (
                  <div className="card-menu">
                    <div
                      className="menu-item"
                      role="button"
                      onClick={() => navigate(`/${movie.id}/edit`)}
                    >
                      Edit
                    </div>
                    <div
                      className="menu-item"
                      role="button"
                      onClick={() => navigate(`/${movie.id}/delete`)}
                    >
                      Delete
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="description-container">
          <div>
            <h4 className="movie-name">{movie.title}</h4>
            <span className="movie-genre">
              {(movie.genres || []).join(", ")}
            </span>
          </div>
          <div className="movie-year">
            {new Date(movie.release_date as string).getFullYear()}
          </div>
        </div>
      </div>
    </>
  );
}
