import "./home.css";
import { SearchMovieSection } from "../../components/search-movie-section/SearchMovieSection";
import { MoviesList } from "../../components/movies-list/MoviesList";
import { Counter } from "../../components/counter/Counter";

export function Home() {
  return (
    <section className="home-page with-fluid-height">
      <Counter />
      <SearchMovieSection />
      <MoviesList />
    </section>
  );
}
