import "./home.css";
import { SearchMovieSection } from "../../components/search-movie-section/SearchMovieSection";
import { MoviesList } from "../../components/movies-list/MoviesList";

export function Home() {
  return (
    <section className="home-page with-fluid-height">
      <SearchMovieSection />
      <MoviesList />
    </section>
  );
}
