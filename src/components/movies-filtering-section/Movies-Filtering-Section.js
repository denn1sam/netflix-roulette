import "./movies-filtering-section.css";
import { GenresTabs } from "../genres-tabs/Genres-Tabs";

export function MoviesFilteringSection() {
  function handleOnSelect(genre) {
    console.log("selected genre:", genre);
  }

  return (
    <div className="movies-filtering-section">
      <GenresTabs onSelect={handleOnSelect}></GenresTabs>
    </div>
  );
}
