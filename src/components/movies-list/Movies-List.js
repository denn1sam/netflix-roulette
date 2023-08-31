import "./movies-list.css";

import { FunctionalSection } from "../functional-section/Functional-Section";
import { MovieCard } from "../movie-card/Movie-Card";
import { MoviesFilteringSection } from "../movies-filtering-section/Movies-Filtering-Section";

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
