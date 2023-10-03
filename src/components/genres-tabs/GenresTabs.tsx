import "./genres-tabs.css";
import { GENRES_OPTIONS, useAppContext } from "../../context/AppContext";

export function GenresTabs({
  onSelect,
  genres = GENRES_OPTIONS,
}: {
  onSelect?: (genre: string) => void;
  genres?: string[];
}) {
  const { selectedGenre, handleGenreChange } = useAppContext();

  function handleOnSelect(genre: string) {
    handleGenreChange(genre);
    if (onSelect) {
      onSelect(genre);
    }
  }

  const genresTabs = genres.map((genre) => (
    <div
      key={genre}
      className={`tab ${genre === selectedGenre ? "active" : ""}`}
      onClick={() => handleOnSelect(genre)}
      data-testid={genre}
    >
      <span className="genre-name">{genre}</span>
    </div>
  ));

  return (
    <div className="tabs-list" data-testid="genres-list">
      {genresTabs}
    </div>
  );
}
