import "./movies-list.css";

import { FunctionalSection } from "../functional-section/Functional-Section";
import { MovieCard } from "../movie-card/Movie-Card";

export function MoviesList() {
  const moviesList = [0, 1, 2, 3].map((id) => {
    return <MovieCard key={id} />;
  });

  return (
    <FunctionalSection className="movies-list">
      Movies List
      <div className="movies-list-container">{moviesList}</div>
    </FunctionalSection>
  );
}
