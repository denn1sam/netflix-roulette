import "./genres-tabs.css";
import { useState } from "react";

const basicGenres = ["all", "documentary", "comedy", "horror", "crime"];

export function GenresTabs({
  onSelect,
  genres = basicGenres,
}: {
  onSelect: (genre: string) => void;
  genres?: string[];
}) {
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);

  function handleOnSelect(genre: string) {
    setSelectedGenre(genre);
    onSelect(genre);
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
