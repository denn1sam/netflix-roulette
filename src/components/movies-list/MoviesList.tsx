import "./movies-list.css";

import { FunctionalSection } from "../functional-section/FunctionalSection";
import { MovieCard } from "../movie-card/MovieCard";
import { MoviesFilteringSection } from "../movies-filtering-section/MoviesFilteringSection";
import { MovieModel } from "../../models/movie.model";
import { MoviesListProps } from "./movies-list.model";

export function MoviesList({ movies, onMovieClick }: MoviesListProps) {
  function handleMenuClick(movie: MovieModel): void {
    console.log("handleMenuClick", movie);
  }

  function handleDetailsClick(movie: MovieModel): void {
    console.log("handleDetailsClick", movie);
    onMovieClick(movie);
  }

  const moviesList = movies.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        movie={movie}
        onMenuClick={() => handleMenuClick(movie)}
        onDetailsClick={() => handleDetailsClick(movie)}
      />
    );
  });

  return (
    <FunctionalSection className="movies-list">
      <MoviesFilteringSection></MoviesFilteringSection>

      <div className="movies-list-container">{moviesList}</div>
    </FunctionalSection>
  );
}
