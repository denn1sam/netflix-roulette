import "./movies-list.css";

import { FunctionalSection } from "../functional-section/FunctionalSection";
import { MovieCard } from "../movie-card/MovieCard";
import { MoviesFilteringSection } from "../movies-filtering-section/MoviesFilteringSection";

export function MoviesList() {
  const moviesList = [0, 1, 2, 3].map((id) => {
    return <MovieCard key={id} />;
  });

  return (
    <FunctionalSection className="movies-list">
      <MoviesFilteringSection></MoviesFilteringSection>

      <div className="movies-list-container">{moviesList}</div>
    </FunctionalSection>
  );
}
