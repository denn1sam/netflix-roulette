import "./movies-filtering-section.css";
import { GenresTabs } from "../genres-tabs/GenresTabs";

export function MoviesFilteringSection() {
  function handleOnSelect(genre: string) {
    console.log("selected genre:", genre);
  }

  return (
    <div className="movies-filtering-section">
      <GenresTabs onSelect={handleOnSelect}></GenresTabs>
    </div>
  );
}
