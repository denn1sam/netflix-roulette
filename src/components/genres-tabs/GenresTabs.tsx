import "./genres-tabs.css";
import { useState } from "react";

export function GenresTabs({
  onSelect,
}: {
  onSelect: (genre: string) => void;
}) {
  const genres = ["all", "documentary", "comedy", "horror", "crime"];
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
    >
      <span className="genre-name">{genre}</span>
    </div>
  ));

  return <div className="tabs-list">{genresTabs}</div>;
}
