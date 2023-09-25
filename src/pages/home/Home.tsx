import "./home.css";
import { SearchMovieSection } from "../../components/search-movie-section/SearchMovieSection";
import { MoviesList } from "../../components/movies-list/MoviesList";
import { HomeTopSection } from "./components/home-top-section/HomeTopSection";
import { MOVIES_LIST } from "./mocks/movies-list.mock";
import { MovieModel } from "../../models";
import { MovieDetails } from "../../components/movie-details/MovieDetails";
import { useState } from "react";
import { PageFooter } from "../../components/page-footer/PageFooter";

export function Home() {
  const [selectedMovie, setSelectedMovie] = useState<MovieModel>();

  function handleOnMovieClick(movie: MovieModel): void {
    console.log(movie);
    setSelectedMovie(movie);
  }

  return (
    <section className="home-page with-fluid-height">
      <div className="home-page-top-section">
        <HomeTopSection>
          {selectedMovie ? (
            <MovieDetails movie={selectedMovie} />
          ) : (
            <SearchMovieSection />
          )}
        </HomeTopSection>
      </div>
      <MoviesList movies={MOVIES_LIST} onMovieClick={handleOnMovieClick} />
      <PageFooter />
    </section>
  );
}
