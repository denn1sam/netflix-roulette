import "./movies-list.css";

import { FunctionalSection } from "../functional-section/FunctionalSection";
import { MovieCard } from "../movie-card/MovieCard";
import { MoviesFilteringSection } from "../movies-filtering-section/MoviesFilteringSection";
import { MovieModel } from "../movie-card/movie.model";

const moviesList: MovieModel[] = [
  {
    name: "name1",
    imageUrl: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
    year: 1999,
    genres: ["drama", "fantasy"],
    id: "1",
  },
  {
    name: "name2",
    imageUrl: "https://cdn2.thecatapi.com/images/H_UWbOfra.jpg",
    year: 1999,
    genres: ["drama", "fantasy"],
    id: "12",
  },
  {
    name: "name3",
    imageUrl: "https://25.media.tumblr.com/tumblr_m1yuqjfdy31qejbiro1_500.jpg",
    year: 1999,
    genres: ["drama", "fantasy"],
    id: "13",
  },
];

export function MoviesList() {
  function handleMenuClick(movie: MovieModel): void {
    console.log("handleMenuClick", movie);
  }

  function handleDetailsClick(movie: MovieModel): void {
    console.log("handleDetailsClick", movie);
  }

  const movies = moviesList.map((movie) => {
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

      <div className="movies-list-container">{movies}</div>
    </FunctionalSection>
  );
}
