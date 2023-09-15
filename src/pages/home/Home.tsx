import "./home.css";
import { SearchMovieSection } from "../../components/search-movie-section/SearchMovieSection";
import { MoviesList } from "../../components/movies-list/MoviesList";
// import { Counter } from "../../components/counter/Counter";
import { HomeTopSection } from "./components/home-top-section/HomeTopSection";
import { moviesList } from "./mocks/movies-list.mock";
import { MovieModel } from "../../models/movie.model";
import { MovieDetails } from "../../components/movie-details/MovieDetails";
import { useState } from "react";

export function Home() {
  const [selectedMovie, setSelectedMovie] = useState<MovieModel>();

  function handleOnMovieClick(movie: MovieModel): void {
    console.log(movie);
    setSelectedMovie(movie);
  }

  return (
    <section className="home-page with-fluid-height">
      {/* <Counter /> */}
      <HomeTopSection>
        {selectedMovie ? (
          <MovieDetails movie={selectedMovie} />
        ) : (
          <SearchMovieSection />
        )}
      </HomeTopSection>
      <MoviesList movies={moviesList} onMovieClick={handleOnMovieClick} />
    </section>
  );
}
