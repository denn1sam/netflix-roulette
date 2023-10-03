import "./movies-list.css";

import { FunctionalSection } from "../functional-section/FunctionalSection";
import { MovieCard } from "../movie-card/MovieCard";
import { MoviesFilteringSection } from "../movies-filtering-section/MoviesFilteringSection";
import { MovieModel } from "../../models";
import { MoviesListProps } from "./movies-list.model";
import { useAppContext } from "../../context/AppContext";

export function MoviesList({ onMovieClick }: MoviesListProps) {
  const { moviesList } = useAppContext();

  function handleMenuClick(movie: MovieModel): void {
    console.log("handleMenuClick", movie);
  }

  function handleDetailsClick(movie: MovieModel): void {
    console.log("handleDetailsClick", movie);
    onMovieClick(movie);
  }

  const renderMoviesList = moviesList.map((movie) => {
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

      <div className="movies-list-container">
        {moviesList?.length ? (
          renderMoviesList
        ) : (
          <h3>Whoops! No movies found</h3>
        )}
      </div>
    </FunctionalSection>
  );
}
